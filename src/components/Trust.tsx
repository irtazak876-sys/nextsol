import { motion } from 'framer-motion';

const logos = [
  'TRUSTED', 'INNOVATIVE', 'RELIABLE', 'EXPERT', 'GLOBAL', 'SECURE'
];

const Trust = () => {
  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-8">
          Trusted by Industry Leaders Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-black text-slate-200 select-none cursor-default hover:text-sky-400 transition-all uppercase tracking-tighter"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;
