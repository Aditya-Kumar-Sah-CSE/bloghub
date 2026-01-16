import { createContext, useState, useContext } from 'react'

const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Getting Started with React',
      author: 'John Doe',
      category: 'Technology',
      date: '2024-01-10',
      excerpt: 'Learn the basics of React and start building modern web applications.',
      content: 'React is a JavaScript library for building user interfaces with reusable components. It uses a virtual DOM to efficiently update the UI. You can create class components or functional components with hooks. Props allow you to pass data between components, and state manages component data. React makes it easy to build scalable and maintainable applications.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Tailwind CSS Tips and Tricks',
      author: 'Jane Smith',
      category: 'Design',
      date: '2024-01-08',
      excerpt: 'Master Tailwind CSS with these practical tips to speed up your workflow.',
      content: 'Tailwind CSS is a utility-first CSS framework that helps you build modern designs without writing custom CSS. It provides pre-defined classes for colors, spacing, typography, and more. You can customize it with a configuration file. Tailwind is responsive-first, making it easy to build mobile-friendly designs. The framework keeps your markup clean and your styling consistent.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Web Performance Optimization',
      author: 'Mike Johnson',
      category: 'Technology',
      date: '2024-01-05',
      excerpt: 'Strategies to improve your website performance and user experience.',
      content: 'Website performance is crucial for user experience and SEO rankings. Optimize images by using modern formats like WebP and compressing them. Minimize CSS and JavaScript files. Use lazy loading for images and components. Implement caching strategies. Monitor your site with tools like Lighthouse and PageSpeed Insights. Code splitting and tree shaking can reduce bundle size. A faster website means better engagement and conversions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
    },
  ])

  const addBlog = (newBlog) => {
    const blog = {
      ...newBlog,
      id: Math.max(...blogs.map(b => b.id), 0) + 1,
      date: new Date().toISOString().split('T')[0]
    }
    setBlogs([blog, ...blogs])
    return blog
  }

  const getBlogById = (id) => {
    return blogs.find(blog => blog.id === parseInt(id))
  }

  return (
    <BlogContext.Provider value={{ blogs, addBlog, getBlogById }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlogContext = () => useContext(BlogContext)
