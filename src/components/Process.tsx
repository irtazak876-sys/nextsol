import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Immersion',
    desc: 'We embed with your stakeholders to internalize your long-term strategic vision.'
  },
  {
    number: '02',
    title: 'Architecture',
    desc: 'Crafting the blueprint for a system that scales beyond immediate requirements.'
  },
  {
    number: '03',
    title: 'Sprint Logic',
    desc: 'Rapid execution cycles powered by high-end engineering and rigorous QA.'
  },
  {
    number: '04',
    title: 'Scale Velocity',
    desc: 'Seamless deployment followed by data-driven performance optimizations.'
  }
];

const Process = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-label text-sky-600 mb-6 flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            The Methodology
          </motion.div>
          <h2 className="text-section-h2 text-slate-900 font-outfit leading-[0.95] tracking-tight font-black uppercase">Execution <br/><span className="text-sky-500">Paradigm.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="relative px-8 group pb-12 md:pb-0"
            >
              <div className="flex flex-col items-center md:items-start">
                <div className="w-[120px] h-[120px] rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-section-h2 text-sky-600 mb-8 relative z-10 group-hover:scale-110 transition-transform group-hover:shadow-xl group-hover:border-amber-400 group-hover:text-amber-500">
                  {step.number}
                  <div className="absolute inset-2 rounded-full border border-sky-500/10 animate-spin-slow" />
                </div>
                <h3 className="text-section-h3 text-slate-900 mb-4 uppercase font-black text-center md:text-left">{step.title}</h3>
                <p className="text-slate-500 text-body-md text-center md:text-left font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
