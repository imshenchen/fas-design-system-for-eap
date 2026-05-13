/**
 * FileBrowserDialog — FAS Design Kit
 * @see ../../components.md § FileBrowser
 */
import React from 'react';
import { Dialog } from '../Dialog/Dialog';
import { Button } from '../Button/Button';
import { FileBrowser } from './FileBrowser';
import type { FileBrowserNode } from './types';

export interface FileBrowserDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (selectedFileIds: string[]) => void;
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** 開啟時的初始選取（每次 open=true 重置為此值） */
  defaultValue?: string[];
  // pass-through to FileBrowser:
  nodes: FileBrowserNode[];
  loadChildren?: (folderId: string) => Promise<FileBrowserNode[]>;
  emptyText?: string;
}

export const FileBrowserDialog: React.FC<FileBrowserDialogProps> = ({
  open,
  onClose,
  onConfirm,
  title = '選擇檔案',
  confirmLabel = '確認',
  cancelLabel = '取消',
  defaultValue,
  nodes,
  loadChildren,
  emptyText,
}) => {
  const [selected, setSelected] = React.useState<string[]>(defaultValue ?? []);

  // 每次 open=false → true 重置 selection；同一 open 期間不被外部 defaultValue 變動影響
  const prevOpenRef = React.useRef(open);
  React.useEffect(() => {
    if (open && !prevOpenRef.current) {
      setSelected(defaultValue ?? []);
    }
    prevOpenRef.current = open;
  }, [open, defaultValue]);

  const handleConfirm = () => {
    if (selected.length === 0) return;
    onConfirm(selected);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      size="lg"
      actions={
        <>
          <Button variant="text" color="secondary" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirm}
            disabled={selected.length === 0}
          >
            {confirmLabel}
          </Button>
        </>
      }
    >
      <FileBrowser
        nodes={nodes}
        value={selected}
        onChange={setSelected}
        loadChildren={loadChildren}
        emptyText={emptyText}
        height={420}
      />
    </Dialog>
  );
};

FileBrowserDialog.displayName = 'FileBrowserDialog';
export default FileBrowserDialog;
