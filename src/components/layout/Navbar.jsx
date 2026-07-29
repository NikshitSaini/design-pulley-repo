import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/works' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}
      >
        <div className={`w-full max-w-5xl mx-auto flex justify-between items-center px-6 py-4 rounded-[2rem] transition-all duration-500 ${scrolled ? 'bg-surface/70 backdrop-blur-xl border border-outline-variant/20 shadow-[0_8px_30px_rgb(0,0,0,0.08)]' : 'bg-transparent border border-transparent'}`}>
          <Link to="/" className="text-xl font-display font-bold text-primary tracking-tight flex items-center gap-1 group relative z-50">
            <span>DESIGN</span>
            <span className="font-light">PULLEY</span>
            <span className="text-secondary w-1.5 h-1.5 rounded-full bg-secondary ml-0.5 group-hover:scale-150 transition-transform"></span>
          </Link>
          
          <div className="hidden md:flex space-x-1 items-center font-body text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="relative px-5 py-2 rounded-full overflow-hidden group"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/5 rounded-full z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-surface-variant/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-0 opacity-0 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="px-7 py-3 bg-primary text-on-primary rounded-full hover:bg-tertiary transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 font-medium tracking-wide text-sm inline-flex items-center gap-2"
            >
              Contact Us
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <button 
            className="md:hidden text-primary relative z-50 p-2 rounded-full hover:bg-surface-variant/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-surface/90 pt-32 px-6 pb-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-headline font-bold">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block ${location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-auto"
            >
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex justify-center py-4 bg-primary text-on-primary rounded-2xl font-medium"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
