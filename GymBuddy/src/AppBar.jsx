import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar 
      position = "fixed" 
      sx = {{ 
        width: '100%', 
        backgroundColor: 'black', 
        height: '90px',
        boxShadow: "none",
        }}
    > 
      <Toolbar sx = {{ display: 'flex', justifyContent: 'center', paddingTop: '13px'}}>
        <Link 
        to="/profile"
        style={{ textDecoration: 'none' }}
        state={{ isOwnProfile: true }}
        >
          <Button
            sx = {{
              padding: '10px 20px',
              border: 'none',
              fontSize: '17px',
              color: '#fff',
              borderRadius: '7px',
              letterSpacing: '4px',
              fontWeight: 700,
              textTransform: 'uppercase',
              transition: 'box-shadow 0.5s, background-color 0.5s',
              backgroundColor: 'rgb(0, 0, 0)',
              boxShadow: '0 0 25px rgb(0, 0, 0)',
              textDecoration: 'none',
              '&:hover': {
                boxShadow: '0 0 5px rgb(0, 140, 255), 0 0 0px rgb(0, 140, 255), 0 0 50px rgb(0,140,255), 0 0 100px rgb(0,140,255)',
                background: 'rgb(0, 140, 255)',
              },
            }}
          >Profile</Button>
          </Link>
          <Typography 
            variant = "h6" 
            component = "div" 
            sx = {{ 
              fontSize: '30px',
              fontStyle: 'normal',
              fontFamily: 'Courier',
              flexGrow: 1,
              textAlign: 'center',
              marginLeft: 'auto',
              marginright: 'auto',
              display: 'flex', 
              justifyContent: 'center'
            }}
          >GymBuddy</Typography>
          <Button 
            color = "inherit"
            sx = {{
              marginRight: 'auto',
              justifyContent: 'right',
              padding: '10px 20px',
              border: 'none',
              fontSize: '17px',
              color: '#fff',
              borderRadius: '7px',
              letterSpacing: '4px',
              fontWeight: 700,
              textTransform: 'uppercase',
              transition: 'box-shadow 0.5s, background-color 0.5s',
              backgroundColor: 'rgb(0, 0, 0)',
              boxShadow: '0 0 25px rgb(0, 0, 0)',
              '&:hover': {
                boxShadow: '0 0 5px rgb(0, 140, 255), 00 00px rgb(0, 255, 26), 0 0 50px rgb(0,140,255), 0 0 100px rgb(0,140,255)',
                background: 'rgb(0, 140, 255)',
              },
            }}
          >Log in</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
