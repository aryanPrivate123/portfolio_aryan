export interface SkillItem {
  name: string;
  category: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core computer science foundations, algorithms, and languages',
    skills: [
      { name: 'Python', category: 'Programming', tag: 'Language & AI' },
      { name: 'C++', category: 'Programming', tag: 'Systems & DSA' },
      { name: 'JavaScript', category: 'Programming', tag: 'Web & Runtime' },
      { name: 'SQL', category: 'Programming', tag: 'Query & Relational' },
      { name: 'DSA', category: 'Programming', tag: 'Data Structures & Algorithms' },
      { name: 'OOP', category: 'Programming', tag: 'Object-Oriented Design' },
      { name: 'Problem Solving', category: 'Programming', tag: 'Analytical Thinking' }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Modern reactive interfaces, frontend architectures, and backend runtimes',
    skills: [
      { name: 'React.js', category: 'Web Development', tag: 'Frontend Library' },
      { name: 'Next.js', category: 'Web Development', tag: 'Full-Stack Framework' },
      { name: 'HTML/CSS', category: 'Web Development', tag: 'Semantic Layout' },
      { name: 'Tailwind CSS', category: 'Web Development', tag: 'Utility Design System' },
      { name: 'Node.js', category: 'Web Development', tag: 'Backend Runtime' },
      { name: 'Express.js', category: 'Web Development', tag: 'Server Middleware' },
      { name: 'REST APIs', category: 'Web Development', tag: 'Service Endpoints' },
      { name: 'Vite', category: 'Web Development', tag: 'Build Tooling' },
      { name: 'Full-Stack Development', category: 'Web Development', tag: 'End-to-End Architecture' },
      { name: 'API Integration', category: 'Web Development', tag: 'Third-Party & Internal' },
      { name: 'Responsive Web Design', category: 'Web Development', tag: 'Cross-Device UX' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    subtitle: 'Machine learning, deep neural networks, computer vision, and LLM orchestration',
    skills: [
      { name: 'Machine Learning', category: 'AI & ML', tag: 'Supervised & Unsupervised' },
      { name: 'Deep Learning', category: 'AI & ML', tag: 'Neural Networks' },
      { name: 'Computer Vision', category: 'AI & ML', tag: 'Spatial Landmark Tracking' },
      { name: 'Natural Language Processing', category: 'AI & ML', tag: 'Text & Semantic Processing' },
      { name: 'Generative AI', category: 'AI & ML', tag: 'Foundation Models' },
      { name: 'AI Agents', category: 'AI & ML', tag: 'Autonomous Workflows' },
      { name: 'RAG', category: 'AI & ML', tag: 'Retrieval-Augmented Gen' },
      { name: 'Prompt Engineering', category: 'AI & ML', tag: 'Context & Few-Shot' },
      { name: 'LLM Applications', category: 'AI & ML', tag: 'Production Integration' },
      { name: 'AI Automation', category: 'AI & ML', tag: 'Pipelines & Agents' },
      { name: 'OpenCV', category: 'AI & ML', tag: 'Image & Video Processing' },
      { name: 'MediaPipe', category: 'AI & ML', tag: 'Hand & Pose Landmarks' },
      { name: 'Embeddings', category: 'AI & ML', tag: 'Vector Representations' },
      { name: 'Vector Databases', category: 'AI & ML', tag: 'High-Dimensional Indexing' },
      { name: 'Semantic Search', category: 'AI & ML', tag: 'Similarity Retrieval' }
    ]
  },
  {
    id: 'database-cloud',
    title: 'Database & Cloud',
    subtitle: 'Scalable data persistence, containerization, and cloud infrastructure',
    skills: [
      { name: 'MySQL', category: 'Database & Cloud', tag: 'Relational Database' },
      { name: 'PostgreSQL', category: 'Database & Cloud', tag: 'Advanced SQL Engine' },
      { name: 'Firebase', category: 'Database & Cloud', tag: 'Auth & Firestore NoSQL' },
      { name: 'Docker', category: 'Database & Cloud', tag: 'Containerization' },
      { name: 'AWS', category: 'Database & Cloud', tag: 'Cloud Platform' },
      { name: 'AWS EC2', category: 'Database & Cloud', tag: 'Elastic Compute' },
      { name: 'AWS S3', category: 'Database & Cloud', tag: 'Object Storage' },
      { name: 'AWS RDS', category: 'Database & Cloud', tag: 'Managed Relational DB' },
      { name: 'Cloud Deployment', category: 'Database & Cloud', tag: 'Production Delivery' }
    ]
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    subtitle: 'Developer environments, model studios, testing, and automation systems',
    skills: [
      { name: 'Git', category: 'Tools & Platforms', tag: 'Version Control' },
      { name: 'GitHub', category: 'Tools & Platforms', tag: 'Repo & Collaboration' },
      { name: 'Google Colab', category: 'Tools & Platforms', tag: 'Cloud GPU Computing' },
      { name: 'Google AI Studio', category: 'Tools & Platforms', tag: 'Model Prototyping' },
      { name: 'Gemini API', category: 'Tools & Platforms', tag: 'Multimodal AI' },
      { name: 'Pinecone', category: 'Tools & Platforms', tag: 'Vector Search Index' },
      { name: 'Postman', category: 'Tools & Platforms', tag: 'API Testing & Specs' },
      { name: 'VS Code', category: 'Tools & Platforms', tag: 'Primary IDE' },
      { name: 'Jupyter Notebook', category: 'Tools & Platforms', tag: 'Data Science & ML' },
      { name: 'n8n', category: 'Tools & Platforms', tag: 'Workflow Automation' }
    ]
  }
];

export const ALL_SKILLS: SkillItem[] = SKILL_CATEGORIES.flatMap((c) => c.skills);

export const MARQUEE_ITEMS: string[] = [
  'AI / ML',
  'COMPUTER VISION',
  'GENERATIVE AI',
  'FULL-STACK',
  'REACT.JS',
  'NEXT.JS',
  'PYTHON',
  'RAG & LLMs',
  'DOCKER & AWS',
  'GIT'
];
