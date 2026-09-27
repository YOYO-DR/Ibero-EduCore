import { Link } from 'react-router-dom';
import { routePaths } from '@/routes/routePaths';

export default function LandingHero() {
  return (
    <section className="a2-hero a2-px">
      <div className="a2-eyebrow">
        Gestión académica para colegios oficiales pequeños
      </div>
      <h1 className="a2-hero-h1">
        Del Excel al boletín,{' '}
        <span className="a2-hero-accent">sin pagar por estudiante.</span>
      </h1>
      <p className="a2-hero-lede">
        EduCore reúne la estructura académica, los docentes, los estudiantes y
        las calificaciones de cada periodo en una sola plataforma, pensada para
        el presupuesto de un colegio público.
      </p>
      <div className="a2-hero-ctas">
        <Link to={routePaths.login.path} className="a2-btn-light">
          Crear mi colegio
        </Link>
        <button
          type="button"
          className="a2-btn-link"
          onClick={() =>
            document
              .getElementById('costos')
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        >
          Ver comparación de costos →
        </button>
      </div>
    </section>
  );
}
