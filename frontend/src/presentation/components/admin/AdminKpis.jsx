export default function AdminKpis() {
  return (
    <div className="adm-kpis">
      <div className="adm-kpi">
        <span className="adm-kpi-label">CURSOS ASIGNADOS</span>
        <span className="adm-kpi-value">4</span>
        <span className="adm-kpi-note">Grados 1001 · 1002 · 1101 · 1102</span>
      </div>
      <div className="adm-kpi">
        <span className="adm-kpi-label">ESTUDIANTES TOTALES</span>
        <span className="adm-kpi-value">118</span>
        <span className="adm-kpi-note">Matriculados activos en SIMAT</span>
      </div>
      <div className="adm-kpi dark">
        <span className="adm-kpi-label">ESTADO DE CALIFICACIONES</span>
        <div className="adm-kpi-row">
          <span className="adm-kpi-pct">75%</span>
          <span className="adm-kpi-badge">COMPLETADO</span>
        </div>
        <div className="adm-progress">
          <div className="adm-progress-bar" style={{ width: '75%' }} />
        </div>
        <span className="adm-kpi-note">Carga de notas del periodo 3</span>
      </div>
    </div>
  );
}
