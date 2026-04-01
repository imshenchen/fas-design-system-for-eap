import React from 'react';

export const DividerSection: React.FC = () => (
  <section className="section" id="divider">
    <div className="section-title">Divider</div>
    <div className="section-desc">用於視覺分隔，提供水平（Horizontal）和垂直（Vertical）兩種方向。</div>
    <div className="demo-box col">
      <div className="demo-label">Horizontal</div>
      <div className="divider-h"></div>
      <div className="demo-label">Vertical（inline）</div>
      <div className="row" style={{ alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-medium)' }}>項目 A</span>
        <div className="divider-v"></div>
        <span style={{ fontSize: 13, color: 'var(--text-medium)' }}>項目 B</span>
        <div className="divider-v"></div>
        <span style={{ fontSize: 13, color: 'var(--text-medium)' }}>項目 C</span>
      </div>
    </div>
  </section>
);
