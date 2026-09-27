const STEPS = [
  { title: 'Crear el colegio', desc: 'Subdominio, año lectivo, periodos y escala del SIEE.' },
  { title: 'Configurar la estructura', desc: 'Sedes, zonas, jornadas, áreas, asignaturas y cursos.' },
  { title: 'Registrar personas', desc: 'Docentes, coordinadores y estudiantes; importación CSV desde el SIMAT.' },
  { title: 'Cargar notas', desc: 'Por asignatura y periodo, con valoración automática según la escala del SIEE.' },
  { title: 'Generar el boletín', desc: 'PDF por estudiante y consolidados por curso, área, sede y zona.' },
];

const ROLES = [
  { title: 'Rector', desc: 'Configura la institución, los usuarios y la escala de valoración.' },
  { title: 'Coordinador', desc: 'Hace seguimiento por sede o área y revisa los consolidados.' },
  { title: 'Docente', desc: 'Registra las notas de sus asignaturas y cursos asignados.' },
  { title: 'Secretaría', desc: 'Gestiona la matrícula y emite los boletines del periodo.' },
];

export default function LandingHowItWorks() {
  return (
    <div className="mag-chapter" id="como-funciona">
      <span className="mag-chapter-tag">CAPÍTULO 02</span>
      <div className="mag-chapter-body">
        <h2 className="h-sec">Un colegio nuevo, configurado en cinco pasos.</h2>
        <div className="mag-steps">
          {STEPS.map((step, i) => (
            <div key={i} className="mag-step">
              <span className={`mag-step-num ${i === STEPS.length - 1 ? 'last' : ''}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="mag-step-title">{step.title}</span>
              <span className="mag-step-desc">{step.desc}</span>
            </div>
          ))}
        </div>
        <div>
          <span
            className="mag-eyebrow"
            style={{ marginBottom: 24, display: 'block' }}
          >
            QUIÉN HACE QUÉ
          </span>
          <div className="mag-roles">
            {ROLES.map((role, i) => (
              <div key={i} className="mag-role">
                <span className="mag-role-title">{role.title}</span>
                <span className="mag-role-desc">{role.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}