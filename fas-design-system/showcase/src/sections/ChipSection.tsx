import React, { useState } from 'react';
import { StatusChip, SelectableChip, RemovableChip } from '../../../src/components/Chip/Chip';

export const ChipSection: React.FC = () => {
  const [selected, setSelected] = useState<string>('全部');
  const [removables, setRemovables] = useState(['taipei', 'Line A', 'Line B']);

  const handleRemove = (label: string) => {
    setRemovables((prev) => prev.filter((r) => r !== label));
  };

  return (
    <section className="section" id="chip">
      <div className="section-title">Chip / Status Chip</div>
      <div className="section-desc">
        標籤提供 Round 和 Rectangle 兩種外型，Filled 或 Outline 樣式，L（32px）和 S（24px）兩種尺寸。Status Chip 共 21 種狀態色。
      </div>

      <div className="subsection">
        <div className="subsection-title">Status Chip — Round Filled（常用狀態）</div>
        <div className="demo-box col">
          <div className="row">
            <StatusChip status="processing" label="Processing" />
            <StatusChip status="success" label="Success" />
            <StatusChip status="warning" label="Warning" />
            <StatusChip status="emergency" label="Emergency" />
            <StatusChip status="error" label="Error" />
            <StatusChip status="milestone" label="Milestone" />
            <StatusChip status="idle" label="Idle" />
          </div>
          <div className="row">
            <StatusChip status="mariner" label="Mariner" />
            <StatusChip status="moss" label="Moss" />
            <StatusChip status="bronze" label="Bronze" />
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Size L（32px）vs S（24px）</div>
        <div className="demo-box">
          <StatusChip status="processing" label="L 32px" size="l" />
          <StatusChip status="processing" label="S 24px" size="s" />
          <StatusChip status="success" label="L 32px" size="l" />
          <StatusChip status="success" label="S 24px" size="s" />
          <StatusChip status="error" label="L 32px" size="l" />
          <StatusChip status="error" label="S 24px" size="s" />
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Outlined Style</div>
        <div className="demo-box">
          <StatusChip status="processing" label="Processing" variant="outlined" />
          <StatusChip status="error" label="Error" variant="outlined" />
          <StatusChip status="success" label="Success" variant="outlined" />
          <StatusChip status="idle" label="Idle" variant="outlined" />
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Rectangle Shape</div>
        <div className="demo-box">
          <StatusChip status="processing" label="Rectangle" shape="rectangle" />
          <StatusChip status="success" label="Success" shape="rectangle" />
          <StatusChip status="error" label="Error" shape="rectangle" />
          <StatusChip status="idle" label="Idle" shape="rectangle" />
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Removable Chip</div>
        <div className="demo-box">
          {removables.map((label) => (
            <RemovableChip
              key={label}
              label={label}
              onRemove={() => handleRemove(label)}
            />
          ))}
          {removables.length === 0 && (
            <span style={{ fontSize: 13, color: 'var(--text-medium)' }}>
              所有 Chip 已移除
            </span>
          )}
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Selectable Chip</div>
        <div className="demo-box">
          {['全部', '今日', '本週', '本月'].map((label) => (
            <SelectableChip
              key={label}
              label={label}
              selected={selected === label}
              onToggle={() => setSelected(label)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
