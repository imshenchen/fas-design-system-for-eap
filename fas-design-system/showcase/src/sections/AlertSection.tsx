import React from 'react';

export const AlertSection: React.FC = () => (
  <section className="section" id="alert">
    <div className="section-title">Alert</div>
    <div className="section-desc">
      Alert 分為 <b>Inline 行內通知</b>（四邊完整 border，置於內容區塊中）和 <b>Banner 頁面橫幅</b>（置於頁面頂部）。
      提供 Error / Warning / Success / Processing 四種狀態。
    </div>

    <div className="subsection">
      <div className="subsection-title">Inline Alert</div>
      <div className="demo-box col">
        <div className="alert alert-error">
          <span className="alert-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#f23a43"/>
              <path d="M15 9L9 15M9 9l6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </span>
          <div className="alert-body">
            <div className="alert-title">Error — 標題文字</div>
            <div className="alert-desc">說明文字，提供使用者操作反饋或警示資訊。</div>
          </div>
          <div className="alert-actions">
            <span className="alert-ts">14:18:44</span>
            <button className="btn btn-outlined btn-s sec">回復</button>
            <button className="alert-close">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="var(--alert-text-error)" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="alert alert-warning">
          <span className="alert-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2L22 21H2L12 2Z" fill="#f5b900"/>
              <path d="M12 9v5M12 17h.01" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </span>
          <div className="alert-body">
            <div className="alert-title">Warning — 標題文字</div>
            <div className="alert-desc">說明文字，提供使用者操作反饋或警示資訊。</div>
          </div>
          <div className="alert-actions">
            <button className="btn btn-outlined btn-s sec">忽略</button>
          </div>
        </div>

        <div className="alert alert-success">
          <span className="alert-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#68ad23"/>
              <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="alert-body">
            <div className="alert-title">Success — 標題文字</div>
            <div className="alert-desc">說明文字，操作已成功完成。</div>
          </div>
        </div>

        <div className="alert alert-processing">
          <span className="alert-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#00adef"/>
              <path d="M12 8v4l2 2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </span>
          <div className="alert-body">
            <div className="alert-title">Processing — 標題文字</div>
            <div className="alert-desc">說明文字，提示使用者目前系統正在處理中。</div>
          </div>
        </div>
      </div>
    </div>

    <div className="subsection">
      <div className="subsection-title">Banner Alert（頁面橫幅）</div>
      <div className="demo-box col" style={{ padding: 0, gap: 0, overflow: 'hidden' }}>
        <div
          className="alert alert-banner alert-error"
          style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}
        >
          <span className="alert-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
              <circle cx="12" cy="12" r="10" fill="#f23a43"/>
              <path d="M15 9L9 15M9 9l6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </span>
          <div className="alert-body">
            <div className="alert-title" style={{ fontSize: 14 }}>系統偵測到嚴重錯誤，請聯繫系統管理員。</div>
          </div>
          <div className="alert-actions">
            <button className="btn btn-outlined btn-s sec">查看詳情</button>
          </div>
        </div>
        <div
          className="alert alert-banner alert-processing"
          style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}
        >
          <span className="alert-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
              <path d="M12 4a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm0 0v4m0 4h.01" stroke="#00638a" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </span>
          <div className="alert-body">
            <div className="alert-title" style={{ fontSize: 14 }}>🔔 系統已更新至 v1.2.0，包含功能優化與錯誤修正。</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
