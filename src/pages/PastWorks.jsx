import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';

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
    "lladro": {
        "title": "LLADRÓ",
        "shortDesc": "Spain's Luxury Figurines, Delhi",
        "desc": "Executed three luxury flagship projects across Delhi NCR and Chennai. Provided complete Project Management Consultancy and bespoke furniture execution for spaces up to 7,500 sq. ft.",
        "quote": "\"Thank you Akash Lakdawala, Anurag Lohia and team for helping us with this dream project. Truly admire your passion, commitment and attention to detail. So professional in your approach with amazing energy levels made you unstoppable! So happy that we chose your team. Just keep it going. Wishing you loads of success!\"",
        "citeName": "Nikhil Lamba",
        "citeTitle": "CEO, Lladró India",
        "banner": "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80",
        "folder": "llardo",
        "gallery": [
                        {
                "name": "Firefly Collection Display",
                "file": "Firefly Collection Display.webp"
            },
            {
                "name": "Arch Cabinets",
                "file": "Arch Cabinets.webp"
            },
            {
                "name": "Figurine Display Wall",
                "file": "Figurine Display Wall.webp"
            },
            {
                "name": "Figurines Wall",
                "file": "Figurines Wall.webp"
            },

            {
                "name": "Grand Showroom Interior",
                "file": "Grand Showroom Interior.webp"
            },
            {
                "name": "Grand Showroom Overview",
                "file": "Grand Showroom Overview.webp"
            },
            {
                "name": "Lladró Chandelier Gallery",
                "file": "Lladró Chandelier Gallery.webp"
            },
            {
                "name": "Reception & Display",
                "file": "Reception & Display.webp"
            },
            {
                "name": "Showroom Interior",
                "file": "Showroom Interior.webp"
            }
        ]
    },
    "livspace": {
        "title": "LIVSPACE CASANTRO",
        "shortDesc": "Premium Retail Outlets",
        "desc": "Delivered 10+ premium retail and experience centers across India. Successfully executed large-format showrooms, office-cum-display centers up to 7,000 sq. ft., and over 100 residential projects.",
        "quote": "\"We have strong relationship with Design Pulley team and they have successfully executed experience center for us. We rely on their service PAN India and are satisfied with their output. They are focused on delivering projects on time and we appreciate their communication skills.\"",
        "citeName": "Sailesh Tiwari",
        "citeTitle": "Project Lead, Livspace",
        "banner": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
        "folder": "Livspace Casantro",
        "gallery": [
                        {
                "name": "Luxury Kitchen Display Area",
                "file": "Luxury Kitchen Display Area.webp"
            },
                        {
                "name": "Showroom Display Area",
                "file": "Showroom Display Area.webp"
            },
            {
                "name": "Display Unit Area",
                "file": "Display Unit Area.webp"
            },
            {
                "name": "L Shape Kitchen Area",
                "file": "L Shape Kitchen Area.webp"
            },
            {
                "name": "Livspace Store Front",
                "file": "Livspace Store Front.webp"
            },


            {
                "name": "Showroom Interior",
                "file": "Showroom Interior.webp"
            }
        ]
    },
    "sleep": {
        "title": "THE SLEEP COMPANY",
        "shortDesc": "Retail Innovation & Store Fit-outs",
        "desc": "Executed comprehensive store fit-outs, VM, and branding works across 10+ key cities. Delivered complete turnkey solutions including furniture and façade execution within aggressive one-month timelines.",
        "quote": "\"Design Pulley have been working on our various projects and have always been completely satisfied with their performance. They do an excellent job, are always punctual, and offer the most competitive rates in town. I'm happy to recommend Design Pulley.\"",
        "citeName": "Paresh Ladwa",
        "citeTitle": "Project Manager, The Sleep Company",
        "banner": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
        "folder": "The Sleep Company",
        "gallery": [
                        {
                "name": "Showroom Overview",
                "file": "New/Showroom Overview.webp"
            },
            {
                "name": "Elev8 Smart Royale Bed Display",
                "file": "Elev8 Smart Royale Bed Display.webp"
            },
            {
                "name": "Store Front Banner",
                "file": "FA4BB863-05F5-4520-B6CD-37522F6DC72F.webp"
            },
            {
                "name": "Brand Wall Display",
                "file": "New/Brand Wall Display.webp"
            },
            {
                "name": "Elev8 Smart Royale Bed Display",
                "file": "New/Elev8 Smart Royale Bed Display.webp"
            },
            {
                "name": "Mattress Display Zone",
                "file": "New/Mattress Display Zone.webp"
            },
            {
                "name": "Reception Counter",
                "file": "New/Reception Counter.webp"
            },

            {
                "name": "SmartGRID Display Wall",
                "file": "New/SmartGRID Display Wall.webp"
            },
            {
                "name": "Store Facade",
                "file": "New/Store Facade.webp"
            }
        ]
    },
    "clove": {
        "title": "CLOVE DENTAL",
        "shortDesc": "India's Largest Dental Chain",
        "desc": "Delivered 30+ premium dental clinics across India over three years. Specialized in high-speed, end-to-end clinical fit-outs within 20-25 day timelines ensuring strict medical and aesthetic standards.",
        "quote": "\"I am pleased to share that Design Pulley has been a preferred vendor for Clove Dental, consistently delivering high-quality work across multiple locations, including Delhi, Jaipur, and Ahmedabad. Their commitment to excellence and professionalism has met our expectations, and we are very satisfied with their service. We confidently recommend Design Pulley for future projects, as their approach aligns well with our standards and requirements.\"",
        "citeName": "Taranjeet Singh",
        "citeTitle": "Project Manager, Clove Dental",
        "banner": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
        "folder": "Clove Dental",
        "gallery": [
                        {
                "name": "Main Entry Area",
                "file": "Main Entry Area.webp"
            },
                        {
                "name": "Waiting Area",
                "file": "Waiting Area.webp"
            },
            {
                "name": "Doctor Room",
                "file": "Doctor Room.webp"
            },
            {
                "name": "Doctor Room2",
                "file": "Doctor Room2.webp"
            },

            {
                "name": "Operatory Room",
                "file": "Operatory Room.webp"
            },
            {
                "name": "Reception Area",
                "file": "Reception Area.webp"
            },

        ]
    },
    "giva": {
        "title": "GIVA",
        "shortDesc": "Silver | Gold | Lab Grown Diamonds",
        "desc": "Executed seamless retail projects combining civil, interior, and VM works for premium jewelry showrooms in Delhi and Noida.",
        "quote": "\"We are pleased to share that Design Pulley has been a trusted partner for GIVA, consistently delivering high-quality work across multiple project locations. Their strong commitment to excellence, attention to detail, and professional approach have consistently met our expectations. We are highly satisfied with their services and would confidently recommend them for future projects, as their standards align seamlessly with our expectations.\"",
        "citeName": "Kuldeep",
        "citeTitle": "Project Manager, GIVA",
        "banner": "https://images.unsplash.com/photo-1573408301145-b98c41470ce0?auto=format&fit=crop&q=80",
        "folder": "Giva",
        "gallery": [
                        {
                "name": "GIVA Store Front",
                "file": "GIVA Store Front.webp"
            },
                        {
                "name": "Store Interior",
                "file": "Store Interior.webp"
            },
            {
                "name": "Billing Counter",
                "file": "Billing Counter.webp"
            },
            {
                "name": "Ceiling Area",
                "file": "Ceiling Area.webp"
            },

            {
                "name": "Store Interior Display",
                "file": "Store Interior Display.webp"
            },
             {
                "name": "GIVA Main Entrance",
                "file": "GIVA Store Front.webp"
            },

        ]
    },
    "ajay": {
        "title": "AJAY'S FOOD COURT",
        "shortDesc": "Appy Wali Feeling",
        "desc": "Delivered a large-format 3,000 sq. ft. flagship F&B outlet in Navsari. Managed complete execution of fine-dine areas, party rooms, and commercial kitchens within 45 days.",
        "quote": "\"Design Pulley transformed our vision into reality with exceptional craftsmanship. From the vibrant red-and-white interiors to the warm wooden flooring and custom lighting, every detail reflects our brand’s energy. The team delivered on time and exceeded our expectations. We’re proud to welcome our guests to this space.\"",
        "citeName": "Ajay Patel",
        "citeTitle": "Founder, Ajay’s Food Court",
        "banner": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
        "folder": "Ajays final",
        "gallery": [
            {
                "name": "Dining Hall",
                "file": "Dining Hall.webp"
            },
            {
                "name": "Interior Overview",
                "file": "Interior Overview.webp"
            },
            {
                "name": "Order Counter",
                "file": "Order Counter.webp"
            },
            {
                "name": "Outdoor Seating",
                "file": "Outdoor Seating.webp"
            },
            {
                "name": "Pantry & Kitchen",
                "file": "Pantry & Kitchen.webp"
            },
            {
                "name": "Store Façade In Night",
                "file": "Store Façade In Night.webp"
            }
        ]
    },
    "abcoffee": {
        "title": "AB.COFFEE",
        "shortDesc": "Specialty Coffee Brewed Honestly",
        "desc": "Delivered modular, highly-efficient kiosk solutions and mall outlets with complete integration of plumbing, electrical, and display systems in record 20-25 day timelines.",
        "quote": "\"Design Pulley is our preferred partner for turnkey project execution of our retail outlets. They deliver projects on time and satisfactory to our quality standards. I recommend them for project execution of new stores.\"",
        "citeName": "Vishi Reja",
        "citeTitle": "Project Head, ab.Coffee",
        "banner": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80",
        "folder": "Abcoffee",
        "gallery": [
            {
                "name": "Cafe Ambience",
                "file": "Cafe Ambience.webp"
            },
            {
                "name": "Counter & Seating",
                "file": "Counter & Seating.webp"
            },
            {
                "name": "Kiosk Facade",
                "file": "Kiosk Facade.webp"
            },
            {
                "name": "Seating Area Overview",
                "file": "Seating Area Overview.webp"
            },
            {
                "name": "Store Interior & Signage",
                "file": "Store Interior & Signage.webp"
            }
        ]
    },
    "shankari": {
        "title": "SHANKARI ENT CLINIC",
        "shortDesc": "Healing Hope Health",
        "desc": "Executed a state-of-the-art specialty clinic balancing medical precision with patient comfort. Delivered premium interiors with a custom mint green and gold aesthetic in 40 days.",
        "quote": "\"Design Pulley designed our clinic beautifully — the mint green palette, elegant arched corridor, and gold accents create a calming, premium atmosphere for our patients. Every space, from reception to consultation rooms, reflects care and thoughtfulness. We are truly delighted with the outcome.\"",
        "citeName": "Dr. Monika Bansal",
        "citeTitle": "Senior ENT Specialist, Shankari ENT Clinic",
        "banner": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
        "folder": "Shankari ENT clinic",
        "gallery": [
            {
                "name": "Reception Area",
                "file": "Reception Area.webp"
            },
            {
                "name": "Clinical Room",
                "file": "Clinical Room.webp"
            },
            {
                "name": "Consultation Room",
                "file": "Consultation Room.webp"
            },
            {
                "name": "Doctor’s Cabin",
                "file": "Doctor’s Cabin.webp"
            }
            
        ]
    }
};

