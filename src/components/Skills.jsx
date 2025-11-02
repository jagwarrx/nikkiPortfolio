function Skills() {
  const skills = {
    "Analytics & ML": ["Python", "Tableau", "PowerBI", "Scikit-learn", "Pandas", "NumPy", "Statistical Analysis"],
    "Optimization": ["Gurobi", "Linear Programming", "Lean Six Sigma"],
    "Databases": ["SQL", "MySQL", "Oracle", "PL/SQL"],
    "Tools": ["Git", "Jupyter", "Hadoop", "JIRA", "PowerApps"]
  }

  return (
    <section id="skills" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
