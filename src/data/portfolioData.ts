export interface Skill {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'ai' | 'other';
  proficiency: number; // 0 to 100
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  github: string;
  liveDemo?: string;
  techBadges: string[];
  screenshots: string[];
  videoUrl?: string;
  architectureHighlights?: string[];
  workflowSteps?: { title: string; desc: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface PersonalInfo {
  name: string;
  roles: string[];
  college: string;
  degree: string;
  year: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  codechef?: string;
  leetcode?: string;
  careerGoal: string;
  aboutText: string[];
  developerQuote: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Bandaru Devendar',
  roles: ['Full Stack Developer', 'Java Developer', 'AI Enthusiast'],
  college: 'KLH University',
  degree: 'B.Tech Computer Science Engineering',
  year: '3rd Year',
  location: 'Bachupally, Hyderabad, India',
  email: 'devendarbandaru05@gmail.com',
  phone: '+91 9398315212',
  linkedin: 'https://www.linkedin.com/in/devendar-bandaru-7986a331b/',
  github: 'https://github.com/Devendar0203',
  codechef: 'https://www.codechef.com/users/devendar_05',
  leetcode: 'https://leetcode.com/u/devendar_1829/',
  careerGoal: 'Aspiring Full Stack Developer passionate about building scalable web applications and solving real-world problems through technology. Continuously learning and improving my skills in software development, cloud computing, and artificial intelligence.',
  aboutText: [
    'I am a Computer Science Engineering student at KLH University specializing in designing high-performance backends, secure system architectures, and cloud-ready AI integrations.',
    'I focus on engineering scalable, secure, and production-ready digital architectures that bridge the gap between robust Java backend services and smart machine learning models.',
    'With active experience in RESTful microservices, Spring Security, JWT authentication, and deep learning vision systems, I enjoy building software that solves complex problems with quantifiable efficiency.'
  ],
  developerQuote: 'Turning ideas into scalable digital solutions through code, creativity, and continuous learning.'
};

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'languages', proficiency: 90 },
  { name: 'JavaScript', category: 'languages', proficiency: 85 },
  { name: 'C', category: 'languages', proficiency: 75 },

  // Frontend
  { name: 'HTML5', category: 'frontend', proficiency: 95 },
  { name: 'CSS3', category: 'frontend', proficiency: 90 },
  { name: 'React.js', category: 'frontend', proficiency: 88 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90 },

  // Backend
  { name: 'Spring Boot', category: 'backend', proficiency: 85 },
  { name: 'Spring Security', category: 'backend', proficiency: 80 },
  { name: 'REST APIs', category: 'backend', proficiency: 90 },
  { name: 'JWT Authentication', category: 'backend', proficiency: 85 },

  // Database
  { name: 'MySQL', category: 'database', proficiency: 85 },
  { name: 'SQL', category: 'database', proficiency: 85 },
  { name: 'PostgreSQL (Basics)', category: 'database', proficiency: 60 },

  // Cloud
  { name: 'AWS', category: 'cloud', proficiency: 75 },
  { name: 'GCP Basics', category: 'cloud', proficiency: 60 },
  { name: 'Vercel', category: 'cloud', proficiency: 85 },
  { name: 'Render', category: 'cloud', proficiency: 80 },

  // Tools
  { name: 'GitHub', category: 'tools', proficiency: 90 },
  { name: 'Postman', category: 'tools', proficiency: 88 },
  { name: 'Notion', category: 'tools', proficiency: 80 },

  // AI Tools
  { name: 'ChatGPT', category: 'ai', proficiency: 95 },
  { name: 'GitHub Copilot', category: 'ai', proficiency: 90 },
  { name: 'Cursor', category: 'ai', proficiency: 90 },

  // Other
  { name: 'API Integration', category: 'other', proficiency: 90 },
  { name: 'Role-Based Access Control', category: 'other', proficiency: 85 },
  { name: 'System Design Fundamentals', category: 'other', proficiency: 75 },
  { name: 'Prompt Engineering', category: 'other', proficiency: 90 }
];

