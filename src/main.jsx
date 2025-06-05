import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/MyPortfolio/"> {/* 👈 important: use your repo name here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
