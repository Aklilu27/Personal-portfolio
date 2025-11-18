export default function Projects() {
  const projects = [
    {
      title: "Spam Classifier",
      description: "Machine learning system that accurately identifies and filters spam messages using NLP techniques and Python.",
      technologies: ["Python", "TensorFlow", "NLP", "Scikit-learn", "Pandas"],
      category: "AI/ML",
      gradient: "from-green-500 to-blue-500",
      stack: ["Python", "Machine Learning", "NLP"]
    },
    {
      title: "Library Management System",
      description: "Comprehensive library management solution with book tracking, user management, and analytics dashboard.",
      technologies: ["Next.js", "React", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
      category: "Full Stack",
      gradient: "from-purple-500 to-pink-500",
      stack: ["JavaScript", "React", "MongoDB", "Express"]
    },
    {
      title: "Audio Streaming Site",
      description: "Modern audio streaming platform with real-time playback, user playlists, and admin panel.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Web Audio API"],
      category: "Full Stack",
      gradient: "from-orange-500 to-red-500",
      stack: ["JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Simple Blog Site",
      description: "Clean and responsive blog platform with markdown support, admin dashboard, and user authentication.",
      technologies: ["Next.js", "React", "PostgreSQL", "Tailwind CSS", "Node.js"],
      category: "Full Stack",
      gradient: "from-blue-500 to-teal-500",
      stack: ["Next.js", "React", "PostgreSQL", "CSS3"]
    },
    {
      title: "NLP Text Analysis",
      description: "Advanced natural language processing tool for sentiment analysis and text classification.",
      technologies: ["Python", "Django", "TensorFlow", "NLTK", "PostgreSQL"],
      category: "AI/ML",
      gradient: "from-indigo-500 to-purple-500",
      stack: ["Python", "Django", "PostgreSQL", "NLP"]
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with payment integration and inventory management.",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      category: "Full Stack",
      gradient: "from-yellow-500 to-red-500",
      stack: ["PHP", "MySQL", "HTML5", "CSS3"]
    }
  ];

  const stackIcons = {
    'Python': '🐍',
    'JavaScript': '⚡',
    'React': '⚛️',
    'Next.js': '▲',
    'Node.js': '🟢',
    'Express': '🚂',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'MySQL': '🐬',
    'Django': '🐍',
    'PHP': '🐘',
    'HTML5': '🌐',
    'CSS3': '🎨',
    'TensorFlow': '🤖',
    'Machine Learning': '🧠',
    'NLP': '📝'
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        
      
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group border border-gray-200 shadow-sm hover:shadow-lg flex flex-col h-full"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded text-foreground/60">
                    {project.category}
                  </span>
                </div>
                <p className="text-foreground/60 mb-4 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {/* Stack Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="flex items-center space-x-1 px-2 py-1 bg-gray-100 text-xs rounded text-foreground/60"
                    >
                      <span>{stackIcons[tech]}</span>
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-50 text-xs rounded text-foreground/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-2 bg-gray-100 text-foreground/60 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white mt-auto">
                  View Project Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}