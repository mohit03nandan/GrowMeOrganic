import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Pages/Form';
import Details from './Pages/Details';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
