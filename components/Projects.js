"use client";

export default function Projects() {
  const projects = [
    {
      title: "Spam Classifier",
      description:
        "Machine learning system that accurately identifies and filters spam messages using NLP techniques and Python.",
      technologies: ["Python", "TensorFlow", "NLP", "Scikit-learn", "Pandas"],
      category: "AI/ML",
      gradient: "from-green-500 to-blue-500",
      stack: ["Python", "Machine Learning", "NLP"],
      image: "/projects/spam.png",
      link: "https://spam-classifier-k1vn.onrender.com", // <-- Add your URL here
    },
    {
      title: "Library Management System",
      description:
        "Comprehensive library management solution with book tracking, user management, and analytics dashboard.",
      technologies: ["Next.js", "React", "MongoDB", "Node.js", "Express"],
      category: "Full Stack",
      gradient: "from-purple-500 to-pink-500",
      stack: ["React", "MongoDB", "Express"],
      image: "/projects/library.png",
      link: "https://yourwebsite.com/library-system",
    },
    {
      title: "Audio Streaming Site",
      description:
        "Modern audio streaming platform with real-time playback, user playlists, and admin panel.",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Full Stack",
      gradient: "from-orange-500 to-red-500",
      stack: ["React", "Node.js", "MongoDB"],
      image: "/projects/audio.png",
      link: "https://yourwebsite.com/audio-streaming",
    },
    {
      title: "Simple Blog Site",
      description:
        "Clean and responsive blog platform with markdown support and authentication.",
      technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
      category: "Full Stack",
      gradient: "from-blue-500 to-teal-500",
      stack: ["Next.js", "PostgreSQL"],
      image: "/projects/blog.png",
      link: "https://yourwebsite.com/blog",
    },
  
    {
      title: "Child and Women Protection Case Management System",
      description:
        "A web-based system designed to manage cases related to child and women protection efficiently. It helps organizations track cases, monitor interventions, and generate reports for decision-making.",
      technologies: ["PHP Laravel", "MySQL", "Bootstrap"],
      category: "Full Stack",
      gradient: "from-yellow-500 to-red-500",
      stack: ["PHP Laravel", "MySQL"],
      image: "/projects/ecommerce.png",
      link: "https://perpetrators.et/",
    },
  ];

  const stackIcons = {
    Python: "🐍",
    JavaScript: "⚡",
    React: "⚛️",
    "Next.js": "▲",
    "Node.js": "🟢",
    MongoDB: "🍃",
    PostgreSQL: "🐘",
    MySQL: "🐬",
    Django: "🌿",
    PHP: "🐘",
    NLP: "🧠",
    "Machine Learning": "🤖",
  };

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold hover:text-purple-600 transition">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* STACK */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-xs rounded"
                    >
                      <span>{stackIcons[tech]}</span>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-50 text-xs rounded text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINK BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-2 rounded-lg bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition font-medium text-sm text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
