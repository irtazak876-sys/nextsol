import { motion } from 'framer-motion';

const team = [
  {
    name: 'Ahmed Malik',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    bio: 'Visionary leader with 15+ years in high-stakes software architecture and global strategy.',
    socials: [
      { name: 'LinkedIn', color: '#0077B5', icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
      { name: 'X', color: '#000000', icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 7.719 8.502 11.238H16.17l-5.214-6.817L4.99 21.188H1.68l7.73-8.235L1.254 2.25H8.134l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> }
    ]
  },
  {
    name: 'Zainab Qureshi',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneer in massive-scale cloud infrastructure and fault-tolerant distributed ecosystems.',
    socials: [
      { name: 'LinkedIn', color: '#0077B5', icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
      { name: 'GitHub', color: '#333', icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.518-1.304.962-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> }
    ]
  },
  {
    name: 'Hassan Raza',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bio: 'Award-winning designer obsessed with the intersection of human psychology and digital fluidity.',
    socials: [
      { name: 'LinkedIn', color: '#0077B5', icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
      { name: 'Behance', color: '#1769ff', icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 7h-7v-2h7v2zm-12.01 4.54c-.112-.66-.45-1.221-.99-1.581-.54-.359-1.21-.54-2.01-.54h-3.99v4.54h3.99c.8 0 1.47-.181 2.01-.54.54-.36.878-.921.99-1.581l.01-.3zm-.01 5.381c-.112-.66-.45-1.221-.99-1.581-.54-.36-1.21-.54-2.01-.54h-3.99v4.54h3.99c.8 0 1.47-.181 2.01-.54.54-.36.878-.921.99-1.581l.01-.3zm5.02-8.421c-.8 0-1.47.181-2.01.54-.54.36-.878.921-.99 1.581l-.01.3c.112.66.45 1.221.99 1.581.54.36 1.21.54 2.01.54h3.99v-4.54h-3.99zm-13 1.5c.112-.66.45-1.221.99-1.581.54-.36 1.21-.54 2.01-.54h3.99v4.54h-3.99c-.8 0-1.47-.181-2.01-.54-.54-.36-.878-.921-.99-1.581l-.01-.3zm.01 5.381c.112-.66.45-1.221.99-1.581.54-.36 1.21-.54 2.01-.54h3.99v4.54h-3.99c-.8 0-1.47-.181-2.01-.54-.54-.36-.878-.921-.99-1.581l-.01-.3zm15 1.5c.112-.66.45-1.221.99-1.581.54-.36 1.21-.54 2.01-.54h3.99v4.54h-3.99c-.8 0-1.47-.181-2.01-.54-.54-.36-.878-.921-.99-1.581l-.01-.3z"/></svg> }
    ]
  },
  {
    name: 'Ayesha Khan',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Full-stack specialist pushing the boundaries of generative AI and edge computing.',
    socials: [
      { name: 'LinkedIn', color: '#0077B5', icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
      { name: 'Stack Overflow', color: '#F48024', icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.117 14.272l10.992 2.29.458-2.09-10.992-2.292-.458 2.092zm1.41-5.046l10.121 4.436.853-1.934-10.121-4.436-.853 1.934zm2.522-4.574l8.414 7.06 1.373-1.654-8.414-7.06-1.373 1.654zM15.601 0l-1.89 1.077 5.655 9.917 1.89-1.077L15.601 0z"/></svg> }
    ]
  }
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-label text-sky-600 mb-4 flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            The Vanguard
          </motion.div>
          <h2 className="text-section-h2 font-outfit text-slate-900 leading-[0.95] tracking-tight font-black uppercase">
            Elite <br/><span className="text-sky-500">Minds.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-slate-50 rounded-[32px] border border-slate-200 overflow-hidden hover:border-sky-300 hover:bg-sky-50/30 transition-all duration-500 group shadow-lg shadow-blue-900/5"
            >
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="p-8 text-center relative z-10">
                <h3 className="text-card-title font-outfit text-slate-900 mb-2 uppercase font-black">{member.name}</h3>
                <p className="text-sky-600 text-micro mb-4 font-black tracking-widest uppercase">
                  {member.role}
                </p>
                <p className="text-slate-500 text-body-md mb-8 leading-snug">
                  {member.bio}
                </p>
                
                {/* Team Social Icons */}
                <div className="flex items-center justify-center gap-6">
                  {member.socials.map((social, idx) => (
                    <motion.a 
                      key={idx} 
                      href="#" 
                      className="text-slate-400 hover:text-sky-600 transition-all p-2 relative group/social"
                      whileHover={{ y: -3 }}
                      animate={{ y: [0, -2, 0] }}
                      transition={{ 
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }
                      }}
                    >
                      <motion.div whileHover={{ color: social.color }} className="relative z-10">
                        <social.icon className="w-5 h-5" />
                      </motion.div>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover/social:opacity-20 transition-opacity blur-lg"
                        style={{ backgroundColor: social.color }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
