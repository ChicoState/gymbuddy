import React, { useRef, useState } from 'react';
import { TextField, Button, Box, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import default_image from './assets/default_image.jpg';
import './EditProfile.css';

const EditProfile = ({ profileData, setProfileData }) => {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(profileData.image || null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handlePictureChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile); 
            setFile(imageUrl);
            setProfileData((prevData) => ({
                ...prevData,
                image: imageUrl,
            }));
        }
    };

    const handleInputChange = (field, value) => {
        setProfileData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                justifyContent: 'center',
                maxWidth: 500,
                margin: 'auto',
                backgroundColor: 'white',
                padding: 3,
                alignItems: 'center',
                boxSizing: 'border-box'
            }}
        >
            <Toolbar />

            <input
                type="file"
                ref={fileInputRef}
                onChange={handlePictureChange}
                style={{ display: "none" }}
            />
            
            <div className="image-container">
                <img 
                    src={file || default_image} 
                    alt="Preview" 
                    className="profile-image" 
                />
            </div>

            <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2, marginBottom: 2 }}
                onClick={handleButtonClick}
            >
                Upload
            </Button>

            <br />
            <br />
            <br />

            <Button
                variant="contained"
                color="secondary"
                sx={{ marginBottom: 2 }}
                onClick={() => navigate('/profile', { state: { isOwnProfile: true, profileData } })}
            >
                Back
            </Button>

            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={profileData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your name"
                sx={{
                    '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                        opacity: 1,
                    },
                }}
            />

            <TextField
                label="Age"
                variant="outlined"
                fullWidth
                margin="normal"
                value={profileData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                placeholder="Enter your age"
                sx={{
                    '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                        opacity: 1,
                    },
                }}
            />

            <TextField
                label="Gender"
                variant="outlined"
                fullWidth
                margin="normal"
                value={profileData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                placeholder="Enter your gender"
                sx={{
                    '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                        opacity: 1,
                    },
                }}
            />

            <TextField
                label="About Me"
                variant="outlined"
                fullWidth
                margin="normal"
                value={profileData.about}
                onChange={(e) => handleInputChange('about', e.target.value)}
                placeholder="About Me"
                sx={{
                    '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                        opacity: 1,
                    },
                }}
            />

            <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
                onClick={() => navigate('/profile', { state: { isOwnProfile: true, profileData } })}
            >
                Save Changes
            </Button>
        </Box>
    );
};

export default EditProfile;

