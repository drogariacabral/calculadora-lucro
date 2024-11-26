import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyGlobalStyles from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <MyGlobalStyles />
    <App />
  </StrictMode>,
)