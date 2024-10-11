import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBaby, FaTshirt, FaUtensils, FaGraduationCap, FaGamepad, FaGift, FaShoppingCart, FaStethoscope, FaPaw, FaCreditCard, FaCar, FaPlane, FaTrash } from 'react-icons/fa';
import { Box, Typography, Button, IconButton, Divider } from '@mui/material';
import shapesImg from '../../assets/Images/AddCategory/AddCategory.png';

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
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: '100vh', 
        px: 2, 
        background: '#fffde7', 
        color: '#0070a9',
        overflowY: 'auto'
      }}
    >
      <Box textAlign="center" mb={2}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <img src={shapesImg} alt="Shapes" width="120px" height="auto" />
        </Box>
        <Typography variant="h4" color="#0070a9">Add Category</Typography>
      </Box>

      <Box>
        <Typography variant="h5" color="#0070a9" textAlign="center" mb={2}>
          Recommended Categories
        </Typography>

        {/* Selected Categories */}
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" mb={2}>
          {selectedCategories.map((category) => (
            <Box 
              key={category.name} 
              display="flex" 
              alignItems="center" 
              justifyContent="space-between" 
              bgcolor="#0070a9" 
              borderRadius="15px" 
              px={2} 
              py={1} 
              color="#fff"
              width="200px" 
              height="80px"
            >
              <Box display="flex" alignItems="center">
                <Box fontSize="24px">{category.icon}</Box>
                <Typography>{category.name}</Typography>
              </Box>
              <IconButton onClick={() => handleCategoryDelete(category)} sx={{ color: '#fff' }}>
                <FaTrash />
              </IconButton>
            </Box>
          ))}
        </Box>

       
        <Divider sx={{ backgroundColor: '#0070a9', mb: 2 }} />

        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
          {categories
            .filter((category) => !selectedCategories.some((cat) => cat.name === category.name))
            .map((category) => (
              <Button
                key={category.name}
                variant="contained"
                onClick={() => handleCategorySelect(category)}
                sx={{
                  bgcolor: '#0070a9', 
                  color: '#fff',
                  borderRadius: '15px', 
                  width: '190px', 
                  height: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 0.2, 
                  fontSize: '18px',
                  '&:hover': {
                    bgcolor: '#005f82',
                  },
                }}
              >
                <Box fontSize="24px" display="flex" alignItems="center" gap={1}>
                  {category.icon}
                </Box>
                <Typography sx={{ ml: 1 }}>{category.name}</Typography>
              </Button>
            ))}
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" pt={2}>
        <Button 
          variant="contained" 
          onClick={handleBack} 
          sx={{ 
            bgcolor: '#0070a9', 
            color: '#fff', 
            borderRadius: '20px', 
            height: '50px',
            maxWidth: '120px',
            ml: 4
          }}
        >
          ← Back
        </Button>
        <Button 
          variant="contained" 
          onClick={handleNext} 
          sx={{ 
            bgcolor: '#0070a9', 
            color: '#fff', 
            borderRadius: '20px', 
            height: '50px', 
            maxWidth: '120px', 
            mr: 4
          }}
        >
          Next →
        </Button>
      </Box>
    </Box>
  );
};

export default AddCategory;
