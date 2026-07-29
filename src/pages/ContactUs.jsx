import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

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

const projectTypes = [
    "Retail Execution",
    "Commercial Interior",
    "Turnkey Build",
    "Consulting"
];

// Custom Select Dropdown Component
function CustomSelect({ value, onChange, options, placeholder = "Select an option" }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-full">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-surface-container-low border border-outline-variant/20 rounded-[1.5rem] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all flex justify-between items-center font-body text-base text-on-surface hover:border-primary/40 group"
            >
                <span className={value ? "text-on-surface" : "text-on-surface-variant/40"}>{value || placeholder}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors"
                >
                    expand_more
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 z-50 bg-surface-container-lowest rounded-[1.5rem] shadow-[0_10px_30px_rgba(5,13,42,0.15)] border border-outline-variant/20 overflow-hidden"
                    >
                        <div className="py-2">
                            {options.map((option, index) => (
                                <motion.button
                                    key={option}
                                    type="button"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => {
                                        onChange(option);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-6 py-4 text-left font-medium transition-all duration-200 flex items-center gap-3 group ${
                                        value === option
                                            ? "bg-primary/10 text-primary"
                                            : "text-on-surface hover:bg-surface-container hover:text-primary"
                                    }`}
                                >
                                    <motion.span
                                        initial={false}
                                        animate={{ scale: value === option ? 1.2 : 1 }}
                                        className={`material-symbols-outlined text-lg ${value === option ? "text-primary" : "text-outline-variant group-hover:text-primary"}`}
                                    >
                                        {value === option ? "check_circle" : "radio_button_unchecked"}
                                    </motion.span>
                                    <span>{option}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ContactUs() {
    const [selectedProjectType, setSelectedProjectType] = useState("");

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
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
                                        <a className="text-2xl md:text-3xl font-headline font-bold text-primary group-hover:text-secondary transition-colors" href="mailto:projects@designpulley.com">
                                            projects@designpulley.com
                                        </a>
                                        <div className="mt-4 flex items-center gap-4">
                                            <a href="tel:+919876543210" className="inline-flex items-center gap-3 text-primary font-body font-medium">
                                                <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary"><span className="material-symbols-outlined">call</span></span>
                                                <span className="text-sm font-headline">+91 98765 43210</span>
                                            </a>
                                        </div>
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
                                            <CustomSelect 
                                                value={selectedProjectType}
                                                onChange={setSelectedProjectType}
                                                options={projectTypes}
                                                placeholder="Select an option"
                                            />
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
