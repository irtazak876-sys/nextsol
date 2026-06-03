import { motion } from 'framer-motion';
import { Users, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Elite Engineering Core',
    desc: 'Our specialists represent the top 1% of technical talent, bringing decades of experience in distributed systems and high-frequency cloud architecture.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Senior-level mastery in Rust, Go, and low-latency systems.',
      'Specialized in high-load distributed consensus architectures.',
      'Continuous focus on radical system maintainability.'
    ]
  },
  {
    icon: Zap,
    title: 'High-Velocity Sprints',
    desc: 'We utilize an accelerated agile methodology that prioritizes rapid iteration without sacrificing code integrity or architectural quality.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Atomic deployment pipelines for real-time validation.',
      'Automated property-based testing for zero-regression.',
      'AI-augmented monitoring of mission-critical workflows.'
    ]
  },
  {
    icon: Shield,
    title: 'Zero-Trust Sovereignty',
    desc: 'Security is a foundational law at NextSol. We build with a zero-trust mindset, ensuring your enterprise data remains absolutely impenetrable.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Quantum-ready encryption for data at rest and in transit.',
      'Continuous automated red-team security simulations.',
      'Full compliance-first infrastructure for global standards.'
    ]
  }
];

const Features = () => {
  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-label text-sky-600 mb-4 flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
            Capabilities Spectrum
          </motion.div>
          <h2 className="text-section-h2 text-slate-900 uppercase">
            Forging the <br/><span className="text-sky-500">Unbreakable.</span>
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-40">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              <div className="flex-1">
                <div className="w-20 h-20 bg-white border border-slate-100 rounded-[24px] flex items-center justify-center text-sky-600 mb-10 shadow-2xl relative group/icon overflow-hidden">
                  <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover/icon:opacity-100 transition-all duration-300" />
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="relative z-10 group-hover/icon:text-white transition-colors"
                  >
                    <feature.icon size={36} strokeWidth={2} />
                  </motion.div>
                </div>
                <h3 className="text-section-h3 text-slate-900 mb-6 tracking-tight leading-tight uppercase font-black">{feature.title}</h3>
                <p className="text-slate-500 text-body-lg mb-10 font-medium">
                  {feature.desc}
                </p>
                <ul className="space-y-5">
                  {feature.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-4 text-slate-600 font-medium text-body-md leading-relaxed">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="relative group rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 pointer-events-none" />
                   <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
