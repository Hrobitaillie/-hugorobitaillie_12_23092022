import Dashboard from './pages/Dashboard'
import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/layouts/Header'
import './index.css'
import Login from './pages/Login'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact strict path='/user/:userId' element= {<Dashboard/>}/>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
 