import { IconBook, IconUsers, IconClock } from './AdminIcons';

const KPIS = [
  {
    label: 'Cursos Asignados',
    value: '4',
    note: 'Grados: 1001, 1002, 1101, 1102',
    Icon: IconBook,
  },
  {
    label: 'Estudiantes Totales',
    value: '118',
    note: 'Estudiantes matriculados activos en SIMAT',
    Icon: IconUsers,
  },
];

export default function AdminKpis() {
  return (
    <div className="adm-kpis">
      {KPIS.map(({ label, value, note, Icon }) => (
        <div key={label} className="adm-kpi">
          <div className="adm-kpi-head">
            <span className="adm-kpi-label">{label}</span>
            <span className="adm-kpi-icon">
              <Icon size={20} />
            </span>
          </div>
          <span className="adm-kpi-value">{value}</span>
          <span className="adm-kpi-note">{note}</span>
        </div>
      ))}

      <div className="adm-kpi">
        <div className="adm-kpi-head">
          <span className="adm-kpi-label">Estado de Calificaciones</span>
          <span className="adm-kpi-icon">
            <IconClock size={20} />
          </span>
        </div>
        <div className="adm-kpi-row">
          <span className="adm-kpi-value">75%</span>
          <span className="adm-kpi-badge">Completado</span>
        </div>
        <span className="adm-kpi-note">Carga de notas Periodo 3 finalizada</span>
      </div>
    </div>
  );
}
