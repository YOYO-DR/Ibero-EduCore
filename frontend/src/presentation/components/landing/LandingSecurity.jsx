const SECURITY_ITEMS = [
  { title: 'Esquema por colegio', desc: 'Cada institución vive en su propio esquema de PostgreSQL.' },
  { title: 'Control por roles', desc: 'Cada usuario ve solo lo que su rol permite.' },
  { title: 'Cifrado', desc: 'Datos y respaldos cifrados.' },
  { title: 'Respaldos diarios', desc: 'Copias fuera del VPS y restauración probada.' },
];

export default function LandingSecurity() {
  return (
    <section className="mag-security" id="seguridad">
      <div className="mag-security-head">
        <span className="mag-security-eyebrow">CAPÍTULO 04</span>
        <h2 className="h-sec" style={{ color: '#F1F5F9' }}>
          Datos de menores, protegidos por diseño.
        </h2>
        <p className="mag-security-text">
          Tratamiento de datos personales conforme a la Ley 1581 de 2012, con
          aislamiento lógico entre instituciones.
        </p>
        <div className="mag-security-grid">
          {SECURITY_ITEMS.map((item, i) => (
            <div key={i} className="mag-security-item">
              <span className="mag-security-item-title">{item.title}</span>
              <span className="mag-security-item-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mag-arch">
        <div className="mag-arch-head">
          <span>VPS · USD 5–8 / MES</span>
          <span>1 INSTANCIA</span>
        </div>
        <div className="mag-arch-tenants">
          <span className="mag-arch-tenant active">incodelca.educore</span>
          <span className="mag-arch-tenant">colegio-b.educore</span>
          <span className="mag-arch-tenant">colegio-n.educore</span>
        </div>
        <div className="mag-arch-arrow">↓</div>
        <div className="mag-arch-row">
          <span>Traefik</span>
          <span className="mag-arch-row-mute">TLS · subdominios</span>
        </div>
        <div className="mag-arch-row">
          <span>Django + DRF</span>
          <span className="mag-arch-row-mute">django-tenants</span>
        </div>
        <div className="mag-arch-arrow">↓</div>
        <div className="mag-arch-db">
          <span>PostgreSQL compartido</span>
          <div className="mag-arch-schemas">
            <span className="mag-arch-schema">schema: incodelca</span>
            <span className="mag-arch-schema empty">schema: colegio_b</span>
            <span className="mag-arch-schema empty">schema: colegio_n</span>
          </div>
        </div>
      </div>
    </section>
  );
}