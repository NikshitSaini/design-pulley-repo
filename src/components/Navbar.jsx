import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    
    // Helper function to check if the current path matches the link
    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    const linkBaseClasses = "font-headline font-semibold tracking-tight text-sm transition-colors";
    const activeClasses = "text-primary border-b-2 border-primary pb-1";
    const inactiveClasses = "text-secondary hover:text-primary";

    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl no-line-rule tonal-shift-boundary">
            <div className="flex justify-between items-center max-w-[1440px] mx-auto px-12 h-20">
                <Link to="/" className="text-2xl font-bold tracking-tighter text-primary font-headline">
                    DESIGN PULLEY
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <Link 
                        to="/" 
                        className={`${linkBaseClasses} ${isActive('/') ? activeClasses : inactiveClasses}`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/services" 
                        className={`${linkBaseClasses} ${isActive('/services') ? activeClasses : inactiveClasses}`}
                    >
                        Services
                    </Link>
                    <Link 
                        to="/work" 
                        className={`${linkBaseClasses} ${isActive('/work') ? activeClasses : inactiveClasses}`}
                    >
                        Work
                    </Link>
                    <Link 
                        to="/about" 
                        className={`${linkBaseClasses} ${isActive('/about') ? activeClasses : inactiveClasses}`}
                    >
                        About Us
                    </Link>
                    <Link 
                        to="/contact" 
                        className={`${linkBaseClasses} ${isActive('/contact') ? activeClasses : inactiveClasses}`}
                    >
                        Contact Us
                    </Link>
                </div>
                <Link 
                    to="/contact"
                    className="bg-primary text-on-primary px-8 py-3 rounded-sm font-headline font-bold text-sm tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300"
                >
                    GET IN TOUCH
                </Link>
            </div>
        </nav>
    );
}
