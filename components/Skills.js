export default function Skills() {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'Python', level: 88 },
    { name: 'React/Next.js', level: 85 },
    { name: 'Node.js/Express', level: 82 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'PHP', level: 78 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Natural Language Processing', level: 75 }
  ];

  const databases = [
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 75 }
  ];

  const frameworks = [
    'Next.js', 'React', 'Express.js', 'Django', 'Tailwind CSS',
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Tech Stack</span>
        </h2>
        
        {/* Programming Languages */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground/60 text-center">Programming Languages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-full">
                <div className="flex justify-between mb-3">
                  <span className="text-foreground/60 font-medium">{skill.name}</span>
                  <span className="text-foreground/40">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground/60 text-center">Databases</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {databases.map((db, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{db.name}</h4>
                  <div className="flex justify-center mb-3">
                    <span className="text-3xl text-purple-600">{db.level}%</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                    style={{ width: `${db.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-foreground/60 text-center">Frameworks & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {frameworks.map((framework, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:shadow-md transition-all duration-300 group h-20 flex items-center justify-center"
              >
                <div className="text-foreground/60 group-hover:text-foreground font-medium text-sm">
                  {framework}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}