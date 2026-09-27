const STEPS = [
  {
    title: 'Crear el colegio',
    desc: 'Subdominio, año lectivo, periodos y escala del SIEE.',
  },
  {
    title: 'Configurar la estructura',
    desc: 'Sedes, zonas, jornadas, áreas, asignaturas y cursos.',
  },
  {
    title: 'Registrar personas',
    desc: 'Docentes, coordinadores y estudiantes; CSV del SIMAT.',
  },
  {
    title: 'Cargar notas',
    desc: 'Por asignatura y periodo, con valoración automática.',
  },
  {
    title: 'Generar el boletín',
    desc: 'PDF por estudiante y consolidados por sede y zona.',
  },
];

export default function LandingHowItWorks() {
  return (
    <section className="a2-how a2-px" id="como-funciona">
      <div className="a2-section-head">
        <div className="a2-tag">Cómo funciona</div>
        <h2 className="a2-h-sec">
          Un colegio nuevo, configurado en cinco pasos.
        </h2>
      </div>

      <div className="a2-steps">
        {STEPS.map((step, i) => {
          const isLast = i === STEPS.length - 1;
          return (
            <div key={step.title} className="a2-step">
              <div className="a2-step-top">
                <span
                  className={`a2-step-num ${isLast ? 'done' : i === 0 ? '' : 'outline'}`}
                >
                  {i + 1}
                </span>
                {!isLast && <span className="a2-step-line" />}
              </div>
              <span className="a2-step-title">{step.title}</span>
              <span className="a2-step-desc">{step.desc}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
