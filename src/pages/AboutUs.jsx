import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

// Reusable Animated Number
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

export default function AboutUs() {
    const navigate = useNavigate();

    const scrollToOperational = () => {
        const el = document.getElementById('operational-footprint');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-surface text-on-surface font-body antialiased overflow-hidden min-h-screen"
        >
            <main className="pt-24 md:pt-32 pb-24">
                
                {/* Hero Section */}
                <section className="relative px-4 sm:px-6 md:px-12 mb-24 md:mb-32">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div className="z-10 order-2 lg:order-1">
                                <ScrollReveal>
                                    <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-6 inline-block py-1 px-4 rounded-full border border-secondary/20 bg-secondary/5">Our Legacy</span>
                                    <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[1] mb-8">
                                        Precision in <br/>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Commercial</span> <br/>
                                        Craft.
                                    </h1>
                                    <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed font-light mb-10">
                                        Design Pulley is a turnkey interior design firm that executes retail expansion plans across India. We bridge the gap between architectural vision and ground-level execution, ensuring every retail square foot generates value.
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <button onClick={scrollToOperational} type="button" className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors duration-500">
                                            <span className="material-symbols-outlined text-2xl">arrow_downward</span>
                                        </button>
                                        <button onClick={scrollToOperational} type="button" className="text-sm font-label uppercase tracking-[0.2em] font-bold text-primary underline-offset-2 hover:underline">Discover More</button>
                                    </div>
                                </ScrollReveal>
                            </div>
                            
                            <div className="relative order-1 lg:order-2">
                                <ScrollReveal delay={0.2}>
                                    <div className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:ml-auto overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-outline-variant/10">
                                        <img 
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                                            alt="Modern architectural interior" 
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4_3tZDclc1SEYazGnvqbBzwDJLb1vBQPA5Fdne-qSkvTEkjG-t2Ty3x4bzN1OaC4R5AldxkUpV_uDa6VCWSsXmHeGJjWgQ1f4SwTMb7dJNvkRZhuLyxeGzpymf2RDQEkDtx2uYfFlbOErMUcbrPydTWxSXQJCJNLr5bJ6ZLTH1A1mSi1JnvG7Lmvhmb1Zo4--Tk6B4Bmvb0BiZZjmkCLe2-UZdKv33VuydvcAYvDCl2B6JKiyhaMX2NE-TJ-BNCTwO51IuzR4"
                                        />
                                    </div>
                                    <motion.div 
                                        whileHover={{ y: -5 }}
                                        className="absolute -bottom-10 lg:-bottom-16 -left-4 lg:-left-12 bg-surface/80 backdrop-blur-2xl p-8 md:p-10 max-w-[280px] md:max-w-xs shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2.5rem] border border-outline-variant/20 z-20"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                            <span className="material-symbols-outlined">flag</span>
                                        </div>
                                        <p className="font-headline font-bold text-primary mb-3 text-xl">Our Mission</p>
                                        <p className="text-sm text-on-surface-variant leading-relaxed font-light">To execute retail expansion plans across India with precision, delivering on-time and within budget through our 15+ site engineers and 300+ skilled workers.</p>
                                    </motion.div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Big India Map Section */}
                <section id="operational-footprint" className="py-24 md:py-32 bg-surface-container-lowest px-4 sm:px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,13,42,0.03)_0%,transparent_100%)]"></div>
                    <div className="max-w-[1440px] mx-auto relative z-10">
                        <ScrollReveal className="text-center mb-16 md:mb-24">
                            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-6 inline-block py-1 px-4 rounded-full border border-secondary/20 bg-secondary/5">Operational Footprint</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tighter text-primary">Pan-India Presence.</h2>
                        </ScrollReveal>

                        <div className="w-full max-w-5xl mx-auto">
                            <ScrollReveal delay={0.2}>
                                <div className="bg-surface rounded-[3rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-outline-variant/10 flex flex-col items-center">
                                    <img
                                        className="w-full max-w-3xl h-auto object-contain mix-blend-multiply opacity-90"
                                        alt="Map showing Design Pulley's pan-India presence"
                                        src="/stitch/pan-india-map.png"
                                    />
                                    
                                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                                        {['Delhi NCR', 'West Bengal', 'MP', 'UP', 'Gujarat', 'Maharashtra', 'Karnataka', 'Tamil Nadu'].map((city, i) => (
                                            <div key={city} className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container border border-outline-variant/20 shadow-sm">
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

                {/* Elegant Stats Grid */}
                <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 mx-4 md:mx-12 my-24 bg-primary rounded-[3rem] relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_10s_infinite_linear]" />
                    <div className="max-w-[1440px] mx-auto relative z-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            {[
                                { val: 50, label: "Projects Delivered" },
                                { val: 7, label: "Repeat Clients" },
                                { val: 15, label: "Site Engineers & Support Staff" },
                                { val: 300, label: "Skilled Workers" }
                            ].map((stat, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} className="text-center">
                                    <div className="mb-4 text-5xl sm:text-6xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-primary drop-shadow-lg">
                                        <AnimatedNumber value={stat.val} />+
                                    </div>
                                    <div className="text-[0.65rem] md:text-xs font-label font-bold uppercase tracking-[0.2em] text-on-primary/80">{stat.label}</div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visionary Leadership */}
                <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-surface">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
                            <ScrollReveal className="max-w-2xl">
                                <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-6 inline-block py-1 px-4 rounded-full border border-secondary/20 bg-secondary/5">Visionary Leadership</span>
                                <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-primary">The Architects of Execution.</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2} className="max-w-sm">
                                <p className="text-on-surface-variant font-light text-lg leading-relaxed mb-2">
                                    Our leadership team combines decades of on-site technical expertise with a refined eye for design excellence.
                                </p>
                            </ScrollReveal>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                            {[
                                { name: "Anurag Lohia", role: "Operations", desc: "IIT Kanpur & IIM Ahmedabad (MBA) graduate focused on reinventing industry best practices, quality, and timelines.", img: "/assets/team-images/anurag_1.png" },
                                { name: "Akash Lakdawala", role: "Sales & Finance", desc: "CA & IIM Ahmedabad (MBA) graduate championing cost and time efficiency to ensure clients get maximum value for money.", img: "/assets/team-images/Akash_Lakdawala.png" },
                                { name: "Himanshu Lakdawala", role: "Consulting Engineer", desc: "Govt. Approved Valuer & NIT Surat Gold Medalist with 40+ years of industry experience providing strategic guidance.", img: "/assets/team-images/Himanshu_Lakdawala.png" },
                                { name: "Aamir Motiwala", role: "Vendor Relations", desc: "B.Comm graduate & entrepreneur ensuring seamless vendor collaboration and partnerships through effective communication.", img: "/assets/team-images/Aamir_Motiwala.png" }
                            ].map((leader, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <motion.div 
                                        whileHover={{ y: -10 }} 
                                        className="group bg-surface-container-lowest rounded-[2.5rem] p-4 pb-8 border border-outline-variant/10 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col"
                                    >
                                        <div className="aspect-[4/5] bg-surface-container-high overflow-hidden mb-8 rounded-[2rem]">
                                            <img 
                                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                                                alt={leader.name} 
                                                src={leader.img} 
                                            />
                                        </div>
                                        <div className="px-4 flex-1 flex flex-col">
                                            <h3 className="font-headline text-xl lg:text-2xl font-bold text-primary mb-1">{leader.name}</h3>
                                            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-6">{leader.role}</p>
                                            <p className="text-sm text-on-surface-variant leading-relaxed font-light mt-auto">
                                                {leader.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto mt-12 mb-12">
                    <div className="bg-surface-container-low rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-inner border border-outline-variant/10">
                        <ScrollReveal>
                            <h2 className="text-primary font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-10 max-w-4xl mx-auto leading-tight">
                                Ready to build your flagship presence?
                            </h2>
                            <button onClick={() => navigate('/contact')} className="bg-primary text-white px-12 py-5 font-headline font-bold text-sm tracking-[0.1em] uppercase rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
                                Consult with an Expert
                            </button>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
        </motion.div>
    );
}
