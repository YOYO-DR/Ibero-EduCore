import { Link } from 'react-router-dom';
import { routePaths } from '@/routes/routePaths';

export default function LandingFinalCTA() {
  return (
    <section className="mag-final-cta" id="final-cta">
      <h2 className="h-cta">Sume su colegio al servidor compartido.</h2>
      <div className="mag-final-ctas">
        <Link to={routePaths.login.path} className="mag-cta-paper">
          Crear mi colegio
        </Link>
        <button className="mag-cta-line" type="button">
          Hablar con el equipo
        </button>
      </div>
    </section>
  );
}