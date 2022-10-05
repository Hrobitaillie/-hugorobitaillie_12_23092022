import Dashboard from './pages/Dashboard'
import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/layouts/Header'
import './index.css'
import Auth from './contexts/Auth'

function App() {
    const { userId } = useContext(Auth);
    return (
    <Auth.Provider value={{userId}}>
        <React.StrictMode>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element= {<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Auth.Provider>
  );
}

export default App;
