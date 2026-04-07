import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-surface font-body text-on-surface antialiased"
        >
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-container" id="home">
                    <div className="absolute inset-0 opacity-40">
                        <img 
                            className="w-full h-full object-cover" 
                            alt="wide shot of a modern minimalist office interior with clean lines, architectural lighting, and floor to ceiling windows at dusk" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8xeOLtE11iYwVsR7XJ5JdKHLnRHGUWIeJQsgriTfyYEGQ0qdIWjAOY6AaSFngf4pifKauZgTTDt6uLo5c8yWTAw_s8g13jtMHffmN-8s6tqNLW69kRRS4kqSRfsCywgTwUsDBU8lPGV9Gabv5-3_UPbafXXfmKsIbkU0O6xrKkhpqNrSCeQnVbT-5UBmv6DMPKHc8A2fjk65ZV83D5bgZsM-yXriSGkvEaVb7tP1IgbaRVyHabHNot33KiizQWj62evbjDzxT"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent"></div>
                    </div>
                    
                    <div className="relative max-w-[1440px] mx-auto px-12 w-full">
                        <div className="max-w-3xl">
                            <h1 className="text-on-primary font-headline font-extrabold text-6xl md:text-8xl leading-[1.1] tracking-tighter mb-8">
                                Build your space,<br/>at your pace.
                            </h1>
                            <p className="text-on-primary-container text-xl md:text-2xl font-light mb-12 max-w-xl leading-relaxed">
                                Leading commercial interior design and retail execution for India's most ambitious brands. From turnkey solutions to architectural precision.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a 
                                    href="#contact" 
                                    className="bg-on-primary text-primary px-10 py-5 rounded font-headline font-bold text-lg flex items-center justify-center hover:bg-surface-container-high transition-colors group"
                                >
                                    Start Your Project
                                    <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </a>
                                <a 
                                    href="#work" 
                                    className="border border-on-primary/30 text-on-primary px-10 py-5 rounded font-headline font-bold text-lg flex items-center justify-center hover:bg-on-primary/10 transition-colors"
                                >
                                    View Portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Geometric Grid Overlay */}
                    <div className="absolute bottom-0 right-0 w-1/3 h-2/3 border-l border-t border-on-primary/5 pointer-events-none hidden lg:block"></div>
                </section>

                {/* Our Clients Marquee */}
                <section className="py-24 bg-surface overflow-hidden">
                    <div className="max-w-[1440px] mx-auto px-12 mb-12">
                        <span className="text-[0.75rem] font-label font-semibold tracking-[0.1em] text-secondary uppercase">
                            Trusted By Industry Leaders
                        </span>
                    </div>
                    <div className="flex overflow-hidden group select-none gap-16">
                        <motion.div 
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                            className="flex shrink-0 min-w-full justify-around items-center gap-16 whitespace-nowrap px-8"
                        >
                            <span className="text-3xl font-headline font-bold text-primary/40">Livspace</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">Clove Dental</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">Lladró</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">The Sleep Company</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">abCoffee</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">Ajay's Food Court</span>
                        </motion.div>
                        <motion.div 
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                            className="flex shrink-0 min-w-full justify-around items-center gap-16 whitespace-nowrap px-8"
                        >
                            <span className="text-3xl font-headline font-bold text-primary/40">Livspace</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">Clove Dental</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">Lladró</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">The Sleep Company</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">abCoffee</span>
                            <span className="text-3xl font-headline font-bold text-primary/40">Ajay's Food Court</span>
                        </motion.div>
                    </div>
                </section>

                {/* Our Services */}
                <section className="py-32 bg-surface-container-low" id="services">
                    <div className="max-w-[1440px] mx-auto px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                            <div className="max-w-2xl">
                                <span className="text-[0.75rem] font-label font-semibold tracking-[0.1em] text-secondary uppercase block mb-4">Core Expertise</span>
                                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">
                                    Tailored solutions for complex retail & workspace requirements.
                                </h2>
                            </div>
                            <div className="text-secondary max-w-sm mb-2">
                                Design Pulley handles every aspect of opening a new store — deploying our in-house team, selecting vendors, and handing over the final showroom.
                            </div>
                        </div>

                        {/* 2x2 Bento-ish Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 overflow-hidden rounded-lg">
                            
                            {/* Turnkey Solutions */}
                            <div className="group relative bg-surface-container-lowest p-12 transition-all duration-500 hover:bg-primary hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-4 bg-surface-container-low group-hover:bg-primary-container transition-colors">
                                        <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary-container">architecture</span>
                                    </div>
                                    <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline group-hover:text-on-primary-container/50">Service 01</span>
                                </div>
                                <h3 className="text-primary font-headline text-2xl font-bold mb-4 group-hover:text-white transition-colors">Turnkey Solutions</h3>
                                <p className="text-on-surface-variant group-hover:text-primary-fixed leading-relaxed mb-8 max-w-sm transition-colors">
                                    End-to-end execution from spatial planning to final occupancy. We manage every structural nuance so you can focus on your vision.
                                </p>
                                <ul className="space-y-3 mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Concept to Completion</li>
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Regulatory Compliance</li>
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Procurement & Logistics</li>
                                </ul>
                                <a className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary group-hover:text-secondary-container border-b border-primary/20 group-hover:border-secondary-container/40 pb-1" href="/services">
                                    Explore Solution
                                    <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                                </a>
                            </div>

                            {/* Custom Furniture */}
                            <div className="group relative bg-surface-container-low p-12 transition-all duration-500 hover:bg-primary hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-4 bg-surface-container-lowest group-hover:bg-primary-container transition-colors">
                                        <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary-container">chair_alt</span>
                                    </div>
                                    <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline group-hover:text-on-primary-container/50">Service 02</span>
                                </div>
                                <h3 className="text-primary font-headline text-2xl font-bold mb-4 group-hover:text-white transition-colors">Custom Furniture & Fixtures</h3>
                                <p className="text-on-surface-variant group-hover:text-primary-fixed leading-relaxed mb-8 max-w-sm transition-colors">
                                    Bespoke retail fixtures and office systems designed for the specific ergonomic and aesthetic demands of your brand identity.
                                </p>
                                <ul className="space-y-3 mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Signature Prototype Development</li>
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Premium Material Sourcing</li>
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Technical CAD Craftsmanship</li>
                                </ul>
                                <a className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary group-hover:text-secondary-container border-b border-primary/20 group-hover:border-secondary-container/40 pb-1" href="/services">
                                    View Catalog
                                    <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                                </a>
                            </div>

                            {/* Project Management */}
                            <div className="group relative bg-surface-container-low p-12 transition-all duration-500 hover:bg-primary hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-4 bg-surface-container-lowest group-hover:bg-primary-container transition-colors">
                                        <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary-container">assignment</span>
                                    </div>
                                    <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline group-hover:text-on-primary-container/50">Service 03</span>
                                </div>
                                <h3 className="text-primary font-headline text-2xl font-bold mb-4 group-hover:text-white transition-colors">Project Management Consultancy</h3>
                                <p className="text-on-surface-variant group-hover:text-primary-fixed leading-relaxed mb-8 max-w-sm transition-colors">
                                    Strategic oversight ensuring timelines and budgets align with architectural integrity and commercial feasibility.
                                </p>
                                <ul className="space-y-3 mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Risk Mitigation Strategies</li>
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Vendor Reconciliation</li>
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Quality Control Protocols</li>
                                </ul>
                                <a className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary group-hover:text-secondary-container border-b border-primary/20 group-hover:border-secondary-container/40 pb-1" href="/services">
                                    Learn More
                                    <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                                </a>
                            </div>

                            {/* Niche Services */}
                            <div className="group relative bg-surface-container-lowest p-12 transition-all duration-500 hover:bg-primary hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-4 bg-surface-container-low group-hover:bg-primary-container transition-colors">
                                        <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary-container">settings_suggest</span>
                                    </div>
                                    <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline group-hover:text-on-primary-container/50">Service 04</span>
                                </div>
                                <h3 className="text-primary font-headline text-2xl font-bold mb-4 group-hover:text-white transition-colors">Niche Services</h3>
                                <p className="text-on-surface-variant group-hover:text-primary-fixed leading-relaxed mb-8 max-w-sm transition-colors">
                                    Specialized interventions including acoustic engineering, lighting design, and technology integration for high-performance spaces.
                                </p>
                                <ul className="space-y-3 mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Acoustic System Integration</li>
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Smart Workspace Automation</li>
                                    <li className="flex items-center text-sm text-primary-fixed-dim"><span className="material-symbols-outlined text-xs mr-2">check_circle</span> Sustainable Material Audits</li>
                                </ul>
                                <a className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary group-hover:text-secondary-container border-b border-primary/20 group-hover:border-secondary-container/40 pb-1" href="/services">
                                    View Specialized Ops
                                    <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Work (Portfolio) */}
                <section className="py-32 bg-surface" id="work">
                    <div className="max-w-[1440px] mx-auto px-12">
                        <div className="mb-20">
                            <span className="text-[0.75rem] font-label font-semibold tracking-[0.1em] text-secondary uppercase block mb-4">Featured Projects</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">Architectural Impact.</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Project 1 */}
                            <div className="group relative overflow-hidden bg-surface-container">
                                <img 
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" 
                                    alt="Livspace Experience Center" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZd-VGOb9hJBa6n4fWSK1x2mStLFwJyhL0Bfn3-RQKCPdbhN0Afe0yttqJr5YbaoaWLaQn05WPejkaW13b7-yaUnA-ZNwBJePTFiK_wggqpWIVB5OWBtxCILs9VffgpMJuTBTGsenAK5r-dxAw_8KuALbSuC5QOEm7PgtGrutq-VQkZDRujc5DSnjmzISr-VwoqCdxky9PQFazS1ivMJ_u6OnN8TR-wRKgcaDkGZ_R1Kel1meZms_NTmXeOl3LZAOh1Azl6aZy"
                                />
                                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-on-primary">
                                    <span className="text-xs uppercase tracking-widest font-label text-secondary-container mb-2">3,000 SQFT | Gandhinagar, Gujarat</span>
                                    <h4 className="text-2xl font-headline font-bold mb-4">Livspace Experience Center</h4>
                                    <p className="text-on-primary/70 text-sm mb-6">A premium experience center that led to two additional project wins in Pune (Kharadi & Baner) due to exceptional on-time delivery.</p>
                                    <div className="border-t border-on-primary/20 pt-4 flex justify-between items-center">
                                        <span className="text-xs font-label">Retail Execution</span>
                                        <span className="material-symbols-outlined">north_east</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="group relative overflow-hidden bg-surface-container">
                                <img 
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" 
                                    alt="Clove Dental" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc_myPKhGAAnoZPTIMAQnKZaMESa5V02A4pYQu5W8jtVV9IkNCKUd3bgzrq3IBQu0Gb7gFo3fAqHB-8nI-xBx5Y0iSfooXh_JQF816LJ3gWjGQ5Sz4lKmV9J8cTCIiCsVaWJdFz9yxoofSMleWrCjhvV7xwJUwx_Xx9znleer1M6219-ft67Gv4dHFcjxWTFnTQVTqWDUQhqSjyZeYX0JyY0oxFB0gaoNrqHge2BrOc29pbigOT93gY6hTK9zHrWqwKqd9cDqt"
                                />
                                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-on-primary">
                                    <span className="text-xs uppercase tracking-widest font-label text-secondary-container mb-2">8+ Clinics | Delhi, Jaipur, Ahmedabad</span>
                                    <h4 className="text-2xl font-headline font-bold mb-4">Clove Dental</h4>
                                    <p className="text-on-primary/70 text-sm mb-6">Preferred vendor for North & West India. Handed over 8+ clinics with consistent quality and post-handover support.</p>
                                    <div className="border-t border-on-primary/20 pt-4 flex justify-between items-center">
                                        <span className="text-xs font-label">Healthcare Rollout</span>
                                        <span className="material-symbols-outlined">north_east</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="group relative overflow-hidden bg-surface-container">
                                <img 
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" 
                                    alt="Lladró Flagship" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcztqmeLCcMGqEMciVrvSRLZ5BzvWWH-vewBuJ-dPulEGBpqjY6QTBEvXFKuQPhNJNh_vxEPn0UOkcHtCIRdvKus0bzUX2xGSVJtif84MO96qGodQ8rOwdBXs_KwOyORT8U_KQVYje8SrNgprCG9QObCcAV93pfMBRyCdvL7SLJqKMyQeCVkhELsqOZFftJGVLLetTegyiTRcNVSCTO4cnJrvnxblejKYixzTWOQ3L23A76mLgrIz3-wcDYQLdRuIbawPBYxE4"
                                />
                                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-on-primary">
                                    <span className="text-xs uppercase tracking-widest font-label text-secondary-container mb-2">10,000 SQFT | New Delhi (+ Chennai, Gurgaon)</span>
                                    <h4 className="text-2xl font-headline font-bold mb-4">Lladró Flagship</h4>
                                    <p className="text-on-primary/70 text-sm mb-6">Spanish luxury brand's flagship store featuring a unique polycarbonate facade, followed by mall stores in Chennai and Gurgaon.</p>
                                    <div className="border-t border-on-primary/20 pt-4 flex justify-between items-center">
                                        <span className="text-xs font-label">Boutique Luxury</span>
                                        <span className="material-symbols-outlined">north_east</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project 4 */}
                            <div className="group relative overflow-hidden bg-surface-container">
                                <img 
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" 
                                    alt="The Sleep Company" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK52r_WRv_4HhSe44N7UirfBQpZcngqeBaVELOCf8SkGgVaeokrsPDp0dBqheq7crA55KmxPI-hSxd2JCePea44z46r10vdKXnn0QWTdVF7atm8751ePZv-jsNs5CKCMNrzJZqDz-KBJYdDSjPp--I1hWjqQn1xl5IzTiuFnZc0-Cg5G6OyhbkdBFGP17Rc8ALvzp2K9xTrDW946ZdChB1qww1iGsG8Q0CGpRjy4ZPlHXgX8NzcsMEy5NzjfpPZ0hqH861zOYO"
                                />
                                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-on-primary">
                                    <span className="text-xs uppercase tracking-widest font-label text-secondary-container mb-2">800–1,500 SQFT | PAN India (Multiple Cities)</span>
                                    <h4 className="text-2xl font-headline font-bold mb-4">The Sleep Company</h4>
                                    <p className="text-on-primary/70 text-sm mb-6">High street and mall locations with PAN India expansion support. Praised for punctuality and competitive rates.</p>
                                    <div className="border-t border-on-primary/20 pt-4 flex justify-between items-center">
                                        <span className="text-xs font-label">Retail Experience</span>
                                        <span className="material-symbols-outlined">north_east</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project 5 */}
                            <div className="group relative overflow-hidden bg-surface-container">
                                <img 
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" 
                                    alt="abCoffee" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWO300FZdsAqCeAFobhV1UQPMBZBF7T87QcNpXxMXJcuLy2Pmd8aLSOwRWMS9GSCcw6fup9U_ptakMdQDU9J81u2lm0nM-uu1Wxy57TZNvJq7hfgpwCSCIBEdgMDK_Y7cG3zkTB86IXjxgHngHUnjDR8A-L20tVl3nEJPRLCiu76guWcn50j_phjKByAv0kQ4PMMQuj0hSr0jVj-AbxkXb--rYhxmNaoKOPokzGP3ig0FVJ54s2jE-xccaOkFlRymnksKVDGEX"
                                />
                                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-on-primary">
                                    <span className="text-xs uppercase tracking-widest font-label text-secondary-container mb-2">Small Format | Gurgaon</span>
                                    <h4 className="text-2xl font-headline font-bold mb-4">abCoffee</h4>
                                    <p className="text-on-primary/70 text-sm mb-6">Rapid deployment of compact retail units with bespoke stainless steel counters.</p>
                                    <div className="border-t border-on-primary/20 pt-4 flex justify-between items-center">
                                        <span className="text-xs font-label">F&amp;B Concept</span>
                                        <span className="material-symbols-outlined">north_east</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project 6 */}
                            <div className="group relative overflow-hidden bg-surface-container">
                                <img 
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" 
                                    alt="Ajay's Food Court" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6U_69FkEP9dQakvHknjuCWMV9uhsXxycjtzSqJAuWsJiRx-KL_H43mXCuYJxIGlB8jqLXk1rMHeZWe8X9DKkjSh15rkrfv5Glr0Ey95XOPMzCjjEKqHhvjp1Ujch8VbykrFrL0X0Qs9BEzNHnY2KwgRjhW-VnKWDkkzTSsTt0wkk7wHJiCu6Yj8vn6HvIpksJWxSFpNQD5N9WMceuRiYKidFh_G59WHFv9QSn5eGdjRO-6gZIvmLp-FvPrnmnSiek50umekMx"
                                />
                                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-on-primary">
                                    <span className="text-xs uppercase tracking-widest font-label text-secondary-container mb-2">3,500 SQFT | Gujarat Highway</span>
                                    <h4 className="text-2xl font-headline font-bold mb-4">Ajay's Food Court</h4>
                                    <p className="text-on-primary/70 text-sm mb-6">Leading Gujarat F&B chain's highway store, and now planning their brand's transition to an upgraded café model.</p>
                                    <div className="border-t border-on-primary/20 pt-4 flex justify-between items-center">
                                        <span className="text-xs font-label">Hospitality</span>
                                        <span className="material-symbols-outlined">north_east</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* About Us */}
                <section className="py-32 bg-surface-container-low overflow-hidden" id="about">
                    <div className="max-w-[1440px] mx-auto px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                            {/* Left: Stats */}
                            <div>
                                <span className="text-[0.75rem] font-label font-semibold tracking-[0.1em] text-secondary uppercase block mb-4">Our Presence</span>
                                <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-primary mb-16 tracking-tighter">Scale. Precision.<br/>Engineering.</h2>
                                <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                                    <div>
                                        <div className="text-5xl font-headline font-extrabold text-primary mb-2">25+</div>
                                        <div className="text-sm font-label text-secondary uppercase tracking-wider">Successful Projects</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-headline font-extrabold text-primary mb-2">5+</div>
                                        <div className="text-sm font-label text-secondary uppercase tracking-wider">Repeat Clients</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-headline font-extrabold text-primary mb-2">15+</div>
                                        <div className="text-sm font-label text-secondary uppercase tracking-wider">Site Engineers</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-headline font-extrabold text-primary mb-2">300+</div>
                                        <div className="text-sm font-label text-secondary uppercase tracking-wider">Skilled Workers</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-headline font-extrabold text-primary mb-2">8</div>
                                        <div className="text-sm font-label text-secondary uppercase tracking-wider">States PAN India</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right: Leadership */}
                            <div className="space-y-16">
                                <div className="max-w-xl">
                                    <h3 className="text-2xl font-headline font-bold text-primary mb-8 border-b-2 border-primary w-fit pb-2">Leadership</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-headline font-bold text-primary">Anurag Lohia</h4>
                                            <p className="text-sm text-outline">Founder &amp; Strategic Lead</p>
                                        </div>
                                        <div>
                                            <h4 className="font-headline font-bold text-primary">Akash Lakdawala</h4>
                                            <p className="text-sm text-outline">Executive Director</p>
                                        </div>
                                        <div>
                                            <h4 className="font-headline font-bold text-primary">Himanshu Lakdawala</h4>
                                            <p className="text-sm text-outline">Operations Director</p>
                                        </div>
                                        <div>
                                            <h4 className="font-headline font-bold text-primary">Aamir Motiwala</h4>
                                            <p className="text-sm text-outline">Project Lead</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-surface-container-highest p-12 relative overflow-hidden">
                                    <span 
                                        className="material-symbols-outlined text-primary/10 absolute -top-2 -left-2" 
                                        style={{ fontSize: "8rem", leading: 1 }}
                                    >
                                        format_quote
                                    </span>
                                    <p className="text-lg italic text-on-surface-variant relative z-10 font-light leading-relaxed pt-4">
                                        "Our mission is to bridge the gap between architectural vision and ground-level execution, ensuring that every retail square foot generates value."
                                    </p>
                                    <p className="text-xs font-label text-secondary uppercase tracking-widest mt-4 relative z-10">— Anurag Lohia, Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-32 bg-surface" id="testimonials">
                    <div className="max-w-[1440px] mx-auto px-12">
                        <div className="text-center mb-24">
                            <span className="text-[0.75rem] font-label font-semibold tracking-[0.1em] text-secondary uppercase block mb-4">Client Feedback</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">Voices of Collaboration.</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Quote 1 */}
                            <div className="bg-surface-container p-10 flex flex-col justify-between">
                                <p className="text-lg text-on-surface mb-10 leading-relaxed">"The attention to detail in our flagship store was unparalleled. Design Pulley executed the 10,000 sqft Lladró Delhi store with a unique polycarbonate facade. Their passion, commitment, and high energy levels were remarkable."</p>
                                <div>
                                    <div className="font-headline font-bold text-primary">Nikhil Lamba</div>
                                    <div className="text-xs font-label text-secondary uppercase tracking-widest mt-1">CEO, Lladró India</div>
                                </div>
                            </div>
                            {/* Quote 2 */}
                            <div className="bg-primary p-10 flex flex-col justify-between text-on-primary">
                                <p className="text-lg mb-10 leading-relaxed">"Design Pulley is our preferred vendor for North and West India. They've handed over 8+ clinics with consistent, high-quality work in Delhi, Jaipur, and Ahmedabad — always with post-handover support."</p>
                                <div>
                                    <div className="font-headline font-bold">Taranjeet Singh</div>
                                    <div className="text-xs font-label text-secondary-container uppercase tracking-widest mt-1">Construction Manager, Clove Dental</div>
                                </div>
                            </div>
                            {/* Quote 3 */}
                            <div className="bg-surface-container p-10 flex flex-col justify-between">
                                <p className="text-lg text-on-surface mb-10 leading-relaxed">"Design Pulley's reliable PAN India service and on-time delivery is exceptional. Their 3,000 sqft Gandhinagar Experience Center was so impressive it led to two additional wins in Pune."</p>
                                <div>
                                    <div className="font-headline font-bold text-primary">Sailesh Tiwari</div>
                                    <div className="text-xs font-label text-secondary uppercase tracking-widest mt-1">Project Lead, Livspace</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Us */}
                <section className="py-32 bg-primary-container relative" id="contact">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
                    </div>
                    <div className="max-w-[1440px] mx-auto px-12 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-on-primary mb-8 tracking-tighter">Ready to<br/>Transform?</h2>
                                <p className="text-on-primary-container text-xl max-w-md mb-12 font-light">
                                    Send us your project brief and our engineering team will get back to you within 24 hours.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-on-primary/10 rounded-full flex items-center justify-center text-on-primary">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <span className="text-on-primary font-headline font-semibold">projects@designpulley.com</span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-on-primary/10 rounded-full flex items-center justify-center text-on-primary">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <span className="text-on-primary font-headline font-semibold">+91 98765 43210</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-surface p-12">
                                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="border-b border-outline-variant py-2">
                                            <label className="block text-[0.65rem] font-label text-secondary uppercase tracking-widest mb-1">Full Name</label>
                                            <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-primary font-medium placeholder:text-outline-variant" placeholder="Anurag Lohia" type="text"/>
                                        </div>
                                        <div className="border-b border-outline-variant py-2">
                                            <label className="block text-[0.65rem] font-label text-secondary uppercase tracking-widest mb-1">Company</label>
                                            <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-primary font-medium placeholder:text-outline-variant" placeholder="Brand Name" type="text"/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="border-b border-outline-variant py-2">
                                            <label className="block text-[0.65rem] font-label text-secondary uppercase tracking-widest mb-1">City</label>
                                            <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-primary font-medium placeholder:text-outline-variant" placeholder="Mumbai" type="text"/>
                                        </div>
                                        <div className="border-b border-outline-variant py-2">
                                            <label className="block text-[0.65rem] font-label text-secondary uppercase tracking-widest mb-1">Project Type</label>
                                            <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-primary font-medium" defaultValue="Retail Execution">
                                                <option value="Retail Execution">Retail Execution</option>
                                                <option value="Commercial Interior">Commercial Interior</option>
                                                <option value="Turnkey Build">Turnkey Build</option>
                                                <option value="Consulting">Consulting</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="border-b border-outline-variant py-2">
                                        <label className="block text-[0.65rem] font-label text-secondary uppercase tracking-widest mb-1">Message</label>
                                        <textarea className="w-full bg-transparent border-none p-0 focus:ring-0 text-primary font-medium placeholder:text-outline-variant resize-none" placeholder="Tell us about your space requirements..." rows={3}></textarea>
                                    </div>
                                    <button className="w-full bg-primary text-on-primary py-5 font-headline font-bold hover:bg-tertiary transition-colors">Send Inquiry</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    );
}
