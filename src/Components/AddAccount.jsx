import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AddAccount.css';
import icon from '../assets/addaccount.png';

const initialAccountOptions = [
  { id: 'cash', name: 'Cash', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/cash.png' },
  { id: 'bank', name: 'Bank', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/bank.png' },
  { id: 'wallet', name: 'Wallet', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/wallet.png' },
];

const AddAccount = () => {
  const location = useLocation();
  const [accountOptions, setAccountOptions] = useState(initialAccountOptions);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/login');
  };

  const handleNext = () => {
    navigate('/addcategory');
  };

  const handleSelectAccount = (account) => {
    setSelectedAccounts([...selectedAccounts, account]);
    setAccountOptions(accountOptions.filter(a => a.id !== account.id));
  };

  const handleRemoveAccount = (account) => {
    setSelectedAccounts(selectedAccounts.filter(a => a !== account));
    setAccountOptions([account, ...accountOptions]);
  };

  useEffect(() => {
    if (location.state && location.state.newAccount) {
      const newAccount = location.state.newAccount;
      setSelectedAccounts([...selectedAccounts, newAccount]);
    }
  }, [location.state]);

  return (
    <div className="container">
      <header className="header">
        <img src={icon} alt="Icon" className="icon" />
        <h1>Add Account</h1>
      </header>
      <section className="account-section">
        <h2>Recommended accounts</h2>
        {selectedAccounts.length > 0 && (
          <div className="selected-accounts">
            {selectedAccounts.map(account => (
              <div key={account.id} className="selected-account">
                <img src={account.icon} alt={account.name} className="button-icon" />
                {account.name}
                <img
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/delete.png"
                  alt="Delete"
                  className="delete-icon"
                  onClick={() => handleRemoveAccount(account)}
                />
              </div>
            ))}
          </div>
        )}
        <div className="account-buttons">
          {accountOptions.map(account => (
            <button
              key={account.id}
              className={`account-button ${selectedAccounts.includes(account) ? 'selected' : ''}`}
              onClick={() => handleSelectAccount(account)}
            >
              <img src={account.icon} alt={account.name} className="button-icon" />
              {account.name}
            </button>
          ))}
          <button
            className="account-button"
            onClick={() => navigate('/addaccountdetails')}
          >
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/plus.png" alt="Add Account" className="button-icon" />
            Add Account
          </button>
        </div>
      </section>
      <footer className="footer">
        <button className="nav-button" onClick={handleBack}><span className="ADDarrow">←</span>Back</button>
        <button className="nav-button" onClick={handleNext}>Next<span className="ADDarrow">→</span></button>
      </footer>
    </div>
  );
};

export default AddAccount;
