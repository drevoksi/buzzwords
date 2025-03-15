import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Frontend from './Frontend.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Frontend />
  </StrictMode>,
)
