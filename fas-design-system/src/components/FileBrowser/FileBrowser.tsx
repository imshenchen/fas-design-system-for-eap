/**
 * FileBrowser — FAS Design Kit
 * @see ../../components.md § FileBrowser
 */
import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { IconButton } from '../IconButton/IconButton';
import { Checkbox } from '../Checkbox/Checkbox';
import { Spin } from '../Spin/Spin';
import type { FileBrowserNode } from './types';
import './FileBrowser.css';

export interface FileBrowserProps {
  /** root 層節點 */
  nodes: FileBrowserNode[];
  /** 已選 file id（受控） */
  value: string[];
  onChange: (next: string[]) => void;
  /** Lazy load folder 子節點；觸發於展開時，未提供子節點且 hasChildren=true 的 folder */
  loadChildren?: (folderId: string) => Promise<FileBrowserNode[]>;
  /** 預設 true；關閉時不畫父子引導線 */
  leadingLine?: boolean;
  /** 空資料夾文字，預設「此資料夾為空」 */
  emptyText?: string;
  /** tree 區可滾動高度；預設 400 */
  height?: number | string;
  className?: string;
}

interface FolderPathEntry {
  id: string;
  name: string;
}

const ROOT_LABEL = '根目錄';
const MAX_LEADING_LINE_DEPTH = 5;

