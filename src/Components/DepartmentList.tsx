import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, List, ListItem, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


interface Department {
  department: string;
  sub_departments: string[];
}


interface DepartmentListProps {
  departmentData: Department[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ departmentData }) => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

 
  const handleDeptChange = (department: Department) => {
    const newChecked = { ...checked };
    newChecked[department.department] = !checked[department.department];

    department.sub_departments.forEach((subDept) => {
      newChecked[`${department.department}-${subDept}`] = newChecked[department.department];
    });

    setChecked(newChecked);
  };

  const handleSubDeptChange = (department: Department, subDept: string) => {
    const key = `${department.department}-${subDept}`;
    const newChecked = { ...checked, [key]: !checked[key] };
    setChecked(newChecked);
  };

  const renderSubDepartments = (department: Department) => {
    return department.sub_departments.map((subDept) => (
      <ListItem key={`${department.department}-${subDept}`}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked[`${department.department}-${subDept}`] || false}
              onChange={() => handleSubDeptChange(department, subDept)}
            />
          }
          label={subDept}
        />
      </ListItem>
    ));
  };

  return (
    <Box>
      <List>
        {departmentData.map((department, index) => (
          <div key={index}>
            <ListItem>
              <Checkbox
                checked={checked[department.department] || false}
                indeterminate={Object.keys(checked).some(
                  (key) =>
                    key.startsWith(department.department) && checked[key] !== checked[department.department]
                )}
                onChange={() => handleDeptChange(department)}
              />
              <ListItemText primary={department.department} onClick={() => handleDeptChange(department)} />
              {checked[department.department] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {checked[department.department] && (
              <List component="div" disablePadding>
                {renderSubDepartments(department)}
              </List>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
};

export default DepartmentList;
