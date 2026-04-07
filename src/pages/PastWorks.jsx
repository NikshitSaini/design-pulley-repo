import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const projects = {
    'livspace': {
        title: 'Livspace',
        shortDesc: 'Headquarters & Experience Center in Bangalore.',
        desc: 'Creating a hybrid environment that functions as both a high-performance workplace and a tactile showroom for home design inspiration.',
        spec1: 'Bangalore, IN',
        spec2: '45,000 SQ.FT',
        quote: '"Pulley translated our brand vision into a physical space that feels both aspirational and deeply functional."',
        citeName: 'Anuj Srivastava',
        citeTitle: 'CEO, Livspace',
        banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxrnh17HZyK8Wt_2KfUwSE500iPIJqU24NtOAJ_qFCfFALnlgdUxxDF3Aky8FewYDFn9fraYOWYOWdc8RmsLX0T8pCGJGtGUpJvj36Epa9mdKbklm_FxDXpKHLG-_Mmt4N5GrYY0AkIYqIbhEW6yfRdZiOVGF3F5mvGatvY7BTpxgwPKwBsH3DcXHLaSquRfDAjzzPbM1oY-cNnaqxl84TJyjg4okOv9pm5nacpw4zYineTM7c1Ws8qBCXnx-gWz9dQksRjPRH',
        gallery: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCzyEQVr5_rNdUDrJ66APLZ1t5LIOcV-8eQ7sykzcQcY8FCJ215-cQPn1kg4rMT6_F6IyhdlYVHcmuGMkveCU8upVrHde2sJY47_2-lgGwVvBU9mon82facD51qsNUCJx0viy6atGHCHPtI-2_lhEmCBT7XyQwYF-I2X9AuiFXAgMfTVN6iIuuaM6erzZUnGeBomnUDO4bTDpT9COb-ckxqfpsptkj-v3frvyDfFc5tFkzXxpjhEXK5Pzsk2gEqzXOfg8Uk9v5c',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDCeF0XzTK4NPfgHxuJQGFzjravY5TCRzaEDRF_zV_LfghDQ2BRln5Uad9KcjICJyXMgp-at35hoEQaa-x-RrHENrt4xUDQStWuQe3cbpr95MU_avGyOeIt8ZPH8Bhdh1XMx60NtheqDwIl5tiWgWeFA-dRhHgyb4jxQd5PinTYofC6upA0nASMNd1ylYNUiPnglfgvc0vZq4uEIpaDOqVqLzvObbtcvsgAjDr67dIW58JJAJYmtsMqIfNXJb4Iazbr9J6AmGif',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDSqPIjAjoRdAlxl_jQ-XMe8cAckjPVsy0O_AYA0vv2MLqCsC1gwWxRnXWoZaEih-o7FzM6SXcT8Ghi2VA0ie622uncR851X_pk4xssS9bRk97cOnmlVGJ5Xuxa_iWNNDcm7_PEF9KGxvNBnZMhL6KlD3utGpBbkBTBRxRkRkIluIOQPBK-Z5tuSBeZfOuZEdxGX7gMHwQI88o_kX_Cq0XWW162tMfKScgrUpBO7kIGG_Qnn9rqonQ6W3CWsLlwKWyBbjjAqnv-',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAZeuhPJF_0QpbIkWYLc0w0euVainwi3T9JbM6Socn0_wgnN7z2PcslughHZBHfiTKarXhQx7KD4MW8UoIW0czW_jk2X2EsCB0sxPhqLZpGFNYHW3FrrjRA1KtKLo4iIZLf7MIdOo2XdF2vI5Ztl_GQnWV8zeTyKmVFaKhgIVNEgNzTfuv7v3uVu8qk5AGFqVH9ukITdEOs3hhbcgi17jiaD83NETiulBrcpPEuRuiYiIWMDswz7RiEmQdXVOZtoSazb_dOCO2o'
        ]
    },
    'clove': {
        title: 'Clove Dental',
        shortDesc: 'Pan-India premium clinical network rollout.',
        desc: 'Modular design systems implemented across 50+ locations, emphasizing clinical sterility with hospitality-inspired comfort.',
        spec1: 'Healthcare/Retail',
        spec2: 'Rollout 2023-24',
        quote: '"Scaling our presence required a design partner who understood consistency without sacrificing character."',
        citeName: 'Dr. Amar Singh',
        citeTitle: 'Operations Director, Clove Dental',
        banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsyAEUW-bq2l0_aTSDSN8sE9_fg_cRR1RGjnFHYd47E224Ylbbi1jDpJ3XL1JG66UVdVh23t_NqD3PUDs-lV3LfJIoD8FxXlfaZ3abCUks2XIn8of5lkQCz34WlUk36UTP1AVmycOew5YnpVPAY_nEQULIlAgdqwDaPu4Q8iniw_jVxPfMM8SAVrQRcjxj4io5uAukLpRbw5pWWtmYqyiomBahJKbXFsV56nGd-xTER3kRAHCdUMPfQQU7x9J-1iYhNhN_vlDb',
        gallery: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDgkZwmHAss7WASj594MY62Dzzyse2niTVVkkstIe9hHITbCeVHNcBmpu8vWrVIJpj5n4ENUG13xZ9J2mkojNVLdNHTle1LIhtCNy2W9jL8Da98NKHYb04_IQioNgiEpE9-xFd4OczD7nmxLKdkKOhxt8iVhX_2ID9-2gEndR0nuKvZXBO4i5TT6wY_Cd4Th9haOSfE_wjSgOjPv0qsPRds-gaARQiMXitJOIKSspgCeN_J9Qg12Hyr_xVnYAKvSexmQietJJRP',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAWfFRbJkvq5KchljxnwFzxhZV15QzkvsDJooMfQc-k_Qr9IqfuqldJaA2eRFXFL9REpVwGJk46PkYFftCte22XEoUkls2ghC4IerB-lRnBYtn2CZi7i_BJdqCYCYSXMRULhRAQOoIzbb6b4yrm_zT_ayJEWrRwNrye9Lfk2D7ZKHgrYsJB_e1v_kZBW7544pOF5Zg_HINcW5lgXyJHje1kD4cW6RVAypGpmMd09hd_iP8PCDKTFoY9lH3BkBR9xyQ4FePG3HTr',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAaxoTn7UoBxUac6_U6NGMgfaqC2darSChPbMOuRqJWhL_XsOqFGOQWcswvvOTNkDZMz9h6WqoOWU48NxqjAEa-J7a9KFw2JOnLvEMpQlDRx7yrBG86c5zEvWvAqxzPSAOPMqE1JNUtJxgBuihJBmzt4euEYlu9T_u5nZ4Sfwfs6vZIynLB3P7JUNWfLj2GlzX3xluk_nf18Ebpoa_JD85Rwen3eVpBiYQOLpgQnXat-sze3Cx68T4vz9jFK08chMsQPdG830kP',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBj9DTLFxS1Jxi8HWLHI6vVKF7J38E9-xoz8rZfdyk3gq1xeEm_-xmwsKk8-RVQknZ8y7hWuUHPrLkjeTCcZAOZgPXZirTbSqq6vJc8jZjFlcrNYPfpX5ndKFt9z2OGG7MVj7R9UwoPVrHyl8w_TobgegDZXjbA-FWBWllIwl1nINFke5jKWxGRZTolFUVZPHztjfUNVX1Lf6Gm5vQiMRe-14-0hn6ukb2XQYEHWXvvjEPt9OILSwqoyaOGEctrtTtMTOPFh-5r'
        ]
    },
    'lladro': {
        title: 'Lladró',
        shortDesc: 'Luxury flagship retail gallery experience.',
        desc: 'A gallery-first approach to retail. Every shadow and highlight was engineered to showcase the intricate detail of handcrafted porcelain.',
        spec1: 'Suede & Brass',
        spec2: 'Custom LED Matrix',
        quote: '"The lighting and material palette elevated our products from inventory to art. Simply impeccable."',
        citeName: 'Retail Manager',
        citeTitle: 'Lladró Flagship',
        banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqYepbg1-SjL-1y3noI2tfwdTxajWLZ85pGIf7qCRGn9q-n2TAe7GObcBa8XZTAlJMYj87uQvCwRFbY8_O0NT1geDRfzK7psGOJHTJJbgG5kBbboH9_Wx_77gflz7RF4pVJqef2PvC_q8bRftPTYEhIcyB1xkcRnuXtnBJ9D3SDsMsNiGQAaLs1DaB6gg4vHpvQJXThcaRTxw5D8hIlCZq3INX6ckx5L8smoQZQsRBeHq5TAiTDfchK6QbVKAr5WlWyswpQMiH',
        gallery: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDNXbwmKyON6a3TB-BbRpTr1mvlHNPIx_uPJH4GGyK9zIwrrXpydgeq5szlOVd1N-NaBlRgZXSyYblvkJpdu7brOWKXt1Uua8-z3CYkwMU7Kb2rwzqFf-NNU95M4GHRkD9M_rGNgj_vRHE5SPYMl3xUGJ6oZpQjd8ldOHxsRjD4RqOIza4MQP16ZohIOTXrGthryTn74fB5Wiu7bjgn1A-a15gnKm6rkAKfVDIx9CiNzOyST3t8_VpeaPwnLtu32g6eI7y_UU35',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD2IBSU98gns-nmmBvIgrgNDLkw225_zfWiR8CRmXSCjyr6rV-LFUPQEEFChe82WMrd9fBO6j6c4N4G-R3LDvv1FUqqaLT6_k5y0IzUFM7I5Jbw35oIQAhgeRLWQU0T9j4kcPsbO93gR5TtLDdJdm4JNY_3gOdbahFNzMZpFOggitc-LdYr9K24nrlQ-zqTzD_IqGR24We_JDzIA5wPVc5l2Z3K8_QYWoRtujPnCDN-UcLniTaqHSZlKB05jppyXTlqzIt0fkbn',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCyEJXb2_g4xtjKd4P_jb3Rxmu4CRQevTqqkpu5EqLK3r1BD3TpN72OPVitTNWwoctZNm_L4Y7Ref0hdc5hvv_H4RxSJmYsDYA8NOIgvZtajMJdB_oUhUJhc_N14Bm3mxVXj_oKqGx97RiK2bRXe_AXtN-nvqprh06wHWQVxfJawgrMBSGQ2IU_d6Y_aIGq0bCcKr_k56Lu6WZTFXICWbH8webLHlna4UQC4CnapjGXao57jLmkfTTgonvqYvRMU6M5SICpcX7_',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDNXbwmKyON6a3TB-BbRpTr1mvlHNPIx_uPJH4GGyK9zIwrrXpydgeq5szlOVd1N-NaBlRgZXSyYblvkJpdu7brOWKXt1Uua8-z3CYkwMU7Kb2rwzqFf-NNU95M4GHRkD9M_rGNgj_vRHE5SPYMl3xUGJ6oZpQjd8ldOHxsRjD4RqOIza4MQP16ZohIOTXrGthryTn74fB5Wiu7bjgn1A-a15gnKm6rkAKfVDIx9CiNzOyST3t8_VpeaPwnLtu32g6eI7y_UU35'
        ]
    },
    'sleep': {
        title: 'The Sleep Company',
        shortDesc: 'Retail innovation labs and sensory pods.',
        desc: "Transforming sleep science into a sensory physical experience. We created immersive 'Sleep Pods' that isolate sound and light.",
        spec1: 'Retail Tech',
        spec2: 'Sound Isolation',
        quote: '"An execution that truly reflects the technical DNA of our brand. Impeccable attention to detail."',
        citeName: 'Brand Director',
        citeTitle: 'The Sleep Company',
        banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjn10ow22nqy9HxckaHpsSQOUNS55rycC_jrqByK5krCaNg_AIsbhLp1vbSSzLeHUnYQEXD2q36BxpS0-5v4voBcji5yL39i06y-t5d7n4tiPXRnNGViQ5t8xA7kkcsk3lXB6ZAj1l1k-ZNYx4u2NHyGCkvXT1oFlvkxP7mb5epZfR-2c_xW6S--Pbx0BL_pLdjkm7ZQfTSuXcmh7_7k2tzU4qqx9Ez7KsYf89oiZODceDKpvFE5ubprEmpswSeLx30o4NhrIK',
        gallery: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDjn10ow22nqy9HxckaHpsSQOUNS55rycC_jrqByK5krCaNg_AIsbhLp1vbSSzLeHUnYQEXD2q36BxpS0-5v4voBcji5yL39i06y-t5d7n4tiPXRnNGViQ5t8xA7kkcsk3lXB6ZAj1l1k-ZNYx4u2NHyGCkvXT1oFlvkxP7mb5epZfR-2c_xW6S--Pbx0BL_pLdjkm7ZQfTSuXcmh7_7k2tzU4qqx9Ez7KsYf89oiZODceDKpvFE5ubprEmpswSeLx30o4NhrIK',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Dw8lyAoiCftQ7hswW3Xayt7b0-7mF6jhdmxhO-k5r7j5xYMAalnbMFgJcrfCyYr-ciX49z21H0KujhQj4zwpfLg2RPr2SRa2F2SohS6n7C_LaprufEe53UkZ6cfKl7KhwJiXoZH2mUUJbur9bw3gKixmpTjIRrM7tu9sP995aK9MmE9-G4XAL1svhrLCm-EDORf19I-f_aau8SafgsbGj9yH89FnMnaUS-YbIow2eQpfXffm4DWy-V49il2eDzd9wm1KHGdy',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZrcwvjZnaKLDuGpzvXb-4GB0I8XQ7jLJiUNfRzaFhf7TCrCyiPkXrliCNLRjps5l9g714l1LjR98hs7j-CoXoWaggkRcLlU4lHNKduc7pO-0riVCiSUGRMsaHB5ydUh4G3kztD2FbbB5t8-OWgxI6a3AqlnuPnZwSMTaq5uUxKUUCR9-cWfkHovYq6eBDie9gGIsvIKgY6BZSax2jNxbS4fxgvbvelTBUDS9eg3w10uU6v13eP7s2Rzzjjxj199eUrvoJdxD',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCvXE6sptTDzfcC_oRNXLWyJ_53hV0mNCjGmTTBJiy42QEu0pqcs8s3a1ewoaZTmx6EP8ya2vjH4MA5B7AL64bJhVvvn_rFBISeCBeCnpyOmyr1yDr6pKanlzTfQQ-hlQMuZSzqnoyvSeoIUEYAmSTCX3KluFAS_C6L14CmVviYc4rDTZF0vJAeOa89r2evpFmIWjvS-XqK-fCq-ElscpTM4NpynVcKPlXJyxcAi0I8Mjt9ddPq6Ue7O-efipqRJbaV6H6QFyTH'
        ]
    },
    'abcoffee': {
        title: 'abCoffee',
        shortDesc: 'Efficient urban micro-café deployments.',
        desc: "Rapid-rollout micro-cafés that don't compromise on aesthetic. Design for efficiency, flow, and the modern urban consumer.",
        spec1: '12 Units',
        spec2: 'Rapid Turnaround',
        quote: '"The fastest turnaround we\'ve experienced without a single corner cut on quality."',
        citeName: 'Abhishek Lodha',
        citeTitle: 'Founder, abCoffee',
        banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2FFA25Q7u7J1sIuNDHXQl0vyGAvDYCzXGikXj7JIPjVPn6qNw67tjS7mhxuAKfFPM1glpIwwQUjBgpuQvkMXwUpYcbQ2MuF43Q87CpKDqvQgGImkHg9-8d4c9E7-Sxa-XFUmQUjMfn5RAOwzBQXDbpKn1MsrtB0ek7VDEvMoYmImxRYTxQRunNK3Y25tOwaRFiZdBqL47R5BQPlZRcLavm0fIQYgvva9rQRdFbKZV5afbhnA_kCHjF31T85GX2OxYul9dLZ8',
        gallery: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2FFA25Q7u7J1sIuNDHXQl0vyGAvDYCzXGikXj7JIPjVPn6qNw67tjS7mhxuAKfFPM1glpIwwQUjBgpuQvkMXwUpYcbQ2MuF43Q87CpKDqvQgGImkHg9-8d4c9E7-Sxa-XFUmQUjMfn5RAOwzBQXDbpKn1MsrtB0ek7VDEvMoYmImxRYTxQRunNK3Y25tOwaRFiZdBqL47R5BQPlZRcLavm0fIQYgvva9rQRdFbKZV5afbhnA_kCHjF31T85GX2OxYul9dLZ8',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCZGtAFv-9bbHK3gfrw4rFx7swJNZMvVims6aFrSLwoViW1WmV-2B0HvnB6Vl6mDyUYRdFeTLyHz_yje8RkHyHRwxyrpmeMZnl5_Zu9-yoTm4M_xPLvDSnZMTaa5aXdzqNA-F2RNyCjKCBBTuu33kvQaOQ8J82ZTc6uP_m962cGGj6KLQjBVuXTDG5p-95Bgb0mBODmRJy5GHgSIxKYymKjazIXKsAWSCN-B8prEcXqpYcO4xqmmFSSa9c4iPW6jFDHqtSnnXw6',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCbNYGaRdpr89ZiuvDI4P3XzUWZqoUtYnf8a7iylhJx5p7nxKE5FNygkdJuqGM8KRbuPBT4APYN3tiEjAzzpTqNZTG_m89x1eGbSXFhs7pDYtzuu5Sn9adLr0TNcr2vZ0ixmj70cXNDdKZBJpYq5xqkq-Yz10gDoxWUDCcUI1G2x7qbz_rmc32nfBSs5pwE-IXkxKQXZhxASgMYvc0Hyp7lGeTUtelPt1PrYIOz-QxETr4IGXB0L-IvhG4fEVPApxw_4GSt7szK',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2FFA25Q7u7J1sIuNDHXQl0vyGAvDYCzXGikXj7JIPjVPn6qNw67tjS7mhxuAKfFPM1glpIwwQUjBgpuQvkMXwUpYcbQ2MuF43Q87CpKDqvQgGImkHg9-8d4c9E7-Sxa-XFUmQUjMfn5RAOwzBQXDbpKn1MsrtB0ek7VDEvMoYmImxRYTxQRunNK3Y25tOwaRFiZdBqL47R5BQPlZRcLavm0fIQYgvva9rQRdFbKZV5afbhnA_kCHjF31T85GX2OxYul9dLZ8'
        ]
    }
};

