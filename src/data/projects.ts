export interface Project {
  id: string;
  number: string;
  name: string;
  role: string;
  description: string;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  contribution: string;
  githubUrl: string;
  demoUrl?: string;
  themeColor: string;
  accentBg: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'signbridge',
    number: '01',
    name: 'SIGNBRIDGE',
    role: 'AI/ML & Frontend Lead',
    description: 'Real-time Indian Sign Language recognition platform using MediaPipe hand landmarks and a Keras MLP model.',
    technologies: [
      'Python',
      'Machine Learning',
      'Computer Vision',
      'MediaPipe',
      'ANN',
      'React',
      'Vite',
      'Tailwind CSS',
      'Flask',
      'TensorFlow/Keras'
    ],
    features: [
      'Recognition of 35 static ISL classes',
      'Camera-based real-time recognition',
      'Wrist-relative landmark normalization',
      'AI-based sentence reconstruction',
      'English, Hindi and Marathi output',
      'Browser-based text-to-speech',
      'Interactive ISL Learn Mode'
    ],
    problem:
      'A persistent communication gap exists between the Deaf and Hard-of-Hearing community and the hearing population due to low public proficiency in Indian Sign Language (ISL), compounded by a scarcity of low-latency, multilingual, browser-friendly translation tools.',
    solution:
      'Engineered an end-to-end computer vision and neural classification pipeline that extracts 21 three-dimensional hand landmarks in real time via MediaPipe, normalizes spatial coordinates relative to the wrist to ensure invariant accuracy across hand distances, and passes them to a lightweight Keras MLP classifier. Combined with sentence smoothing and multilingual Web Speech TTS.',
    contribution:
      'Designed and trained the Keras Artificial Neural Network (MLP), built the 21-landmark coordinate normalization algorithm, established the real-time Flask inference microservice, and developed the interactive React interface with webcam capture and tri-lingual speech synthesis.',
    githubUrl: 'https://github.com/Eclipse1911/SignBridge',
    themeColor: '#285CF6',
    accentBg: 'from-blue-600/20 to-indigo-900/40'
  },
  {
    id: 'fasalmitra',
    number: '02',
    name: 'FASALMITRA',
    role: 'Backend & ML Engineer',
    description: 'Smart agriculture platform using microservices and deep-learning based agricultural analysis.',
    technologies: [
      'Python',
      'Flask',
      'MongoDB',
      'Redis',
      'REST APIs',
      'Deep Learning'
    ],
    features: [
      'Microservices architecture',
      'Deep learning diagnostic ML APIs',
      'High-throughput MongoDB document storage',
      'Redis in-memory caching layer',
      'Token-based authentication & session security',
      'Centralized API gateway'
    ],
    problem:
      'Agricultural practitioners lack integrated, low-latency diagnostic tooling to detect crop diseases and soil degradation early, frequently slowed down by monolithic software with bottlenecked data queries.',
    solution:
      'Architected a distributed microservices infrastructure powered by Flask services and deep learning diagnostic classifiers. Utilized Redis for sub-millisecond query caching and MongoDB for flexible agronomic telemetry storage, routed through a secured API gateway.',
    contribution:
      'Spearheaded the microservices decomposition, constructed performant REST APIs in Flask, configured Redis caching strategies for agricultural query endpoints, and structured MongoDB collections for sensor and crop diagnosis history.',
    githubUrl: 'https://github.com/Eclipse1911/fasalMitra',
    themeColor: '#10B981',
    accentBg: 'from-emerald-600/20 to-teal-950/40'
  },
  {
    id: 'careercompass-ai',
    number: '03',
    name: 'CAREERCOMPASS AI',
    role: 'Full-Stack Developer',
    description: 'AI-powered career guidance platform that recommends career paths, skills and personalized learning roadmaps.',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'Firebase',
      'Gemini API'
    ],
    features: [
      'AI-driven career guidance engine',
      'Personalized career path recommendations',
      'Targeted skill gap analysis',
      'Dynamic, personalized learning roadmaps',
      'Google Gemini API integration',
      'Firebase authentication & secure user profiles',
      'User profile & step-by-step career milestone tracking'
    ],
    problem:
      'Engineering students and early-career technologists frequently struggle to decipher dynamic industry skill expectations, leading to inefficient learning paths and lack of structured guidance.',
    solution:
      'Developed a modern Next.js application that leverages Google Gemini API to analyze an individual’s current background, strengths, and ambitions to formulate personalized career trajectories, curated skill ladders, and interactive roadmaps stored in Firebase.',
    contribution:
      'Implemented the frontend and server architecture in Next.js/TypeScript, orchestrated prompt workflows with the Gemini API, integrated Firebase Auth and Firestore for persistent user profile state, and engineered interactive roadmap progression components.',
    githubUrl: 'https://github.com/Eclipse1911/CareerCompass',
    themeColor: '#8B5CF6',
    accentBg: 'from-purple-600/20 to-slate-900/40'
  }
];
