// styles
import './index.css'
// components
import App from './App.jsx'
// routes
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/T-Shirts" replace />} />
      <Route path="/:category" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
