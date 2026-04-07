import { motion } from 'framer-motion';


export default function ContactUs() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-background text-on-background font-body selection:bg-secondary-container"
        >

            
            <main className="pt-32 pb-24 max-w-[1440px] mx-auto px-12">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Content Left: Structural Narrative */}
                    <div className="lg:w-1/2 space-y-16">
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-[0.95] text-primary">
                                Let's build your space, at your pace.
                            </h1>
                            <p className="text-xl font-body text-on-surface-variant max-w-md leading-relaxed">
                                Architecture is not just about structure, it's about movement and the rhythm of those within.
                            </p>
                        </div>
                        <div className="space-y-10">
                            <div className="group">
                                <span className="block text-[0.65rem] uppercase tracking-[0.15em] font-bold text-secondary mb-2 font-label">Contact Inquiries</span>
                                <a className="text-2xl font-headline font-bold text-primary group-hover:underline underline-offset-8 decoration-1 transition-all" href="mailto:hello@pulleyinteriors.com">
                                    hello@pulleyinteriors.com
                                </a>
                            </div>
                            <div className="pt-8 border-t border-outline-variant/20">
                                <span className="block text-[0.65rem] uppercase tracking-[0.15em] font-bold text-secondary mb-6 font-label">Operational Presence</span>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    {['Delhi NCR', 'West Bengal', 'MP', 'UP', 'Gujarat', 'Maharashtra', 'Karnataka', 'Chennai'].map((loc, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="w-1 h-1 rounded-full bg-primary"></span>
                                            <span className="font-body text-primary font-medium tracking-tight">{loc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-sm overflow-hidden bg-surface-container-low group">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Modern architectural studio interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlmUsjX4WT9RvIFcaep5-zwzocu40s3-pLfjjuDtDeRrQrYruyJ1_Jm0JvmlPtyQcWkR8quGF_7TVEuacInlb2HOvc-Vj6CMCum1nwyRqT_KPnlOBfcgYy7VjMbxM9cyoYsxZMaTe-IM7UuI7bQvF3e1UPTHvlLMoLFUDKheWDJUIIz0OlHHQznjIXgxWX-M6ZTzL7bZ7w6Xc-CqznNLiUoiVZgiRYzPwobmUqpd6slBDh8qOlI-g3sIe_snzmqHYB6PsUJAUM" />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        </div>
                    </div>

                    {/* Content Right: Focused Transactional Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-surface-container-low p-8 md:p-12 rounded-sm">
                            <form action="#" className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2 group">
                                        <label className="block text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant font-label">Full Name</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/60 font-body" placeholder="John Doe" type="text" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="block text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant font-label">Company Name</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/60 font-body" placeholder="Acme Corp" type="text" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2 group">
                                        <label className="block text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant font-label">City</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/60 font-body" placeholder="Mumbai" type="text" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="block text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant font-label">Project Type</label>
                                        <select className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 px-0 focus:ring-0 focus:border-primary transition-all font-body appearance-none" defaultValue="">
                                            <option disabled value="">Select an Option</option>
                                            <option value="retail">Retail Space</option>
                                            <option value="office">Corporate Office</option>
                                            <option value="hospitality">Hospitality</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <label className="block text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant font-label">Message</label>
                                    <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 px-0 focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/60 font-body resize-none" placeholder="Tell us about your architectural vision..." rows={4}></textarea>
                                </div>
                                <div className="pt-4">
                                    <button className="w-full bg-primary text-on-primary font-headline font-bold uppercase tracking-[0.2em] py-5 text-sm rounded-sm hover:bg-secondary-container hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-primary/20" type="submit">
                                        Send Inquiry
                                    </button>
                                </div>
                            </form>
                            <div className="mt-12 p-8 bg-surface-container-lowest flex items-start gap-6 rounded-sm">
                                <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-on-primary">schedule</span>
                                </div>
                                <div>
                                    <h4 className="font-headline font-bold text-primary mb-1">Our Response Timeline</h4>
                                    <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                                        Our design consultants review all inquiries within 24 business hours to ensure every vision is given structural priority.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </motion.div>
    );
}
