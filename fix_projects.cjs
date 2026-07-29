const fs = require('fs');
const path = require('path');

const projects = {
    'lladro': {
        title: 'LLADRÓ',
        shortDesc: 'Spain\'s Luxury Figurines, Delhi',
        desc: 'Executed three luxury flagship projects across Delhi NCR and Chennai. Provided complete Project Management Consultancy and bespoke furniture execution for spaces up to 7,500 sq. ft.',
        quote: '"Thank you Akash Lakdawala, Anurag Lohia and team for helping us with this dream project. Truly admire your passion, commitment and attention to detail. So professional in your approach with amazing energy levels made you unstoppable! So happy that we chose your team. Just keep it going. Wishing you loads of success!"',
        citeName: 'Nikhil Lamba',
        citeTitle: 'CEO, Lladró India',
        banner: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80',
        folder: 'llardo',
        gallery: []
    },
    'livspace': {
        title: 'LIVSPACE CASANTRO',
        shortDesc: 'Premium Retail Outlets',
        desc: 'Delivered 10+ premium retail and experience centers across India. Successfully executed large-format showrooms, office-cum-display centers up to 7,000 sq. ft., and over 100 residential projects.',
        quote: '"We have strong relationship with Design Pulley team and they have successfully executed experience center for us. We rely on their service PAN India and are satisfied with their output. They are focused on delivering projects on time and we appreciate their communication skills."',
        citeName: 'Sailesh Tiwari',
        citeTitle: 'Project Lead, Livspace',
        banner: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
        folder: 'Livspace Casantro',
        gallery: []
    },
    'sleep': {
        title: 'THE SLEEP COMPANY',
        shortDesc: 'Retail Innovation & Store Fit-outs',
        desc: 'Executed comprehensive store fit-outs, VM, and branding works across 10+ key cities. Delivered complete turnkey solutions including furniture and façade execution within aggressive one-month timelines.',
        quote: '"Design Pulley have been working on our various projects and have always been completely satisfied with their performance. They do an excellent job, are always punctual, and offer the most competitive rates in town. I\'m happy to recommend Design Pulley."',
        citeName: 'Paresh Ladwa',
        citeTitle: 'Project Manager, The Sleep Company',
        banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
        folder: 'The Sleep Company',
        gallery: []
    },
    'clove': {
        title: 'CLOVE DENTAL',
        shortDesc: 'India\'s Largest Dental Chain',
        desc: 'Delivered 30+ premium dental clinics across India over three years. Specialized in high-speed, end-to-end clinical fit-outs within 20-25 day timelines ensuring strict medical and aesthetic standards.',
        quote: '"I am pleased to share that Design Pulley has been a preferred vendor for Clove Dental, consistently delivering high-quality work across multiple locations, including Delhi, Jaipur, and Ahmedabad. Their commitment to excellence and professionalism has met our expectations, and we are very satisfied with their service. We confidently recommend Design Pulley for future projects, as their approach aligns well with our standards and requirements."',
        citeName: 'Taranjeet Singh',
        citeTitle: 'Project Manager, Clove Dental',
        banner: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80',
        folder: 'Clove Dental',
        gallery: []
    },
    'giva': {
        title: 'GIVA',
        shortDesc: 'Silver | Gold | Lab Grown Diamonds',
        desc: 'Executed seamless retail projects combining civil, interior, and VM works for premium jewelry showrooms in Delhi and Noida.',
        quote: '"We are pleased to share that Design Pulley has been a trusted partner for GIVA, consistently delivering high-quality work across multiple project locations. Their strong commitment to excellence, attention to detail, and professional approach have consistently met our expectations. We are highly satisfied with their services and would confidently recommend them for future projects, as their standards align seamlessly with our expectations."',
        citeName: 'Kuldeep',
        citeTitle: 'Project Manager, GIVA',
        banner: 'https://images.unsplash.com/photo-1573408301145-b98c41470ce0?auto=format&fit=crop&q=80',
        folder: 'Giva',
        gallery: []
    },
    'ajay': {
        title: 'AJAY\'S FOOD COURT',
        shortDesc: 'Appy Wali Feeling',
        desc: 'Delivered a large-format 3,000 sq. ft. flagship F&B outlet in Navsari. Managed complete execution of fine-dine areas, party rooms, and commercial kitchens within 45 days.',
        quote: '"Design Pulley transformed our vision into reality with exceptional craftsmanship. From the vibrant red-and-white interiors to the warm wooden flooring and custom lighting, every detail reflects our brand’s energy. The team delivered on time and exceeded our expectations. We’re proud to welcome our guests to this space."',
        citeName: 'Ajay Patel',
        citeTitle: 'Founder, Ajay’s Food Court',
        banner: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80',
        folder: 'Ajays final',
        gallery: []
    },
    'abcoffee': {
        title: 'AB.COFFEE',
        shortDesc: 'Specialty Coffee Brewed Honestly',
        desc: 'Delivered modular, highly-efficient kiosk solutions and mall outlets with complete integration of plumbing, electrical, and display systems in record 20-25 day timelines.',
        quote: '"Design Pulley is our preferred partner for turnkey project execution of our retail outlets. They deliver projects on time and satisfactory to our quality standards. I recommend them for project execution of new stores."',
        citeName: 'Vishi Reja',
        citeTitle: 'Project Head, ab.Coffee',
        banner: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80',
        folder: 'Abcoffee',
        gallery: []
    },
    'shankari': {
        title: 'SHANKARI ENT CLINIC',
        shortDesc: 'Healing Hope Health',
        desc: 'Executed a state-of-the-art specialty clinic balancing medical precision with patient comfort. Delivered premium interiors with a custom mint green and gold aesthetic in 40 days.',
        quote: '"Design Pulley designed our clinic beautifully — the mint green palette, elegant arched corridor, and gold accents create a calming, premium atmosphere for our patients. Every space, from reception to consultation rooms, reflects care and thoughtfulness. We are truly delighted with the outcome."',
        citeName: 'Dr. Monika Bansal',
        citeTitle: 'Senior ENT Specialist, Shankari ENT Clinic',
        banner: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
        folder: 'Shankari ENT clinic',
        gallery: []
    }
};

const baseDir = path.join(__dirname, 'public/assets/work-images');

function getWebpFiles(dirPath) {
    let results = [];
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            results = results.concat(getWebpFiles(path.join(dirPath, file.name)).map(p => path.join(file.name, p)));
        } else if (file.name.endsWith('.webp')) {
            results.push(file.name);
        }
    }
    return results;
}

for (const key in projects) {
    const project = projects[key];
    const projectPath = path.join(baseDir, project.folder);
    try {
        const files = getWebpFiles(projectPath);
        project.gallery = files.map(file => {
            let name = file.replace(/\.webp$/, '');
            // remove path prefix if any (for The Sleep Company/New)
            name = path.basename(name);
            return { name, file };
        });
    } catch (e) {
        console.error("Error reading " + projectPath, e);
    }
}

console.log(JSON.stringify(projects, null, 4));
