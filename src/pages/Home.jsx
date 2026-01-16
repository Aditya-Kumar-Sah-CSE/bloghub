import { Link } from 'react-router-dom'
import { useBlogContext } from '../context/BlogContext'

export default function Home() {
  const { blogs } = useBlogContext()
  const featuredBlogs = blogs.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to BlogHub</h1>
          <p className="text-xl mb-8 text-blue-100">Discover inspiring stories, technical insights, and creative ideas from our community.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/blogs" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center">
              Explore Blogs
            </Link>
            <Link to="/create" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition text-center">
              Start Writing
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Blogs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-4">Featured Articles</h2>
        <p className="text-gray-600 mb-12">Check out our latest and greatest blog posts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{blog.category}</span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {blog.author}</span>
                  <Link to={`/blog/${blog.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blogs" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            View All Articles
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{blogs.length}+</div>
              <p className="text-gray-600 font-semibold">Articles Published</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <p className="text-gray-600 font-semibold">Active Readers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">100+</div>
              <p className="text-gray-600 font-semibold">Contributors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
