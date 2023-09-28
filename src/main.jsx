import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, Overview} from './App.jsx'
import {WorkExperience} from './Experience.jsx'
// import {WorkCV} from './Work.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Overview />
    <WorkExperience />
  </React.StrictMode>,
)
