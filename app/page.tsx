import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Approach from '@/components/Approach';
import Services from '@/components/Services';
import Pillars from '@/components/Pillars';
import Conditions from '@/components/Conditions';
import HowItWorks from '@/components/HowItWorks';
import WhyDifferent from '@/components/WhyDifferent';
import FamilyPartnership from '@/components/FamilyPartnership';
import Founder from '@/components/Founder';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWA from '@/components/FloatingWA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Services />
        <Pillars />
        <Conditions />
        <HowItWorks />
        <WhyDifferent />
        <FamilyPartnership />
        <Founder />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
