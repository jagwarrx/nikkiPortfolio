function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Niketha Venkatesh</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  I'm a Master of Science in Business Analytics student at Arizona State University with a strong foundation in data analytics, machine learning, and software development. My passion lies in leveraging data-driven insights and AI technologies to solve complex business problems and optimize processes.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  With professional experience as a Programmer Analyst at Cognizant, I've worked on healthcare and insurance systems, delivering solutions that improved performance by up to 25% and reduced system downtime by 30%.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  I specialize in building AI-powered analytical solutions using Python, SQL, Tableau, and PowerBI.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently, I'm working on cutting-edge projects including developing an AI-powered Supply Chain Control Tower for an electronic components manufacturer and conducting research on AI applications in Supply Chain Management under Professor Brett Duarte at ASU.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.0</div>
              <div className="text-gray-600">GPA at ASU</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Technical Skills</div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-600 font-semibold">Email:</span>
                <a href="mailto:nikethavenkatesh0408@gmail.com" className="text-gray-700 hover:text-blue-600 transition">
                  nikethavenkatesh0408@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600 font-semibold">ASU Email:</span>
                <a href="mailto:nvenka30@asu.edu" className="text-gray-700 hover:text-blue-600 transition">
                  nvenka30@asu.edu
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600 font-semibold">Phone:</span>
                <a href="tel:602-517-8996" className="text-gray-700 hover:text-blue-600 transition">
                  602-517-8996
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600 font-semibold">LinkedIn:</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
