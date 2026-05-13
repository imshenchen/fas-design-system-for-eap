/**
 * FileBrowser — FAS Design Kit
 * @see ../../components.md § FileBrowser
 */
import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { IconButton } from '../IconButton/IconButton';
import { Checkbox } from '../Checkbox/Checkbox';
import { Spin } from '../Spin/Spin';
import { Button } from '../Button/Button';
import type { FileBrowserNode } from './types';
import './FileBrowser.css';

export interface FileBrowserProps {
  /** root 層節點 */
  nodes: FileBrowserNode[];
  /** 已選 file id（受控） */
  value: string[];
  onChange: (next: string[]) => void;
  /** Lazy load folder 子節點；進入該 folder 時觸發，未提供子節點且 hasChildren=true 時 */
  loadChildren?: (folderId: string) => Promise<FileBrowserNode[]>;
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

export const FileBrowser: React.FC<FileBrowserProps> = ({
  nodes,
  value,
  onChange,
  loadChildren,
  emptyText = '此資料夾為空',
  height = 400,
  className,
}) => {
  // 當前 path（不含 root）；每進入一個 folder push 一筆
  const [path, setPath] = React.useState<FolderPathEntry[]>([]);
  // lazy load 快取
  const [loadedChildren, setLoadedChildren] = React.useState<Map<string, FileBrowserNode[]>>(new Map());
  const [loadingIds, setLoadingIds] = React.useState<Set<string>>(new Set());
  const [loadErrors, setLoadErrors] = React.useState<Map<string, string>>(new Map());

  // 根據當前 path 找出要顯示的 nodes（path 末端 folder 的 children）
  const currentNodes = React.useMemo<FileBrowserNode[] | undefined>(() => {
    if (path.length === 0) return nodes;
    let scope: FileBrowserNode[] | undefined = nodes;
    for (const entry of path) {
      const found: FileBrowserNode | undefined = scope?.find((n) => n.id === entry.id);
      if (!found) return undefined;
      scope = found.children ?? loadedChildren.get(found.id);
    }
    return scope;
  }, [nodes, path, loadedChildren]);

  // 當前 path 末端 folder 的 id（用於顯示其 lazy load 狀態）
  const currentFolderId = path.length > 0 ? path[path.length - 1].id : null;
  const currentIsLoading = currentFolderId ? loadingIds.has(currentFolderId) : false;
  const currentLoadError = currentFolderId ? loadErrors.get(currentFolderId) : undefined;

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

  const enterFolder = React.useCallback(
    (node: FileBrowserNode) => {
      if (node.type !== 'folder') return;
      setPath((prev) => [...prev, { id: node.id, name: node.name }]);
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
  const goToLevel = React.useCallback((level: number) => {
    setPath((prev) => prev.slice(0, level + 1));
  }, []);

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

  // ─── 全選 ────────────────────────────────────────────────────────────────
  // 範圍：當前 path 末端 folder 內、非 disabled 的 files
  const selectableFiles = React.useMemo(
    () => (currentNodes ?? []).filter((n) => n.type === 'file' && !n.disabled),
    [currentNodes],
  );
  const selectableCount = selectableFiles.length;
  const selectedInCurrent = React.useMemo(
    () => selectableFiles.filter((f) => value.includes(f.id)).length,
    [selectableFiles, value],
  );
  const allChecked = selectableCount > 0 && selectedInCurrent === selectableCount;
  const someChecked = selectedInCurrent > 0 && selectedInCurrent < selectableCount;

  const toggleSelectAll = React.useCallback(() => {
    if (selectableCount === 0) return;
    const ids = selectableFiles.map((f) => f.id);
    if (allChecked) {
      onChange(value.filter((v) => !ids.includes(v)));
    } else {
      const set = new Set(value);
      ids.forEach((id) => set.add(id));
      onChange(Array.from(set));
    }
  }, [selectableCount, selectableFiles, allChecked, value, onChange]);

  // ─── 鍵盤導覽 ────────────────────────────────────────────────────────────
  const rows = currentNodes ?? [];
  const [focusedId, setFocusedId] = React.useState<string | null>(null);

  // 切換 path 後、或 rows 變動且當前 focus 不存在時，focus 第一筆
  React.useEffect(() => {
    if (rows.length === 0) {
      setFocusedId(null);
      return;
    }
    if (focusedId && rows.some((r) => r.id === focusedId)) return;
    setFocusedId(rows[0].id);
  }, [rows, focusedId]);

  const handleTreeKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (rows.length === 0) {
      if (e.key === 'Backspace' && path.length > 0) {
        e.preventDefault();
        goBack();
      }
      return;
    }
    const idx = rows.findIndex((r) => r.id === focusedId);
    if (idx < 0) return;
    const node = rows[idx];

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        setFocusedId(rows[Math.min(idx + 1, rows.length - 1)].id);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        setFocusedId(rows[Math.max(idx - 1, 0)].id);
        break;
      }
      case 'ArrowRight': {
        if (node.type === 'folder') {
          e.preventDefault();
          enterFolder(node);
        }
        break;
      }
      case 'ArrowLeft':
      case 'Backspace': {
        if (path.length > 0) {
          e.preventDefault();
          goBack();
        }
        break;
      }
      case 'Enter':
      case ' ': {
        e.preventDefault();
        if (node.type === 'file' && !node.disabled) {
          toggleSelect(node);
        } else if (node.type === 'folder') {
          enterFolder(node);
        }
        break;
      }
    }
  };

