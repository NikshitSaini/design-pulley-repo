import { Link } from 'react-router-dom';

// Function to get current year
const getCurrentYear = () => new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="w-full py-16 px-12 bg-surface-container-low border-t border-outline-variant/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1440px] mx-auto font-body text-sm leading-relaxed text-primary">
                <div>
                    <div className="text-xl font-bold tracking-tighter mb-6 font-headline">DESIGN PULLEY</div>
                    <p className="text-secondary max-w-xs font-light">
                        Design Pulley is a turnkey interior execution firm delivering retail expansion plans across India — PAN India, from Delhi NCR to Karnataka, Gujarat to Chennai.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h5 className="font-bold font-headline text-primary uppercase tracking-widest text-[10px]">Navigation</h5>
                        <ul className="space-y-2">
                            <li><Link className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all" to="/">Home</Link></li>
                            <li><Link className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all" to="/services">Services</Link></li>
                            <li><Link className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all" to="/work">Work</Link></li>
                            <li><Link className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all" to="/about">About Us</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h5 className="font-bold font-headline text-primary uppercase tracking-widest text-[10px]">Legal</h5>
                        <ul className="space-y-2">
                            <li><Link className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all" to="#">Privacy Policy</Link></li>
                            <li><Link className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all" to="#">Terms of Service</Link></li>
                            <li><Link className="text-secondary hover:text-primary underline-offset-4 hover:underline transition-all" to="/contact">Contact Us</Link></li>
                        </ul>
                        <div className="max-w-[1440px] mx-auto border-t border-outline-variant/10 mt-12 pt-8">
                            <p className="text-[10px] uppercase font-bold tracking-widest text-secondary">© {getCurrentYear()} Design Pulley. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
