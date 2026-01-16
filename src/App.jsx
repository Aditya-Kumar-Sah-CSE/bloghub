import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllBlogs from './pages/AllBlogs'
import BlogDetail from './pages/BlogDetail'
import CreateBlog from './pages/CreateBlog'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
