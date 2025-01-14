import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import HomePage from './Components/HomePage/HomePage';
import SignupPage from './Components/SignupPage/SignupPage';
import LoginPage from './Components/LoginPage/LoginPage';
import AddAccount from './Components/AddAccount/AddAccount';
import AddAccountDetails from './Components/AddAccountDetail/AddAccountDetails';
import AddCategory from './Components/AddCategory/AddCategory';
import Currency from './Components/CurrencyPage/Currency';


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
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

