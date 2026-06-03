import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/services' },
    { name: 'Work', href: '/portfolio' },
    { 
      name: 'Company', 
      dropdown: [
        { name: 'Identity', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Insights', href: '/insights' },
      ]
    },
    { name: 'Access', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] top-0 transition-all duration-300">
      <div className={`mx-auto transition-all duration-300 ${scrolled ? 'max-w-4xl mt-3 px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-8 pt-8'}`}>
        <div className={`relative flex justify-between items-center transition-all duration-300 rounded-[24px] ${scrolled ? 'bg-white/95 backdrop-blur-xl border border-slate-200 px-6 py-2 shadow-xl' : 'bg-transparent py-2'}`}>
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-black font-outfit tracking-tighter group flex items-center gap-3">
              <motion.div 
                layout
                className={`bg-sky-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-sky-500/20 ${scrolled ? 'w-8 h-8' : 'w-11 h-11'}`}
              >
                <span className={`text-white uppercase font-black ${scrolled ? 'text-sm' : 'text-xl'}`}>N</span>
              </motion.div>
              <span className={`transition-colors duration-300 ${scrolled ? 'text-slate-900 text-xl' : 'text-white text-2xl'}`}>NEXT<span className="text-sky-500 group-hover:text-amber-400">SOL</span></span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div 
                      key={link.name} 
                      className="relative group/drop"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className={`transition-all rounded-xl flex items-center gap-2 ${scrolled ? 'px-4 py-1 text-[10px] text-slate-600 hover:text-sky-600' : 'px-6 py-2 text-label text-white/80 hover:text-white'}`}>
                        {link.name}
                        <ChevronDown size={scrolled ? 10 : 12} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 pt-3 pointer-events-auto"
                          >
                            <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-2 min-w-[200px] overflow-hidden">
                              {link.dropdown.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className="block px-5 py-3 text-micro font-black text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`transition-all rounded-xl border ${scrolled ? 'px-4 py-1 text-[10px]' : 'px-6 py-2 text-label'} ${
                      isActive 
                        ? 'bg-amber-400 border-amber-500 text-slate-900 shadow-sm' 
                        : (scrolled ? 'text-slate-600 hover:text-sky-600 border-transparent hover:bg-sky-50 font-bold' : 'text-white/80 hover:text-white border-transparent hover:bg-white/10 font-black')
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className={scrolled ? 'w-2' : 'w-3'} />
              <Link
                to="/contact"
                className={`bg-sky-600 text-white rounded-xl font-black transition-all shadow-xl shadow-sky-600/20 active:scale-95 hover:bg-sky-500 uppercase tracking-widest ${scrolled ? 'px-5 py-2 text-[9px]' : 'px-8 py-3 text-micro'}`}
              >
                Hire Us
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-4 right-4 md:hidden bg-white/98 backdrop-blur-3xl border border-slate-200 rounded-[32px] p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 blur-[60px] rounded-full" />
            <div className="relative z-10 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-4">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{link.name}</div>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block text-2xl font-black font-outfit text-slate-900 hover:text-sky-500 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="block text-2xl font-black font-outfit text-slate-900 hover:text-sky-500 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="h-px bg-slate-100" />
              <Link
                to="/contact"
                className="block w-full text-center py-5 bg-sky-600 text-white font-black rounded-2xl text-lg shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Hire The Best
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
