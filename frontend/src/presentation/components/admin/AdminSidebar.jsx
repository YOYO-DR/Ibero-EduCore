const NAV_ITEMS = [
  { num: '01', label: 'Dashboard' },
  { num: '02', label: 'Estructura institucional' },
  { num: '03', label: 'Estudiantes / SIMAT' },
  { num: '04', label: 'Calificaciones SIEE' },
  { num: '05', label: 'Generador de boletines' },
  { num: '06', label: 'Configuración del colegio' },
];

export default function AdminSidebar({ open, onClose }) {
  return (
    <>
      <button
        type="button"
        className={`adm-side-backdrop ${open ? 'open' : ''}`}
        aria-label="Cerrar menú"
        onClick={onClose}
      />
      <aside className={`adm-side ${open ? 'open' : ''}`}>
        <div className="adm-side-brand">
          <span className="adm-logo">EduCore</span>
          <span className="adm-logo-sub">Gestión académica</span>
        </div>
        <nav className="adm-nav">
          {NAV_ITEMS.map((item, i) => (
            <div
              key={item.num}
              className={`adm-nav-item ${i === 0 ? 'active' : ''}`}
              onClick={onClose}
            >
              <span className="adm-nav-num">{item.num}</span>
              <span className="adm-nav-label">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="adm-side-foot">
          <span className="adm-schema-tag">ESQUEMA ACTIVO</span>
          <span>tenant_incodelca</span>
        </div>
      </aside>
    </>
  );
}
