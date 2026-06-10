import AmbientBackground from '@/components/AmbientBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LiveStats from '@/components/LiveStats';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import Workflow from '@/components/Workflow';
import AIAgents from '@/components/AIAgents';
import CustomerStory from '@/components/CustomerStory';
import Stats from '@/components/Stats';
import GlobalOperations from '@/components/GlobalOperations';
import Integrations from '@/components/Integrations';
import PricingCTA from '@/components/PricingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative z-10">
      <AmbientBackground />
      <Navigation />
      <Hero />
      <LiveStats />
      <SocialProof />
      <Features />
      <Workflow />
      <AIAgents />
      <CustomerStory />
      <Stats />
      <GlobalOperations />
      <Integrations />
      <PricingCTA />
      <Footer />
    </div>
  );
}
