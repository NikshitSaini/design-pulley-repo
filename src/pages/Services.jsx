import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Reusable scroll reveal component
function ScrollReveal({ children, delay = 0, className = "", direction = "up" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    
    const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
    const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yOffset, x: xOffset }}
            transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Services() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-surface font-body text-on-surface antialiased overflow-hidden"
        >
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[70svh] bg-primary pt-32 pb-24 flex flex-col justify-center overflow-hidden" id="services-hero">
                    {/* Animated background blobs */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                            rotate: [0, 45, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(189,197,234,0.15)_0%,transparent_70%)] pointer-events-none will-change-transform" 
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.3, 0.1],
                            y: [0, 50, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 right-[10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none will-change-transform" 
                    />

                    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        {/* Text Section */}
                        <div className="flex-1 text-on-primary text-center lg:text-left mt-8 lg:mt-0">
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mb-6 text-[0.7rem] font-label font-semibold uppercase tracking-[0.35em] text-secondary-fixed-dim inline-block py-1 px-3 rounded-full border border-secondary-fixed-dim/30 bg-surface/5 backdrop-blur-sm"
                            >
                                Our Capabilities
                            </motion.p>
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mx-auto lg:mx-0 max-w-3xl font-headline text-5xl font-extrabold leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl"
                            >
                                Precision Crafting for
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-primary to-on-primary/60">Commercial Excellence.</span>
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mx-auto lg:mx-0 mt-6 max-w-xl text-base leading-relaxed text-primary-fixed sm:text-lg md:text-xl font-light"
                            >
                                From conceptual blueprints to the final stitch in bespoke upholstery, Pulley delivers integrated solutions that redefine the workspace.
                            </motion.p>
                        </div>

                        {/* Image Section */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
                            className="flex-1 w-full max-w-3xl relative hidden md:block"
                        >
                            <div className="relative overflow-hidden rounded-[3rem] bg-surface/10 p-3 border border-on-primary/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md">
                                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2.5rem] bg-surface-container-high">
                                    <img 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                                        alt="Modern architectural interior" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhAMjzujMSTGgvg9_JGQOCbhATYYNJlXIJj8aM8XX6wlvQu9ZR7sNsGangr6JUKWwZw3K-hRWQx3s41JIg6DMO6o4XsSSiALnNJCNXQhFDGBulfE38tRs5Vy8YcyTzrRxken1_WmUuggNBrYJ1yi2vXIed5TA7lHtHoazilq2YlexdwMbCyoBUVoUv9gLK90GM8qD-FjSSGSM-eSwFQ_aJ1Ct17hl28ND3TpSfPsXgmfy-bnX1Qu51jeOqS2ecCwMrp13N3PTU"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="py-24 md:py-32 bg-surface px-4 sm:px-6 md:px-12 relative">
                    <div className="max-w-[1440px] mx-auto">
                        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
                            <div className="max-w-2xl">
                                <span className="mb-6 inline-block text-[0.7rem] font-label font-semibold uppercase tracking-[0.2em] text-secondary border border-secondary/20 px-4 py-1.5 rounded-full bg-secondary/5">Core Disciplines</span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-primary tracking-tighter leading-tight">Expertise Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Structural Poise</span></h2>
                            </div>
                        </ScrollReveal>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                            
                            {/* Turnkey Solutions */}
                            <ScrollReveal delay={0.1}>
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-surface-container-lowest p-8 md:p-12 rounded-[3rem] border border-outline-variant/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary/5 group-hover:bg-primary transition-colors duration-500">
                                            <span className="material-symbols-outlined text-3xl text-primary group-hover:text-on-primary">architecture</span>
                                        </div>
                                        <span className="font-label text-xs tracking-[0.2em] uppercase text-outline group-hover:text-primary font-bold transition-colors">01</span>
                                    </div>
                                    <h3 className="text-primary font-headline text-3xl font-bold mb-4 tracking-tight">Turnkey Solutions</h3>
                                    <p className="text-on-surface-variant font-light leading-relaxed mb-10 text-lg flex-1">
                                        End-to-end execution from spatial planning to final occupancy. We manage every structural nuance so you can focus on your vision.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Concept to Completion</li>
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Regulatory Compliance</li>
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Procurement & Logistics</li>
                                    </ul>
                                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500 cursor-pointer mt-auto">
                                        <span className="material-symbols-outlined text-xl">arrow_outward</span>
                                    </div>
                                </motion.div>
                            </ScrollReveal>

                            {/* Custom Furniture */}
                            <ScrollReveal delay={0.2}>
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-surface-container-low p-8 md:p-12 rounded-[3rem] border border-outline-variant/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary/5 group-hover:bg-primary transition-colors duration-500">
                                            <span className="material-symbols-outlined text-3xl text-primary group-hover:text-on-primary">chair_alt</span>
                                        </div>
                                        <span className="font-label text-xs tracking-[0.2em] uppercase text-outline group-hover:text-primary font-bold transition-colors">02</span>
                                    </div>
                                    <h3 className="text-primary font-headline text-3xl font-bold mb-4 tracking-tight">Custom Furniture</h3>
                                    <p className="text-on-surface-variant font-light leading-relaxed mb-10 text-lg flex-1">
                                        Bespoke retail fixtures and office systems designed for the specific ergonomic and aesthetic demands of your brand identity.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Signature Prototype Development</li>
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Premium Material Sourcing</li>
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Technical CAD Craftsmanship</li>
                                    </ul>
                                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500 cursor-pointer mt-auto">
                                        <span className="material-symbols-outlined text-xl">arrow_outward</span>
                                    </div>
                                </motion.div>
                            </ScrollReveal>

                            {/* Project Management */}
                            <ScrollReveal delay={0.3}>
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-surface-container-low p-8 md:p-12 rounded-[3rem] border border-outline-variant/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary/5 group-hover:bg-primary transition-colors duration-500">
                                            <span className="material-symbols-outlined text-3xl text-primary group-hover:text-on-primary">assignment</span>
                                        </div>
                                        <span className="font-label text-xs tracking-[0.2em] uppercase text-outline group-hover:text-primary font-bold transition-colors">03</span>
                                    </div>
                                    <h3 className="text-primary font-headline text-3xl font-bold mb-4 tracking-tight">Project Management</h3>
                                    <p className="text-on-surface-variant font-light leading-relaxed mb-10 text-lg flex-1">
                                        Strategic oversight ensuring timelines and budgets align with architectural integrity and commercial feasibility.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Risk Mitigation Strategies</li>
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Vendor Reconciliation</li>
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Quality Control Protocols</li>
                                    </ul>
                                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500 cursor-pointer mt-auto">
                                        <span className="material-symbols-outlined text-xl">arrow_outward</span>
                                    </div>
                                </motion.div>
                            </ScrollReveal>

                            {/* Niche Services */}
                            <ScrollReveal delay={0.4}>
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-surface-container-lowest p-8 md:p-12 rounded-[3rem] border border-outline-variant/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary/5 group-hover:bg-primary transition-colors duration-500">
                                            <span className="material-symbols-outlined text-3xl text-primary group-hover:text-on-primary">settings_suggest</span>
                                        </div>
                                        <span className="font-label text-xs tracking-[0.2em] uppercase text-outline group-hover:text-primary font-bold transition-colors">04</span>
                                    </div>
                                    <h3 className="text-primary font-headline text-3xl font-bold mb-4 tracking-tight">Niche Services</h3>
                                    <p className="text-on-surface-variant font-light leading-relaxed mb-10 text-lg flex-1">
                                        Specialized interventions including acoustic engineering, lighting design, and technology integration for high-performance spaces.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Acoustic System Integration</li>
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Smart Workspace Automation</li>
                                        <li className="flex items-center text-sm font-medium text-primary/80"><span className="material-symbols-outlined text-secondary mr-3">check_circle</span> Sustainable Material Audits</li>
                                    </ul>
                                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500 cursor-pointer mt-auto">
                                        <span className="material-symbols-outlined text-xl">arrow_outward</span>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* The "Blueprint" Callout */}
                <section className="py-24 md:py-32 bg-surface-container-low px-4 sm:px-6 md:px-12 mx-4 md:mx-12 mb-24 rounded-[3rem] overflow-hidden relative shadow-inner border border-outline-variant/10">
                    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
                        <ScrollReveal>
                            <div className="relative">
                                <div className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-[3rem] shadow-2xl">
                                    <img 
                                        className="w-full h-full object-cover filter contrast-125 hover:scale-105 transition-transform duration-1000" 
                                        alt="Technical architectural blueprint overlaying a high-contrast photograph of a concrete and glass structure" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC--0QSpOOUdjJYP3gu84o4N06yxF2MuIJmFlyIsiZRiZix4sBFZw_gXpAINdy-tcPd-d6plc8pnU4IjRakANajnz8dbqzjy19_NLXL-UhW8lvRY73J9771kjf4ZLdIyKtSRA7RFPL6AqlcGa-WiByo77iA-JvhCfFJXrckjn4vflI9Fw_A9PxL8hkwYWwowFcaYchruairuxVsAKpcCSqpPMNwYwJ631URVuEc18JyVNK1rrXZNiGNG1PXgdune1NzQNucLLyf"
                                    />
                                </div>
                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="absolute -bottom-8 -right-4 md:-right-8 bg-primary p-8 md:p-10 text-white max-w-[280px] md:max-w-xs shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem]"
                                >
                                    <p className="font-headline text-lg md:text-xl font-bold italic leading-tight text-on-primary">"Interior design is the natural projection of the soul into the physical realm."</p>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.2}>
                            <span className="mb-6 inline-block text-[0.7rem] font-label font-semibold uppercase tracking-[0.2em] text-secondary border border-secondary/20 px-4 py-1.5 rounded-full bg-secondary/5">Delivery Model</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-8 text-primary">Integrated Delivery Model</h2>
                            <p className="text-on-surface-variant font-light text-lg leading-relaxed mb-10 max-w-xl">
                                Our method eliminates the fragmentation typical of commercial builds. By housing design, procurement, and execution under one structural umbrella, we ensure that the initial poetic vision is never lost in translation.
                            </p>
                            
                            <div className="space-y-8">
                                <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 transition-transform">
                                    <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-headline font-bold shrink-0">1</span>
                                    <div>
                                        <h4 className="font-bold text-primary font-headline text-xl mb-2">Architectural Analysis</h4>
                                        <p className="text-base font-light text-on-surface-variant">Deep site auditing and spatial feasibility studies.</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 transition-transform">
                                    <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-headline font-bold shrink-0">2</span>
                                    <div>
                                        <h4 className="font-bold text-primary font-headline text-xl mb-2">Unified Execution</h4>
                                        <p className="text-base font-light text-on-surface-variant">Parallel workflows between fabrication and onsite prep.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 md:py-32 bg-primary text-center relative overflow-hidden rounded-t-[3rem]">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(189,197,234,0.1)_0%,transparent_70%)] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                            <h2 className="text-on-primary font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-12 leading-[1.1]">Ready to Elevate Your Commercial Footprint?</h2>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <button className="w-full sm:w-auto rounded-full bg-surface text-primary px-8 py-4 font-headline font-bold tracking-[0.1em] hover:scale-105 transition-transform duration-300 shadow-xl">
                                    Schedule Consultation
                                </button>
                                <button className="w-full sm:w-auto rounded-full border border-on-primary/30 text-on-primary px-8 py-4 font-headline font-bold tracking-[0.1em] hover:bg-on-primary/10 transition-colors duration-300">
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </main>
        </motion.div>
    );
}
