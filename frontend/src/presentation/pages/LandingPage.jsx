import '@/presentation/components/landing/landing.css';
import LandingHeader from '@/presentation/components/landing/LandingHeader';
import LandingHero from '@/presentation/components/landing/LandingHero';
import LandingStatBand from '@/presentation/components/landing/LandingStatBand';
import LandingProblemTree from '@/presentation/components/landing/LandingProblemTree';
import LandingHowItWorks from '@/presentation/components/landing/LandingHowItWorks';
import LandingCostSplit from '@/presentation/components/landing/LandingCostSplit';
import LandingSecurity from '@/presentation/components/landing/LandingSecurity';
import LandingPilot from '@/presentation/components/landing/LandingPilot';
import LandingFAQ from '@/presentation/components/landing/LandingFAQ';
import LandingFinalCTA from '@/presentation/components/landing/LandingFinalCTA';
import LandingFooter from '@/presentation/components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <div className="mag-root">
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingStatBand />
        <LandingProblemTree />
        <LandingHowItWorks />
        <LandingCostSplit />
        <LandingSecurity />
        <LandingPilot />
        <LandingFAQ />
        <LandingFinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
}