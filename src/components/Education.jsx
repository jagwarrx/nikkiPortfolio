function Education() {
  const education = [
    {
      degree: "MS in Business Analytics",
      institution: "Arizona State University",
      period: "Jan 2025 - Present",
      gpa: "4.0/4.0",
      highlights: ["97% AUC ML model for employee attrition", "15% cycle time reduction via Lean Six Sigma", "AI routing optimization with Gurobi"]
    },
    {
      degree: "BTech in Computer Science",
      institution: "Amrita Vishwa Vidhyapeetham",
      period: "2016 - 2020",
      gpa: "7.44/10"
    }
  ]

  const certifications = [
    { name: "Lean Six Sigma Green Belt", status: "In Progress", date: "Expected Dec 2025" },
    { name: "Google Data Analytics", status: "Completed", date: "Feb 2022" }
  ]

  return (
    <section id="education" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Degrees</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                        <p className="text-sm text-blue-600">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">{edu.period}</p>
                        <p className="text-sm font-semibold text-gray-700">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                    {edu.highlights && (
                      <ul className="space-y-1 mt-2">
                        {edu.highlights.map((h, idx) => (
                          <li key={idx} className="text-xs text-gray-700 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        cert.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {cert.status}
                      </span>
                      <span className="text-xs text-gray-600">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