  // ─── 麵包屑 ──────────────────────────────────────────────────────────────
  const crumbs = React.useMemo(() => {
    return [
      { label: ROOT_LABEL, onClick: path.length > 0 ? () => goHome() : undefined },
      ...path.map((p, i) => {
        const isLast = i === path.length - 1;
        return {
          label: p.name,
          onClick: !isLast ? () => goToLevel(i) : undefined,
        };
      }),
    ];
  }, [path, goHome, goToLevel]);

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

      {/* List */}
      <div
        className="fas-fb__tree"
        style={treeStyle}
        role="tree"
        tabIndex={0}
        onKeyDown={handleTreeKey}
        aria-label="檔案瀏覽器"
      >
        {currentIsLoading && (
          <div className="fas-fb__loading">
            <Spin size="m" />
          </div>
        )}

        {!currentIsLoading && currentLoadError && (
          <div className="fas-fb__error">
            <span>{currentLoadError || '載入失敗'}</span>
            <Button
              variant="text"
              color="secondary"
              size="s"
              onClick={() => currentFolderId && triggerLoad(currentFolderId)}
              iconLeft={<span className="material-symbols-outlined" aria-hidden>refresh</span>}
            >
              重試
            </Button>
          </div>
        )}

        {!currentIsLoading && !currentLoadError && rows.length === 0 && (
          <div className="fas-fb__empty">{emptyText}</div>
        )}

        {!currentIsLoading && !currentLoadError && selectableCount > 0 && (
          <div
            className="fas-fb__select-all"
            onClick={(e) => {
              // 整列可點，但避免重複觸發 checkbox
              if ((e.target as HTMLElement).closest('.fas-checkbox')) return;
              toggleSelectAll();
            }}
          >
            <span className="fas-fb__checkbox" onClick={(e) => e.stopPropagation()}>
              <Checkbox
                checked={allChecked}
                indeterminate={someChecked}
                onChange={toggleSelectAll}
                size="m"
              />
            </span>
            <span className="fas-fb__select-all-label">
              全選 <span className="fas-fb__select-all-count">({selectedInCurrent} / {selectableCount})</span>
            </span>
          </div>
        )}

        {!currentIsLoading && !currentLoadError &&
          rows.map((node) => {
            const isFolder = node.type === 'folder';
            const checked = node.type === 'file' && value.includes(node.id);
            const isFocused = focusedId === node.id;

            return (
              <div
                key={node.id}
                role="treeitem"
                aria-level={path.length + 1}
                aria-selected={checked || undefined}
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
                  if (!isFolder) toggleSelect(node);
                }}
                onDoubleClick={(e) => {
                  if (isFolder) {
                    e.stopPropagation();
                    enterFolder(node);
                  }
                }}
              >
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
                      {isFolder ? 'folder' : 'description'}
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

                {/* Enter button (folder only) */}
                <div className="fas-fb__trailing" onClick={(e) => e.stopPropagation()}>
                  {isFolder && (
                    <IconButton
                      aria-label={`進入 ${node.name}`}
                      size="s"
                      onClick={() => enterFolder(node)}
                      icon={<span className="material-symbols-outlined" aria-hidden>arrow_forward</span>}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

FileBrowser.displayName = 'FileBrowser';
export default FileBrowser;
