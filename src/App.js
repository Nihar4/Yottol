import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import "../src/css/global.css"
import Signup from './components/SignUp/Signup';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        {/* <Route path="/login/pin" element={<Pin />} /> */}
        {/* <Route path="/login/reset" element={<Reset />} />
        <Route path="/login/resetsuccessful" element={<ResetSuccessful />} /> */}
        <Route path='/signup/*' element={<Signup />} />
        {/* <Route path='/signup/pin' element={<Signup_pin />} /> */}
        {/* <Route path='/signup/status' element={<Signup_status />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

