import React from 'react';
import { Button } from '../../../src/components/Button/Button';
import { IconButton } from '../../../src/components/IconButton/IconButton';

export const ButtonSection: React.FC = () => (
  <section className="section" id="button">
    <div className="section-title">Button</div>
    <div className="section-desc">
      按鈕用來讓使用者呼叫行動或做出選擇。提供三種 Style（Contained / Outlined / Text）× 三種 Color（Primary / Secondary / Error）×
      五種 Size（XL～XS）× 三種 State（Default / Hover / Disabled）。
    </div>

    <div className="subsection">
      <div className="subsection-title">Style × Color</div>
      <div className="demo-box col">
        <div className="demo-label">Contained — Primary / Error</div>
        <div className="row">
          <Button variant="contained" color="primary" size="m">Contained</Button>
          <Button variant="contained" color="error" size="m">Contained Error</Button>
          <Button variant="contained" color="primary" size="m" disabled>Disabled</Button>
        </div>
        <div className="demo-label">Outlined — Primary / Secondary / Error</div>
        <div className="row">
          <Button variant="outlined" color="primary" size="m">Outlined</Button>
          <Button variant="outlined" color="secondary" size="m">Secondary</Button>
          <Button variant="outlined" color="error" size="m">Error</Button>
          <Button variant="outlined" color="primary" size="m" disabled>Disabled</Button>
        </div>
        <div className="demo-label">Text — Primary / Secondary / Error</div>
        <div className="row">
          <Button variant="text" color="primary" size="m">Text</Button>
          <Button variant="text" color="secondary" size="m">Secondary</Button>
          <Button variant="text" color="error" size="m">Error</Button>
          <Button variant="text" color="primary" size="m" disabled>Disabled</Button>
        </div>
      </div>
    </div>

    <div className="subsection">
      <div className="subsection-title">Size（XL 48 → XS 32）</div>
      <div className="demo-box" style={{ alignItems: 'flex-end' }}>
        <Button variant="contained" color="primary" size="xl">XL 48</Button>
        <Button variant="contained" color="primary" size="l">L 44</Button>
        <Button variant="contained" color="primary" size="m">M 40</Button>
        <Button variant="contained" color="primary" size="s">S 36</Button>
        <Button variant="contained" color="primary" size="xs">XS 32</Button>
      </div>
    </div>

    <div className="subsection">
      <div className="subsection-title">With Icon</div>
      <div className="demo-box">
        <Button
          variant="contained"
          color="primary"
          size="m"
          iconLeft={<span className="material-icons icon-18">add</span>}
        >
          新增
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="m"
          iconRight={<span className="material-icons icon-18">download</span>}
        >
          匯出
        </Button>
        <Button
          variant="text"
          color="primary"
          size="m"
          iconLeft={<span className="material-icons icon-18">filter_list</span>}
        >
          篩選
        </Button>
        <Button variant="contained" color="primary" size="m" loading>Loading</Button>
      </div>
    </div>

    <div className="subsection">
      <div className="subsection-title">Icon Button（L / M / S）</div>
      <div className="demo-box" style={{ alignItems: 'center' }}>
        <IconButton
          size="l"
          icon={<span className="material-icons icon-24">edit</span>}
          aria-label="編輯"
        />
        <IconButton
          size="m"
          icon={<span className="material-icons">delete_outline</span>}
          aria-label="刪除"
        />
        <IconButton
          size="m"
          icon={<span className="material-icons">more_vert</span>}
          aria-label="更多"
        />
        <IconButton
          size="m"
          icon={<span className="material-icons">refresh</span>}
          aria-label="重新整理"
          selected
        />
        <IconButton
          size="s"
          icon={<span className="material-icons icon-16">close</span>}
          aria-label="關閉"
        />
      </div>
    </div>

    <div className="subsection">
      <div className="subsection-title">FAB / Fully Rounded</div>
      <div className="demo-box">
        <button className="fab"><span className="material-icons icon-28">add</span></button>
        <button className="btn btn-contained btn-m btn-rounded">Rounded</button>
        <button className="btn btn-outlined btn-m btn-rounded">Rounded</button>
      </div>
    </div>
  </section>
);
