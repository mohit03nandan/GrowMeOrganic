import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface ButtonBoxProps {
  onClick: () => void;
}

const ButtonBox: React.FC<ButtonBoxProps> = ({ onClick }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick}>Submit</Button>
    </Stack>
  );
};

export default ButtonBox;
