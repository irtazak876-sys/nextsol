import { motion } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  Database, 
  ShieldCheck, 
  Settings,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: 'Digital Engineering',
    desc: 'Forging high-performance ecosystems with React, Node.js, and Distributed Architectures.',
    icon: Monitor,
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Intelligent Mobile',
    desc: 'Creating fluid, native experiences for iOS and Android that redefine user interaction.',
    icon: Smartphone,
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    title: 'Enterprise ERP',
    desc: 'Custom-built nerve centers for massive operations, integrating AI-driven analytics.',
    icon: Briefcase,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Cloud Sovereignty',
    desc: 'Tier-4 infrastructure and hybrid cloud solutions designed for zero-downtime reliability.',
    icon: Database,
    gradient: 'from-pink-600 to-rose-600'
  },
  {
    title: 'Next-Gen Security',
    desc: 'Military-grade encryption and real-time surveillance for the modern age.',
    icon: ShieldCheck,
    gradient: 'from-rose-600 to-orange-600'
  },
  {
    title: 'Hyper-Automation',
    desc: 'Automating the repetitive to unleash human creativity through advanced AI workflows.',
    icon: Settings,
    gradient: 'from-orange-600 to-amber-600'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-label text-sky-600 mb-4 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
              Capability Spectrum
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section-h2 text-slate-900 font-outfit leading-[0.95] tracking-tight font-black uppercase"
            >
              Technical <br/> <span className="text-sky-500">Mastery.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-body-lg max-w-sm mb-2 font-medium"
          >
            We don't just build software; we engineer competitive advantages that dominate global markets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-slate-100 p-6 sm:p-10 rounded-[32px] hover:shadow-[0_40px_80px_-20px_rgba(14,165,233,0.15)] transition-all overflow-hidden"
            >
              <div className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.gradient} text-white shadow-2xl relative`}>
                 <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <service.icon size={32} strokeWidth={2} />
                </motion.div>
                <div className="absolute inset-0 bg-white opacity-20 blur-2xl rounded-full scale-50 group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <h3 className="text-card-title text-slate-900 mb-4 font-outfit uppercase font-black group-hover:text-sky-600 transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-body-md mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="flex items-center gap-2 text-sky-600 font-black text-micro group-hover:gap-4 transition-all">
                Explore Tech Stack <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
