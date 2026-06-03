import { motion } from 'framer-motion';

const clientLogos = [
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1614850523598-849b0f6e863a?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=200&q=80'
];

const Clients = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-label text-slate-400 mb-20 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-slate-200" />
          The Global Strategic Roster
          <span className="w-8 h-px bg-slate-200" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0">
          {clientLogos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="Elite Client Partner"
              className="h-8 md:h-10 w-auto object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
