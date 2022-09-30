import Dashboard from './pages/Dashboard'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/layouts/Header'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
