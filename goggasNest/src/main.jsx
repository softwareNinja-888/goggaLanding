import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ScrollToTop } from './components/helper/ScrollToTop'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollToTop/>
    <App />
  </StrictMode>,
)
