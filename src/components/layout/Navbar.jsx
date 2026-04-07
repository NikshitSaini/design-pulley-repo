import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/works' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 glass-nav border-b border-outline-variant/10 py-6 px-8 md:px-16 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-display font-medium text-primary tracking-display">
          DESIGN PULLEY<span className="font-light text-secondary">.</span>
        </Link>
        
        <div className="hidden md:flex space-x-12 items-center font-body text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`hover:text-secondary transition-colors duration-300 ${location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2.5 bg-primary text-on-primary rounded-sm hover:bg-primary_container transition-colors duration-300 shadow-ambient"
          >
            Contact Us
          </Link>
        </div>

        <button className="md:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
