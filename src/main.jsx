// styles
import './index.css'
// components
import App from './App.jsx'
// routes
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:category" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
