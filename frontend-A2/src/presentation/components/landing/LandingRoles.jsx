const ROLES = [
  {
    tag: 'RECTOR · ADMIN',
    tone: 'purple',
    desc: 'Configura la institución, los usuarios y la escala de valoración.',
  },
  {
    tag: 'COORDINADOR',
    tone: 'amber',
    desc: 'Hace seguimiento por sede o área y revisa los consolidados.',
  },
  {
    tag: 'DOCENTE',
    tone: 'blue',
    desc: 'Registra las notas de sus asignaturas y cursos asignados.',
  },
  {
    tag: 'SECRETARÍA',
    tone: 'green',
    desc: 'Gestiona la matrícula y emite los boletines del periodo.',
  },
];

export default function LandingRoles() {
  return (
    <section className="a2-roles a2-px" id="roles">
      <div className="a2-row-head">
        <h2 className="a2-h-sec">Cada rol ve lo que necesita.</h2>
        <span className="a2-row-note">Permisos por rol en cada colegio</span>
      </div>

      <div className="a2-role-grid">
        {ROLES.map((r) => (
          <div key={r.tag} className="a2-role">
            <span className={`a2-role-tag ${r.tone}`}>{r.tag}</span>
            <span className="a2-role-desc">{r.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
