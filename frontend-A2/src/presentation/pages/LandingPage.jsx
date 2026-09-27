import '@/presentation/components/landing/landing.css';
import LandingHeader from '@/presentation/components/landing/LandingHeader';
import LandingHero from '@/presentation/components/landing/LandingHero';
import LandingStatsBar from '@/presentation/components/landing/LandingStatsBar';
import LandingCosts from '@/presentation/components/landing/LandingCosts';
import LandingHowItWorks from '@/presentation/components/landing/LandingHowItWorks';
import LandingRoles from '@/presentation/components/landing/LandingRoles';
import LandingSecurity from '@/presentation/components/landing/LandingSecurity';
import LandingPilot from '@/presentation/components/landing/LandingPilot';
import LandingFooter from '@/presentation/components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <div className="a2-root">
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingStatsBar />
        <LandingCosts />
        <LandingHowItWorks />
        <LandingRoles />
        <LandingSecurity />
        <LandingPilot />
      </main>
      <LandingFooter />
    </div>
  );
}
