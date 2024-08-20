import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddCategory.css';
import shapesImg from '../assets/addcategory.png'; 

const categories = [
  { name: 'Childcare', icon: '🧒' },
  { name: 'Clothing', icon: '👗' },
  { name: 'Dining', icon: '🍽️' },
  { name: 'Education', icon: '🎓' },
  { name: 'Entertainment', icon: '🎮' },
  { name: 'Gifts', icon: '🎁' },
  { name: 'Groceries', icon: '🛒' },
  { name: 'Health & Medical', icon: '🩺' },
  { name: 'Pet Care', icon: '🐾' },
  { name: 'Subscription', icon: '💳' },
  { name: 'Transportation', icon: '🚗' },
  { name: 'Travel', icon: '✈️' },
];

const AddCategory = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/next-page'); 
  };

  const handleBack = () => {
    navigate('/AddAccount'); 
  };

  return (
    <div className="add-category-container">
      <div className="header">
        <div className="icon-placeholder">
          <img src={shapesImg} alt="Shapes" className="icon-shapes" />
        </div>
        <h1>Add Category</h1>
      </div>

      <div className="recommended-section">
        <h2>Recommended categories</h2>
        <div className="categories">
          {categories.map((category) => (
            <button key={category.name} className="category-btn">
              <span className="icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="footer">
        <button className="footer-btn back-btn" onClick={handleBack}>← Back</button>
        <button className="footer-btn next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
};

export default AddCategory;
