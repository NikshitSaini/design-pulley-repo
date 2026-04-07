import { motion } from 'framer-motion';


export default function AboutUs() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-background text-on-background font-body selection:bg-secondary-container selection:text-on-secondary-container"
        >

            
            <main className="pt-20">
                <section className="relative py-32 px-12 overflow-hidden">
                    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="z-10">
                            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-6 block">Our Legacy</span>
                            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[0.9] mb-8">
                                Precision in <br/>Commercial <br/>Craft.
                            </h1>
                            <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
                                Design Pulley is a turnkey interior design firm that executes retail expansion plans across India. We bridge the gap between architectural vision and ground-level execution, ensuring every retail square foot generates value.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-surface-container-high rounded-sm overflow-hidden">
                                <img 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                                    alt="Modern architectural interior" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4_3tZDclc1SEYazGnvqbBzwDJLb1vBQPA5Fdne-qSkvTEkjG-t2Ty3x4bzN1OaC4R5AldxkUpV_uDa6VCWSsXmHeGJjWgQ1f4SwTMb7dJNvkRZhuLyxeGzpymf2RDQEkDtx2uYfFlbOErMUcbrPydTWxSXQJCJNLr5bJ6ZLTH1A1mSi1JnvG7Lmvhmb1Zo4--Tk6B4Bmvb0BiZZjmkCLe2-UZdKv33VuydvcAYvDCl2B6JKiyhaMX2NE-TJ-BNCTwO51IuzR4"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-surface/70 backdrop-blur-xl p-10 max-w-xs shadow-sm hidden md:block border border-outline-variant/10">
                                <p className="font-headline font-bold text-primary mb-2">Our Mission</p>
                                <p className="text-sm text-on-surface-variant leading-relaxed">To execute retail expansion plans across India with precision, delivering on-time and within budget through our 15+ site engineers and 300+ skilled workers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-surface-container-low py-24 px-12">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                            <div className="bg-surface-container-lowest p-12 flex flex-col items-center justify-center text-center transition-all hover:bg-white group">
                                <div className="font-headline text-6xl font-extrabold text-primary mb-2 tracking-tighter">25<span className="text-secondary">+</span></div>
                                <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary transition-colors">Successful Projects</div>
                            </div>
                            <div className="bg-surface-container-lowest p-12 flex flex-col items-center justify-center text-center transition-all hover:bg-white group">
                                <div className="font-headline text-6xl font-extrabold text-primary mb-2 tracking-tighter">5<span className="text-secondary">+</span></div>
                                <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary transition-colors">Repeat Clients</div>
                            </div>
                            <div className="bg-surface-container-lowest p-12 flex flex-col items-center justify-center text-center transition-all hover:bg-white group">
                                <div className="font-headline text-6xl font-extrabold text-primary mb-2 tracking-tighter">15<span className="text-secondary">+</span></div>
                                <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary transition-colors">Site Engineers</div>
                            </div>
                            <div className="bg-surface-container-lowest p-12 flex flex-col items-center justify-center text-center transition-all hover:bg-white group">
                                <div className="font-headline text-6xl font-extrabold text-primary mb-2 tracking-tighter">300<span className="text-secondary">+</span></div>
                                <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary transition-colors">Dedicated Workers</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-12 bg-surface">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                            <div className="max-w-2xl">
                                <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-6 block">Visionary Leadership</span>
                                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">The Architects of Execution.</h2>
                            </div>
                            <p className="text-on-surface-variant max-w-sm mb-2 text-sm leading-relaxed">
                                Our leadership team combines decades of on-site technical expertise with a refined eye for design excellence.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <motion.div whileHover={{ y: -5 }} className="group">
                                <div className="aspect-[3/4] bg-surface-container-high overflow-hidden mb-6 rounded-sm">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt="Anurag Lohia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXvm5sxH0dX8evt94tteUtmFOizZtytzzI1TiL_enomyAWV9QfE1UyRgIes1TC0wJxEU1a4GcpRICxog-wX5uURx0G_OvuBd6tdpvS9TVBPPPGLkPBuv9K95rNU-4tIBAZYB40amN1dDNFUYjbYTEnjRuQ6Bt8e-aV7fYqOaCXUb9duGdE3E1sSriibTwirgS225JX4hXQiKJAB5zXDAcOeYFXD0MKEbG086yumcRClRPp2COsXaDVQIaeMfa8Og-W64lcch4s" />
                                </div>
                                <div className="px-2">
                                    <h3 className="font-headline text-xl font-bold text-primary mb-1">Anurag Lohia</h3>
                                    <p className="font-label text-[10px] uppercase tracking-widest text-secondary mb-4">Operations</p>
                                    <div className="h-px w-8 bg-outline-variant mb-4 group-hover:w-full transition-all duration-500"></div>
                                    <p className="text-sm text-on-surface-variant leading-relaxed">IIT Kanpur & IIM Ahmedabad (MBA) graduate focused on reinventing industry best practices, quality, and timelines.</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="group">
                                <div className="aspect-[3/4] bg-surface-container-high overflow-hidden mb-6 rounded-sm">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt="Akash Lakdawala" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHCAuXqbXHEhIBSms-sUopZiFWClsH4I-GyBYFsFyjhUAB3cRiMUkFmwgRN4AWSU6dS52Q_ob-uaAnDrMxIq1vWvzPj9-FMj3dYZpKOJPNaXIwdOCyWga532jZ2rk-2fyW88rH-BVdsBTXGZBu_jU2O1fKoN6U3u7ZnzxSqT8KSssrMXWF4ilylPAtgk_zhcMKTNFiumvNZmhWx8teWdl9KidEWRRT01AZAqGve8Vuzc0SbExigIqAJXCszZhnQQswWYFXBbl6" />
                                </div>
                                <div className="px-2">
                                    <h3 className="font-headline text-xl font-bold text-primary mb-1">Akash Lakdawala</h3>
                                    <p className="font-label text-[10px] uppercase tracking-widest text-secondary mb-4">Sales & Finance</p>
                                    <div className="h-px w-8 bg-outline-variant mb-4 group-hover:w-full transition-all duration-500"></div>
                                    <p className="text-sm text-on-surface-variant leading-relaxed">CA & IIM Ahmedabad (MBA) graduate championing cost and time efficiency to ensure clients get maximum value for money.</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="group">
                                <div className="aspect-[3/4] bg-surface-container-high overflow-hidden mb-6 rounded-sm">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt="Himanshu Lakdawala" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMbhruSXc9PFNykPpt2RbfSXxRc3u68I6ckLR85s-28WsUMg6Ecv6ULKNjogMbTawzj--tXOb4kjheTkmRKXbIPHXGeWLfKUCissBRGnf1gzyLkXizr2eToBzcR7UFt2ojYXfjylAn_VgYUhPCbG6dv1BwtcfAtGJQ_VOvJFegOxkbebQyvVBo-Whlsd0_u6gLbuOa0PRq0HW5-0tiXIgdUpwml3oio8WEE_GfJBu6x54gxC0kt-uXMO-7PnUKQogtQoSzdHsM" />
                                </div>
                                <div className="px-2">
                                    <h3 className="font-headline text-xl font-bold text-primary mb-1">Himanshu Lakdawala</h3>
                                    <p className="font-label text-[10px] uppercase tracking-widest text-secondary mb-4">Consulting Engineer</p>
                                    <div className="h-px w-8 bg-outline-variant mb-4 group-hover:w-full transition-all duration-500"></div>
                                    <p className="text-sm text-on-surface-variant leading-relaxed">Govt. Approved Valuer & NIT Surat Gold Medalist with 40+ years of industry experience providing strategic guidance.</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="group">
                                <div className="aspect-[3/4] bg-surface-container-high overflow-hidden mb-6 rounded-sm">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt="Aamir Motiwala" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Pcf-hK0ZRL9NaDFbzmLut1wwbOlk3n9DSFmxlHoK1iTkAbeRUMvUltBQ0RpzSlHX3uctQICxW-42oqObQ76sxSA22q0dNT2HIEPA6vs4o_D1CDjxwHPI_Y8mQFmXBeNWIqAR3ns1TS164B8bysMv6eNDmJzSvNORDtVLFuXSNcGvU8eRtua0QHnbU3qp5q9B29Go5fXq6hhXDZm68Flzn75CGBDjvLyetTEI_rgKfvNw3RdNL5oaQ4lxli9dZOdcG0Y__jBA" />
                                </div>
                                <div className="px-2">
                                    <h3 className="font-headline text-xl font-bold text-primary mb-1">Aamir Motiwala</h3>
                                    <p className="font-label text-[10px] uppercase tracking-widest text-secondary mb-4">Vendor Relations & Procurement</p>
                                    <div className="h-px w-8 bg-outline-variant mb-4 group-hover:w-full transition-all duration-500"></div>
                                    <p className="text-sm text-on-surface-variant leading-relaxed">B.Comm graduate & entrepreneur ensuring seamless vendor collaboration and partnerships through effective communication.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-12 bg-primary text-on-primary">
                    <div className="max-w-[1440px] mx-auto text-center">
                        <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-12 max-w-4xl mx-auto">
                            Ready to build your flagship presence?
                        </h2>
                        <button className="bg-surface text-primary px-12 py-5 font-headline font-bold text-lg rounded-sm hover:bg-secondary-container transition-colors active:scale-95 duration-200">
                            Consult with an Expert
                        </button>
                    </div>
                </section>
            </main>


        </motion.div>
    );
}
