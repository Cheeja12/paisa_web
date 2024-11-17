import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton, Divider } from '@mui/material';
import shapesImg from '../../assets/Images/AddCategory/AddCategory.png';


const categories = [
  { name: 'Childcare', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/baby.png' },
  { name: 'Clothing', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/t-shirt.png' },
  { name: 'Dining', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/restaurant.png' },
  { name: 'Education', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/graduation-cap.png' },
  { name: 'Entertainment', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/game-controller.png' },
  { name: 'Gifts', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/gift.png' },
  { name: 'Groceries', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart.png' },
  { name: 'Health & Medical', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/stethoscope.png' },
  { name: 'Pet Care', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/paw.png' },
  { name: 'Subscription', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/credit-card.png' },
  { name: 'Transportation', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/car.png' },
  { name: 'Travel', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/airplane.png' },
];

const AddCategory = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
    setSelectedCategories(storedCategories);
  }, []);

  
  useEffect(() => {
    if (selectedCategories.length > 0) {
      localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    }
  }, [selectedCategories]);

  const handleNext = () => navigate('/Currency');
  const handleBack = () => navigate('/AddAccount');

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
        overflowY: 'auto',
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mb={2} pt={4}>
        <img src={shapesImg} alt="Shapes" width="80px" height="auto" />
        <Typography variant="h4" color="#0070a9" mt={2}>
          Add Category
        </Typography>
      </Box>

      <Box>
        {selectedCategories.length > 0 && (
          <>
            <Typography variant="h5" color="#0070a9" sx={{ textAlign: 'center', mb: 2 }}>
              Selected Categories
            </Typography>

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
                  py={0.5}
                  color="#fff"
                  width="160px"
                  height="50px"
                >
                  <Box display="flex" alignItems="center">
                    <img src={category.icon} alt={category.name} style={{ width: '25px', height: '25px', marginRight: '8px' }} />
                    <Typography>{category.name}</Typography>
                  </Box>
                  <IconButton
                    onClick={() => handleCategoryDelete(category)}
                    sx={{ color: '#fff' }}
                  >
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/trash.png" alt="Delete" />
                  </IconButton>
                </Box>
              ))}
            </Box>

            <Divider sx={{ backgroundColor: '#0070a9', mb: 2 }} />
          </>
        )}

        <Typography variant="h5" color="#0070a9" sx={{ textAlign: 'center', mb: 2 }}>
          Recommended Categories
        </Typography>

        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" mb={2}>
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
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 0.2,
                  fontSize: '16px',
                  '&:hover': {
                    bgcolor: '#005f82',
                  },
                }}
              >
                <Box fontSize="20px" display="flex" alignItems="center" gap={1}>
                  {/* Render icon as an image */}
                  <img src={category.icon} alt={category.name} style={{ width: '30px', height: '30px' }} />
                </Box>
                <Typography sx={{ ml: 1 }}>{category.name}</Typography>
              </Button>
            ))}
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" pt={2} pb={2}>
        <Button
          variant="contained"
          onClick={handleBack}
          sx={{
            bgcolor: '#0070a9',
            color: '#fff',
            borderRadius: '20px',
            height: '50px',
            maxWidth: '120px',
            ml: 4,
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
            mr: 4,
          }}
        >
          Next →
        </Button>
      </Box>
    </Box>
  );
};

export default AddCategory;
