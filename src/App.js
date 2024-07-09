import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Navbar from './comp/Navbar';
import Business from './comp/Business';
import Entertaintment from './comp/Entertaintment';
import Sports from './comp/Sports';
import Health from './comp/Health';
import General from './comp/General';
import Home from './comp/Home';
import Registration from './comp/Registration';
import Login from './comp/Login';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Registration" element={<Registration />} />
      </Routes>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/General" element={<General />} />
      </Routes>
      <Routes>
        <Route path="/Business" element={<Business />} />
      </Routes>
      <Routes>
        <Route path="/Entertaintment" element={<Entertaintment />} />
      </Routes>
      <Routes>
        <Route path="/Sports" element={<Sports />} />
      </Routes>
      <Routes>
        <Route path="/Health" element={<Health />} />
      </Routes>
    </Router>
  );
}
