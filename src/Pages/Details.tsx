import React from 'react';

const Details: React.FC = () => {
  const userDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}');

  return (
    <div>
      <h1>Welcome to the second page</h1>
      <p>Name: {userDetails.Name}</p>
      <p>Phone: {userDetails.Phone}</p>
      <p>Email: {userDetails.Email}</p>
    </div>
  );
};

export default Details;
