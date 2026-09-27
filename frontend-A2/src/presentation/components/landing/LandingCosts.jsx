const BARS = [
  {
    name: 'Plataforma B',
    value: '≈ USD 680',
    width: '100%',
    note: '≈ USD 340 por semestre',
  },
  {
    name: 'Plataforma A',
    value: '≈ $600.000 COP',
    width: '22%',
    note: '$2.000 COP por estudiante al año, plan básico',
  },
  {
    name: 'Servidor propio',
    value: 'inversión alta',
    hatched: true,
    note: 'Equipo, energía y soporte técnico local',
  },
];

export default function LandingCosts() {
  return (
    <section className="a2-costos a2-px" id="costos">
      <div className="a2-costos-left">
        <div className="a2-tag">
          Costo anual · colegio de 300 estudiantes
        </div>
        <h2 className="a2-h-sec">
          Diez colegios comparten un servidor. Cada uno paga una décima parte.
        </h2>
        <p className="a2-lede">
          En un esquema SaaS multiinquilino una sola instancia de la aplicación
          atiende a varias instituciones, así que el costo de infraestructura se
          reparte entre ellas.
        </p>
      </div>

      <div className="a2-bars">
        {BARS.map((b) => (
          <div key={b.name} className="a2-bar-group">
            <div className="a2-bar-head">
              <span className="a2-bar-name">{b.name}</span>
              <span className="a2-bar-val">{b.value}</span>
            </div>
            <div className={`a2-bar-track ${b.hatched ? 'hatched' : ''}`}>
              {b.width && <div className="a2-bar-fill" style={{ width: b.width }} />}
            </div>
            <span className="a2-bar-note">{b.note}</span>
          </div>
        ))}

        <div className="a2-bar-group hl">
          <div className="a2-bar-head">
            <span className="a2-bar-name">EduCore</span>
            <span className="a2-bar-val">≈ USD 10</span>
          </div>
          <div className="a2-bar-track">
            <div className="a2-bar-fill blue" style={{ width: '1.5%' }} />
          </div>
          <span className="a2-bar-note">
            VPS compartido de ≈ USD 96 al año entre 10 colegios. Solo
            infraestructura.
          </span>
        </div>
      </div>
    </section>
  );
}
