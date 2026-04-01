import React from 'react';

export const BadgeSection: React.FC = () => (
  <section className="section" id="badge">
    <div className="section-title">Badge</div>
    <div className="section-desc">用於圖標或元件右上角，顯示數字或狀態點。</div>
    <div className="demo-box">
      <div className="badge-wrap">
        <button className="btn-icon"><span className="material-icons">notifications</span></button>
        <span className="badge">3</span>
      </div>
      <div className="badge-wrap">
        <button className="btn-icon"><span className="material-icons">mail</span></button>
        <span className="badge">12</span>
      </div>
      <div className="badge-wrap">
        <button className="btn-icon"><span className="material-icons">warning</span></button>
        <span className="badge alert">!</span>
      </div>
      <div className="badge-wrap">
        <button className="btn-icon"><span className="material-icons">settings</span></button>
        <span className="badge dot"></span>
      </div>
      <div className="badge-wrap">
        <button className="btn-icon"><span className="material-icons">bug_report</span></button>
        <span className="badge dot alert"></span>
      </div>
    </div>
  </section>
);
