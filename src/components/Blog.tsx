import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Architecting for Resilience: Distributed Consensus in 2024',
    excerpt: 'An in-depth analysis of Byzantine Fault Tolerance in massive enterprise cloud ecosystems.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    author: 'Ahmed Malik',
    date: 'Oct 24, 2024'
  },
  {
    title: 'The Shift to Edge AI: Processing Petabytes at the Perimeter',
    excerpt: 'Why centralized processing is a bottleneck and how edge-first logic is redefining latency.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    author: 'Zainab Qureshi',
    date: 'Oct 18, 2024'
  },
  {
    title: 'Zero-Trust Protocol Implementation in Legacy Environments',
    excerpt: 'A strategic framework for upgrading enterprise security without disrupting core legacy workflows.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    author: 'Hassan Raza',
    date: 'Oct 12, 2024'
  }
];

const Blog = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 lg:mb-24 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-label text-sky-600 mb-4 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Intellectual Capital
            </motion.div>
            <h2 className="text-section-h2 text-slate-900 font-outfit leading-[0.95] tracking-tight font-black uppercase">
              Strategic <br/><span className="text-sky-500">Insights.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 px-10 py-5 bg-sky-600 text-white rounded-2xl font-black transition-all hover:bg-sky-700 shadow-xl shadow-sky-600/20">
            Access Library <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] mb-8 border border-slate-100 shadow-2xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-sky-500 text-white rounded-full text-micro font-black shadow-lg">
                  Engineering
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-6 text-label text-slate-400 mb-4 font-bold">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-amber-500" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-amber-500" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-card-title text-slate-900 mb-4 group-hover:text-sky-500 transition-colors leading-tight font-outfit font-black uppercase">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-body-md mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-sky-600 font-black text-micro group-hover:gap-4 transition-all">
                  Read Full Brief <ArrowRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
