const STATS = [
  {
    value: '$2.000–9.900',
    tone: 'amber',
    text: 'COP por estudiante al año cobran las plataformas comerciales, pensadas para colegios privados.',
  },
  {
    value: 'SIMAT',
    tone: 'purple',
    text: 'cubre la matrícula oficial, pero no la asignación docente, las notas ni los boletines.',
  },
  {
    value: '69,4 %',
    tone: 'red',
    text: 'de las sedes educativas rurales del país carece de acceso a Internet.',
  },
];

export default function LandingStatsBar() {
  return (
    <section className="a2-stats" id="problema">
      {STATS.map((s) => (
        <div key={s.value} className="a2-stat">
          <span className={`a2-stat-value ${s.tone}`}>{s.value}</span>
          <span className="a2-stat-text">{s.text}</span>
        </div>
      ))}
    </section>
  );
}
