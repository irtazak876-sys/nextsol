import { motion } from 'framer-motion';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

const BlogPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-slate-100">
        {/* Full Page Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80" 
            className="w-full h-full object-cover opacity-60 brightness-50 grayscale-[20%]"
            alt="Strategic Insights"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950 to-slate-950/75 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/70 lg:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="py-20 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-label text-amber-400 mb-8 flex items-center gap-2 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Intellectual Capital
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-hero-xl text-white mb-10 leading-[0.85]"
            >
              Digital <br/><span className="text-sky-500">Frontier.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-body-lg mb-12 max-w-xl font-medium"
            >
              Access proprietary market intelligence, technical frameworks, and 
              leadership strategies defining the future of digital engineering.
            </motion.p>
          </div>
        </div>
      </div>

      <Blog />
      <CTA />
    </div>
  );
};

export default BlogPage;
