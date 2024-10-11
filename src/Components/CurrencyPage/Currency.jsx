import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineGlobal } from 'react-icons/ai';
import * as XLSX from 'xlsx';
import './Currency.css';

const Currency = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/currency.xlsx')
      .then(response => response.arrayBuffer())
      .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const parsedCurrencies = jsonData.slice(1).map(row => ({
          name: row[0],
          code: row[1],
          symbol: row[2],
        }));

        setCurrencies(parsedCurrencies);
      });
  }, []);

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
    if (selectedCurrency) {
      navigate('/MainPage');
    } else {
      alert('Please select a currency before proceeding.');
    }
  };

  const handleBackClick = () => {
    navigate('/AddCategory');
  };

  return (
    <div className="currency-page">
      <div className="header">
        <AiOutlineGlobal className="icon-global" />
        <h1 className="title">Select Currency</h1>
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
        <button 
          className="done-button" 
          onClick={handleDoneClick} 
          disabled={!selectedCurrency}
        >
          Done <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Currency;
