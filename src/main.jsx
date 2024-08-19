import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import WelcomePage from './Components/WelcomePage';
import HomePage from './Components/HomePage';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';
import AddAccount from './Components/AddAccount';
import AddAccountDetails from './Components/AddAccountDetails';
import AddCategory from './Components/AddCategory';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addaccount" element={<AddAccount />} />
        <Route path="/addaccountdetails" element={<AddAccountDetails />} />
        <Route path="/addcategory" element={<AddCategory />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

