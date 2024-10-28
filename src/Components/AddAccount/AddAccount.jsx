import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton, Card, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import icon from '../../assets/Images/AddAccount/AddAccount.png';

const initialAccountOptions = [
  { id: 'cash', name: 'Cash', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/cash.png' },
  { id: 'bank', name: 'Bank', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/bank.png' },
  { id: 'wallet', name: 'Wallet', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/wallet.png' },
];

const AddAccount = () => {
  const [accountOptions, setAccountOptions] = useState(initialAccountOptions);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAccounts = localStorage.getItem('selectedAccounts');
    if (savedAccounts) {
      setSelectedAccounts(JSON.parse(savedAccounts));
      setAccountOptions(
        initialAccountOptions.filter(
          (option) => !JSON.parse(savedAccounts).some((selected) => selected.id === option.id)
        )
      );
    }
  }, []);

  useEffect(() => {
    if (selectedAccounts.length > 0) {
      localStorage.setItem('selectedAccounts', JSON.stringify(selectedAccounts));
    }
  }, [selectedAccounts]);

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
    setSelectedAccounts(selectedAccounts.filter(a => a.id !== account.id));
    setAccountOptions([...accountOptions, account]);
  };

  return (
    <Box 
      sx={{ 
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        background: '#fffde7', 
        color: '#0070a9', 
        padding: '20px',
        overflowX: 'hidden'  
      }}
    >
      {/* Centered Icon at the top */}
      <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
        <CardMedia 
          component="img" 
          src={icon}  // Displaying the imported icon
          alt="Icon" 
          sx={{ 
            width: 80, 
            height: 70, 
            margin: 'auto', 
            marginBottom: '10px' 
          }} 
        />
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ fontWeight: 'bold', marginTop: '10px' }}
        >
          Add Account
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            marginBottom: '20px', 
            color: '#0070a9'
          }}
        >
          Recommended accounts
        </Typography>

        {selectedAccounts.length > 0 && (
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '10px', 
              justifyContent: 'center', 
              marginBottom: '20px' 
            }}
          >
            {selectedAccounts.map(account => (
              <Card 
                key={account.id} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '10px', 
                  backgroundColor: '#0070a9', 
                  color: '#fff', 
                  borderRadius: '8px' 
                }}
              >
                <CardMedia 
                  component="img" 
                  src={account.icon} 
                  alt={account.name} 
                  sx={{ width: 20, height: 20, marginRight: '8px' }} 
                />
                <Typography>{account.name}</Typography>
                <IconButton 
                  onClick={() => handleRemoveAccount(account)} 
                  sx={{ color: '#fff', marginLeft: 'auto' }}
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            ))}
          </Box>
        )}

        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '20px', 
            justifyContent: 'center' 
          }}
        >
          {accountOptions.map(account => (
            <Button
              key={account.id}
              variant="contained"
              sx={{ 
                backgroundColor: '#0070a9', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '15px', 
                borderRadius: '8px', 
                width: '200px' 
              }}
              onClick={() => handleSelectAccount(account)}
            >
              <CardMedia 
                component="img" 
                src={account.icon} 
                alt={account.name} 
                sx={{ width: 20, height: 20 }} 
              />
              {account.name}
            </Button>
          ))}

          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#0070a9', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '15px', 
              borderRadius: '8px',
              width: '200px' 
            }}
            onClick={() => navigate('/addaccountdetails')}
          >
            <AddIcon />
            Add Account
          </Button>
        </Box>
      </Box>

      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '20px' 
        }}
      >
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: '#0070a9', 
            borderRadius: '8px', 
            padding: '10px 20px', 
            marginBottom: '50px'
          }}
          onClick={handleBack}
        >
          ← Back
        </Button>
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: '#0070a9', 
            borderRadius: '8px', 
            padding: '10px 20px',
            marginBottom: '50px',
            marginRight: '37px'
          }}
          onClick={handleNext}
        >
          Next →
        </Button>
      </Box>
    </Box>
  );
};

export default AddAccount;
