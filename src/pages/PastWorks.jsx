import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Reusable scroll reveal component
function ScrollReveal({ children, delay = 0, className = "", direction = "up" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0;
    
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

const projects = {
    'lladro': {
        title: 'LLADRÓ',
        shortDesc: 'Spain\'s Luxury Figurines, Delhi',
        desc: 'Executed three luxury flagship projects across Delhi NCR and Chennai. Provided complete Project Management Consultancy and bespoke furniture execution for spaces up to 7,500 sq. ft.',
        quote: '"Thank you Akash Lakdawala, Anurag Lohia and team for helping us with this dream project. Truly admire your passion, commitment and attention to detail. So professional in your approach with amazing energy levels made you unstoppable! So happy that we chose your team. Just keep it going. Wishing you loads of success!"',
        citeName: 'Nikhil Lamba',
        citeTitle: 'CEO, Lladró India',
        banner: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80',
        gallery: [
            { name: "Firefly Collection Display" },
            { name: "Grand Showroom Overview" },
            { name: "Figurine Display Wall" },
            { name: "Arch Cabinets" },
            { name: "Showroom Interior" },
            { name: "Reception & Display" },
            { name: "Figurines Wall" },
            { name: "Lladró Chandelier Gallery" },
            { name: "Grand Showroom Interior" }
        ]
    },
    'livspace': {
        title: 'LIVSPACE CASANTRO',
        shortDesc: 'Premium Retail Outlets',
        desc: 'Delivered 10+ premium retail and experience centers across India. Successfully executed large-format showrooms, office-cum-display centers up to 7,000 sq. ft., and over 100 residential projects.',
        quote: '"We have strong relationship with Design Pulley team and they have successfully executed experience center for us. We rely on their service PAN India and are satisfied with their output. They are focused on delivering projects on time and we appreciate their communication skills."',
        citeName: 'Sailesh Tiwari',
        citeTitle: 'Project Lead, Livspace',
        banner: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
        gallery: [
            { name: "Luxury Kitchen Display Area" },
            { name: "Showroom Interior" },
            { name: "Display Unit Area" },
            { name: "L Shape Kitchen Area" },
            { name: "Staircase Area" },
            { name: "Meeting Room Area" },
            { name: "Workstation Area" },
            { name: "Tv Unit Area" },
            { name: "Showroom Display Area" },
            { name: "Livspace Store Front" }
        ]
    },
    'sleep': {
        title: 'THE SLEEP COMPANY',
        shortDesc: 'Retail Innovation & Store Fit-outs',
        desc: 'Executed comprehensive store fit-outs, VM, and branding works across 10+ key cities. Delivered complete turnkey solutions including furniture and façade execution within aggressive one-month timelines.',
        quote: '"Design Pulley have been working on our various projects and have always been completely satisfied with their performance. They do an excellent job, are always punctual, and offer the most competitive rates in town. I\'m happy to recommend Design Pulley."',
        citeName: 'Paresh Ladwa',
        citeTitle: 'Project Manager, The Sleep Company',
        banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
        gallery: [
            { name: "SmartGRID Display Wall" },
            { name: "Elev8 Smart Royale Bed Display" },
            { name: "Store Facade" },
            { name: "Reception Counter" },
            { name: "Brand Wall Display" },
            { name: "Store Exterior" },
            { name: "Mattress Display Zone" },
            { name: "Showroom Overview" }
        ]
    },
    'clove': {
        title: 'CLOVE DENTAL',
        shortDesc: 'India\'s Largest Dental Chain',
        desc: 'Delivered 30+ premium dental clinics across India over three years. Specialized in high-speed, end-to-end clinical fit-outs within 20-25 day timelines ensuring strict medical and aesthetic standards.',
        quote: '"I am pleased to share that Design Pulley has been a preferred vendor for Clove Dental, consistently delivering high-quality work across multiple locations, including Delhi, Jaipur, and Ahmedabad. Their commitment to excellence and professionalism has met our expectations, and we are very satisfied with their service. We confidently recommend Design Pulley for future projects, as their approach aligns well with our standards and requirements."',
        citeName: 'Taranjeet Singh',
        citeTitle: 'Project Manager, Clove Dental',
        banner: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80',
        gallery: [
            { name: "Main Entry Area" },
            { name: "Sterilization Room" },
            { name: "Operatory Room" },
            { name: "Reception Area" },
            { name: "Doctor Room" },
            { name: "Pantry" },
            { name: "Waiting Area" },
            { name: "Doctor Room" }
        ]
    },
    'giva': {
        title: 'GIVA',
        shortDesc: 'Silver | Gold | Lab Grown Diamonds',
        desc: 'Executed seamless retail projects combining civil, interior, and VM works for premium jewelry showrooms in Delhi and Noida.',
        quote: '"We are pleased to share that Design Pulley has been a trusted partner for GIVA, consistently delivering high-quality work across multiple project locations. Their strong commitment to excellence, attention to detail, and professional approach have consistently met our expectations. We are highly satisfied with their services and would confidently recommend them for future projects, as their standards align seamlessly with our expectations."',
        citeName: 'Kuldeep',
        citeTitle: 'Project Manager, GIVA',
        banner: 'https://images.unsplash.com/photo-1573408301145-b98c41470ce0?auto=format&fit=crop&q=80',
        gallery: [
            { name: "GIVA Store Front" },
            { name: "Store Interior Display" },
            { name: "Store Interior" },
            { name: "Ceiling Area" },
            { name: "Billing Counter" }
        ]
    },
    'ajay': {
        title: 'AJAY\'S FOOD COURT',
        shortDesc: 'Appy Wali Feeling',
        desc: 'Delivered a large-format 3,000 sq. ft. flagship F&B outlet in Navsari. Managed complete execution of fine-dine areas, party rooms, and commercial kitchens within 45 days.',
        quote: '"Design Pulley transformed our vision into reality with exceptional craftsmanship. From the vibrant red-and-white interiors to the warm wooden flooring and custom lighting, every detail reflects our brand’s energy. The team delivered on time and exceeded our expectations. We’re proud to welcome our guests to this space."',
        citeName: 'Ajay Patel',
        citeTitle: 'Founder, Ajay’s Food Court',
        banner: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80',
        gallery: [
            { name: "Order Counter" },
            { name: "Dining Hall" },
            { name: "Outdoor Seating" },
            { name: "Interior Overview" },
            { name: "Pantry & Kitchen" },
            { name: "Store Façade In Night" }
        ]
    },
    'abcoffee': {
        title: 'AB.COFFEE',
        shortDesc: 'Specialty Coffee Brewed Honestly',
        desc: 'Delivered modular, highly-efficient kiosk solutions and mall outlets with complete integration of plumbing, electrical, and display systems in record 20-25 day timelines.',
        quote: '"Design Pulley is our preferred partner for turnkey project execution of our retail outlets. They deliver projects on time and satisfactory to our quality standards. I recommend them for project execution of new stores."',
        citeName: 'Vishi Reja',
        citeTitle: 'Project Head, ab.Coffee',
        banner: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80',
        gallery: [
            { name: "Store Interior & Signage" },
            { name: "Seating Area Overview" },
            { name: "Cafe Ambience" },
            { name: "Kiosk Facade" },
            { name: "Counter & Seating" }
        ]
    },
    'shankari': {
        title: 'SHANKARI ENT CLINIC',
        shortDesc: 'Healing Hope Health',
        desc: 'Executed a state-of-the-art specialty clinic balancing medical precision with patient comfort. Delivered premium interiors with a custom mint green and gold aesthetic in 40 days.',
        quote: '"Design Pulley designed our clinic beautifully — the mint green palette, elegant arched corridor, and gold accents create a calming, premium atmosphere for our patients. Every space, from reception to consultation rooms, reflects care and thoughtfulness. We are truly delighted with the outcome."',
        citeName: 'Dr. Monika Bansal',
        citeTitle: 'Senior ENT Specialist, Shankari ENT Clinic',
        banner: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
        gallery: [
            { name: "Clinical Room" },
            { name: "Consultation Room" },
            { name: "Reception Area" },
            { name: "Doctor’s Cabin" }
        ]
    }
};

export default function PastWorks() {
    const [activeId, setActiveId] = useState('lladro');
    const detailRef = useRef(null);

    const selectProject = (id) => {
        setActiveId(id);
        if (detailRef.current) {
            const yOffset = -120; 
            const y = detailRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const activeProject = projects[activeId];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-surface font-body text-on-surface antialiased overflow-hidden min-h-screen"
        >
            <main className="pt-24 md:pt-32 pb-24">
                
                {/* Header */}
                <header className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto mb-16 md:mb-24 text-center">
                    <ScrollReveal>
                        <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-6 inline-block py-1 px-4 rounded-full border border-secondary/20 bg-secondary/5">Past Works</span>
                        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1]">
                            Built Environments <br className="hidden md:block"/> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Executed with Poise.</span>
                        </h1>
                    </ScrollReveal>
                </header>

                {/* Horizontal Scrolling Pill Tabs */}
                <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto mb-16 md:mb-24">
                    <ScrollReveal delay={0.2}>
                        <div className="flex overflow-x-auto pb-6 hide-scrollbar gap-4 snap-x snap-mandatory">
                            {Object.entries(projects).map(([id, data]) => {
                                const isActive = activeId === id;
                                return (
                                    <button
                                        key={id}
                                        onClick={() => selectProject(id)}
                                        className={`snap-center shrink-0 flex flex-col justify-center items-center px-8 py-5 transition-all duration-500 rounded-[2rem] border min-w-[200px] ${
                                            isActive 
                                                ? 'border-primary bg-primary text-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] scale-105' 
                                                : 'border-outline-variant/30 bg-surface-container-lowest text-primary hover:bg-surface-container-low hover:border-primary/30'
                                        }`}
                                    >
                                        <span className={`font-headline font-extrabold text-lg mb-1 transition-colors ${isActive ? 'text-white' : 'text-primary'}`}>
                                            {data.title}
                                        </span>
                                        <span className={`text-[10px] font-medium uppercase tracking-widest transition-colors ${isActive ? 'text-white/70' : 'text-secondary'}`}>
                                            {id}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                </section>

                {/* Project Detail Section */}
                <section ref={detailRef} className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {/* Project Banner & Content Area */}
                            <div className="bg-surface-container-lowest rounded-[3rem] p-6 md:p-12 border border-outline-variant/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] mb-12">
                                
                                {/* Info & Quote Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start mb-16">
                                    {/* Left: Project Details */}
                                    <div>
                                        <span className="text-secondary font-label text-xs uppercase tracking-[0.2em] mb-4 block font-bold">{activeProject.shortDesc}</span>
                                        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 tracking-tight">{activeProject.title}</h2>
                                        <p className="text-lg md:text-xl leading-relaxed text-on-surface-variant font-light max-w-xl">
                                            {activeProject.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Right: Client Quote */}
                                    <div className="flex flex-col justify-center h-full">
                                        <motion.div 
                                            whileHover={{ y: -5 }}
                                            className="bg-primary p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]"
                                        >
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_10s_infinite_linear]" />
                                            <span className="material-symbols-outlined text-white/10 absolute -top-4 -left-4 pointer-events-none" style={{ fontSize: "10rem", leading: 1 }}>format_quote</span>
                                            
                                            <p className="text-lg md:text-xl italic text-on-primary relative z-10 font-light leading-relaxed mb-8">
                                                {activeProject.quote}
                                            </p>
                                            
                                            <div className="relative z-10 flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                                                <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center font-headline font-bold text-lg">
                                                    {activeProject.citeName.charAt(0)}
                                                </div>
                                                <div>
                                                    <span className="block font-headline font-bold text-white text-lg">{activeProject.citeName}</span>
                                                    <span className="block font-label text-[10px] uppercase tracking-[0.2em] text-white/70">{activeProject.citeTitle}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Gallery Section */}
                                <div>
                                    <h3 className="font-headline text-2xl font-bold text-primary mb-8 border-b-2 border-primary/10 pb-4 inline-block">Project Gallery</h3>
                                    
                                    {/* Masonry-style Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                        {activeProject.gallery.map((img, index) => {
                                            // Make the first image larger (span 2 columns on large screens)
                                            const isLarge = index === 0;
                                            return (
                                                <motion.div 
                                                    key={index} 
                                                    whileHover={{ y: -5, scale: 1.02 }}
                                                    className={`group relative bg-surface-container overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 ${isLarge ? 'lg:col-span-2 lg:row-span-2 aspect-video' : 'aspect-square'}`}
                                                >
                                                    {/* Dummy Image via placehold.co */}
                                                    <img 
                                                        alt={img.name} 
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                        src={`https://placehold.co/800x800/1a1b26/ffffff?text=Image+Needed\\n\\n${encodeURIComponent(img.name)}`} 
                                                    />
                                                    
                                                    {/* Image Label Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                                                        <span className="text-white font-headline font-bold text-lg md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                            {img.name}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </section>

                {/* Modern CTA */}
                <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto mt-24">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                        <h2 className="text-on-primary font-headline text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter relative z-10">Ready to build your space?</h2>
                        <p className="text-on-primary/80 mb-12 text-lg max-w-2xl mx-auto font-light relative z-10">Our team of architects and project managers are ready to bring your vision to life with uncompromising precision.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <button className="w-full sm:w-auto rounded-full bg-surface text-primary px-10 py-4 font-headline font-bold tracking-[0.1em] hover:scale-105 transition-transform duration-300 shadow-xl uppercase text-sm">Download Brochure</button>
                            <button className="w-full sm:w-auto rounded-full border border-on-primary/30 text-on-primary px-10 py-4 font-headline font-bold tracking-[0.1em] hover:bg-on-primary/10 transition-colors duration-300 uppercase text-sm">Schedule a Visit</button>
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    );
}