export default function PastWorks() {
    const location = useLocation();
    const [activeId, setActiveId] = useState(location.state?.clientId || 'lladro');
    const [previewImage, setPreviewImage] = useState(null);
    const navigate = useNavigate();
    const detailRef = useRef(null);

    useEffect(() => {
        if (location.state?.clientId && projects[location.state.clientId]) {
            setActiveId(location.state.clientId);
            setTimeout(() => {
                if (detailRef.current) {
                    const yOffset = -120; 
                    const y = detailRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.state]);

    useEffect(() => {
        if (previewImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [previewImage]);

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
            transition={{ duration: 0.4 }}
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 grid-flow-row-dense">
                                        {activeProject.gallery.map((img, index) => {
                                            const totalItems = activeProject.gallery.length;
                                            const isLarge = index === 0;
                                            
                                            let lgColSpan = 'lg:col-span-2';
                                            let lgRowSpan = '';
                                            let lgAspect = 'lg:aspect-square';
                                            
                                            if (isLarge) {
                                                lgColSpan = 'lg:col-span-4';
                                                lgRowSpan = 'lg:row-span-2';
                                                lgAspect = 'lg:aspect-auto';
                                            } else {
                                                const rem = totalItems % 3;
                                                if (rem === 1 && index === totalItems - 1) {
                                                    lgColSpan = 'lg:col-span-6';
                                                    lgAspect = 'lg:aspect-[3/1]';
                                                } else if (rem === 2 && index >= totalItems - 2) {
                                                    lgColSpan = 'lg:col-span-3';
                                                    lgAspect = 'lg:aspect-[3/2]';
                                                }
                                            }

                                            let mdColSpan = 'md:col-span-1';
                                            let mdAspect = 'md:aspect-square';
                                            
                                            if (totalItems % 2 !== 0 && index === totalItems - 1) {
                                                mdColSpan = 'md:col-span-2';
                                                mdAspect = 'md:aspect-[2/1]';
                                            }

                                            return (
                                                <motion.div 
                                                    key={index} 
                                                    onClick={() => setPreviewImage(img)}
                                                    whileHover={{ y: -5, scale: 1.02 }}
                                                    className={`group relative bg-surface-container overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-square ${mdAspect} ${mdColSpan} ${lgAspect} ${lgColSpan} ${lgRowSpan}`}
                                                >
                                                    {/* Project Image */}
                                                    <img 
                                                        alt={img.name} 
                                                        loading="lazy"
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                        src={`/assets/work-images/${activeProject.folder}/${img.file}`} 
                                                    />
                                                    
                                                    {/* Image Label Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/5 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                                                        <span className="text-white font-headline font-bold text-lg md:text-xl translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
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
                            <a href="/files/Design_Pulley_Broucher.pdf" target="_blank" rel="noopener noreferrer" download className="w-full sm:w-auto rounded-full bg-surface text-primary px-10 py-4 font-headline font-bold tracking-[0.1em] hover:scale-105 transition-transform duration-300 shadow-xl uppercase text-sm">Download Brochure</a>
                            <button onClick={() => navigate('/contact')} className="w-full sm:w-auto rounded-full border border-on-primary/30 text-on-primary px-10 py-4 font-headline font-bold tracking-[0.1em] hover:bg-on-primary/10 transition-colors duration-300 uppercase text-sm">Schedule a Visit</button>
                        </div>
                    </div>
                </section>

                {/* Lightbox / Image Preview */}
                <AnimatePresence>
                    {previewImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-pointer backdrop-blur-md"
                            onClick={() => setPreviewImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="relative max-w-7xl max-h-full flex flex-col items-center justify-center cursor-default w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={`/assets/work-images/${activeProject.folder}/${previewImage.file}`}
                                    alt={previewImage.name}
                                    className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                                />
                                <div className="mt-6 text-center">
                                    <h3 className="text-white font-headline text-2xl md:text-3xl font-bold">{previewImage.name}</h3>
                                    <p className="text-white/60 font-body text-sm mt-1 uppercase tracking-widest">{activeProject.title}</p>
                                </div>
                                <button
                                    className="absolute -top-4 right-0 md:-top-12 md:-right-12 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full hover:bg-white/20 backdrop-blur-sm"
                                    onClick={() => setPreviewImage(null)}
                                >
                                    <span className="material-symbols-outlined text-3xl block">close</span>
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </motion.div>
    );
}
