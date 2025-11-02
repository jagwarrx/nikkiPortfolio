function Header() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Niketha Venkatesh
          </h1>
          <ul className="flex gap-6">
            <li>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, 'skills')}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, 'experience')}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => scrollToSection(e, 'education')}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#resume"
                onClick={(e) => scrollToSection(e, 'resume')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
