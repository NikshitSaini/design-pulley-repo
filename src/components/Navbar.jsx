import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Helper function to check if the current path matches the link
    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    const closeMobileMenu = () => setIsMobileMenuOpen(false);
    const linkBaseClasses = 'font-headline font-semibold tracking-tight text-sm transition-colors';
    const activeClasses = 'text-primary border-b-2 border-primary pb-1';
    const inactiveClasses = 'text-secondary hover:text-primary';

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Work', path: '/work' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-outline-variant/20 bg-surface/80 backdrop-blur-2xl shadow-[0_12px_40px_rgba(5,13,42,0.05)]">
            <div className="flex items-center justify-between max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 h-18 md:h-20">
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-primary font-headline" onClick={closeMobileMenu}>
                    DESIGN PULLEY
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`${linkBaseClasses} ${isActive(link.path) ? activeClasses : inactiveClasses}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden sm:block">
                    <Link
                        to="/contact"
                        className="bg-primary text-on-primary px-5 md:px-8 py-3 rounded-sm font-headline font-bold text-xs md:text-sm tracking-[0.18em] hover:opacity-90 active:scale-95 transition-all duration-300"
                    >
                        GET IN TOUCH
                    </Link>
                </div>

                <button
                    type="button"
                    className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-outline-variant/30 text-primary"
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((current) => !current)}
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {isMobileMenuOpen ? (
                <div className="lg:hidden border-t border-outline-variant/20 bg-surface/95 backdrop-blur-2xl">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={closeMobileMenu}
                                className={`rounded-xl px-4 py-3 text-sm font-headline font-semibold tracking-tight transition-colors ${
                                    isActive(link.path)
                                        ? 'bg-primary text-on-primary'
                                        : 'text-secondary hover:bg-surface-container-low hover:text-primary'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={closeMobileMenu}
                            className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-headline font-bold tracking-[0.18em] text-on-primary"
                        >
                            GET IN TOUCH
                        </Link>
                    </div>
                </div>
            ) : null}
        </nav>
    );
}
