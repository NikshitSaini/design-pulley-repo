import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative h-[614px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img 
                            className="w-full h-full object-cover filter brightness-[0.4]" 
                            alt="Modern architectural interior with clean lines, large glass windows, and minimalist furniture in a high-end corporate office setting" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhAMjzujMSTGgvg9_JGQOCbhATYYNJlXIJj8aM8XX6wlvQu9ZR7sNsGangr6JUKWwZw3K-hRWQx3s41JIg6DMO6o4XsSSiALnNJCNXQhFDGBulfE38tRs5Vy8YcyTzrRxken1_WmUuggNBrYJ1yi2vXIed5TA7lHtHoazilq2YlexdwMbCyoBUVoUv9gLK90GM8qD-FjSSGSM-eSwFQ_aJ1Ct17hl28ND3TpSfPsXgmfy-bnX1Qu51jeOqS2ecCwMrp13N3PTU"
                        />
                    </div>
                    <div className="relative z-10 max-w-[1440px] mx-auto px-12 w-full">
                        <span className="text-secondary-container font-label text-xs uppercase tracking-[0.2em] mb-4 block">Our Capabilities</span>
                        <h1 className="text-white font-headline text-5xl md:text-7xl font-bold tracking-tighter max-w-3xl leading-[1.1]">
                            Precision Crafting for <span className="text-secondary-container">Commercial</span> Excellence.
                        </h1>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="py-24 bg-surface px-12">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-primary font-headline text-4xl font-bold tracking-tight mb-6">Expertise Driven by Structural Poise</h2>
                                <p className="text-on-surface-variant text-lg leading-relaxed font-body">
                                    From conceptual blueprints to the final stitch in bespoke upholstery, Pulley delivers integrated solutions that redefine the workspace through an architectural lens.
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="block text-primary font-headline text-6xl font-extralight tracking-tighter opacity-10">04</span>
                                <span className="text-outline uppercase text-[10px] tracking-widest font-bold">Core Disciplines</span>
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
                                <a className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary group-hover:text-secondary-container border-b border-primary/20 group-hover:border-secondary-container/40 pb-1" href="#contact">
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
                                <a className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary group-hover:text-secondary-container border-b border-primary/20 group-hover:border-secondary-container/40 pb-1" href="#contact">
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
                                <a className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary group-hover:text-secondary-container border-b border-primary/20 group-hover:border-secondary-container/40 pb-1" href="#contact">
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
                                <a className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary group-hover:text-secondary-container border-b border-primary/20 group-hover:border-secondary-container/40 pb-1" href="#contact">
                                    View Specialized Ops
                                    <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The "Blueprint" Callout */}
                <section className="py-24 bg-surface-container-low px-12">
                    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square">
                            <img 
                                className="w-full h-full object-cover filter contrast-125 grayscale" 
                                alt="Technical architectural blueprint overlaying a high-contrast photograph of a concrete and glass structure" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC--0QSpOOUdjJYP3gu84o4N06yxF2MuIJmFlyIsiZRiZix4sBFZw_gXpAINdy-tcPd-d6plc8pnU4IjRakANajnz8dbqzjy19_NLXL-UhW8lvRY73J9771kjf4ZLdIyKtSRA7RFPL6AqlcGa-WiByo77iA-JvhCfFJXrckjn4vflI9Fw_A9PxL8hkwYWwowFcaYchruairuxVsAKpcCSqpPMNwYwJ631URVuEc18JyVNK1rrXZNiGNG1PXgdune1NzQNucLLyf"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-primary p-10 text-white max-w-xs shadow-2xl">
                                <p className="font-headline text-xl font-bold italic leading-tight">"Interior design is the natural projection of the soul into the physical realm."</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-primary font-headline text-4xl font-bold tracking-tight mb-8">Integrated Delivery Model</h2>
                            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                                Our method eliminates the fragmentation typical of commercial builds. By housing design, procurement, and execution under one structural umbrella, we ensure that the initial poetic vision is never lost in translation.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Architectural Analysis</h4>
                                        <p className="text-sm text-on-surface-variant">Deep site auditing and spatial feasibility studies.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Unified Execution</h4>
                                        <p className="text-sm text-on-surface-variant">Parallel workflows between fabrication and onsite prep.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 bg-primary text-center">
                    <div className="max-w-3xl mx-auto px-12">
                        <h2 className="text-white font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">Ready to Elevate Your Commercial Footprint?</h2>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <button className="bg-secondary-container text-on-secondary-container px-10 py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all active:scale-95">
                                Schedule Consultation
                            </button>
                            <button className="text-white border border-white/20 px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all active:scale-95">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    );
}
