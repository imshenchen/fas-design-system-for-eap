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
  /** 第二行小字（如大小、修改時間，由呼叫者組好） */
  caption?: string;
}
