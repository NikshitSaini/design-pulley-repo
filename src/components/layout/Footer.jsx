import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low pt-32 pb-12 px-8 md:px-16 mt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-display text-primary mb-6">DESIGN PULLEY.</h3>
          <p className="text-on-surface-variant max-w-sm">
            Design Pulley is a turnkey interior execution firm, delivering retail expansion plans across India — from Delhi NCR to Karnataka, Gujarat to Chennai.
          </p>
          <a href="mailto:projects@designpulley.com" className="inline-block mt-8 text-primary font-medium border-b border-primary hover:text-secondary hover:border-secondary transition-colors duration-300 pb-1">
            projects@designpulley.com
          </a>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-label text-on-surface-variant mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Services', 'Work', 'About Us'].map((link) => (
              <li key={link}>
                 <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`} className="text-primary hover:text-secondary transition-colors">
                   {link}
                 </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-label text-on-surface-variant mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-primary hover:text-secondary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-primary hover:text-secondary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-outline-variant/20 text-sm text-on-surface-variant flex justify-between items-center">
        <p>© 2024 Design Pulley. All rights reserved.</p>
      </div>
    </footer>
  );
}
