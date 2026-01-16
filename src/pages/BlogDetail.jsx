import { useParams, Link,  } from 'react-router-dom'
import { useBlogContext } from '../context/BlogContext'

export default function BlogDetail() {
  const { id } = useParams()
//   const navigate = useNavigate()
  const { getBlogById, blogs } = useBlogContext()
  const blog = getBlogById(id)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <Link to="/blogs" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to all blogs
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = blogs.findIndex(b => b.id === blog.id)
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/blogs" className="text-blue-600 hover:text-blue-800 font-semibold mb-8 inline-flex items-center">
          ← Back to all blogs
        </Link>

        {/* Featured Image */}
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-lg mb-8" />

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
            {blog.category}
          </span>
          <span className="text-gray-600">Published on {blog.date}</span>
          <span className="text-gray-600">By {blog.author}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-6">{blog.title}</h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-gray-700 leading-relaxed">
            <p className="mb-4">{blog.content}</p>
            <p>
              This blog post provides valuable insights and perspectives. Feel free to share your thoughts and engage with the community in the comments section below.
            </p>
          </div>
        </div>

        {/* Navigation */}
        {(prevBlog || nextBlog) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {prevBlog && (
              <Link
                to={`/blog/${prevBlog.id}`}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="text-sm text-gray-600 mb-2">← Previous Post</p>
                <p className="font-bold text-gray-800 hover:text-blue-600">{prevBlog.title}</p>
              </Link>
            )}
            {nextBlog && (
              <Link
                to={`/blog/${nextBlog.id}`}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="text-sm text-gray-600 mb-2">Next Post →</p>
                <p className="font-bold text-gray-800 hover:text-blue-600">{nextBlog.title}</p>
              </Link>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Want to share your story?</h3>
          <p className="mb-6">Start writing your own blog post and inspire others with your knowledge and experiences.</p>
          <Link
            to="/create"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Create a Blog Post
          </Link>
        </div>
      </article>
    </div>
  )
}
