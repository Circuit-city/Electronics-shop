import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Homepage from "./components/Homepage"

function App() {
  return (
    
    <div>
         <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
    </div>
    
  );
}

export default App; 
