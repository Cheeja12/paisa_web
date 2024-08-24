import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineGlobal } from 'react-icons/ai';
import './Currency.css';

const currencies = [
  { name: 'Afghanistan Afghani', code: 'AFN', symbol: '؋' },
  { name: 'Albanian Lek', code: 'ALL', symbol: 'Lek' },
  { name: 'Algerian Dinar', code: 'DZD', symbol: 'دج' },
  { name: 'Argentine Peso', code: 'ARS', symbol: '$' },
  { name: 'Armenian Dram', code: 'AMD', symbol: '֏' },
  { name: 'Australian Dollar', code: 'AUD', symbol: '$' },

];

const Currency = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCurrencies = currencies.filter(currency =>
    currency.name.toLowerCase().includes(searchTerm) ||
    currency.code.toLowerCase().includes(searchTerm)
  );

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleDoneClick = () => {
    navigate('/Add'); 
  };

  const handleBackClick = () => {
    navigate('/AddCategory');
  };

  return (
    <div className="currency-page">
      <div className="header">
        <AiOutlineGlobal className="icon-global" />
        <h1 className="title">Select currency</h1>
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="currency-list">
        {filteredCurrencies.map(currency => (
          <div
            key={currency.code}
            className={`currency-item ${selectedCurrency === currency ? 'selected' : ''}`}
            onClick={() => handleCurrencySelect(currency)}
          >
            <span>{currency.symbol}</span>
            <div>
              <p>{currency.name}</p>
              <p>{currency.code}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="back-button" onClick={handleBackClick}>
          <span className="arrow">←</span> Back
        </button>
        <button className="done-button" onClick={handleDoneClick}>
          Done <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Currency;
