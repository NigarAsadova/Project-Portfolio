import React from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const ContactForm = () => {
    
    return (
        <Box sx={{padding:"25px", height:'fit-content', borderRadius:'0'}} component={Paper} elevation={0}>
            <form>
                <label for="name">Your Full Name (Required)</label>
                <TextField label={`Your Full Name (Required)`} fullWidth required sx={{margin: '8px 0 25px'}} id='name' name='name'/>
                <label for="mail">Your Email (Required)</label>
                <TextField label="Your Email (Required)" fullWidth required sx={{margin: '8px 0 25px'}} id='mail' name='mail' type='mail' />
                <label for="subject">Subject</label>
                <TextField label="Subject" fullWidth sx={{margin: '8px 0 25px'}} id='subject' name='subject'/>
                <label for="message">Your Message</label>
                <TextField label="Your Message" multiline rows={9} fullWidth sx={{margin: '8px 0 25px'}} id='message' name='message' />
                <Box mt='5px'>
                    <Button variant="contained" sx={{backgroundColor:'rgba(255, 180, 0, 1)', color:'rgba(43, 43, 43, 1)'}} type='submit'>
                        SEND MESSAGE
                    </Button>
                </Box>
            </form>
        </Box>

    );
};

export default ContactForm;
