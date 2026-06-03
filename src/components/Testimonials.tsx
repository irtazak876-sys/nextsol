import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Ahmed',
    role: 'CEO, TechFlow Solutions',
    content: 'NextSol didn’t just rebuild our platform; they redefined our business model through technical excellence. The ROI was immediate.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Robert Miller',
    role: 'Chief Architect, GlobalRetail',
    content: 'Their engineering precision is unparalleled. They handled a 500% spike in traffic without a single millisecond of lag.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Dr. Faisal Khan',
    role: 'Director, HealthPlus IT',
    content: 'Highly reliable and future-focused. NextSol is the only partner we trust with our mission-critical healthcare infrastructure.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-label text-sky-600 mb-6 flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Voices of Validation
          </motion.div>
          <h2 className="text-section-h2 text-slate-900 font-outfit leading-[0.95] tracking-tight font-black uppercase">The Client <br/><span className="text-sky-500">Perspective.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-[32px] bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 transition-all overflow-hidden shadow-xl shadow-blue-900/5"
            >
              <Quote className="absolute -top-4 -right-4 text-slate-100 w-32 h-32 rotate-12" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.3)]" />
                  ))}
                </div>
                
                <p className="text-slate-600 text-body-lg mb-12 italic">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-sky-500 transition-colors shadow-lg">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-card-title text-slate-900 tracking-tight font-outfit font-black uppercase">{t.name}</div>
                    <div className="text-micro font-black text-slate-400 uppercase">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
