import { motion } from 'framer-motion';

const CodeBackground = () => {
  const codeLines = [
    'const engine = new NextSolEngine();',
    'await engine.deploy({ highAvailability: true });',
    'if (security.isQuantumReady) { proceed(); }',
    'system.architecture = "HighFrequency";',
    'optimizer.optimize(performance.peak);',
    'quantum.secure_channel.init();',
    'export default EngineeringMastery;',
    'import { Innovation } from "@nextsol/core";',
    'git commit -m "feat: digital-sovereignty"',
    'npm install @nextsol/future-proof',
    'docker compose up -d infrastructure',
    'kubectl apply -f cluster.yaml'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-transparent">
      {/* Moving Technical Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-100 blur-[150px] rounded-full opacity-40" />
      <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-amber-50 blur-[180px] rounded-full opacity-40" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.01] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating Code - Optimized for Snappiness */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-x-12 pt-40 p-10 font-mono text-[10px] leading-loose opacity-[0.1]">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: -1000 }}
            transition={{ 
              duration: 60 + i * 5, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ willChange: "transform" }}
            className="text-slate-400 whitespace-nowrap font-bold"
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodeBackground;
