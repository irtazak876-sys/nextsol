import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Horizon Fintech OS',
    category: 'High-Frequency Systems',
    desc: 'Redefining transaction speeds for the world’s leading digital assets platform.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    size: 'lg'
  },
  {
    title: 'Lumina Smart City',
    category: 'IoT Infrastructure',
    desc: 'Connected ecosystem managing urban logistics for 2M+ residents.',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800&q=80',
    size: 'sm'
  },
  {
    title: 'Vitalis Health AI',
    category: 'Machine Learning',
    desc: 'Predictive diagnostics platform processing billions of patient data points.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    size: 'sm'
  },
  {
    title: 'Nexus E-Comm Engine',
    category: 'Enterprise Cloud',
    desc: 'Unified retail backend supporting $500M+ in annual GMV.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    size: 'lg'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-label text-sky-600 mb-4 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Masterpieces in Motion
            </motion.div>
            <h2 className="text-section-h2 text-slate-900 font-outfit leading-[0.95] tracking-tight font-black uppercase">Selected <br/><span className="text-sky-500">Works.</span></h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
             <p className="text-slate-500 text-body-lg mb-8 max-w-sm text-left md:text-right font-medium">
              We focus on high-impact projects that define industry standards and drive massive growth.
            </p>
            <button className="group flex items-center gap-3 px-10 py-5 bg-sky-600 text-white rounded-2xl hover:bg-sky-700 transition-all font-black text-micro shadow-xl shadow-sky-600/20 active:scale-95">
              View Showcase <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`group relative overflow-hidden rounded-[40px] shadow-2xl border border-slate-100 ${project.size === 'lg' ? 'md:col-span-4' : 'md:col-span-2'} aspect-[16/12] md:aspect-auto h-[300px] sm:h-[400px] md:h-[600px] cursor-pointer bg-slate-50`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="mb-4">
                  <span className="px-4 py-1.5 bg-sky-500/90 backdrop-blur-md border border-sky-400/30 text-white text-micro font-black rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-section-h3 text-white mb-4 group-hover:translate-y-[-8px] transition-transform duration-500 font-black tracking-tight uppercase">{project.title}</h3>
                <p className="text-white/80 text-body-lg max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-medium">
                  {project.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-white font-black text-micro group-hover:opacity-100 transition-all">
                  Access Case Study <ExternalLink size={16} className="text-sky-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
