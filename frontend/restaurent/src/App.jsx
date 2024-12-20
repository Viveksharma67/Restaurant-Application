import React from 'react'
import Landing from './component/Landing'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Sign from './component/Sign';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/sign" element={<Sign/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  )
 
}

export default App
