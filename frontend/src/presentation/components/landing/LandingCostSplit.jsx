const RECEIPT_ROWS = [
  {
    label: 'Plataforma B',
    val: '≈ USD 680',
    note: '≈ USD 340 por semestre',
  },
  {
    label: 'Plataforma A',
    val: '≈ $600.000 COP',
    note: '$2.000 COP por estudiante al año, plan básico',
  },
  {
    label: 'Servidor propio',
    val: 'inversión alta',
    note: 'Equipo, energía y soporte técnico local',
  },
];

export default function LandingCostSplit() {
  return (
    <section className="mag-cost" id="costos">
      <div className="mag-cost-head">
        <span className="mag-eyebrow" style={{ color: 'var(--accent)' }}>
          CAPÍTULO 03
        </span>
        <h2 className="h-sec">
          Diez colegios comparten un servidor. Cada uno paga una décima parte.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.7, textWrap: 'pretty' }}>
          En un esquema SaaS multiinquilino una sola instancia de la aplicación
          atiende a varias instituciones, así que el costo de infraestructura se
          reparte entre ellas.
        </p>
        <div className="mag-cost-rule">
          <span className="mag-cost-rule-num">USD 96</span>
          <span className="mag-cost-rule-op">÷</span>
          <span className="mag-cost-rule-num">10</span>
          <span className="mag-cost-rule-op">=</span>
          <span className="mag-cost-rule-num mag-cost-rule-eq">≈ USD 10</span>
          <span className="mag-cost-rule-cap">
            VPS AL AÑO · COLEGIOS · POR COLEGIO
          </span>
        </div>
      </div>

      <div className="mag-receipt">
        <div className="mag-receipt-head">
          <span>RECIBO ANUAL</span>
          <span>COLEGIO · 300 ESTUDIANTES</span>
        </div>
        <div className="mag-receipt-rows">
          {RECEIPT_ROWS.map((row, i) => (
            <div key={i} className="mag-receipt-row">
              <div className="mag-receipt-row-main">
                <span className="mag-receipt-row-label">{row.label}</span>
                <span className="mag-receipt-dots" />
                <span className="mag-receipt-row-val">{row.val}</span>
              </div>
              <span className="mag-receipt-row-note">{row.note}</span>
            </div>
          ))}
        </div>
        <div className="mag-receipt-foot">
          <div className="mag-receipt-foot-row">
            <span className="mag-receipt-foot-tag">EDUCORE</span>
            <span className="total">≈ USD 10</span>
          </div>
          <span className="mag-receipt-foot-note">
            Solo infraestructura. Soporte y mantenimiento aparte.
          </span>
        </div>
      </div>
    </section>
  );
}