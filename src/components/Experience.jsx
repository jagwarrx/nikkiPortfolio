function Experience() {
  const experiences = [
    {
      title: "Research Assistant",
      company: "Arizona State University",
      period: "Jul 2025 - Present",
      highlights: ["AI applications in Supply Chain Management", "Optimization frameworks for predictive analytics"]
    },
    {
      title: "Capstone: AI Supply Chain Control Tower",
      company: "Electronic Components Manufacturer",
      period: "Jun 2025 - Present",
      highlights: ["PowerBI dashboards & AI agents", "End-to-end supply chain visibility across Continental US"]
    },
    {
      title: "Associate Programmer Analyst",
      company: "Cognizant - Hartford Insurance",
      period: "Sep 2022 - Aug 2023",
      highlights: ["40% reduction in support tickets via UX improvements", "20% faster processing for mortality applications", "95% first-call resolution rate"]
    },
    {
      title: "Programmer Analyst",
      company: "Cognizant - Emblem Health",
      period: "Aug 2020 - Sep 2022",
      highlights: ["30% reduction in system downtime for 500K+ users", "25% performance improvement in claims processing", "99.5% system availability during peak periods"]
    }
  ]

  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{exp.period}</span>
                </div>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
