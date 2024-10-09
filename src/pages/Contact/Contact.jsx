import { Box, Typography } from "@mui/material";
import ContactForm from "../../components/ContactForm/ContactForm";
import InfoBox from "../../components/InfoBox/InfoBox";
import MapPic from "../../assets/pics/Map.png"
import './Contact.scss'
const Contact = () => {
    return ( 
        <Box maxWidth='970px' sx={{margin: '0 auto'}}>
            <Box 
            sx={{
                display: 'flex',
                gap: '30px',
             }} className= 'contact-container'>
                <Box>
                    <Typography variant="h2" sx={{fontSize:'32px', fontWeight:'700', lineHeight:'39.55px', marginBottom:'50px', textTransform:'capitalize'}}>Leave us your info</Typography>
                    <ContactForm />                 
                </Box>
                <Box>
                    <Typography variant="h2" sx={{fontSize:'32px', fontWeight:'700', lineHeight:'39.55px', marginBottom:'50px', textTransform:'capitalize'}}>Contact information</Typography>
                    <InfoBox />                  
                </Box>                
            </Box>
            <Box  sx={{marginTop:'71px', maxWidth:"970px", maxHeight:'300px'}}>
                <img src={MapPic} alt={MapPic} className="map-pic" />
            </Box>
        </Box>
     );
}
 
export default Contact;