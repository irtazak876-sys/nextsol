import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-slate-100">
        {/* Full Page High-Resolution Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1920&q=100" 
            className="w-full h-full object-cover opacity-60 brightness-50"
            alt="Corporate Tower"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950 to-slate-950/75 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/70 lg:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="py-20 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-label text-amber-400 mb-8 flex items-center gap-3 bg-white shadow-lg w-fit px-5 py-2.5 rounded-full border border-sky-100"
            >
              <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_15px_rgba(251,191,36,1)]" />
              Direct Linkage
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-hero-xl text-white mb-10 leading-[0.85] tracking-tight"
            >
              Secure <br/><span className="text-sky-400">Access.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-body-lg mb-12 max-w-xl font-medium leading-relaxed"
            >
              Our engineering terminals are operational 24/7. Initiate a secure transmission 
              to brief our division on your project requirements and strategic objectives.
            </motion.p>
          </div>
        </div>
      </div>

      <Contact />

      <div className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {['Islamabad', 'Lahore', 'Karachi', 'Dubai'].map((city, i) => (
               <motion.div 
                 key={city}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white p-10 rounded-[32px] border border-slate-200 hover:border-sky-400 transition-all group shadow-xl shadow-blue-900/5"
               >
                 <h3 className="text-card-title text-slate-900 mb-4 group-hover:text-sky-600 transition-colors uppercase font-black font-outfit">{city}</h3>
                 <p className="text-slate-500 text-body-md leading-relaxed mb-8">
                   Sector I-9/3, Tech-Park, <br/>{city}, {city === 'Dubai' ? 'UAE' : 'Pakistan'}
                 </p>
                 <div className="flex items-center gap-2 text-sky-600 font-black text-micro cursor-pointer group-hover:gap-4 transition-all uppercase tracking-widest">
                   Locate Terminal <ArrowRight size={14} />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
