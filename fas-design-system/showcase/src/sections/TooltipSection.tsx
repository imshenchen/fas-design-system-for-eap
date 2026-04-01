import React from 'react';

export const TooltipSection: React.FC = () => (
  <section className="section" id="tooltip">
    <div className="section-title">Tooltip</div>
    <div className="section-desc">滑鼠懸停時顯示輔助說明文字。</div>
    <div className="demo-box">
      <div className="tooltip-wrap">
        <button className="btn btn-outlined btn-m">Hover me</button>
        <div className="tooltip-box">這是 Tooltip 說明文字</div>
      </div>
      <div className="tooltip-wrap">
        <button className="btn-icon"><span className="material-icons">help_outline</span></button>
        <div className="tooltip-box">查看更多說明</div>
      </div>
      <div className="tooltip-wrap">
        <span className="chip chip-error chip-s"><span className="chip-label">異常</span></span>
        <div className="tooltip-box">主軸溫度超過 85°C</div>
      </div>
    </div>
  </section>
);
