function Projects() {
  const projects = [
    {
      title: "IMDB Movie Analytics Dashboard",
      company: "CIS 505",
      description: "Built interactive Tableau dashboard analyzing 50K+ IMDB movie records. Delivered industry insights on revenue trends, genre performance, and rating patterns using SQL and ER diagrams.",
      tags: ["Tableau", "SQL", "Data Visualization"],
      image: "/515.jpeg"
    },
    {
      title: "AI Supply Chain Control Tower",
      company: "Electronic Components Manufacturer (Avnet)",
      description: "PowerBI dashboards & AI agents for supply gap analysis. End-to-end visibility across Continental US operations.",
      tags: ["PowerBI", "AI Agents", "Analytics"],
      image: "/gen-tech.jpeg"
    },
    {
      title: "AI Request Routing Optimization",
      company: "SCM 518",
      description: "Optimized ChatGPT backend allocation using Gurobi Python. Minimized costs by $0.25/1K tokens with 100% SLA compliance across GPT-4, GPT-3.5, and Turbo models.",
      tags: ["Gurobi", "Linear Programming", "Python"],
      image: "/scm518.png"
    },
    {
      title: "GreenFleet Motors Investment Analysis",
      company: "SCM 519",
      description: "Decision analysis for EV production facility capacity (10K-40K units). Used Monte Carlo simulation & decision trees to optimize lithium investment. Recommended 25K capacity with 7% loss probability, maximizing profit-risk trade-off.",
      tags: ["Monte Carlo", "Decision Trees", "Risk Analysis"],
      image: "/519.png"
    },
    {
      title: "Employee Attrition ML Model",
      company: "CIS 508",
      description: "Built predictive model using 12 ML algorithms (Random Forest, XGBoost, SVM). Achieved 97% AUC on 1,470 IBM employee records.",
      tags: ["Machine Learning", "Python", "Scikit-learn"],
      image: "/cis508.png"
    },
    {
      title: "Process Optimization with Lean Six Sigma",
      company: "SCM 517",
      description: "Applied DMAIC methodology to global proposal process. Built Tableau dashboards across 5 geographies, reducing cycle time by 15%.",
      tags: ["Lean Six Sigma", "Tableau", "DMAIC"],
      image: "/scm517.png"
    },
    {
      title: "Manufacturing Process Design",
      company: "Plastic Design Company (PDC)",
      description: "Conducted robust design of experiments to enhance manufacturing excellence. Evaluated multiple factors and levels using Minitab software.",
      tags: ["Experimental Design", "Minitab", "DOE"],
      image: "/pdc.png"
    }
  ]

  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Graduate Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{project.company}</p>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
