import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Button, TextField, Switch, FormControlLabel, IconButton } from '@mui/material';
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
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fffde7', 
        padding: 2,
      }}
    >
      <Box component="form" onSubmit={handleFormSubmit} display="flex" flexDirection="column" gap={2} width="100%" maxWidth="600px">

        <Box display="flex" justifyContent="space-between" width="100%">
          {['cash', 'bank', 'wallet'].map((type) => (
            <Button
              key={type}
              variant={selectedAccountType === type ? 'contained' : 'outlined'}
              onClick={() => setSelectedAccountType(type)}
              fullWidth
              sx={{
                margin: '0 5px',
                backgroundColor: selectedAccountType === type ? '#0070a9' : 'transparent', 
                color: selectedAccountType === type ? 'white' : '#0070a9', 
                '&:hover': { backgroundColor: selectedAccountType === type ? '#005f7f' : '#f0f0f0' },
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </Box>

        <TextField
          label="Enter cardholder name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          fullWidth
          required
          sx={{ bgcolor: 'white' }} 
        />
        <TextField
          label="Enter account name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          fullWidth
          required
          sx={{ bgcolor: 'white' }} 
        />
        <TextField
          label="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          fullWidth
          required
          sx={{ bgcolor: 'white' }} 
        />

        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <FaPaintBrush />
          </IconButton>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ border: 'none', cursor: 'pointer', width: '40px', height: '40px' }}
            required
          />
          <span>Pick color</span>
        </Box>

        <FormControlLabel
          control={<Switch checked={isDefault} onChange={() => setIsDefault(!isDefault)} />}
          label="Default account"
        />
        <FormControlLabel
          control={<Switch checked={isExcluded} onChange={() => setIsExcluded(!isExcluded)} />}
          label="Exclude account"
        />

        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{
            backgroundColor: '#0070a9', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '15px',
            borderRadius: '8px',
            '&:hover': { backgroundColor: '#005f7f' }, 
          }}
        >
          Add Account
        </Button>
      </Box>
    </Container>
  );
};

export default AddAccountDetails;
