import Dashboard from './pages/Dashboard'
import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/layouts/Header'
import './index.css'
import Login from './pages/Login'
import Auth from './contexts/Auth'

function App() {
    const { isLogged, userId } = useContext(Auth);

    console.log(userId);
    return (
    <Auth.Provider value={{isLogged, userId}}>
        <React.StrictMode>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    {isLogged ? (<Route path='/' element= {<Dashboard/>}/>):(<Route path='/' element= {<Navigate to="/login" />}/>)}
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Auth.Provider>
  );
}

export default App;
