export default function Hero() {
  const quickStats = [
    { number: '6+', label: 'Projects' },
    { number: '10+', label: 'Technologies' },
    { number: 'Full', label: 'Stack' },
    { number: 'AI/ML', label: 'Expertise' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Aklilu <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Abera</span>
            </h2>
            <h2 className="text-xl md:text-2xl text-foreground/60 mb-8">
              Full-Stack & AI Engineer
            </h2>
            <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
              Building intelligent web solutions with JavaScript, React, Python, and cutting-edge AI technologies. 
              Full-stack development meets machine learning innovation.
            </p>

        
            <div className="flex gap-8 mb-12">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">{stat.number}</div>
                  <div className="text-foreground/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-gray-300 text-foreground/80 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
             
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                
                <div className="w-79 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-white shadow-lg mb-4">
                  <img 
                    src="profile.png" 
                    alt="Aklilu Abera"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">Aklilu Abera</h3>
                  <p className="text-foreground/60 text-sm mb-4">Full-Stack & AI Engineer</p>
                  
                  {/* Tech Stack Badges */}
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">Python</span>
                  </div>
                  
                  {/* Availability Status */}
                  <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Available for new projects</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-6 bg-white rounded-full p-2 shadow-lg border border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Py</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Scroll */}
        <div className="mt-16">
          <div className="flex overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'Django', 'PHP', 'MongoDB', 'PostgreSQL', 'MySQL', 'TensorFlow', 'HTML5', 'CSS3'].map((tech, index) => (
                <span key={index} className="mx-4 text-foreground/60 text-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}