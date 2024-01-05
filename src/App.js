import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Pin from './components/Login/Pin';
import Reset from './components/Login/Reset';
import ResetSuccessful from './components/Login/ResetSuccessful';
import Home from './components/Home/Home';
import Signup from './components/SignUp/Signup';
import Signup_pin from './components/SignUp/Signup_pin';
import Signup_status from './components/SignUp/Signup_status';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pin" element={<Pin />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/resetsuccessful" element={<ResetSuccessful />} />
        <Route  path='/signup' element={<Signup/>} />
        <Route  path='/signup/pin' element={<Signup_pin />} />
        <Route  path='/signup/status' element={<Signup_status />} />
      </Routes>
    </Router>
  );
}

export default App;

