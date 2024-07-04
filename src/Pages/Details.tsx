import React from 'react';
import { Box } from '@mui/material';
import DataGridDemo from '../Components/Grid' 
import DepartmentList from "../Components/DepartmentList"
import departmentData from '../assets/DepartmentData'; 


const Details: React.FC = () => {
  return (
    <Box>
      <DataGridDemo />
      <DepartmentList departmentData={departmentData}/>
    </Box>
  );
};

export default Details;
