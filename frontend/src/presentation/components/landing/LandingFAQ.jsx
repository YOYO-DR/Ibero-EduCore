const FAQS = [
  {
    q: '¿Funciona con Internet lento?',
    a: 'Es una aplicación web progresiva (React PWA), liviana para conexiones lentas.',
  },
  {
    q: '¿Cumple la Ley 1581 de 2012?',
    a: 'Sí. Los datos de cada colegio están aislados en su propio esquema, cifrados y con acceso por rol.',
  },
  {
    q: '¿Tengo que digitar de nuevo a los estudiantes?',
    a: 'No. Se importan desde el archivo CSV del SIMAT.',
  },
  {
    q: '¿Qué incluye el costo de ≈ USD 10?',
    a: 'Solo la infraestructura compartida. El soporte y el mantenimiento se cuentan aparte.',
  },
];

export default function LandingFAQ() {
  return (
    <div className="mag-faq-wrap">
      <span className="mag-chapter-tag">PREGUNTAS</span>
      <div className="mag-faq">
        {FAQS.map((faq, i) => (
          <div key={i} className="mag-faq-q">
            <span className="mag-faq-q-text">{faq.q}</span>
            <span className="mag-faq-a">{faq.a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}