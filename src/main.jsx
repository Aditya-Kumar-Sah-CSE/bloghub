import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { BlogProvider } from './context/BlogContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <BlogProvider>
        <App />
      </BlogProvider>
    </Router>
  </StrictMode>,
)
