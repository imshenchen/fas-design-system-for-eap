import React from 'react';

export const HyperlinkSection: React.FC = () => (
  <section className="section" id="hyperlink">
    <div className="section-title">Hyperlink</div>
    <div className="section-desc">提供 Primary（品牌色）和 Secondary（灰色）兩種類型。</div>
    <div className="demo-box">
      <a className="link" href="#">Primary Hyperlink</a>
      <a className="link secondary" href="#">Secondary Hyperlink</a>
    </div>
  </section>
);