export default function PastWorks() {
    const [activeId, setActiveId] = useState('livspace');
    const detailRef = useRef(null);

    const selectProject = (id) => {
        setActiveId(id);
        if (detailRef.current) {
            // Scroll visually to the detail container with an offset for the fixed navbar
            const yOffset = -100; 
            const y = detailRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const activeProject = projects[activeId];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <main className="pt-20">
                {/* Hero Header */}
                <header className="pt-24 pb-12 px-12 max-w-[1440px] mx-auto">
                    <div className="max-w-4xl">
                        <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-4 block">Past Works</span>
                        <h1 className="font-headline text-6xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1]">
                            Built Environments <br /> <span className="text-secondary">Executed with Poise.</span>
                        </h1>
                    </div>
                </header>

                {/* Interactive Selection Grid */}
                <section className="px-12 max-w-[1440px] mx-auto mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {Object.entries(projects).map(([id, data]) => {
                            const isActive = activeId === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => selectProject(id)}
                                    className={`flex flex-col p-6 text-left transition-all group ${
                                        isActive 
                                            ? 'border-primary bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border-2' 
                                            : 'border border-outline-variant bg-white/50 hover:bg-white'
                                    }`}
                                >
                                    <span className="font-headline font-extrabold text-primary text-xl mb-2">{data.title}</span>
                                    <p className="text-xs text-secondary leading-relaxed font-medium">{data.shortDesc}</p>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Detail Section Container */}
                <section className="pb-32" ref={detailRef}>
                    <motion.div 
                        key={activeId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-[1440px] mx-auto px-12 space-y-16"
                    >
                        {/* 1. Hero/Banner Image */}
                        <div className="w-full h-[400px] bg-surface-container overflow-hidden rounded-sm">
                            <img alt="Project Banner" className="w-full h-full object-cover" src={activeProject.banner} />
                        </div>

                        {/* 2. Project Details & Testimonial */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                            <div className="md:col-span-5 space-y-8">
                                <div>
                                    <h2 className="font-headline text-5xl font-extrabold text-primary mb-4">{activeProject.title}</h2>
                                    <p className="text-lg leading-relaxed text-secondary font-light">{activeProject.desc}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 border-t border-outline-variant pt-8">
                                    <div>
                                        <h4 className="font-label text-xs uppercase tracking-widest text-outline mb-2">Metric 1</h4>
                                        <p className="font-headline font-bold text-primary">{activeProject.spec1}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-label text-xs uppercase tracking-widest text-outline mb-2">Metric 2</h4>
                                        <p className="font-headline font-bold text-primary">{activeProject.spec2}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="md:col-span-7 flex flex-col justify-center">
                                <blockquote className="relative pl-12 border-l-4 border-secondary/20">
                                    <span className="absolute -left-4 -top-8 text-8xl font-serif text-secondary/10 font-bold select-none">“</span>
                                    <p className="text-2xl font-body italic text-primary leading-snug mb-6">{activeProject.quote}</p>
                                    <cite className="not-italic">
                                        <span className="block font-headline font-bold text-primary">{activeProject.citeName}</span>
                                        <span className="block font-label text-xs uppercase tracking-widest text-secondary">{activeProject.citeTitle}</span>
                                    </cite>
                                </blockquote>
                            </div>
                        </div>

                        {/* 3. Gallery Grid (2x2) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {activeProject.gallery.map((img, index) => (
                                <div key={index} className="aspect-[3/2] bg-surface-container overflow-hidden rounded-sm">
                                    <img alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" src={img} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary py-32 text-center text-white">
                    <div className="max-w-2xl mx-auto px-12">
                        <h2 className="font-headline text-4xl font-extrabold mb-8 tracking-tight">Ready to build your space?</h2>
                        <p className="text-secondary/80 mb-12">Our team of architects and project managers are ready to bring your vision to life.</p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <button className="bg-white text-primary px-10 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-all rounded-sm">Download Brochure</button>
                            <button className="border border-outline-variant/30 text-white px-10 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-primary transition-all rounded-sm">Schedule a Visit</button>
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    );
}
