/**
 * FileTransfer — FAS Design Kit (Template)
 *
 * 左側 FileBrowser 勾選檔案 → 中間「加入 →」按鈕 → 右側已選清單。
 * 用於「從多層資料夾中挑出一組檔案」的情境（如附件、批次處理）。
 *
 * ┌─────────────┬───┬──────────────┐
 * │             │   │              │
 * │ FileBrowser │ → │ 已選檔案     │
 * │ （左側）    │   │ List + ✕     │
 * │             │   │              │
 * └─────────────┴───┴──────────────┘
 */
import React from 'react';
import { FileBrowser } from '../../components/FileBrowser/FileBrowser';
import type { FileBrowserNode } from '../../components/FileBrowser/types';
import { Button } from '../../components/Button/Button';
import { IconButton } from '../../components/IconButton/IconButton';
import './FileTransfer.css';

export interface FileTransferProps {
  /** root 層節點，pass-through 給 FileBrowser */
  nodes: FileBrowserNode[];
  /** 已加入的 file id（受控） */
  value: string[];
  onChange: (next: string[]) => void;
  /** lazy load 子節點 */
  loadChildren?: (folderId: string) => Promise<FileBrowserNode[]>;
  /** 整體高度，預設 480 */
  height?: number | string;
  /** 中央加入按鈕文字，預設「加入」 */
  addLabel?: string;
  /** 右側「全部清除」按鈕文字，預設「全部清除」 */
  clearAllLabel?: string;
  /** 右側空狀態文字，預設「尚未加入任何檔案」 */
  targetEmptyText?: string;
  /** 右側欄標題，預設「已選檔案」 */
  targetTitle?: string;
  /** FileBrowser 空資料夾文字（pass-through） */
  emptyText?: string;
  className?: string;
}

interface FileSnapshot {
  id: string;
  name: string;
  caption?: string;
}

/** 從同步 nodes tree 遞迴找 file 的 snapshot（lazy-loaded 子節點不包含在內） */
function findFileInTree(
  nodes: FileBrowserNode[] | undefined,
  id: string,
): FileSnapshot | undefined {
  if (!nodes) return undefined;
  for (const n of nodes) {
    if (n.type === 'file' && n.id === id) {
      return { id: n.id, name: n.name, caption: n.caption };
    }
    if (n.type === 'folder' && n.children) {
      const found = findFileInTree(n.children, id);
      if (found) return found;
    }
  }
  return undefined;
}

export const FileTransfer: React.FC<FileTransferProps> = ({
  nodes,
  value,
  onChange,
  loadChildren,
  height = 480,
  addLabel = '加入',
  clearAllLabel = '全部清除',
  targetEmptyText = '尚未加入任何檔案',
  targetTitle = '已選檔案',
  emptyText,
  className,
}) => {
  // FileBrowser 內部 selection state（pending — 還未加入右側）
  const [pending, setPending] = React.useState<string[]>([]);

  // File info 快取：id → {name, caption}
  // 任何時候只要從 source（傳入 nodes 或 FileBrowser 提供的）看到 file，就 cache 起來
  const [snapshots, setSnapshots] = React.useState<Map<string, FileSnapshot>>(new Map());

  // 把同步 nodes tree 中的所有 file 一次性 cache（lazy load 後的子節點透過 onSeenFiles 補上）
  // 為避免每次 render 都跑遞迴，用 nodes ref 比對
  React.useEffect(() => {
    setSnapshots((prev) => {
      const next = new Map(prev);
      const walk = (list: FileBrowserNode[]) => {
        list.forEach((n) => {
          if (n.type === 'file') {
            if (!next.has(n.id)) {
              next.set(n.id, { id: n.id, name: n.name, caption: n.caption });
            }
          } else if (n.children) {
            walk(n.children);
          }
        });
      };
      walk(nodes);
      return next;
    });
  }, [nodes]);

  // 包一層 loadChildren，把載回來的 file 也快取進 snapshots
  const wrappedLoadChildren = React.useMemo(() => {
    if (!loadChildren) return undefined;
    return (folderId: string) =>
      loadChildren(folderId).then((kids) => {
        setSnapshots((prev) => {
          const next = new Map(prev);
          kids.forEach((n) => {
            if (n.type === 'file' && !next.has(n.id)) {
              next.set(n.id, { id: n.id, name: n.name, caption: n.caption });
            }
          });
          return next;
        });
        return kids;
      });
  }, [loadChildren]);

  const handleAdd = () => {
    if (pending.length === 0) return;
    const set = new Set(value);
    pending.forEach((id) => set.add(id));
    onChange(Array.from(set));
    setPending([]);
  };

  const handleRemove = (id: string) => {
    onChange(value.filter((v) => v !== id));
  };

  const handleClearAll = () => onChange([]);

  // 把 value resolve 為 snapshots（snapshot 沒有就 fallback 用 id）
  const targetList: FileSnapshot[] = value.map((id) => {
    const snap = snapshots.get(id);
    if (snap) return snap;
    // 同步 fallback（罕見，只有 value 帶了外部 id 又還沒被 cache 時）
    const fromTree = findFileInTree(nodes, id);
    if (fromTree) return fromTree;
    return { id, name: id };
  });

  // 計算「實際會新增的數量」（扣掉已在右側的）
  const addable = pending.filter((id) => !value.includes(id)).length;
  const addBtnLabel = addable > 0 ? `${addLabel} (${addable})` : addLabel;

  const rootStyle: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div className={['fas-ft', className].filter(Boolean).join(' ')} style={rootStyle}>
      {/* Left: FileBrowser */}
      <div className="fas-ft__left">
        <FileBrowser
          nodes={nodes}
          value={pending}
          onChange={setPending}
          loadChildren={wrappedLoadChildren}
          emptyText={emptyText}
          height="100%"
        />
      </div>

      {/* Center: Add button */}
      <div className="fas-ft__center">
        <Button
          variant="contained"
          color="primary"
          size="m"
          disabled={addable === 0}
          onClick={handleAdd}
          iconRight={<span className="material-symbols-outlined" aria-hidden>arrow_forward</span>}
        >
          {addBtnLabel}
        </Button>
      </div>

      {/* Right: Target list */}
      <div className="fas-ft__right">
        <div className="fas-ft__right-header">
          <span className="fas-ft__right-title">
            {targetTitle}
            <span className="fas-ft__right-count">({targetList.length})</span>
          </span>
          {targetList.length > 0 && (
            <Button variant="text" color="secondary" size="s" onClick={handleClearAll}>
              {clearAllLabel}
            </Button>
          )}
        </div>

        <div className="fas-ft__right-list">
          {targetList.length === 0 ? (
            <div className="fas-ft__right-empty">{targetEmptyText}</div>
          ) : (
            targetList.map((snap) => (
              <div key={snap.id} className="fas-ft__target-row">
                <span className="fas-ft__target-icon" aria-hidden>
                  <span className="material-symbols-outlined">description</span>
                </span>
                <div className="fas-ft__target-text">
                  <span className="fas-ft__target-name" title={snap.name}>{snap.name}</span>
                  {snap.caption && (
                    <span className="fas-ft__target-caption">{snap.caption}</span>
                  )}
                </div>
                <IconButton
                  aria-label={`移除 ${snap.name}`}
                  size="s"
                  tooltip={false}
                  onClick={() => handleRemove(snap.id)}
                  icon={<span className="material-symbols-outlined" aria-hidden>close</span>}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

FileTransfer.displayName = 'FileTransfer';
export default FileTransfer;
