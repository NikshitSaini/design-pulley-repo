import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import livspaceBanner from '../assets/images/Livspace/banner.jpg';
import cloveDentalBanner from '../assets/images/Clove Dental/banner.webp';
import lladroBanner from '../assets/images/llardo/banner.jpg';
import tscBanner from '../assets/images/The sleep company/banner.JPG';
import abCoffeeBanner from '../assets/images/Abcoffee/banner.jpg';
import givaBanner from '../assets/images/Giva/banner.jpg';

import heroBanner1 from '../assets/banner/1hero.jpg';
import heroBanner2 from '../assets/banner/2hero.jpg';
import heroBanner3 from '../assets/banner/3hero.jpg';
import heroBanner4 from '../assets/banner/4hero.jpg';

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

function AnimatedNumber({ value }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (inView) {
            let startTimestamp = null;
            const duration = 2000;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                
                setDisplay(Math.floor(easeOutQuart * value));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    setDisplay(value);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, value]);

    return <span ref={ref}>{display}</span>;
}

const heroSlides = [
    {
        image: heroBanner1,
        title: "Retail Execution",
        description: "Transforming retail spaces across India with precision and speed."
    },
    {
        image: heroBanner2,
        title: "Boutique Luxury",
        description: "Creating premium experiences for global luxury brands."
    },
    {
        image: heroBanner3,
        title: "Experience Centers",
        description: "Designing engaging spaces that convert visitors into customers."
    },
    {
        image: heroBanner4,
        title: "F&B Rollouts",
        description: "Rapid deployment of scalable hospitality models."
    }
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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
                <section className="relative min-h-[100svh] pt-32 pb-12 flex flex-col justify-center overflow-hidden" id="home">
                    {/* Full Background Image Slider */}
                    <div className="absolute inset-0 z-0">
                        <AnimatePresence>
                            <motion.img
                                key={currentSlide}
                                src={heroSlides[currentSlide].image}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full object-cover"
                                alt={heroSlides[currentSlide].title}
                            />
                        </AnimatePresence>
                        {/* Overlay to make text stand out */}
                        <div className="absolute inset-0 bg-black/50 z-10"></div>
                        {/* Subtle gradient from bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10"></div>
                    </div>

                    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-12 flex flex-col justify-end relative z-20 h-full mt-auto pb-12">
                        
                        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-20">
                            {/* Text Section */}
                            <div className="flex-1 text-white text-center lg:text-left max-w-3xl">
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="mb-6 text-[0.7rem] font-label font-semibold uppercase tracking-[0.35em] text-white/80 inline-block py-1 px-4 rounded-full border border-white/30 bg-black/20 backdrop-blur-md"
                                >
                                    Pan-India retail execution
                                </motion.p>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="mx-auto lg:mx-0 font-headline text-5xl font-extrabold leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-xl"
                                >
                                    Build your space,
                                    <br />
                                    <span className="text-white">at your pace.</span>
                                </motion.h1>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="mx-auto lg:mx-0 mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl font-light drop-shadow-md"
                                >
                                    Execute your retail expansion plans across India with a team that handles design, procurement, and site delivery with one point of accountability.
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="mt-10 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start"
                                >
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-headline text-sm font-bold tracking-[0.18em] text-primary transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                                    >
                                        START YOUR PROJECT
                                    </a>
                                    <a
                                        href="#work"
                                        className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 font-headline text-sm font-bold tracking-[0.18em] text-white transition-all hover:bg-white/10 hover:border-white"
                                    >
                                        VIEW PORTFOLIO
                                    </a>
                                </motion.div>
                            </div>

                            {/* Slide Information & Controls */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="bg-black/30 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2rem] w-full max-w-sm text-left shadow-2xl"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="min-h-[100px]"
                                    >
                                        <h3 className="text-2xl font-headline font-bold tracking-tight text-white mb-2">{heroSlides[currentSlide].title}</h3>
                                        <p className="text-sm text-white/70 leading-relaxed font-light">{heroSlides[currentSlide].description}</p>
                                    </motion.div>
                                </AnimatePresence>
                                
                                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/20">
                                    {heroSlides.map((_, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-12 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'w-4 bg-white/30 hover:bg-white/60'}`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* About Us */}
                <section className="py-24 md:py-32 bg-surface-container-lowest overflow-hidden relative" id="about">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                        {/* Top Section: About Text & Quote */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
                            {/* Left: About Text */}
                            <ScrollReveal>
                                <span className="text-[0.75rem] font-label font-semibold tracking-[0.1em] text-secondary uppercase block mb-6 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 w-fit">About Us</span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-primary mb-6 tracking-tighter leading-[1.1]">Scale. Precision.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Engineering.</span></h2>
                                <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                                    We bridge the gap between architectural vision and ground-level execution. With decades of on-site technical expertise, we ensure flawless execution of complex designs, delivering consistent quality and reliable timelines across India.
                                </p>
                            </ScrollReveal>
                            
                            {/* Right: Quote */}
                            <ScrollReveal delay={0.2}>
                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="bg-surface p-10 md:p-12 relative overflow-hidden rounded-[2.5rem] border border-outline-variant/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
                                >
                                    <span 
                                        className="material-symbols-outlined text-primary/5 absolute -top-4 -left-4 pointer-events-none" 
                                        style={{ fontSize: "10rem", leading: 1 }}
                                    >
                                        format_quote
                                    </span>
                                    <p className="text-lg md:text-xl italic text-on-surface-variant relative z-10 font-light leading-relaxed pt-2">
                                        "Our mission is to bridge the gap between architectural vision and ground-level execution, ensuring that every retail square foot generates value."
                                    </p>
                                    <div className="mt-8 flex items-center gap-4 relative z-10">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-headline font-bold">AL</div>
                                        <p className="text-xs font-label text-secondary uppercase tracking-widest font-bold">Anurag Lohia, Operations</p>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        </div>

                        {/* Middle Section: Leadership */}
                        <div className="mb-20">
                            <ScrollReveal>
                                <h3 className="text-2xl font-headline font-bold text-primary mb-10 border-b-2 border-primary/20 w-fit pb-3">Leadership</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    <div className="group">
                                        <h4 className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">Anurag Lohia</h4>
                                        <p className="text-sm text-outline font-medium mt-1">Founder &amp; Strategic Lead</p>
                                    </div>
                                    <div className="group">
                                        <h4 className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">Akash Lakdawala</h4>
                                        <p className="text-sm text-outline font-medium mt-1">Executive Director</p>
                                    </div>
                                    <div className="group">
                                        <h4 className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">Himanshu Lakdawala</h4>
                                        <p className="text-sm text-outline font-medium mt-1">Operations Director</p>
                                    </div>
                                    <div className="group">
                                        <h4 className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">Aamir Motiwala</h4>
                                        <p className="text-sm text-outline font-medium mt-1">Project Lead</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Merged Stats Bar */}
                        <div className="bg-primary px-8 py-16 sm:px-12 md:px-16 rounded-[3rem] relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_10s_infinite_linear]" />
                            <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 md:gap-12 relative z-10">
                                {[
                                    { val: 50, label: "Projects Delivered" },
                                    { val: 300, label: "Skilled Workers" },
                                    { val: 15, label: "Site Engineers" },
                                    { val: 8, label: "States PAN India" },
                                    { val: 7, label: "Repeat Clients" }
                                ].map((stat, i) => (
                                    <ScrollReveal key={i} delay={i * 0.1} className="text-center">
                                        <div className="mb-3 text-4xl font-headline font-extrabold tracking-tighter text-on-primary sm:text-5xl md:text-6xl drop-shadow-md">
                                            <AnimatedNumber value={stat.val} />+
                                        </div>
                                        <div className="text-[0.65rem] md:text-xs font-label font-bold uppercase tracking-[0.2em] text-on-primary/80">{stat.label}</div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Brands Choose Us */}
                <section className="bg-surface px-4 py-24 sm:px-6 md:px-12 md:py-32 relative">
                    <div className="mx-auto max-w-[1440px]">
                        <ScrollReveal className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
                            <span className="mb-6 inline-block text-[0.7rem] font-label font-semibold uppercase tracking-[0.2em] text-secondary border border-secondary/20 px-4 py-1.5 rounded-full bg-secondary/5">Why Brands Choose Us</span>
                            <h2 className="text-4xl font-headline font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl leading-[1.1]">
                                Engineering-led execution with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">one accountable team.</span>
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
                            {[
                                { icon: "architecture", title: "Engineering Precision", desc: "Decades of on-site technical expertise ensuring flawless execution of complex designs." },
                                { icon: "groups", title: "Scalable Workforce", desc: "300+ skilled workers ready for rapid deployment across multiple concurrent sites." },
                                { icon: "task_alt", title: "Single-Point Accountability", desc: "Seamless project management from design conceptualization to final handover." }
                            ].map((feature, i) => (
                                <ScrollReveal key={i} delay={0.2 + (i * 0.1)}>
                                    <motion.div 
                                        whileHover={{ y: -10 }}
                                        className="rounded-[2.5rem] border border-outline-variant/10 bg-surface-container-lowest p-8 md:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full group"
                                    >
                                        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                                            <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                        </div>
                                        <h3 className="mb-4 text-2xl font-headline font-bold tracking-tight text-primary">{feature.title}</h3>
                                        <p className="text-base leading-relaxed text-on-surface-variant font-light">{feature.desc}</p>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Big India Map Section */}
                <section className="py-24 md:py-32 bg-surface-container-lowest px-4 sm:px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,13,42,0.03)_0%,transparent_100%)] pointer-events-none"></div>
                    <div className="max-w-[1440px] mx-auto relative z-10">
                        <ScrollReveal className="text-center mb-16 md:mb-24">
                            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-6 inline-block py-1 px-4 rounded-full border border-secondary/20 bg-secondary/5">Operational Footprint</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tighter text-primary">Pan-India Reach.</h2>
                            <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-on-surface-variant font-light">
                                We deliver consistent quality and reliable timelines regardless of location. Our network supports retail expansion across major Indian hubs with the same execution standard.
                            </p>
                        </ScrollReveal>

                        <div className="w-full max-w-5xl mx-auto">
                            <ScrollReveal delay={0.2}>
                                <div className="bg-surface rounded-[3rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-outline-variant/10 flex flex-col items-center hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] transition-shadow duration-700 group">
                                    <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem]">
                                        <img
                                            className="w-full h-auto object-contain mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                            alt="Map showing Design Pulley's pan-India presence"
                                            src="/stitch/pan-india-map.png"
                                        />
                                        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                                    </div>
                                    
                                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                                        {['Delhi NCR', 'Gujarat', 'Maharashtra', 'Karnataka', 'West Bengal', 'Chennai'].map((city, i) => (
                                            <div key={city} className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container border border-outline-variant/20 shadow-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                                                <span className="material-symbols-outlined text-secondary text-sm">location_on</span>
                                                <span className="font-label text-xs uppercase tracking-widest font-bold text-primary">{city}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Our Work (Portfolio) */}
                <section className="py-24 md:py-32 bg-surface relative" id="work">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
                        <ScrollReveal className="mb-16 md:mb-24 flex flex-col items-center text-center">
                            <span className="text-[0.75rem] font-label font-semibold tracking-[0.2em] text-secondary uppercase block mb-6 border border-secondary/20 px-4 py-1.5 rounded-full bg-secondary/5 w-fit">Featured Projects</span>
                            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-primary tracking-tight">Architectural Impact.</h2>
                        </ScrollReveal>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {[
                                { title: "Livspace", loc: "3,000 SQFT | Gandhinagar", tag: "Retail Execution", img: livspaceBanner },
                                { title: "Clove Dental", loc: "8+ Clinics | Delhi, Jaipur", tag: "Healthcare", img: cloveDentalBanner },
                                { title: "Lladró", loc: "10,000 SQFT | New Delhi", tag: "Boutique Luxury", img: lladroBanner },
                                { title: "The Sleep Company", loc: "800–1,500 SQFT | PAN India", tag: "Retail Experience", img: tscBanner },
                                { title: "abCoffee", loc: "Small Format | Gurgaon", tag: "F&B Concept", img: abCoffeeBanner },
                                { title: "Giva", loc: "Premium Outlets | PAN India", tag: "Retail", img: givaBanner }
                            ].map((project, i) => (
                                <ScrollReveal key={i} delay={0.1 * (i % 3)}>
                                    <div className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500">
                                        <div className="aspect-[4/5] overflow-hidden">
                                            <img 
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                                alt={project.title} 
                                                src={project.img}
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-90 transition-all duration-500 flex flex-col justify-end p-8 text-on-primary">
                                            <motion.div 
                                                initial={{ y: 20, opacity: 0 }} 
                                                whileInView={{ y: 0, opacity: 1 }} 
                                                transition={{ duration: 0.4 }}
                                            >
                                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-label text-secondary-container mb-3 block">{project.loc}</span>
                                                <h4 className="text-2xl font-headline font-bold mb-4">{project.title}</h4>
                                                <div className="border-t border-on-primary/20 pt-4 flex justify-between items-center mt-6">
                                                    <span className="text-xs font-label font-bold tracking-wider">{project.tag}</span>
                                                    <div className="w-8 h-8 rounded-full bg-on-primary/10 flex items-center justify-center group-hover:bg-on-primary group-hover:text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-24 md:py-32 bg-surface-container-lowest relative overflow-hidden" id="testimonials">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(189,197,234,0.05)_0%,transparent_70%)] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                        <ScrollReveal className="text-center mb-16 md:mb-24 flex flex-col items-center">
                            <span className="text-[0.75rem] font-label font-semibold tracking-[0.2em] text-secondary uppercase block mb-6 border border-secondary/20 px-4 py-1.5 rounded-full bg-secondary/5 w-fit">Client Feedback</span>
                            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-primary tracking-tight">Voices of Collaboration.</h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                            {/* Quote 1 */}
                            <ScrollReveal delay={0.1}>
                                <motion.div whileHover={{ y: -10 }} className="bg-surface p-10 flex flex-col justify-between rounded-[2.5rem] border border-outline-variant/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 h-full">
                                    <p className="text-lg text-on-surface-variant mb-10 leading-relaxed font-light">"The attention to detail in our flagship store was unparalleled. Design Pulley executed the 10,000 sqft Lladró Delhi store with a unique polycarbonate facade. Their passion, commitment, and high energy levels were remarkable."</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-headline font-bold">NL</div>
                                        <div>
                                            <div className="font-headline font-bold text-primary">Nikhil Lamba</div>
                                            <div className="text-[10px] md:text-xs font-label text-secondary uppercase tracking-[0.2em] mt-1 font-bold">CEO, Lladró India</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                            {/* Quote 2 */}
                            <ScrollReveal delay={0.2}>
                                <motion.div whileHover={{ y: -10 }} className="bg-primary p-10 flex flex-col justify-between text-on-primary rounded-[2.5rem] shadow-2xl transform md:-translate-y-8 h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                                    <p className="text-lg mb-10 leading-relaxed font-light relative z-10">"Design Pulley is our preferred vendor for North and West India. They've handed over 8+ clinics with consistent, high-quality work in Delhi, Jaipur, and Ahmedabad — always with post-handover support."</p>
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-headline font-bold">TS</div>
                                        <div>
                                            <div className="font-headline font-bold">Taranjeet Singh</div>
                                            <div className="text-[10px] md:text-xs font-label text-secondary-container uppercase tracking-[0.2em] mt-1 font-bold">Construction Manager</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                            {/* Quote 3 */}
                            <ScrollReveal delay={0.3}>
                                <motion.div whileHover={{ y: -10 }} className="bg-surface p-10 flex flex-col justify-between rounded-[2.5rem] border border-outline-variant/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 h-full">
                                    <p className="text-lg text-on-surface-variant mb-10 leading-relaxed font-light">"Design Pulley's reliable PAN India service and on-time delivery is exceptional. Their 3,000 sqft Gandhinagar Experience Center was so impressive it led to two additional wins in Pune."</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-headline font-bold">ST</div>
                                        <div>
                                            <div className="font-headline font-bold text-primary">Sailesh Tiwari</div>
                                            <div className="text-[10px] md:text-xs font-label text-secondary uppercase tracking-[0.2em] mt-1 font-bold">Project Lead, Livspace</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Contact Us */}
                <section className="py-24 md:py-32 bg-primary relative overflow-hidden" id="contact">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #fff 2px, transparent 0)", backgroundSize: "48px 48px" }}></div>
                    </div>
                    <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(189,197,234,0.1)_0%,transparent_70%)] rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                            <ScrollReveal>
                                <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-on-primary mb-8 tracking-tighter leading-[1.05]">Ready to<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-on-primary to-secondary-container">Transform?</span></h2>
                                <p className="text-on-primary/80 text-lg md:text-xl max-w-md mb-12 font-light leading-relaxed">
                                    Send us your project brief and our engineering team will get back to you within 24 hours.
                                </p>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 group cursor-pointer">
                                        <div className="w-14 h-14 bg-on-primary/10 rounded-full flex items-center justify-center text-on-primary group-hover:bg-on-primary group-hover:text-primary transition-colors duration-300 shrink-0">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <span className="text-on-primary font-headline font-bold text-lg md:text-xl break-all relative inline-block">
                                            projects@designpulley.com
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-container group-hover:w-full transition-all duration-500"></span>
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-6 group cursor-pointer">
                                        <div className="w-14 h-14 bg-on-primary/10 rounded-full flex items-center justify-center text-on-primary group-hover:bg-on-primary group-hover:text-primary transition-colors duration-300 shrink-0">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <span className="text-on-primary font-headline font-bold text-lg md:text-xl relative inline-block">
                                            +91 98765 43210
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-container group-hover:w-full transition-all duration-500"></span>
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.2}>
                                <div className="bg-surface p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                                    <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="relative group">
                                                <input className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary text-primary font-medium placeholder-transparent peer transition-colors" id="name" placeholder="Name" type="text"/>
                                                <label htmlFor="name" className="absolute left-0 -top-3.5 text-[0.65rem] font-label text-secondary uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[0.65rem] peer-focus:text-secondary font-bold">Full Name</label>
                                            </div>
                                            <div className="relative group">
                                                <input className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary text-primary font-medium placeholder-transparent peer transition-colors" id="company" placeholder="Company" type="text"/>
                                                <label htmlFor="company" className="absolute left-0 -top-3.5 text-[0.65rem] font-label text-secondary uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[0.65rem] peer-focus:text-secondary font-bold">Company</label>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="relative group">
                                                <input className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary text-primary font-medium placeholder-transparent peer transition-colors" id="city" placeholder="City" type="text"/>
                                                <label htmlFor="city" className="absolute left-0 -top-3.5 text-[0.65rem] font-label text-secondary uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[0.65rem] peer-focus:text-secondary font-bold">City</label>
                                            </div>
                                            <div className="relative">
                                                <label className="absolute left-0 -top-3.5 text-[0.65rem] font-label text-secondary uppercase tracking-[0.2em] font-bold">Project Type</label>
                                                <select className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary text-primary font-medium appearance-none cursor-pointer">
                                                    <option value="Retail Execution">Retail Execution</option>
                                                    <option value="Commercial Interior">Commercial Interior</option>
                                                    <option value="Turnkey Build">Turnkey Build</option>
                                                    <option value="Consulting">Consulting</option>
                                                </select>
                                                <span className="material-symbols-outlined absolute right-0 top-3 text-outline pointer-events-none">expand_more</span>
                                            </div>
                                        </div>
                                        <div className="relative group pt-4">
                                            <textarea className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary text-primary font-medium placeholder-transparent peer transition-colors resize-none" id="message" placeholder="Message" rows={3}></textarea>
                                            <label htmlFor="message" className="absolute left-0 0 text-[0.65rem] font-label text-secondary uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:0 peer-focus:text-[0.65rem] peer-focus:text-secondary font-bold">Project Details</label>
                                        </div>
                                        <button className="w-full rounded-full bg-primary text-on-primary py-5 font-headline font-bold text-lg hover:bg-tertiary transition-all duration-300 hover:shadow-[0_10px_20px_rgba(5,13,42,0.2)] hover:-translate-y-1 mt-6 flex items-center justify-center gap-3">
                                            Send Inquiry
                                            <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                        </button>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    );
}
