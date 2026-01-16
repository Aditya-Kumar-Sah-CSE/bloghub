import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useBlogContext } from '../context/BlogContext'

export default function AllBlogs() {
  const { blogs } = useBlogContext()
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(blogs.map(b => b.category))]
  const filteredBlogs = filter === 'All' ? blogs : blogs.filter(b => b.category === filter)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">All Blogs</h1>
          <p className="text-gray-600 text-lg">Explore all our articles and find what interests you.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">by {blog.author}</span>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blogs found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
