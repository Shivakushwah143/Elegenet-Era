import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/AuthContext'
import { BlogProvider } from './context/BlogContext'
createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <BlogProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BlogProvider>
  </BrowserRouter>
)
