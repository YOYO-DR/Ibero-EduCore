export default function LandingProblemTree() {
  return (
    <div className="mag-chapter" id="problema">
      <span className="mag-chapter-tag">CAPÍTULO 01</span>
      <div className="mag-chapter-body" style={{ gap: 56 }}>
        <h2 className="h-sec">
          Los colegios oficiales pequeños quedan entre dos sistemas que no les
          sirven.
        </h2>
        <div className="mag-tree">
          <div className="mag-tree-col">
            <span className="mag-tree-tag">CAUSAS</span>
            <div className="mag-tree-list">
              <span className="mag-tree-list-item">
                Las plataformas comerciales cobran{' '}
                <b className="mag-tree-mono">$2.000–9.900 COP</b> por estudiante
                al año, con precios pensados para colegios privados.
              </span>
              <span className="mag-tree-list-item">
                El SIMAT cubre la matrícula oficial, pero no la asignación
                docente, las notas ni los boletines.
              </span>
              <span className="mag-tree-list-item">
                Un servidor propio exige equipo, energía y soporte técnico
                local.
              </span>
            </div>
          </div>
          <div className="mag-tree-col mag-tree-mid">
            <span className="mag-tree-tag mag-tree-mid-tag">PROBLEMA</span>
            <span className="mag-tree-mid-text">
              Notas, carga académica y boletines se siguen gestionando en papel
              u hojas de Excel.
            </span>
          </div>
          <div className="mag-tree-col">
            <span className="mag-tree-tag">EFECTOS</span>
            <div className="mag-tree-list">
              <span className="mag-tree-list-item">
                Doble digitación de los estudiantes.
              </span>
              <span className="mag-tree-list-item">
                Boletines que llegan tarde.
              </span>
              <span className="mag-tree-list-item">
                Sin seguimiento por sede ni por zona urbana o rural.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}