export const projects: Project[] = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    subtitle: 'Scalable Enterprise-Grade Task Manager',
    description: 'TaskFlow is a scalable, enterprise-grade task management system designed to enable secure team collaboration. Built using a robust Java, Spring Boot, and MySQL backend, it integrates secure role-based access control (RBAC) and JWT authentication to manage state routing efficiently. The system exposes performant REST APIs that handle resource operations with high throughput, ensuring scalability and maintainability.',
    github: 'https://github.com/Devendar0203/taskflow_frontend_final',
    liveDemo: 'https://taskflow-frontend-final-tnsd-nine.vercel.app/filters-labels',
    techBadges: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'Tailwind CSS', 'MySQL', 'REST APIs'],
    screenshots: [
      '/images/projects/taskflow/all-tasks.png',
      '/images/projects/taskflow/today-tasks.png',
      '/images/projects/taskflow/upcoming-tasks.png',
      '/images/projects/taskflow/filters-labels.png',
      '/images/projects/taskflow/completed-tasks.png'
    ],
    videoUrl: '/videos/taskflow-demo.mp4',
    architectureHighlights: [
      'Modular architecture focusing on Separation of Concerns (SoC) for enterprise scaling.',
      'Secure token-based user authentication using JSON Web Tokens (JWT) with automatic expiration and revocation.',
      'Designed secure role-based access controls handling secure state routing efficiently.',
      'Optimized database queries in Hibernate/JPA reducing query latency for task search, filters, and tags.'
    ]
  },
  {
    id: 'plant-disease',
    title: 'Plant Disease Detection AI',
    subtitle: 'Deep Learning Mobile Web App',
    description: 'An AI-powered web application that detects plant diseases from leaf images. Achieved high classification accuracy using a lightweight MobileNetV2 deep learning architecture optimized for fast web inference. Built with TensorFlow, Keras, and Streamlit, it provides crop leaves diagnostic insights and organic treatment suggestions instantly.',
    github: 'https://github.com/Devendar0203/plant-disease-detection-ai',
    techBadges: ['Python', 'Streamlit', 'TensorFlow', 'Keras', 'MobileNetV2', 'Deep Learning', 'Computer Vision'],
    screenshots: [
      '/images/projects/plant-disease/landing.png'
    ],
    videoUrl: '/videos/plant-demo.mp4',
    workflowSteps: [
      { title: 'Image Upload', desc: 'User uploads a high-resolution photo of the infected crop/plant leaf.' },
      { title: 'Preprocessing', desc: 'The image is resized to 224x224 and normalized for MobileNetV2 input requirements.' },
      { title: 'AI Model Inference', desc: 'The pre-trained MobileNetV2 classifier analyses spatial features and computes class probabilities.' },
      { title: 'Diagnosis & Treatment', desc: 'The app shows the detected disease name, prediction confidence, and biological treatment remedies.' }
    ]
  },
  {
    id: 'tamper-detection',
    title: 'Digital Evidence Tamper Detection',
    subtitle: 'Forensic File Integrity Monitor',
    description: 'A forensic cybersecurity system designed to detect unauthorized modifications and deletions of files. Utilized automated SHA-256 cryptographic hashing to achieve 100% accurate real-time file integrity monitoring and instant tamper alerting on Kali Linux. Built with Python and Flask, it features directory structure audits, recursive comparisons, and tampering alert logs for digital evidence security.',
    github: 'https://github.com/Devendar0203/Digital-Evidence-Tamper-Detection-System',
    techBadges: ['Python', 'SHA-256', 'Flask', 'Kali Linux', 'Cybersecurity', 'File Integrity Monitoring', 'Forensics'],
    screenshots: [
      '/images/projects/tamper-detection/landing.png'
    ],
    architectureHighlights: [
      'Utilized automated SHA-256 cryptographic hashing to achieve 100% accurate real-time file integrity monitoring.',
      'Logs instant tamper alerting with detailed hash mismatches and Unix timestamps.',
      'Performs recursive comparisons on directory structures to identify unauthorized file deletions or modifications.',
      'Integrates a lightweight Flask web dashboard for easy visual audits in Kali Linux forensic environments.'
    ]
  }
];

export const experiences: Experience[] = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Pinnacle Labs',
    location: 'Remote, India',
    period: 'Present',
    description: [
      'Optimized backend REST APIs using Java and Spring Boot, reducing response times by 15%.',
      'Refined JWT security protocols and Spring Security configurations to ensure secure data handling and RBAC state routing.',
      'Developed and integrated highly responsive frontend features using React.js and Tailwind CSS.',
      'Increased code coverage by 20% through comprehensive automated unit testing and robust integration workflows.'
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'React', 'Tailwind CSS', 'Git', 'Postman']
  }
];

export const certifications: Certification[] = [
  {
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    credentialId: 'AZ-900 / AI-900',
    verificationUrl: 'https://learn.microsoft.com/credentials/'
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    credentialId: 'AWS-CLF-C02',
    verificationUrl: 'https://aws.amazon.com/verification'
  },
  {
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    credentialId: 'IBM-CC-01',
    verificationUrl: 'https://www.coursera.org/verify/professional-cert'
  },
  {
    title: 'Getting Started with Git and GitHub',
    issuer: 'IBM',
    credentialId: 'IBM-GIT-01',
    verificationUrl: 'https://www.coursera.org/verify/professional-cert'
  },
  {
    title: 'Cisco C Essentials 1',
    issuer: 'Cisco Networking Academy',
    credentialId: 'CISCO-C-ESS1',
    verificationUrl: 'https://www.netacad.com/'
  },
  {
    title: 'Cambridge Linguaskill English Test (CEFR B1)',
    issuer: 'Cambridge University Press & Assessment',
    credentialId: 'CEFR-B1-ENGL',
    verificationUrl: 'https://www.cambridgeenglish.org/'
  }
];

export const testimonials = [
  {
    quote: "Devendar is a dedicated developer who grasps backend security concepts and full-stack integration quickly. His focus on clean architecture is exemplary.",
    name: "Engineering Mentor",
    role: "Senior Developer at Pinnacle Labs"
  },
  {
    quote: "Devendar consistently delivers high-quality projects. His Plant Disease AI app highlights a rare capability to combine machine learning models with functional, sleek web design.",
    name: "Prof. S. Kumar",
    role: "Computer Science Dept, KLH University"
  }
];
