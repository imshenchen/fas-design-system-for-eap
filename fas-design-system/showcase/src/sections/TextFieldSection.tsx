import React from 'react';
import { TextField } from '../../../src/components/TextField/TextField';

export const TextFieldSection: React.FC = () => (
  <section className="section" id="textfield">
    <div className="section-title">Text Field</div>
    <div className="section-desc">
      提供 Outlined / Underline / Borderless 三種樣式，以及 Empty / Focus / Filled / Error / Disabled 等狀態，尺寸 XL～XS。
    </div>
    <div className="demo-box" style={{ gap: 16, flexWrap: 'wrap' }}>
      <div style={{ width: 200 }}>
        <TextField
          label="標籤名稱"
          placeholder="輸入內容…"
          style="outlined"
          size="m"
        />
      </div>
      <div style={{ width: 200 }}>
        <TextField
          label="Filled 狀態"
          defaultValue="已輸入文字"
          style="outlined"
          size="m"
        />
      </div>
      <div style={{ width: 200 }}>
        <TextField
          label="Error 狀態"
          defaultValue="錯誤輸入"
          error="請輸入有效的格式"
          style="outlined"
          size="m"
        />
      </div>
      <div style={{ width: 200 }}>
        <TextField
          label="Disabled"
          placeholder="不可編輯"
          disabled
          style="outlined"
          size="m"
        />
      </div>
      <div style={{ width: 200 }}>
        <TextField
          label="With Icon"
          placeholder="搜尋…"
          leadingIcon={<span className="material-icons icon-18" style={{ color: 'var(--secondary)' }}>search</span>}
          style="outlined"
          size="m"
        />
      </div>
      <div style={{ width: 200 }}>
        <TextField
          label="Helper Text"
          placeholder="輸入內容…"
          helperText="這是輔助說明文字"
          style="outlined"
          size="m"
        />
      </div>
      <div style={{ width: 200 }}>
        <TextField
          label="With Count"
          placeholder="最多 50 字元"
          maxLength={50}
          showCount
          style="outlined"
          size="m"
        />
      </div>
      <div style={{ width: 200 }}>
        <TextField
          label="Read Only"
          defaultValue="唯讀內容"
          readOnly
          style="outlined"
          size="m"
        />
      </div>
    </div>

    <div className="subsection" style={{ marginTop: 20 }}>
      <div className="subsection-title">尺寸比較</div>
      <div className="demo-box col">
        {(['xl', 'l', 'm', 's', 'xs'] as const).map((sz) => (
          <div key={sz} style={{ width: 240 }}>
            <TextField
              label={`Size ${sz.toUpperCase()}`}
              placeholder={`${sz.toUpperCase()} 輸入框`}
              size={sz}
              style="outlined"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
