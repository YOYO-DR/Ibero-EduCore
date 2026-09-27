import {
  IconOrbit,
  IconChart,
  IconSchool,
  IconUsers,
  IconPencil,
  IconFile,
  IconGear,
} from './AdminIcons';

const NAV_ITEMS = [
  { label: 'Dashboard', Icon: IconChart },
  { label: 'Estructura Institucional', Icon: IconSchool },
  { label: 'Estudiantes / SIMAT', Icon: IconUsers },
  { label: 'Calificaciones SIEE', Icon: IconPencil },
  { label: 'Generador de Boletines', Icon: IconFile },
  { label: 'Configuración Tenant', Icon: IconGear },
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
          <span className="adm-logo-mark">
            <IconOrbit size={18} />
          </span>
          <span className="adm-logo">EduCore</span>
        </div>

        

        <nav className="adm-nav">
          {NAV_ITEMS.map(({ label, Icon }, i) => (
            <button
              key={label}
              type="button"
              className={`adm-nav-item ${i === 0 ? 'active' : ''}`}
              onClick={onClose}
            >
              <span className="adm-nav-icon">
                <Icon />
              </span>
              <span className="adm-nav-label">{label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
