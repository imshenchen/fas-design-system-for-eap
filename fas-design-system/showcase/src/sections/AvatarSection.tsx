import React from 'react';

export const AvatarSection: React.FC = () => (
  <section className="section" id="avatar">
    <div className="section-title">Avatar</div>
    <div className="section-desc">
      用於顯示使用者識別。提供 Primary（品牌色）、Secondary（容器色）和 Photo 三種類型，L / M / S 三種尺寸。
    </div>
    <div className="demo-box">
      <div className="avatar avatar-l avatar-primary">YC</div>
      <div className="avatar avatar-m avatar-primary">YC</div>
      <div className="avatar avatar-s avatar-primary">YC</div>
      <div className="divider-v"></div>
      <div className="avatar avatar-l avatar-secondary">
        <span className="material-icons icon-22">person</span>
      </div>
      <div className="avatar avatar-m avatar-secondary">
        <span className="material-icons icon-18">person</span>
      </div>
      <div className="avatar avatar-s avatar-secondary">
        <span className="material-icons icon-14">person</span>
      </div>
    </div>
  </section>
);
