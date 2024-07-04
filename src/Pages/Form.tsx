import React, { useState } from 'react';
import InputBox from '../Components/InputBox';
import ButtonBox from '../Components/ButtonBox';
import { Box, Typography, Paper } from '@mui/material';

const Form: React.FC = () => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  console.log(Name, Phone, Email);

  const handlesubmit = () => {
    if (!Name || !Phone || !Email) {
      alert("Please fill all fields");
      return;
    }
    console.log("Form submitted:", { Name, Phone, Email });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Fill Your Details
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <InputBox label="Name" onChange={(e) => setName(e.target.value)} value={Name} />
          <InputBox label="Phone Number" onChange={(e) => setPhone(e.target.value)} value={Phone} />
          <InputBox label="Email" onChange={(e) => setEmail(e.target.value)} value={Email} />
          <ButtonBox onClick={handlesubmit} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Form;
