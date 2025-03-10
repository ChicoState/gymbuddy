import React, { useState } from 'react';
import { profiles } from './profiles';
import { Box, Button, Typography, TextField, Dialog, DialogActions, DialogContent, IconButton, Toolbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function Matches() {
    const navigate = useNavigate();

    // States for the chat dialog, selected profile, and messages
    const [openChat, setOpenChat] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // Navigate to the selected person's profile page
    const handleViewProfile = (profileData) => {
        navigate('/profile', { state: { profileData } });
    };

    // Open chat dialog with selected person
    const handleConnect = (profile) => {
        setSelectedProfile(profile);
        setOpenChat(true);
    };

    // Add new message to the chat log
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'You' }]);
            setNewMessage(''); // Clear input field
        }
    };

    // Close chat dialog and reset messages (messages are not saved and stored)
    const handleCloseChat = () => {
        setOpenChat(false);
        setMessages([]);
    };

    const numberOfProfiles = profiles.length;

    return (
        <Box sx={{ padding: 3, maxWidth: 800, margin: 'auto' }}>
            <Toolbar />
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => navigate('/FindGymBuddy')}
                sx={{ marginBottom: 3 }}
            >
                Back
            </Button>
            <Typography 
                variant="h5" 
                sx={{
                    fontWeight: 'bold', 
                    color: 'white',
                    marginBottom: 3,
                    marginTop: 4,
                }}
            >
                {numberOfProfiles} Matches Found
            </Typography>

            {/* Shows list of profiles */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxHeight: '80vh',
                overflowY: 'auto',
            }}>
                {profiles.map((profile) => (
                    <Box key={profile.id} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 1,
                        border: '1px solid #ddd',
                        borderRadius: 2,
                        boxShadow: 2,
                        backgroundColor: 'white',
                    }}>
                        {/* Profile image */}
                        <img 
                            src={profile.image || '/path/to/default-image.jpg'}
                            alt={profile.name}
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />

                        {/* Profile info and the 2 buttons */}
                        <Box sx={{ marginLeft: 2, flex: 1 }}>
                            <Box sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                {profile.name}
                            </Box>

                            <Box sx={{ marginBottom: 2 }}>
                                <Button 
                                    variant="contained"
                                    color="success"
                                    onClick={() => handleViewProfile(profile)}
                                    sx={{ marginRight: 2 }}
                                    size="small"
                                >
                                    View Profile
                                </Button>
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleConnect(profile)}
                                    size="small"
                                >
                                    Connect
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Chat Dialog */}
            <Dialog open={openChat} onClose={handleCloseChat} maxWidth="sm" fullWidth>
                <DialogContent sx={{ backgroundColor: 'white', color: 'black', padding: 2 }}>
                    {/* Display messages */}
                    <Box sx={{ maxHeight: 200, overflowY: 'auto', paddingBottom: 2 }}>
                        {messages.map((message, index) => (
                            <Box 
                                key={index}
                                sx={{
                                    marginBottom: 1,
                                    padding: 1,
                                    borderRadius: 1,
                                    backgroundColor: message.sender === 'You' ? '#4a90e2' : 'transparent',
                                    color: message.sender === 'You' ? 'white' : 'black',
                                    border: message.sender === 'You' ? '2px solid #4a90e2' : 'none',
                                    maxWidth: '35%',
                                    alignSelf: message.sender === 'You' ? 'flex-end' : 'flex-start',
                                    wordWrap: 'break-word',
                                }}
                            >
                                <Typography variant="body2" fontWeight="bold">{message.sender}:</Typography>
                                <Typography variant="body1">{message.text}</Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Message Input Field & Send Button */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2, borderRadius: '20px', border: '2px solid #ddd', padding: '8px' }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            /* If Shift+Enter is pressed, a new line is created.
                            If just the Enter key is pressed, then it will send the message. */
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage();
                                }
                            }}
                            multiline
                            rows={1}
                            sx={{
                                backgroundColor: '#f5f5f5',
                                '& .MuiInputBase-root': { color: 'black' },
                                '& .MuiInputLabel-root': { color: 'black' },
                                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                            }}
                        />
                        {/* The "X" icon, which will close the chat dialog if clicked */}
                        <IconButton 
                            onClick={handleCloseChat} 
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        {/* The Send button */}
                        <Button
                            onClick={handleSendMessage}
                            color="primary"
                            sx={{
                                marginLeft: 2,
                                borderRadius: '50px',
                                padding: '8px 16px',
                                backgroundColor: '#4a90e2',
                                color: 'white',
                                '&:hover': { backgroundColor: '#357ABD' }
                            }}
                        >
                            Send
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default Matches;






















