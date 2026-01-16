import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="hidden sm:inline text-2xl font-bold text-gray-800">BlogHub</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link to="/blogs" className="text-gray-600 hover:text-blue-600 font-medium transition">
              All Blogs
            </Link>
            <Link to="/create" className="text-gray-600 hover:text-blue-600 font-medium transition">
              Create
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition">
              About
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