export const FileBrowser: React.FC<FileBrowserProps> = ({
  nodes,
  value,
  onChange,
  loadChildren,
  leadingLine = true,
  emptyText = '此資料夾為空',
  height = 400,
  className,
}) => {
  // 當前 path（不含 root）；每進入一個 folder push 一筆
  const [path, setPath] = React.useState<FolderPathEntry[]>([]);
  // folder 展開狀態（id set）；切換 path 時清空
  const [expanded, setExpanded] = React.useState<Set<string>>(new Set());
  // lazy load 快取
  const [loadedChildren, setLoadedChildren] = React.useState<Map<string, FileBrowserNode[]>>(new Map());
  const [loadingIds, setLoadingIds] = React.useState<Set<string>>(new Set());
  const [loadErrors, setLoadErrors] = React.useState<Map<string, string>>(new Map());

  // 切換 path 時重置展開狀態（保留已選 file ids）
  React.useEffect(() => {
    setExpanded(new Set());
  }, [path]);

  // ─── helpers ─────────────────────────────────────────────────────────────
  const getChildren = React.useCallback(
    (node: FileBrowserNode): FileBrowserNode[] | undefined => {
      if (node.children) return node.children;
      return loadedChildren.get(node.id);
    },
    [loadedChildren],
  );

  // 根據當前 path 找出要顯示的 root-level nodes（path 末端 folder 的 children）
  const currentNodes = React.useMemo<FileBrowserNode[] | undefined>(() => {
    if (path.length === 0) return nodes;
    // walk
    let scope: FileBrowserNode[] | undefined = nodes;
    for (const entry of path) {
      const found: FileBrowserNode | undefined = scope?.find((n) => n.id === entry.id);
      if (!found) return undefined;
      scope = found.children ?? loadedChildren.get(found.id);
    }
    return scope;
  }, [nodes, path, loadedChildren]);

  const triggerLoad = React.useCallback(
    (folderId: string) => {
      if (!loadChildren) return;
      if (loadingIds.has(folderId)) return;
      setLoadingIds((prev) => {
        const next = new Set(prev);
        next.add(folderId);
        return next;
      });
      setLoadErrors((prev) => {
        if (!prev.has(folderId)) return prev;
        const next = new Map(prev);
        next.delete(folderId);
        return next;
      });
      loadChildren(folderId)
        .then((kids) => {
          setLoadedChildren((prev) => {
            const next = new Map(prev);
            next.set(folderId, kids);
            return next;
          });
        })
        .catch((err: unknown) => {
          const msg = err instanceof Error ? err.message : '載入失敗';
          setLoadErrors((prev) => {
            const next = new Map(prev);
            next.set(folderId, msg);
            return next;
          });
        })
        .finally(() => {
          setLoadingIds((prev) => {
            const next = new Set(prev);
            next.delete(folderId);
            return next;
          });
        });
    },
    [loadChildren, loadingIds],
  );

  const toggleExpand = React.useCallback(
    (node: FileBrowserNode) => {
      if (node.type !== 'folder') return;
      const isExpanded = expanded.has(node.id);
      if (isExpanded) {
        setExpanded((prev) => {
          const next = new Set(prev);
          next.delete(node.id);
          return next;
        });
        return;
      }
      // expand
      setExpanded((prev) => {
        const next = new Set(prev);
        next.add(node.id);
        return next;
      });
      // 觸發 lazy load
      const needsLoad =
        !node.children &&
        !loadedChildren.has(node.id) &&
        node.hasChildren &&
        loadChildren;
      if (needsLoad) triggerLoad(node.id);
    },
    [expanded, loadedChildren, loadChildren, triggerLoad],
  );

  const enterFolder = React.useCallback(
    (node: FileBrowserNode) => {
      if (node.type !== 'folder') return;
      setPath((prev) => [...prev, { id: node.id, name: node.name }]);
      // 若進入的 folder 需要 lazy load，預先觸發
      const needsLoad =
        !node.children &&
        !loadedChildren.has(node.id) &&
        node.hasChildren &&
        loadChildren;
      if (needsLoad) triggerLoad(node.id);
    },
    [loadedChildren, loadChildren, triggerLoad],
  );

  const goHome = React.useCallback(() => setPath([]), []);
  const goBack = React.useCallback(() => setPath((prev) => prev.slice(0, -1)), []);

  const toggleSelect = React.useCallback(
    (node: FileBrowserNode) => {
      if (node.type !== 'file' || node.disabled) return;
      const checked = value.includes(node.id);
      if (checked) {
        onChange(value.filter((v) => v !== node.id));
      } else {
        onChange([...value, node.id]);
      }
    },
    [value, onChange],
  );

  // ─── 鍵盤導覽 ────────────────────────────────────────────────────────────
  // 用一個 flat list 表示目前展開後可見的所有 row（含層級），讓 ↑↓ focus 移動。
  type Row = {
    node: FileBrowserNode;
    level: number;
    /** 該層級下，本節點是否為最後一個 sibling（leading line 用） */
    isLastSibling: boolean;
    /** 各祖先層級是否為最後 sibling（用於 leading line 是否要畫到底） */
    ancestorIsLast: boolean[];
  };

  const rows = React.useMemo<Row[]>(() => {
    if (!currentNodes) return [];
    const out: Row[] = [];
    const walk = (list: FileBrowserNode[], level: number, ancestorIsLast: boolean[]) => {
      list.forEach((n, idx) => {
        const isLastSibling = idx === list.length - 1;
        out.push({ node: n, level, isLastSibling, ancestorIsLast });
        if (n.type === 'folder' && expanded.has(n.id)) {
          const kids = getChildren(n);
          if (kids && kids.length > 0) {
            walk(kids, level + 1, [...ancestorIsLast, isLastSibling]);
          }
        }
      });
    };
    walk(currentNodes, 0, []);
    return out;
  }, [currentNodes, expanded, getChildren]);

  const [focusedId, setFocusedId] = React.useState<string | null>(null);

  // 當 rows 變動且當前 focus 不存在時，focus 第一筆
  React.useEffect(() => {
    if (rows.length === 0) {
      setFocusedId(null);
      return;
    }
    if (focusedId && rows.some((r) => r.node.id === focusedId)) return;
    setFocusedId(rows[0].node.id);
  }, [rows, focusedId]);

  const handleTreeKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (rows.length === 0) return;
    const idx = rows.findIndex((r) => r.node.id === focusedId);
    if (idx < 0) return;
    const row = rows[idx];
    const { node } = row;

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const next = rows[Math.min(idx + 1, rows.length - 1)];
        setFocusedId(next.node.id);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const next = rows[Math.max(idx - 1, 0)];
        setFocusedId(next.node.id);
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        if (node.type !== 'folder') return;
        if (!expanded.has(node.id)) {
          toggleExpand(node);
        } else {
          // 已展開 → focus 第一個子節點
          const next = rows[idx + 1];
          if (next && next.level > row.level) setFocusedId(next.node.id);
        }
        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();
        if (node.type === 'folder' && expanded.has(node.id)) {
          toggleExpand(node);
          return;
        }
        // 已折疊或為 file → focus 父層
        for (let i = idx - 1; i >= 0; i--) {
          if (rows[i].level < row.level) {
            setFocusedId(rows[i].node.id);
            break;
          }
        }
        break;
      }
      case 'Enter':
      case ' ': {
        if (node.type === 'file' && !node.disabled) {
          e.preventDefault();
          toggleSelect(node);
        } else if (node.type === 'folder') {
          // Enter on folder → 進入
          if (e.key === 'Enter') {
            e.preventDefault();
            enterFolder(node);
          } else {
            // Space on folder → 展開／折疊
            e.preventDefault();
            toggleExpand(node);
          }
        }
        break;
      }
      case 'Backspace': {
        e.preventDefault();
        if (path.length > 0) goBack();
        break;
      }
    }
  };

  // ─── 麵包屑 ──────────────────────────────────────────────────────────────
  const crumbs = React.useMemo(() => {
    const items = [
      { label: ROOT_LABEL, onClick: path.length > 0 ? () => goHome() : undefined },
      ...path.map((p, i) => {
        const isLast = i === path.length - 1;
        return {
          label: p.name,
          onClick: !isLast ? () => setPath((prev) => prev.slice(0, i + 1)) : undefined,
        };
      }),
    ];
    return items;
  }, [path, goHome]);

  // ─── render ──────────────────────────────────────────────────────────────
  const treeStyle: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div className={['fas-fb', className].filter(Boolean).join(' ')}>
      {/* Toolbar */}
      <div className="fas-fb__toolbar">
        <IconButton
          aria-label="回根目錄"
          size="m"
          tooltip
          onClick={goHome}
          disabled={path.length === 0}
          icon={<span className="material-symbols-outlined" aria-hidden>home</span>}
        />
        <IconButton
          aria-label="回上一層"
          size="m"
          tooltip
          onClick={goBack}
          disabled={path.length === 0}
          icon={<span className="material-symbols-outlined" aria-hidden>arrow_back</span>}
        />
        <Breadcrumbs items={crumbs} className="fas-fb__crumbs" />
      </div>

      {/* Tree */}
      <div
        className={['fas-fb__tree', leadingLine && 'fas-fb__tree--lines'].filter(Boolean).join(' ')}
        style={treeStyle}
        role="tree"
        tabIndex={0}
        onKeyDown={handleTreeKey}
        aria-label="檔案瀏覽器"
      >
        {currentNodes && currentNodes.length === 0 ? (
          <div className="fas-fb__empty">{emptyText}</div>
        ) : (
          rows.map((row) => {
            const { node, level, isLastSibling, ancestorIsLast } = row;
            const isFolder = node.type === 'folder';
            const isExpanded = isFolder && expanded.has(node.id);
            const isLoading = loadingIds.has(node.id);
            const loadError = loadErrors.get(node.id);
            const checked = node.type === 'file' && value.includes(node.id);
            const isFocused = focusedId === node.id;
            const hasKids =
              isFolder &&
              ((node.children && node.children.length > 0) ||
                (loadedChildren.get(node.id)?.length ?? 0) > 0 ||
                node.hasChildren === true);
            const showLeadingLine = leadingLine && level < MAX_LEADING_LINE_DEPTH;

            return (
              <div
                key={node.id}
                role="treeitem"
                aria-level={level + 1}
                aria-selected={checked || undefined}
                aria-expanded={isFolder ? isExpanded : undefined}
                aria-disabled={node.disabled || undefined}
                tabIndex={isFocused ? 0 : -1}
                className={[
                  'fas-fb__row',
                  isFolder && 'fas-fb__row--folder',
                  !isFolder && 'fas-fb__row--file',
                  node.disabled && 'fas-fb__row--disabled',
                  checked && 'fas-fb__row--selected',
                  isFocused && 'fas-fb__row--focused',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => {
                  setFocusedId(node.id);
                  if (isFolder) {
                    toggleExpand(node);
                  } else {
                    toggleSelect(node);
                  }
                }}
                onDoubleClick={(e) => {
                  if (isFolder) {
                    e.stopPropagation();
                    enterFolder(node);
                  }
                }}
              >
                {/* Indent + leading lines */}
                <div className="fas-fb__indent" aria-hidden>
                  {Array.from({ length: level }).map((_, i) => {
                    if (!showLeadingLine) return <span key={i} className="fas-fb__indent-cell" />;
                    const isAncestorLast = ancestorIsLast[i] ?? false;
                    return (
                      <span
                        key={i}
                        className={[
                          'fas-fb__indent-cell',
                          !isAncestorLast && 'fas-fb__indent-cell--line',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      />
                    );
                  })}
                  {level > 0 && showLeadingLine && (
                    <span
                      className={[
                        'fas-fb__indent-cell',
                        'fas-fb__indent-cell--branch',
                        isLastSibling && 'fas-fb__indent-cell--branch-last',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    />
                  )}
                  {level > 0 && !showLeadingLine && <span className="fas-fb__indent-cell" />}
                </div>

                {/* Chevron (folder only) */}
                <span className="fas-fb__chevron" aria-hidden>
                  {isFolder && hasKids && (
                    <span
                      className="material-symbols-outlined fas-fb__chevron-icon"
                      style={{
                        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                      }}
                    >
                      chevron_right
                    </span>
                  )}
                </span>

                {/* Checkbox (file only) */}
                <span className="fas-fb__checkbox" onClick={(e) => e.stopPropagation()}>
                  {node.type === 'file' && (
                    <Checkbox
                      checked={checked}
                      disabled={node.disabled}
                      onChange={() => toggleSelect(node)}
                      size="m"
                    />
                  )}
                </span>

                {/* Leading icon */}
                <span className="fas-fb__icon" aria-hidden>
                  {node.icon ?? (
                    <span className="material-symbols-outlined">
                      {isFolder ? (isExpanded ? 'folder_open' : 'folder') : 'description'}
                    </span>
                  )}
                </span>

                {/* Label + caption */}
                <div className="fas-fb__text">
                  <span className="fas-fb__label" title={node.name}>{node.name}</span>
                  {node.caption && (
                    <span className="fas-fb__caption">{node.caption}</span>
                  )}
                </div>

                {/* Loading / error / enter button */}
                <div className="fas-fb__trailing">
                  {isLoading && <Spin size="s" />}
                  {!isLoading && loadError && (
                    <button
                      type="button"
                      className="fas-fb__retry"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerLoad(node.id);
                      }}
                      aria-label="重新載入"
                      title={loadError}
                    >
                      <span className="material-symbols-outlined" aria-hidden>refresh</span>
                    </button>
                  )}
                  {!isLoading && !loadError && isFolder && (
                    <button
                      type="button"
                      className="fas-fb__enter"
                      onClick={(e) => {
                        e.stopPropagation();
                        enterFolder(node);
                      }}
                      aria-label={`進入 ${node.name}`}
                      title="進入資料夾"
                    >
                      <span className="material-symbols-outlined" aria-hidden>
                        arrow_forward
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

FileBrowser.displayName = 'FileBrowser';
export default FileBrowser;
