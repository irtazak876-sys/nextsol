import { motion } from 'framer-motion';
import CTA from '../components/CTA';

const CareersPage = () => {
  const positions = [
    { title: 'Principal Rust Engineer', location: 'Remote / Islamabad', type: 'Full-time' },
    { title: 'Lead AI Infrastructure Architect', location: 'Dubai / Remote', type: 'Full-time' },
    { title: 'Senior Distributed Systems Dev', location: 'London / Remote', type: 'Contract' },
    { title: 'Cybersecurity Red-Team Lead', location: 'Islamabad / Remote', type: 'Full-time' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-slate-100">
        {/* Full Page High-Resolution Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&q=100" 
            className="w-full h-full object-cover opacity-60 brightness-50"
            alt="Work Culture"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="py-20 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-label text-amber-400 mb-8 flex items-center gap-3 bg-white/5 w-fit px-5 py-2.5 rounded-full border border-white/10"
            >
              <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_15px_rgba(251,191,36,1)]" />
              The Vanguard Division
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-hero-xl text-white mb-10 leading-[0.85] tracking-tight"
            >
              Join the <br/><span className="text-sky-400">Elite.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-body-lg mb-12 max-w-xl font-medium leading-relaxed"
            >
              We are currently seeking the top 1% of technical talent to lead 
              next-generation infrastructure projects. Work at the edge of possibility.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-24">
             <div className="text-label text-sky-600 mb-4 uppercase">Open Terminals</div>
             <h2 className="text-section-h2 text-slate-900 font-black font-outfit uppercase tracking-tight">Active Opportunities</h2>
           </div>

           <div className="space-y-6 max-w-4xl mx-auto">
             {positions.map((pos, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="group bg-white border border-slate-200 p-10 rounded-[32px] flex flex-col md:flex-row justify-between items-center hover:border-sky-400 transition-all cursor-pointer shadow-xl shadow-blue-900/5"
               >
                 <div className="mb-6 md:mb-0">
                   <h3 className="text-2xl font-black font-outfit text-slate-900 mb-2 uppercase group-hover:text-sky-600 transition-colors">{pos.title}</h3>
                   <div className="flex gap-4 text-micro text-slate-400">
                     <span>{pos.location}</span>
                     <span className="text-sky-500">•</span>
                     <span>{pos.type}</span>
                   </div>
                 </div>
                 <button className="px-10 py-4 bg-sky-50 border border-sky-100 text-sky-600 rounded-2xl font-black text-micro hover:bg-sky-600 hover:text-white transition-all uppercase tracking-widest">
                   Apply Link
                 </button>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default CareersPage;
