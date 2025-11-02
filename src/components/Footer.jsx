function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="mailto:nikethavenkatesh0408@gmail.com" className="text-gray-300 hover:text-blue-400 transition text-sm">
              nikethavenkatesh0408@gmail.com
            </a>
            <a href="mailto:nvenka30@asu.edu" className="text-gray-300 hover:text-blue-400 transition text-sm">
              nvenka30@asu.edu
            </a>
            <a href="tel:602-517-8996" className="text-gray-300 hover:text-blue-400 transition text-sm">
              602-517-8996
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition text-sm">
              LinkedIn
            </a>
          </div>
          <p className="text-gray-500 text-xs">
            &copy; 2025 Niketha Venkatesh | MSBA @ Arizona State University
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
