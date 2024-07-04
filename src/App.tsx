import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Form from './Pages/Form';
import Details from './Pages/Details';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/details" element={<ProtectedRoute component={Details} />} />
      </Routes>
    </Router>
  );
};

const ProtectedRoute: React.FC<{ component: React.FC }> = ({ component: Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}');
    if (!userDetails.Name || !userDetails.Phone || !userDetails.Email) {
      navigate('/', { state: { alertMessage: 'Please fill in your details before accessing this page.' } });
    }
  }, [navigate]);

  return <Component />;
};

export default App;
