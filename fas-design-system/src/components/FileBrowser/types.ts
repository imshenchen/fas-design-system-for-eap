import type React from 'react';

export interface FileBrowserNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  /** 預載的子節點（僅 folder 有意義） */
  children?: FileBrowserNode[];
  /** folder 用；true 且未提供 children → 展開時觸發 loadChildren */
  hasChildren?: boolean;
  /** 不可選（file）或視覺灰化（folder 仍可展開／進入） */
  disabled?: boolean;
  /** 覆寫預設 icon（folder=folder/folder_open, file=description） */
  icon?: React.ReactNode;
  /** 第二行小字（如修改時間、描述等，由呼叫者組好）。若同時提供 `size`，size 優先 */
  caption?: string;
  /**
   * 檔案大小，僅 file 有意義。number 視為 bytes 自動格式化為 B / KB / MB / GB；
   * 也可直接傳已格式化好的 string。提供 size 時，row 的小字優先顯示 size 而非 `caption`
   */
  size?: number | string;
}

/** 把 bytes 數值或現成字串格式化為人類可讀的檔案大小（如 `1.2 MB`） */
export function formatFileSize(size: number | string | undefined): string | undefined {
  if (size === undefined || size === null) return undefined;
  if (typeof size === 'string') return size;
  if (!Number.isFinite(size) || size < 0) return undefined;
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
