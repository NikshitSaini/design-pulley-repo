import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Reusable scroll reveal component
function ScrollReveal({ children, delay = 0, className = "", direction = "up" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: yOffset }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
            transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function ContactUs() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-surface text-on-surface font-body antialiased overflow-hidden min-h-screen"
        >
            <main className="pt-24 md:pt-32 pb-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    
                    {/* Content Left: Structural Narrative */}
                    <div className="lg:w-1/2 space-y-16">
                        <div className="space-y-8">
                            <ScrollReveal>
                                <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-6 inline-block py-1 px-4 rounded-full border border-secondary/20 bg-secondary/5">Get in Touch</span>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter leading-[1] text-primary">
                                    Let's build <br className="hidden md:block"/> your space, <br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">at your pace.</span>
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className="text-lg md:text-xl font-body text-on-surface-variant max-w-md leading-relaxed font-light">
                                    Architecture is not just about structure, it's about movement and the rhythm of those within.
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="space-y-12">
                            <ScrollReveal delay={0.2}>
                                <div className="group">
                                    <span className="block text-xs uppercase tracking-[0.2em] font-bold text-secondary mb-3 font-label">Contact Inquiries</span>
                                    <a className="text-2xl md:text-3xl font-headline font-bold text-primary group-hover:text-secondary transition-colors" href="mailto:hello@pulleyinteriors.com">
                                        hello@pulleyinteriors.com
                                    </a>
                                </div>
                            </ScrollReveal>
                            
                            <ScrollReveal delay={0.3}>
                                <div className="pt-8 border-t border-outline-variant/20">
                                    <span className="block text-xs uppercase tracking-[0.2em] font-bold text-secondary mb-6 font-label">Operational Presence</span>
                                    <div className="flex flex-wrap gap-3">
                                        {['Delhi NCR', 'West Bengal', 'MP', 'UP', 'Gujarat', 'Maharashtra', 'Karnataka', 'Chennai'].map((loc, idx) => (
                                            <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container transition-all cursor-default">
                                                <span className="material-symbols-outlined text-secondary text-xs">location_on</span>
                                                <span className="font-label text-[10px] md:text-xs uppercase tracking-widest font-bold text-primary">{loc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                        
                        <ScrollReveal delay={0.4}>
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-surface-container-low shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group">
                                <img className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" alt="Modern architectural studio interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlmUsjX4WT9RvIFcaep5-zwzocu40s3-pLfjjuDtDeRrQrYruyJ1_Jm0JvmlPtyQcWkR8quGF_7TVEuacInlb2HOvc-Vj6CMCum1nwyRqT_KPnlOBfcgYy7VjMbxM9cyoYsxZMaTe-IM7UuI7bQvF3e1UPTHvlLMoLFUDKheWDJUIIz0OlHHQznjIXgxWX-M6ZTzL7bZ7w6Xc-CqznNLiUoiVZgiRYzPwobmUqpd6slBDh8qOlI-g3sIe_snzmqHYB6PsUJAUM" />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000"></div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Content Right: Focused Transactional Form */}
                    <div className="lg:w-1/2">
                        <ScrollReveal delay={0.2}>
                            <div className="bg-surface-container-lowest p-8 md:p-12 lg:p-16 rounded-[3rem] border border-outline-variant/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
                                <form action="#" className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 group">
                                            <label className="block text-sm font-medium text-primary font-body">Full Name</label>
                                            <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-[1.5rem] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-on-surface-variant/40 font-body text-base" placeholder="John Doe" type="text" />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="block text-sm font-medium text-primary font-body">Company Name</label>
                                            <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-[1.5rem] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-on-surface-variant/40 font-body text-base" placeholder="Acme Corp" type="text" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 group">
                                            <label className="block text-sm font-medium text-primary font-body">City</label>
                                            <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-[1.5rem] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-on-surface-variant/40 font-body text-base" placeholder="Mumbai" type="text" />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="block text-sm font-medium text-primary font-body">Project Type</label>
                                            <div className="relative">
                                                <select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-[1.5rem] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body text-base appearance-none text-on-surface" defaultValue="">
                                                    <option disabled value="" className="text-on-surface-variant/40">Select an Option</option>
                                                    <option value="retail">Retail Space</option>
                                                    <option value="office">Corporate Office</option>
                                                    <option value="hospitality">Hospitality</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="block text-sm font-medium text-primary font-body">Message</label>
                                        <textarea className="w-full bg-surface-container-low border border-outline-variant/20 rounded-[2rem] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-on-surface-variant/40 font-body text-base resize-none" placeholder="Tell us about your architectural vision..." rows={5}></textarea>
                                    </div>
                                    <div className="pt-6">
                                        <button className="w-full bg-primary text-white font-headline font-bold uppercase tracking-[0.15em] py-5 px-8 text-sm rounded-full hover:bg-secondary-container hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]" type="submit">
                                            Send Inquiry
                                        </button>
                                    </div>
                                </form>
                                
                                <div className="mt-12 p-8 bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-[2.5rem] border border-outline-variant/10">
                                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <span className="material-symbols-outlined text-white">schedule</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline font-bold text-primary mb-2 text-lg">Our Response Timeline</h4>
                                        <p className="text-sm font-body text-on-surface-variant font-light leading-relaxed">
                                            Our design consultants review all inquiries within 24 business hours to ensure every vision is given structural priority.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}
