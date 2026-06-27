import React from 'react'
import {Routes, Route} from "react-router-dom";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
