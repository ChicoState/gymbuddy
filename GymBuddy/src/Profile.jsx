import React from 'react';
import { Typography, Button, Box, Toolbar } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import default_image from './assets/default_image.jpg';
import './EditProfile.css';

const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();

    /* Get the profile data passed from either the Profile button in the App Bar,
     Back or Save Changes button in EditProfile, or from the Matches page */
    const { profileData, isOwnProfile} = location.state || {};  

    return (
        <Box sx={{ justifyContent: 'center', maxWidth: 500, margin: 'auto', backgroundColor: 'white', padding: 3 }}>
            <Toolbar /> 
            {/* Conditionally render the name based on if user is viewing their own profile or another persons */}
            <h2>{isOwnProfile? "Your Profile" : `${profileData?.name}'s Profile`}</h2>

            {isOwnProfile&& (
                <Button variant="contained" color="primary" onClick={() => navigate('/profile/edit')}>
                    Edit Profile
                </Button>
            )}

            <div className="image-container">
                <img src={profileData?.image || default_image} alt="Profile" className="profile-image" />
            </div>

            <Typography variant="h6" sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
                Name: {profileData?.name}
            </Typography>
            <Typography variant="h6" sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
                Age: {profileData?.age}
            </Typography>
            <Typography variant="h6" sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
                Gender: {profileData?.gender}
            </Typography>
            <Typography variant="body1" className="about-text" sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
                About Me: <br /> {profileData?.about}
            </Typography>

            <br />
            <br />
            <Button 
                variant="contained" 
                color="secondary" 
                sx={{ marginBottom: 2 }}
                /* If user is viewing their own profile and clicks on Back button, takes them to home page.
                    Otherwise, if user was viewing someone else's profile and clicks on Back button,
                     takes them back to the Matches page */
                onClick={() => navigate(isOwnProfile? '/' : '/matches')}
            >
                Back
            </Button>
        </Box>
    );
};

export default Profile;


