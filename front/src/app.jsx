import Dashboard from './pages/Dashboard'
import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/layouts/Header'
import './index.css'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element= {<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
 