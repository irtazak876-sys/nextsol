import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const techs = [
  { name: 'React', color: '#61DAFB', icon: 'logos:react' },
  { name: 'Rust', color: '#000000', icon: 'logos:rust' },
  { name: 'AWS', color: '#FF9900', icon: 'logos:aws' },
  { name: 'Node.js', color: '#339933', icon: 'logos:nodejs-icon' },
  { name: 'Python', color: '#3776AB', icon: 'logos:python' },
  { name: 'Docker', color: '#2496ED', icon: 'logos:docker-icon' },
  { name: 'Kubernetes', color: '#326CE5', icon: 'logos:kubernetes' },
  { name: 'TypeScript', color: '#3178C6', icon: 'logos:typescript-icon' },
  { name: 'Go', color: '#00ADD8', icon: 'logos:go' },
  { name: 'MongoDB', color: '#47A248', icon: 'logos:mongodb-icon' },
  { name: 'Redis', color: '#DC382D', icon: 'logos:redis' },
  { name: 'Linux', color: '#FCC624', icon: 'logos:linux-tux' },
];

const TechStack = () => {
  const marqueeTechs = [...techs, ...techs, ...techs];

  return (
    <section className="py-12 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-label text-sky-600 mb-8 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-px bg-slate-200" />
          Technical Sovereignty
          <span className="w-8 h-px bg-slate-200" />
        </motion.div>

        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ 
              x: ["0%", "-33.33%"] 
            }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ willChange: "transform" }}
            className="flex items-center gap-16 md:gap-24 py-8"
          >
            {marqueeTechs.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex flex-col items-center gap-3 group cursor-default flex-shrink-0"
              >
                <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <Icon 
                    icon={tech.icon} 
                    className="w-full h-full drop-shadow-md"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.1, 0.4, 0.1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: (i % techs.length) * 0.15 }}
                    className="absolute inset-[-10px] blur-2xl rounded-full -z-10"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500 font-outfit">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
