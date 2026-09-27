import { Link } from 'react-router-dom';
import { routePaths } from '@/routes/routePaths';

export default function LandingPilot() {
  return (
    <section className="a2-pilot a2-px">
      <div className="a2-tag green">Colegio piloto</div>
      <h2 className="a2-h-sec">
        Construido sprint a sprint con la I.E. INCODELCA, en Corinto, Cauca.
      </h2>
      <p className="a2-pilot-lede">
        Sprints de dos semanas y una revisión con el colegio al final de cada
        uno, porque las reglas de evaluación de cada institución solo se
        precisan con el uso real.
      </p>
      <Link to={routePaths.login.path} className="a2-btn a2-btn-lg a2-pilot-cta">
        Sumar mi colegio
      </Link>
    </section>
  );
}
