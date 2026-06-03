import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Globe, Code, Cpu, Rocket } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Full Page High-Resolution Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2" 
          className="w-full h-full object-cover opacity-100"
          alt="Technical Mastery"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 30, restDelta: 0.001 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-label text-sky-600 mb-8 flex items-center gap-3 bg-white shadow-lg w-fit px-5 py-2.5 rounded-full border border-sky-100"
            >
              <span className="flex h-3 w-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_15px_rgba(251,191,36,1)]" />
              Digital Engineering Supremacy
            </motion.div>
            
            <h1 className="text-hero-xl text-slate-900 mb-8 leading-[0.85] tracking-tight font-black uppercase">
              Building <br/>
              <span className="text-sky-500">Digital</span> <br/>
              <span className="relative inline-block">
                Fortresses.
                <motion.div 
                  className="absolute -bottom-2 left-0 h-4 bg-amber-400 -z-10 opacity-60 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <p className="text-body-lg text-slate-700 mb-12 max-w-xl font-bold leading-relaxed">
              We engineer high-performance software and cloud infrastructures that empower 
              global businesses to scale with absolute confidence and elite precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="relative group overflow-hidden px-12 py-6 bg-sky-600 text-white rounded-2xl font-black text-micro uppercase tracking-widest transition-all hover:bg-sky-700 hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(14,165,233,0.5)]">
                <span className="relative z-10 flex items-center gap-3">
                  Initiate Project <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-micro uppercase tracking-widest hover:bg-slate-50 transition-all hover:border-slate-200 shadow-xl">
                Case Studies
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-32 pt-16 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100"
        >
          {[
            { label: 'Founded', value: '2004', icon: Globe, color: '#38bdf8' },
            { label: 'Engineering', value: '1.2M+', icon: Code, color: '#fbbf24' },
            { label: 'Reliability', value: '100%', icon: Cpu, color: '#818cf8' },
            { label: 'Global Rank', value: 'Vanguard', icon: Rocket, color: '#fb7185' }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="flex items-center gap-4 group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut" 
                }}
                style={{ color: stat.color }}
                className="relative drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center"
              >
                <stat.icon size={36} strokeWidth={2.5} />
              </motion.div>
              <div>
                <div className="text-3xl font-black font-outfit text-slate-900 mb-1">{stat.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
