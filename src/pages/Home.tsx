import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Features from '../components/Features';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <TechStack />
      <Features />
      <Process />
      <Portfolio />
      <Testimonials />
      <Blog />
      <CTA />
    </div>
  );
};

export default Home;
