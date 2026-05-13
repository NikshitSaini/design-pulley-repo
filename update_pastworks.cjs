const fs = require('fs');
const projects = require('./projects.json');

const jsxPath = './src/pages/PastWorks.jsx';
let content = fs.readFileSync(jsxPath, 'utf8');

// replace the entire projects object
const projectsObjStr = 'const projects = ' + JSON.stringify(projects, null, 4) + ';';
content = content.replace(/const projects = \{[\s\S]*?\n\};\n/, projectsObjStr + '\n');

// replace the img tag
const oldImg = `<img 
                                                        alt={img.name} 
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                        src={\`https://placehold.co/800x800/1a1b26/ffffff?text=Image+Needed\\\\n\\\\n\${encodeURIComponent(img.name)}\`} 
                                                    />`;

const newImg = `<img 
                                                        alt={img.name} 
                                                        loading="lazy"
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                        src={\`/assets/work-images/\${activeProject.folder}/\${img.file}\`} 
                                                    />`;

content = content.replace(oldImg, newImg);

// remove Dummy Image comment
content = content.replace('{/* Dummy Image via placehold.co */}', '{/* Project Image */}');

fs.writeFileSync(jsxPath, content);
console.log('Updated PastWorks.jsx');
