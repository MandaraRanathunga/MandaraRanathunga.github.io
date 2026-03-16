// Skills Data
const skillsData = [
    {
        title: 'Software Skills',
        skills: [
            { name: 'HTML/CSS', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'Python', level: 80 },
            { name: 'Java', level: 78 },
            { name: 'C++', level: 75 },
            { name: 'SQL', level: 80 },
            { name: 'Figma / Canva', level: 90 },
            { name: 'Git/GitHub', level: 82 }
        ]
    },
    {
        title: 'Project Management Skills',
        skills: [
            { name: 'Project Management', level: 90 },
            { name: 'Agile Methodologies', level: 88 },
            { name: 'Jira / Trello', level: 85 },
            { name: 'MS Office', level: 88 },
            { name: 'Leadership', level: 90 },
            { name: 'Teamwork', level: 95 },
            { name: 'Problem Solving', level: 90 },
            { name: 'Documentation', level: 85 }
        ]
    },
    {
        title: 'Language Skills',
        skills: [
            { name: 'English', level: 100 },
            { name: 'Sinhala', level: 100 }
        ]
    }
];

// Projects Data — from CV
const projectsData = [
    {
        title: 'Multimodal Control Framework for Drones & Robots',
        description: 'Final Year Project — Developed a real-time multimodal control system integrating hand gesture recognition and voice commands for drone and mobile robot navigation. Implemented gesture–voice fusion techniques and optimized latency.',
        tech: ['Python', 'Computer Vision', 'Speech Recognition', 'AI', 'Robotics'],
        period: 'Present'
    },
    {
        title: 'Smart Attendance System',
        description: 'Built an AI-driven attendance system using facial recognition with multi-face detection, emotion recognition, secure authentication, automated summaries, and attendance analytics.',
        tech: ['Python', 'Artificial Intelligence', 'Computer Vision'],
        period: '2025'
    },
    {
        title: 'Computer Store Management System with AI Chatbot',
        description: 'Implemented a full-stack web-based management system with inventory tracking, automated stock alerts, secure authentication, and AI-powered chatbots for customer and owner support.',
        tech: ['AI', 'Databases', 'Web Development'],
        period: '2025'
    },
    {
        title: 'Inventory Management System',
        description: 'Developed a scalable Java-based inventory system using OOP and Data Structures & Algorithms. Implemented efficient sorting, binary search, role-based access control, and data visualization features.',
        tech: ['Java', 'OOP', 'DSA'],
        period: '2025'
    },
    {
        title: 'Smart To-Do List App',
        description: 'Developed an Android application with categorized task management, CRUD operations, offline storage using Room database, Firebase backup, and search functionality.',
        tech: ['Android', 'Firebase', 'Room Database'],
        period: '2024'
    },
    {
        title: 'Personalized Workout Planner',
        description: 'Designed a user-friendly fitness application featuring yoga, stretching, and abdominal workouts. Created a clean, responsive UI with GIF-based workout tutorials to enhance user engagement.',
        tech: ['Figma', 'UI/UX Design'],
        period: '2024',
        link: 'https://www.figma.com'
    }
];

// Experience Data
const experiencesData = [
    {
        role: 'Intern BA | PM',
        company: 'Citipark (Sydney) Pvt Ltd',
        period: 'February 2026 – Present',
        description: 'Contributing to business analysis and project management workflows. Supporting project planning, requirement gathering, documentation, and stakeholder coordination.'
    },
    {
        role: 'Event Coordinator',
        company: 'DADS Entertainment (PVT) Ltd.',
        period: '2023 – Present',
        description: 'Experienced in organizing music events, content creation, and managing ticketing processes with accuracy. Skilled in event planning, logistics coordination, and on-ground execution, while effectively handling ticket sales, budgeting, and vendor coordination.'
    }
];

// Volunteering Data
const volunteeringData = [
    {
        role: 'Treasurer',
        organization: 'BCS Student Chapter, KDU',
        period: '2025 – 2026',
        description: 'Managed financial records and budget allocation for student chapter events and initiatives.'
    },
    {
        role: 'Finance Lead',
        organization: 'BCS Student Chapter, KDU',
        period: '2024',
        description: 'Managed financial planning and budget allocation for student chapter initiatives.'
    },
    {
        role: 'Public Relations Director',
        organization: 'Rotaract Club, KDU',
        period: '2023 – 2024',
        description: 'Led public relations campaigns, managed social media presence, and coordinated promotional activities for the club.'
    },
    {
        role: 'Program Team Member',
        organization: 'IEEE Student Branch, KDU',
        period: '2023 – 2024',
        description: 'Contributed to planning and execution of technical programs and student events.'
    },
    {
        role: 'Leader',
        organization: 'English Debating Team',
        period: '2016 – 2018',
        description: 'Led the school debating team in inter-school competitions and training sessions.'
    },
    {
        role: 'Senior Member',
        organization: 'Media Club',
        period: '2020 – 2021',
        description: 'Contributed to media production and content creation for school events.'
    }
];

// Education Data
const educationData = [
    {
        degree: 'BSc (Hons) Computer Engineering (Undergraduate)',
        institution: 'General Sir John Kotelawala Defence University, Rathmalana, Sri Lanka',
        period: '2023 – Present',
        description: 'Currently pursuing undergraduate degree. Current GPA: 3.648'
    },
    {
        degree: 'GCE Advanced Level',
        institution: 'High School',
        period: '2021',
        description: 'Physical Science Stream'
    }
];

