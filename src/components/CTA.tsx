import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-600 rounded-[32px] sm:rounded-[64px] p-8 sm:p-16 md:p-32 text-center overflow-hidden relative shadow-2xl shadow-sky-600/20">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 blur-[80px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-400/20 blur-[80px] rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto"
          >
             <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white font-black tracking-widest text-micro uppercase mb-10 bg-white/10 w-fit mx-auto px-4 py-2 rounded-full border border-white/20"
            >
              The Next Evolution
            </motion.div>
            
            <h2 className="text-3xl sm:text-5xl md:text-[80px] font-black font-outfit text-white mb-12 leading-[0.92] tracking-tight uppercase">
              Ready to Own the <br/><span className="text-amber-400">Digital Realm?</span>
            </h2>
            
            <p className="text-sky-50 text-lg sm:text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
              We are currently selecting only two more high-impact projects for the upcoming quarter. Secure your technical partnership today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-6 bg-white text-sky-600 rounded-[24px] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10 flex items-center justify-center gap-3 group">
                Initiate Project
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-12 py-6 bg-sky-800 text-white border border-white/10 rounded-[24px] font-black text-xl hover:bg-sky-900 transition-all flex items-center justify-center shadow-xl">
                Review Our Deck
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
