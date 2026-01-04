export default function About() {
  const expertiseAreas = [
    { 
      name: 'Frontend Development', 
     
      description: 'Modern web applications with React, Next.js, and responsive design',
      technologies: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript']
    },
    { 
      name: 'Backend Development', 
      icon: '⚙️',
      description: 'Robust server-side solutions with Node.js, Express, and Python',
      technologies: ['Node.js', 'Express', 'Python', 'Django', 'PHP']
    },
    { 
      name: 'Database Management', 
      icon: '🗄️',
      description: 'Efficient data storage and retrieval with various database systems',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    { 
      name: 'AI & Machine Learning', 
      
      description: 'Intelligent systems and data analysis with Python and ML frameworks',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP']
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
                  <p className="text-foreground/60 mb-6 leading-relaxed">
                    I'm an AI and Full-Stack Software Engineer with expertise in both web development and artificial intelligence. 
                    My passion lies in creating innovative solutions that bridge the gap between cutting-edge AI technologies 
                    and practical, user-friendly applications.
                  </p>
                  <p className="text-foreground/60 mb-6 leading-relaxed">
                    With a diverse skill set spanning from frontend development with React and Next.js to backend systems with 
                    Node.js, Python, and PHP, I build comprehensive full-stack solutions. My AI/ML expertise allows me to 
                    integrate intelligent features into web applications.
                  </p>
                  <p className="text-foreground/60 mb-8 leading-relaxed">
                    I have experience working with various databases including MongoDB, PostgreSQL, and MySQL, 
                    ensuring optimal data management for different project requirements.
                  </p>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4 mt-auto">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 text-center border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">6+</div>
                    <div className="text-foreground/60 text-sm">Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 text-center border border-green-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">10+</div>
                    <div className="text-foreground/60 text-sm">Technologies</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 text-center border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Full</div>
                    <div className="text-foreground/60 text-sm">Stack</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expertise Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group h-full transform hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    {/* Icon and Header */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{area.name}</h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-foreground/60 mb-4 text-sm leading-relaxed flex-1">
                      {area.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                      {area.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-foreground/70 rounded-full text-xs font-medium border border-purple-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}