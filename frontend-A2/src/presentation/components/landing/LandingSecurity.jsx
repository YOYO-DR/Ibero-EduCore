const ITEMS = [
  {
    num: '01',
    title: 'Esquema por colegio',
    desc: 'Cada institución vive en su propio esquema de PostgreSQL.',
  },
  {
    num: '02',
    title: 'Control por roles',
    desc: 'Cada usuario ve solo lo que su rol permite.',
  },
  { num: '03', title: 'Cifrado', desc: 'Datos y respaldos cifrados.' },
  {
    num: '04',
    title: 'Respaldos diarios',
    desc: 'Copias fuera del VPS y restauración probada.',
  },
];

export default function LandingSecurity() {
  return (
    <section className="a2-security a2-px" id="seguridad">
      <div className="a2-row-head">
        <div className="a2-section-head">
          <div className="a2-tag green">Seguridad</div>
          <h2 className="a2-h-sec">Datos de menores, protegidos por diseño.</h2>
        </div>
        <p className="a2-security-lede">
          Tratamiento de datos personales conforme a la Ley 1581 de 2012, con
          aislamiento lógico entre instituciones.
        </p>
      </div>

      <div className="a2-security-grid">
        {ITEMS.map((it) => (
          <div key={it.num} className="a2-security-item">
            <span className="a2-security-num">{it.num}</span>
            <span className="a2-security-title">{it.title}</span>
            <span className="a2-security-desc">{it.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
