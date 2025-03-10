import React from 'react';
import Footer from './Footer';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

  const navigate = useNavigate();

  return (
  <div>
            <Button variant = "contained"
            color = "primary"
            onClick = {() => navigate('/FindGymBuddy')}
            >
            Find A Gym Buddy
            </Button>
        <h1>Welcome to the Main Page</h1>
  </div>
  );
};

export default MainPage;