import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from '../components/WelcomePage';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import NavBar from '../components/NavBar';
import TermsPage from '../components/TermsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<><NavBar /><HomePage /></>} />
        <Route path="/login" element={<><NavBar /><LoginPage /></>} />
        <Route path="/signup" element={<><NavBar /><SignupPage /></>} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
