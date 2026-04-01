import React from 'react';

export const SelectionSection: React.FC = () => (
  <section className="section" id="selection">
    <div className="section-title">Selection Controls</div>
    <div className="section-desc">
      包含 Checkbox、Radio 和 Switch，提供 Enabled 和 Disabled 兩種狀態。
    </div>

    <div className="subsection">
      <div className="subsection-title">Checkbox</div>
      <div className="demo-box">
        <label className="checkbox-wrap">
          <div className="checkbox checked">
            <svg viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="ctrl-label">Selected</span>
        </label>
        <label className="checkbox-wrap">
          <div className="checkbox indeterminate">
            <div style={{ width: 8, height: 2, background: 'white', borderRadius: 1 }}></div>
          </div>
          <span className="ctrl-label">Indeterminate</span>
        </label>
        <label className="checkbox-wrap">
          <div className="checkbox"></div>
          <span className="ctrl-label">Unselected</span>
        </label>
        <label className="checkbox-wrap">
          <div className="checkbox disabled"></div>
          <span className="ctrl-label disabled">Disabled</span>
        </label>
      </div>
    </div>

    <div className="subsection">
      <div className="subsection-title">Radio</div>
      <div className="demo-box">
        <label className="checkbox-wrap">
          <div className="radio selected"></div>
          <span className="ctrl-label">選項 A（已選取）</span>
        </label>
        <label className="checkbox-wrap">
          <div className="radio"></div>
          <span className="ctrl-label">選項 B</span>
        </label>
        <label className="checkbox-wrap">
          <div className="radio disabled"></div>
          <span className="ctrl-label disabled">選項 C（停用）</span>
        </label>
      </div>
    </div>

    <div className="subsection">
      <div className="subsection-title">Switch</div>
      <div className="demo-box">
        <label className="switch-wrap">
          <div className="switch on"></div>
          <span className="ctrl-label">開啟</span>
        </label>
        <label className="switch-wrap">
          <div className="switch"></div>
          <span className="ctrl-label">關閉</span>
        </label>
        <label className="switch-wrap">
          <div className="switch disabled"></div>
          <span className="ctrl-label disabled">停用</span>
        </label>
      </div>
    </div>
  </section>
);
