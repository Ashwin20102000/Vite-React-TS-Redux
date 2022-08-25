import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter, Routes } from 'react-router-dom'
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      {/* <Routes>
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
)
