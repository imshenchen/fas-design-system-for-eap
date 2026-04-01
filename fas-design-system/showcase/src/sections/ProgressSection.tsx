import React from 'react';

export const ProgressSection: React.FC = () => (
  <section className="section" id="progress">
    <div className="section-title">Progress</div>
    <div className="section-desc">
      提供 Linear（線性）和 Circular（環形）進度條，以及 Dashboard 專用的 Bullet Graph。
    </div>

    <div className="subsection">
      <div className="subsection-title">Linear Progress</div>
      <div className="demo-box col">
        <div className="progress-wrap">
          <div className="progress-meta">
            <span className="lbl">進度</span><span className="val">72%</span>
          </div>
          <div className="progress-track"><div className="progress-bar" style={{ width: '72%' }}></div></div>
        </div>
        <div className="progress-wrap">
          <div className="progress-meta">
            <span className="lbl">良品率（Success）</span><span className="val">96%</span>
          </div>
          <div className="progress-track"><div className="progress-bar success" style={{ width: '96%' }}></div></div>
        </div>
        <div className="progress-wrap">
          <div className="progress-meta">
            <span className="lbl">稼動率（Warning）</span><span className="val">68%</span>
          </div>
          <div className="progress-track"><div className="progress-bar warning" style={{ width: '68%' }}></div></div>
        </div>
        <div className="progress-wrap">
          <div className="progress-meta">
            <span className="lbl">異常停機（Error）</span><span className="val">34%</span>
          </div>
          <div className="progress-track"><div className="progress-bar error" style={{ width: '34%' }}></div></div>
        </div>
      </div>
    </div>

    <div className="subsection">
      <div className="subsection-title">Circular Progress</div>
      <div className="demo-box">
        <div className="progress-circular">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="var(--bg-container-high)" strokeWidth="4"/>
            <circle cx="24" cy="24" r="20" fill="none" stroke="var(--primary)" strokeWidth="4"
              strokeDasharray="100.5 25.6" strokeLinecap="round"/>
          </svg>
          <div className="val">80%</div>
        </div>
        <div className="progress-circular">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="var(--bg-container-high)" strokeWidth="4"/>
            <circle cx="24" cy="24" r="20" fill="none" stroke="var(--status-success)" strokeWidth="4"
              strokeDasharray="120.5 5.6" strokeLinecap="round"/>
          </svg>
          <div className="val">95%</div>
        </div>
        <div className="progress-circular">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="var(--bg-container-high)" strokeWidth="4"/>
            <circle cx="24" cy="24" r="20" fill="none" stroke="var(--status-warning)" strokeWidth="4"
              strokeDasharray="75.4 50.3" strokeLinecap="round"/>
          </svg>
          <div className="val">60%</div>
        </div>
      </div>
    </div>

    <div className="subsection">
      <div className="subsection-title">Bullet Graph（Dashboard 專用）</div>
      <div className="demo-box col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 400 }}>
          {[
            { label: 'Line A', actual: 92, target: 90, color: 'var(--status-success)' },
            { label: 'Line B', actual: 76, target: 90, color: 'var(--status-warning)' },
            { label: 'Line C', actual: 97, target: 90, color: 'var(--status-success)' },
          ].map(({ label, actual, target, color }) => (
            <div key={label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12, fontFamily: "'Roboto'", color: 'var(--text-medium)' }}>
                <span>{label}</span><span>{actual}% / {target}%</span>
              </div>
              <div className="bullet-track">
                <div className="bullet-actual" style={{ width: `${actual}%`, background: color }}></div>
                <div className="bullet-target" style={{ left: `${target}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-medium)', fontFamily: "'Roboto'", display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          <div style={{ width: 10, height: 2, background: 'var(--text-high)', borderRadius: 1 }}></div>目標值
        </div>
      </div>
    </div>
  </section>
);
