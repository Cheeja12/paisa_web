import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBaby, FaTshirt, FaUtensils, FaGraduationCap, FaGamepad, FaGift, FaShoppingCart, FaStethoscope, FaPaw, FaCreditCard, FaCar, FaPlane, FaTrash } from 'react-icons/fa';
import './AddCategory.css';
import shapesImg from '../../assets/AddCategory/AddCategory.png'; 

const categories = [
  { name: 'Childcare', icon: <FaBaby /> },
  { name: 'Clothing', icon: <FaTshirt /> },
  { name: 'Dining', icon: <FaUtensils /> },
  { name: 'Education', icon: <FaGraduationCap /> },
  { name: 'Entertainment', icon: <FaGamepad /> },
  { name: 'Gifts', icon: <FaGift /> },
  { name: 'Groceries', icon: <FaShoppingCart /> },
  { name: 'Health & Medical', icon: <FaStethoscope /> },
  { name: 'Pet Care', icon: <FaPaw /> },
  { name: 'Subscription', icon: <FaCreditCard /> },
  { name: 'Transportation', icon: <FaCar /> },
  { name: 'Travel', icon: <FaPlane /> },
];

const AddCategory = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Currency'); 
  };

  const handleBack = () => {
    navigate('/AddAccount'); 
  };

  const handleCategorySelect = (category) => {
    if (!selectedCategories.some((cat) => cat.name === category.name)) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleCategoryDelete = (categoryToRemove) => {
    setSelectedCategories(
      selectedCategories.filter((category) => category.name !== categoryToRemove.name)
    );
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
        
        <div className="selected-categories">
          {selectedCategories.map((category) => (
            <div key={category.name} className="selected-category-btn">
              <span className="icon">{category.icon}</span>
              <span>{category.name}</span>
              <button onClick={() => handleCategoryDelete(category)} className="delete-icon">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        
        <div className="categories">
          {categories
            .filter((category) => !selectedCategories.some((cat) => cat.name === category.name))
            .map((category) => (
              <button 
                key={category.name} 
                className="category-btn" 
                onClick={() => handleCategorySelect(category)}
              >
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
