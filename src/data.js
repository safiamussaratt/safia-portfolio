export const projects = [
  {
    id: 1,
    name: 'Urban Heat Island Analysis Pipeline',
    stack: 'Python · PyTorch · Scikit-Learn · Landsat-9',
    desc: 'Engineered spatial interaction features and a 1D-CNN to analyze and predict Islamabad\'s thermal patterns using Landsat-9 satellite telemetry data.',
    github: 'https://github.com/safiamussaratt/landsat-uhi-predictor', 
  },
  {
    id: 2,
    name: 'Servia: NGO Management System',
    stack: 'React · Flask · PostgreSQL · Leaflet',
    desc: 'Built a centralized NGO discovery platform with an interactive Leaflet map and a scalable database for managing donors, volunteers, and causes.',
    github: 'https://github.com/safiamussaratt/Servia', 
  },
  {
    id: 3,
    name: 'Predictive Picking for Automated Warehouse',
    stack: 'Python · Machine Learning',
    desc: 'Built a machine learning model to predict demand and optimize automated warehouse picking efficiency, reducing operational overhead.',
    github: 'https://github.com/safiamussaratt/Predictive-Picking-for-Automated-Warehouse-', 
  },
  {
    id: 4,
    name: 'Cloud Network Simulation & Visualization',
    stack: 'Python · NetworkX · Matplotlib',
    desc: 'Engineered a traffic flow modeling framework with time-series analysis and a real-time dashboard for network performance and congestion monitoring.',
    github: 'https://github.com/safiamussaratt/Cloud-Network-Simulation', 
  },
  {
    id: 5,
    name: 'EasyMeds',
    stack: 'React · Node.js · Express.js · REST APIs',
    desc: 'A mobile healthcare application designed to help users manage medication schedules, set reminders, and track their health data.',
    github: 'https://github.com/safiamussaratt/EasyMeds', 
  },
  {
    id: 6,
    name: 'Statetalk Compiler',
    stack: 'C++ · Lex/Flex · Yacc/Bison · GNU Make',
    desc: 'A DSL compiler that turns chatbot conversation flows into executable Python code using PLY. ',
    github: 'https://github.com/safiamussaratt/statetalk_compiler', 
  },
  {
    id: 7,
    name: 'Turing Machine String Reversal Simulator',
    stack: 'Python · NetworkX · Matplotlib',
    desc: 'A simulator that visualizes and executes a Turing Machine designed specifically to reverse an input string.',
    github: 'https://github.com/safiamussaratt/Turing-Machine-String-Reversal-Simulator', 
  },
  {
    id: 8,
    name: 'Sleeping Barber Problem Simulator',
    stack: 'C++ · Multithreading · Mutexes · Semaphores · Condition Variables',
    desc: 'An advanced multi-threaded simulation of the classic Sleeping Barber problem with priority customers, real-time visualization, and comprehensive logging.',
    github: 'https://github.com/safiamussaratt/Sleeping-Barber-Problem-Simulator', 
  },
]

export const skills = {
  'Data Science & AI': ['Python', 'Pandas', 'Scikit-learn', 'PyTorch', 'NetworkX', 'OSMnx', 'Matplotlib', 'SQL'],
  'Development':       ['Django', 'Flask', 'React', 'PostgreSQL', 'JavaScript', 'Tailwind CSS', 'C'],
  'Professional':      ['MS Project', 'Agile / Scrum', 'Risk Management', 'RPA Process Analysis', 'Technical Documentation'],
}

export const experience = [
  {
    role: 'Innovation & Financial Inclusion Intern',
    org: 'HBL (Habib Bank Limited)',
    date: 'June 2024 – August 2024',
    bullets: [
      'Collaborated on ML and RPA process analysis projects',
      'Produced technical documentation (Knowledge Articles) to streamline workflows',
    ],
    isLast: false,
  },
  {
    role: 'Student Teaching Assistant (STA)',
    org: 'FAST-NUCES, Karachi',
    date: 'Fall 2025',
    bullets: [
      'Assisted faculty with grading and provided technical guidance',
      'Led programming workshops for junior students',
    ],
    isLast: true,
  },
]

export const education = [
  {
    year: 'Expected June 2027',
    inst: 'FAST-NUCES, Karachi',
    deg: 'Bachelor of Science in Computer Science',
  },
  {
    year: '2023 · GCE A-Levels',
    inst: 'Whales College',
    deg: 'Maths, Physics, Computer Science',
  },
  {
    year: '2021 · GCE O-Levels',
    inst: 'Beaconhouse School System',
    deg: '4A*s · 4As',
  },
]
