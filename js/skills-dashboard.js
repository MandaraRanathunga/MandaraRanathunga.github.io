// Skills Data
const skillsData = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'JavaScript', level: 85, color: '#61dafb' },
    { name: 'CSS/Tailwind', level: 88, color: '#61dafb' },
    { name: 'Node.js', level: 80, color: '#61dafb' },
    { name: 'Python', level: 75, color: '#61dafb' },
    { name: 'Git', level: 82, color: '#61dafb'}
];

// Projects Data
const projectsData = [
    {
        title: 'E-Commerce Platform',
        description: 'Full-stack shopping platform with payment integration',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        title: 'AI Chat Application',
        description: 'Real-time chat with AI-powered responses',
        tech: ['React', 'WebSocket', 'Python']
    },
    {
        title: 'Portfolio Dashboard',
        description: 'Analytics dashboard for tracking portfolio metrics',
        tech: ['React', 'D3.js', 'Firebase']
    }
];

// Experience Data
const experiencesData = [
    {
        role: 'Senior Frontend Developer',
        company: 'Tech Corp',
        period: '2022 - Present',
        description: 'Leading frontend development for enterprise applications'
    },
    {
        role: 'Full Stack Developer',
        company: 'StartUp Inc',
        period: '2020 - 2022',
        description: 'Built scalable web applications from scratch'
    },
    {
        role: 'Junior Developer',
        company: 'Dev Studio',
        period: '2019 - 2020',
        description: 'Developed responsive websites and web applications'
    }
];

// Render Skills Dashboard
function renderSkills() {
    const skillsContainer = document.getElementById('skills-dashboard');
    
    skillsData.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card animate-slideInLeft';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0; background-color: ${skill.color};"
                     data-width="${skill.level}"></div>
            </div>
        `;
        
        skillsContainer.appendChild(skillCard);
    });

    // Animate progress bars when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const targetWidth = progressBar.getAttribute('data-width');
                setTimeout(() => {
                    progressBar.style.width = targetWidth + '%';
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
}

// Render Projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects-grid');
    
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate-fadeInUp';
        projectCard.style.animationDelay = `${index * 0.2}s`;
        
        const techTags = project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Render Experience
function renderExperience() {
    const experienceContainer = document.getElementById('experience-list');
    
    experiencesData.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item animate-slideInRight';
        expItem.style.animationDelay = `${index * 0.2}s`;
        
        expItem.innerHTML = `
            <h3 class="experience-role">${exp.role}</h3>
            <div class="experience-meta">
                <span class="experience-company">${exp.company}</span>
                <span class="experience-period">${exp.period}</span>
            </div>
            <p class="experience-description">${exp.description}</p>
        `;
        
        experienceContainer.appendChild(expItem);
    });
}

// Initialize all content
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderExperience();
});

