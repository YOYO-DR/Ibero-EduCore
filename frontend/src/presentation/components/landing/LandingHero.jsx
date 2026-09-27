import { Link } from 'react-router-dom';
import { routePaths } from '@/routes/routePaths';

export default function LandingHero() {
  function scrollToCostos() {
    const el = document.getElementById('costos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="mag-hero">
      <div className="mag-eyebrow">
        Para colegios oficiales pequeños · Conforme al Decreto 1290 de 2009
      </div>
      <h1 className="h-hero">
        Del Excel al boletín,{' '}
        <em className="mag-italic">sin pagar por estudiante.</em>
      </h1>
      <div className="mag-hero-row">
        <p className="mag-lede">
          EduCore reúne la estructura académica, los docentes, los estudiantes y
          las calificaciones de cada periodo en una sola plataforma, pensada para
          el presupuesto de un colegio público.
        </p>
        <div className="mag-hero-ctas">
          <Link to={routePaths.login.path} className="mag-cta-lg">
            Crear mi colegio
          </Link>
          <button className="mag-cta-outline" onClick={scrollToCostos}>
            Ver comparación de costos
          </button>
        </div>
      </div>
    </section>
  );
}