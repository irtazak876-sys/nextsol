import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="text-label text-sky-600 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Our DNA
            </div>
            <h2 className="text-section-h2 text-slate-900 leading-[0.95] mb-10 font-black">
              Engineering <br/><span className="text-sky-500">Exclusivity.</span>
            </h2>
            <div className="space-y-8 max-w-2xl">
              <p className="text-slate-600 text-body-lg">
                At NextSol, we don't just write code; we architect the digital future. Since 2004, we've been the silent engine behind high-growth global enterprises.
              </p>
              <p className="text-slate-400 text-body-md leading-relaxed font-medium">
                Our philosophy is simple: Exclusivity. We take on a limited number of high-stakes projects per year to ensure every line of code is a masterpiece. From military-grade security systems to global retail backends, we build what others find impossible.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-slate-900 font-black text-4xl font-outfit mb-2">20+</div>
                <div className="text-label text-slate-400">Years of Dominance</div>
              </div>
              <div>
                <div className="text-slate-900 font-black text-4xl font-outfit mb-2">99.9%</div>
                <div className="text-label text-slate-400">Success Reliability</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl shadow-blue-500/10">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
                alt="Architecture" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent mix-blend-overlay" />
            </div>
            {/* Immersive Floating Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[100px] opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-600 rounded-full blur-[120px] opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
