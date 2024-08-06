import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddAccountDetails.css';
import { FaPaintBrush } from 'react-icons/fa';

const AddAccountDetails = () => {
  const [selectedAccountType, setSelectedAccountType] = useState('cash');
  const [cardholderName, setCardholderName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [amount, setAmount] = useState('');
  const [color, setColor] = useState('#ff6347');
  const [isDefault, setIsDefault] = useState(false);
  const [isExcluded, setIsExcluded] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      id: accountName.toLowerCase(),
      name: accountName,
      icon: selectedAccountType === 'cash' 
        ? 'https://img.icons8.com/ios-glyphs/30/ffffff/cash.png' 
        : selectedAccountType === 'bank' 
        ? 'https://img.icons8.com/ios-glyphs/30/ffffff/bank.png' 
        : 'https://img.icons8.com/ios-glyphs/30/ffffff/wallet.png',
      cardholderName,
      amount,
      color,
      isDefault,
      isExcluded,
    };
    navigate('/addaccount', { state: { newAccount } });
  };

  return (
    <div className="container">
      <form className="account-form" onSubmit={handleFormSubmit}>
        <div className="account-type-buttons">
          {['cash', 'bank', 'wallet'].map(type => (
            <button
              key={type}
              type="button"
              className={`account-type-button ${selectedAccountType === type ? 'selected' : ''}`}
              onClick={() => setSelectedAccountType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Enter cardholder name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter account name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <div className="color-picker">
          <label>
            <FaPaintBrush className="color-icon" />
            Pick color
          </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <p className="color-description">Set color to your category</p>
        <div className="toggle-buttons">
          <label className="toggle-container">
            <span>Default account</span>
            <input
              type="checkbox"
              checked={isDefault}
              onChange={() => setIsDefault(!isDefault)}
            />
            <span className="slider"></span>
          </label>
          <label className="toggle-container">
            <span>Exclude account</span>
            <input
              type="checkbox"
              checked={isExcluded}
              onChange={() => setIsExcluded(!isExcluded)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <button type="submit" className="btn submit-btn">Add</button>
      </form>
    </div>
  );
};

export default AddAccountDetails;