// Certifications Data — from CV with real links
const certificationsData = [
    {
        title: 'Capstone: Applying Project Management in the Real World',
        issuer: 'Google & Coursera',
        date: '2026',
        link: 'https://www.coursera.org'
    },
    {
        title: 'Agile Project Management',
        issuer: 'Google & Coursera',
        date: '2025',
        link: 'https://www.coursera.org'
    },
    {
        title: 'Project Execution: Running the Project',
        issuer: 'Google & Coursera',
        date: '2025',
        link: 'https://www.coursera.org'
    },
    {
        title: 'Project Planning: Putting It All Together',
        issuer: 'Google & Coursera',
        date: '2025',
        link: 'https://www.coursera.org'
    },
    {
        title: 'Project Initiation: Starting a Successful Project',
        issuer: 'Google & Coursera',
        date: '2025',
        link: 'https://www.coursera.org'
    },
    {
        title: 'Foundations of Project Management',
        issuer: 'Google & Coursera',
        date: '2025',
        link: 'https://www.coursera.org'
    },
    {
        title: 'Front-End Development',
        issuer: 'Meta & Coursera',
        date: '2024',
        link: 'https://www.coursera.org'
    },
    {
        title: 'Python for Data Science, AI & Development',
        issuer: 'IBM & Coursera',
        date: '2024',
        link: 'https://www.coursera.org'
    },
    {
        title: 'Introduction to Artificial Intelligence',
        issuer: 'Great Learning',
        date: '2024',
        link: 'https://www.mygreatlearning.com'
    },
    {
        title: 'Introduction to Machine Learning',
        issuer: 'Great Learning',
        date: '2024',
        link: 'https://www.mygreatlearning.com'
    },
    {
        title: 'Python',
        issuer: 'University of Moratuwa',
        date: '2024',
        link: 'https://www.uom.lk'
    },
    {
        title: 'Introduction to Packet Tracer',
        issuer: 'Cisco Networking Academy',
        date: '2023',
        link: 'https://www.netacad.com'
    }
];

// Render Skills Dashboard
function renderSkills() {
    const skillsContainer = document.getElementById('skills-dashboard');

    skillsData.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'skill-card animate-slideInLeft';
        categoryCard.style.animationDelay = `${index * 0.1}s`;

        let skillsHTML = `<h3 class="skill-category-title">${category.title}</h3>`;

        category.skills.forEach(skill => {
            skillsHTML += `
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-percentage">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 0; background-color: #61dafb;"
                             data-width="${skill.level}"></div>
                    </div>
                </div>
            `;
        });

        categoryCard.innerHTML = skillsHTML;
        skillsContainer.appendChild(categoryCard);
    });

    // Animate progress bars when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(progressBar => {
                    const targetWidth = progressBar.getAttribute('data-width');
                    setTimeout(() => {
                        progressBar.style.width = targetWidth + '%';
                    }, 100);
                });
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

        const linkHTML = project.link
            ? `<a href="${project.link}" target="_blank" class="tech-tag" style="background: rgba(168,85,247,0.2); color: #c084fc; text-decoration: none; margin-top: 0.5rem; display: inline-block;">🔗 View Project</a>`
            : '';

        projectCard.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
                <h3 class="project-title" style="margin-bottom:0;">${project.title}</h3>
                <span class="tech-tag" style="flex-shrink:0; margin-left:0.5rem;">${project.period}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}${linkHTML}</div>
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

// Render Volunteering
function renderVolunteering() {
    const container = document.getElementById('volunteering-grid');

    volunteeringData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'volunteering-card animate-fadeInUp';
        card.style.animationDelay = `${index * 0.2}s`;

        card.innerHTML = `
            <h3 class="project-title">${item.role}</h3>
            <div class="experience-meta" style="margin-bottom: 1rem;">
                <span class="experience-company">${item.organization}</span>
                <span class="experience-period">${item.period}</span>
            </div>
            <p class="project-description">${item.description}</p>
        `;

        container.appendChild(card);
    });
}

// Render Education
function renderEducation() {
    const container = document.getElementById('education-grid');

    educationData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'education-card animate-fadeInUp';
        card.style.animationDelay = `${index * 0.2}s`;

        card.innerHTML = `
            <h3 class="project-title">${item.degree}</h3>
            <div class="experience-meta" style="margin-bottom: 1rem;">
                <span class="experience-company">${item.institution}</span>
                <span class="experience-period">${item.period}</span>
            </div>
            <p class="project-description">${item.description}</p>
        `;

        container.appendChild(card);
    });
}

// Render Certifications — with View Certificate links
function renderCertifications() {
    const container = document.getElementById('certifications-grid');

    certificationsData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'education-card animate-fadeInUp';
        card.style.animationDelay = `${index * 0.2}s`;

        card.innerHTML = `
            <h3 class="project-title">${item.title}</h3>
            <div class="experience-meta" style="margin-bottom: 1rem;">
                <span class="experience-company">${item.issuer}</span>
                <span class="experience-period">${item.date}</span>
            </div>
            <a href="${item.link}" target="_blank" 
               style="display: inline-flex; align-items: center; gap: 0.4rem;
                      padding: 0.4rem 1rem; border-radius: 999px;
                      background: rgba(96,165,250,0.15);
                      border: 1px solid rgba(96,165,250,0.4);
                      color: #60a5fa; font-size: 0.85rem;
                      text-decoration: none; transition: all 0.3s;"
               onmouseover="this.style.background='rgba(96,165,250,0.3)'"
               onmouseout="this.style.background='rgba(96,165,250,0.15)'">
                🏅 View Certificate
            </a>
        `;

        container.appendChild(card);
    });
}

// Initialize all content
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderExperience();
    renderVolunteering();
    renderEducation();
    renderCertifications();
});