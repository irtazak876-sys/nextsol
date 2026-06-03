import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: '#',
    color: '#E4405F',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-5.838 2.435-5.838 5.838s2.435 5.838 5.838 5.838 5.838-2.435 5.838-5.838-2.435-5.838-5.838-5.838zm0 9.512c-2.029 0-3.673-1.645-3.673-3.674s1.644-3.673 3.673-3.673 3.673 1.644 3.673 3.673-1.644 3.674-3.673 3.674zm5.238-10.433c0 .731-.592 1.323-1.324 1.323s-1.323-.592-1.323-1.323.591-1.324 1.323-1.324 1.324.593 1.324 1.324z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: '#',
    color: '#0077B5',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: '#',
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  {
    name: 'Discord',
    href: '#',
    color: '#5865F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.0741 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    href: '#',
    color: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.13.57-.072 1.758-.47 2.005-.923.248-.454.248-.842.174-.923-.075-.081-.272-.13-.57-.279zm-5.461 6.574A9.155 9.155 0 0 1 7.73 19.9l-.337-.2-.455.19c-.31.13-.61.26-.91.38l.19-.45c.12-.29.24-.58.35-.88l-.22-.37c-.36-.61-.71-1.23-1.04-1.87a9.145 9.145 0 0 1 12.06-12.06 9.145 9.145 0 0 1 1.04 13.93 9.157 9.157 0 0 1-6.4 3.036zm0-18.334A12.292 12.292 0 0 0 0 12.3c0 2.1.53 4.14 1.54 5.96L0 24l5.91-1.54c1.78.97 3.79 1.48 5.84 1.48 6.78 0 12.3-5.52 12.3-12.3S18.52 0 11.74 0h.27z"/>
      </svg>
    )
  }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 pt-12 pb-8 border-t border-slate-200 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-100/30 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12 mb-12">
          <div className="md:col-span-4">
            <div className="text-2xl font-black font-outfit tracking-tighter text-slate-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20">
                <span className="text-white text-sm uppercase font-black">N</span>
              </div>
              <span>NEXT<span className="text-sky-500">SOL</span></span>
            </div>
            <p className="text-slate-500 text-lg max-w-sm mb-8 leading-relaxed font-medium">
              We engineer the digital foundations for the world's most ambitious organizations.
            </p>
            
            {/* Animated Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm group relative overflow-hidden transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
                  whileHover={{ y: -5, scale: 1.1 }}
                  animate={{ 
                    y: [0, -3, 0],
                  }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                    default: { type: "spring", stiffness: 500, damping: 15 }
                  }}
                >
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ color: social.color }}
                  >
                    {/* Small Icons */}
                    <div className="scale-90">
                      {social.icon}
                    </div>
                  </motion.div>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity blur-md"
                    style={{ backgroundColor: social.color }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-6">Ecosystem</h4>
            <ul className="space-y-3 font-bold">
              {['Engineering', 'Mobile', 'ERP', 'Security', 'Cloud'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-500 hover:text-sky-500 transition-colors text-xs tracking-tight">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-6">Governance</h4>
            <ul className="space-y-3 font-bold">
              {[
                { name: 'Identity', path: '/about' },
                { name: 'Solutions', path: '/services' },
                { name: 'Work', path: '/portfolio' },
                { name: 'Direct Line', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-500 hover:text-sky-500 transition-colors text-xs tracking-tight">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-6">Join the Vanguard</h4>
            <form className="relative group/input max-w-md">
              <input 
                type="email" 
                placeholder="Digital Address"
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-slate-900 focus:outline-none focus:border-sky-500 text-sm font-medium placeholder:text-slate-300 transition-all shadow-sm"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-all flex items-center justify-center text-xs font-black uppercase tracking-widest">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} NEXTSOL PVT LTD. ENGINEERED FOR SUPREMACY.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-slate-400 hover:text-sky-600 transition-all group"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.25em]">Return to Apex</span>
            <div className="p-3 bg-white border border-slate-200 rounded-xl group-hover:bg-sky-600 group-hover:border-sky-600 group-hover:text-white transition-all shadow-lg shadow-blue-900/5">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
