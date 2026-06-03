import { motion } from 'framer-motion';
import About from '../components/About';
import Team from '../components/Team';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Full Page High-Resolution Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&q=100" 
            className="w-full h-full object-cover opacity-60 brightness-50"
            alt="Corporate Identity"
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
              Strategic Narrative
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-hero-xl text-white mb-10 leading-[0.85] tracking-tight"
            >
              Identity <br/><span className="text-sky-400">Genesis.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-body-lg mb-12 max-w-xl font-medium leading-relaxed"
            >
              Established in 2004, NextSol serves as the premier engineering division 
              for high-frequency global enterprises. We don't just build; we architect 
              digital legacies with surgical precision and artistic vision.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <button className="px-12 py-6 bg-sky-600 text-white rounded-2xl font-black text-micro shadow-xl shadow-sky-600/20 hover:bg-sky-500 transition-all uppercase tracking-widest">
                The Vanguard Team
              </button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
             <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&dpr=2" 
              className="rounded-[48px] shadow-2xl border-[10px] border-white"
              alt="Office"
            />
          </motion.div>
        </div>
      </div>
      
      <About />
      <Team />
      
      <div className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { label: 'Projects Completed', value: '150+' },
              { label: 'Years Experience', value: '20+' },
              { label: 'Tech Experts', value: '50+' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-section-h2 text-slate-900 mb-4 group-hover:text-sky-500 transition-colors font-outfit font-black">{stat.value}</div>
                <div className="text-label text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default AboutPage;
