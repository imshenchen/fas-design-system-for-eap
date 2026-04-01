import React from 'react';

export const CardSection: React.FC = () => (
  <section className="section" id="card">
    <div className="section-title">Card</div>
    <div className="section-desc">
      卡片分為 Elevated（陰影 2dp）和 Outlined（1px 邊框）。DIAWorks 產品一律使用 Radius 4。常用於工廠看板，可承載文字、圖表、表格、按鈕等內容。
    </div>

    <div className="demo-box" style={{ gap: 20, alignItems: 'flex-start' }}>
      {/* Elevated */}
      <div className="card" style={{ width: 280 }}>
        <div className="card-header">
          <span className="card-header-title">Elevated Card</span>
          <button className="btn-icon" style={{ width: 28, height: 28 }}>
            <span className="material-icons icon-18">more_vert</span>
          </button>
        </div>
        <div className="card-body">
          <div style={{ background: 'var(--comp-hover)', borderRadius: 4, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: 12 }}>
            <span className="material-icons icon-48" style={{ opacity: .5 }}>bar_chart</span>
          </div>
          <div style={{ fontWeight: 500, fontFamily: "'Roboto'", marginBottom: 4 }}>卡片標題</div>
          <div style={{ fontSize: 13, color: 'var(--text-medium)', lineHeight: 1.5 }}>卡片適合用於報表呈現，常用於工廠戰情室看板。</div>
        </div>
        <div className="card-actions">
          <button className="btn btn-outlined btn-s">操作</button>
        </div>
      </div>

      {/* Outlined */}
      <div className="card outlined" style={{ width: 280 }}>
        <div className="card-header">
          <span className="card-header-title">Outlined Card</span>
          <button className="btn-icon" style={{ width: 28, height: 28 }}>
            <span className="material-icons icon-18">more_vert</span>
          </button>
        </div>
        <div className="card-body">
          <div style={{ background: 'var(--bg-surface-dim-var)', borderRadius: 4, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', marginBottom: 12 }}>
            <span className="material-icons icon-48" style={{ opacity: .4 }}>show_chart</span>
          </div>
          <div style={{ fontWeight: 500, fontFamily: "'Roboto'", marginBottom: 4 }}>線框卡片</div>
          <div style={{ fontSize: 13, color: 'var(--text-medium)', lineHeight: 1.5 }}>需要突顯卡片層次，或白色背景上需明確邊界時使用。</div>
        </div>
        <div className="card-actions">
          <button className="btn btn-outlined btn-s">操作</button>
        </div>
      </div>

      {/* No Header */}
      <div className="card" style={{ width: 280 }}>
        <div className="card-body">
          <div style={{ fontWeight: 500, fontFamily: "'Roboto'", fontSize: 14, color: 'var(--text-medium)', letterSpacing: .5, textTransform: 'uppercase', marginBottom: 8 }}>No Header</div>
          <div style={{ fontSize: 13, color: 'var(--text-medium)', lineHeight: 1.5 }}>不顯示 Header 時，內容直接顯示在卡片容器內。</div>
          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <span className="chip chip-s chip-processing"><span className="chip-label">運行中</span></span>
            <span className="chip chip-s chip-success"><span className="chip-label">正常</span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
