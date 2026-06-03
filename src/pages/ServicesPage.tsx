import { motion } from 'framer-motion';
import Services from '../components/Services';
import CTA from '../components/CTA';

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Full Page High-Resolution Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&q=100" 
            className="w-full h-full object-cover opacity-60 brightness-50"
            alt="Global Technical Solutions"
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
              The Solution Suite
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-hero-xl text-white mb-10 leading-[0.85] tracking-tight"
            >
              Strategic <br/><span className="text-sky-400">Capital.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-body-lg mb-12 max-w-xl font-medium leading-relaxed"
            >
              We deploy elite technical frameworks that redefine operational efficiency. 
              Our methodologies are engineered to withstand the pressures of global 
              scale and adversarial environments.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <button className="px-12 py-6 bg-sky-600 text-white rounded-2xl font-black text-micro shadow-xl shadow-sky-600/20 hover:bg-sky-500 transition-all uppercase tracking-widest">
                The Tech Stack
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <Services />

      <div className="py-16 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1" 
                  alt="Technical Briefing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-label text-sky-600 mb-4">Strategic Advisory</div>
              <h2 className="text-5xl font-black text-slate-900 mb-6 font-outfit uppercase tracking-tight">Expert <span className="text-sky-500">Mastery.</span></h2>
              <p className="text-slate-500 text-lg mb-8 font-medium leading-relaxed">
                Navigating the complex IT landscape requires elite technical precision. Our consultants 
                deploy high-frequency strategic frameworks to ensure your architecture is 
                future-proof and cost-efficient.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Feasibility Logic', 'System Blueprint', 'Cost Optimization', 'Security Hardening'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 font-bold uppercase text-[10px] tracking-wider">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full shadow-sm" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="px-10 py-4 bg-sky-600 text-white rounded-xl font-black text-micro hover:bg-sky-700 transition-all shadow-lg active:scale-95 uppercase tracking-widest">
                Initiate Briefing
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default ServicesPage;
