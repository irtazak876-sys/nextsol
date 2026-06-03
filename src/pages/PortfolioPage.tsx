import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

const PortfolioPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-slate-100">
        {/* Full Page High-Resolution Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&q=100" 
            className="w-full h-full object-cover opacity-60 brightness-50"
            alt="Work Showcase"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950 to-slate-950/75 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/70 lg:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="py-20 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-label text-amber-400 mb-8 flex items-center gap-3 bg-white/5 w-fit px-5 py-2.5 rounded-full border border-white/10"
            >
              <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_15px_rgba(251,191,36,1)]" />
              Selected Masterpieces
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-hero-xl text-white mb-10 leading-[0.85] tracking-tight"
            >
              Proven <br/><span className="text-sky-400">Impact.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-body-lg mb-12 max-w-xl font-medium leading-relaxed"
            >
              Explore our portfolio of high-stakes digital transformations. We solve 
              the most complex technical challenges for global industry leaders.
            </motion.p>
          </div>
        </div>
      </div>

      <Portfolio />
      <CTA />
    </div>
  );
};

export default PortfolioPage;
