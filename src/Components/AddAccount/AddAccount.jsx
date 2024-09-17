import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
    <Box 
      sx={{ 
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        background: 'linear-gradient(180deg, #FF7E3D, #FF9F81)', 
        color: '#fff', 
        padding: '20px',
        overflowX: 'hidden'  
      }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <CardMedia 
          component="img" 
          src={icon} 
          alt="Icon" 
          sx={{ 
            width: 80, 
            height: 70, 
            margin: 'auto', 
            marginBottom: '10px', 
            marginTop:'50px'
          }} 
        />
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ fontWeight: 'bold' }}
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
            color: '#fbe2d8' 
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
                  backgroundColor: '#c44b24', 
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
                backgroundColor: '#c44b24', 
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
              backgroundColor: '#c44b24', 
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
            backgroundColor: '#c44b24', 
            borderRadius: '8px', 
            padding: '10px 20px', 
            marginBottom:'50px'
          }}
          onClick={handleBack}
        >
          ← Back
        </Button>
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: '#c44b24', 
            borderRadius: '8px', 
            padding: '10px 20px',
            marginBottom:'50px',
            marginRight:'37px'
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
