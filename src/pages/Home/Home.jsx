import React from "react";
import { Container , Typography , Box } from "@mui/material";
import PersonImage from '../../assets/pics/Your Image 1.png'
import styles from './Home.module.scss'
import HiringBtn from "../../components/HiringBtn/HiringBtn";
const Home = () => {
    return ( 
        <Container sx={{paddingBottom: '50px'}}>
            <Box sx={{display: 'flex', backgroundColor:'rgba(255, 255, 255, 1)', padding: '0 60px', alignItems: 'center'}} maxWidth='xl' className={styles.resBox}>
                <Box sx={{flex: '1 1 65%', paddingTop:'20px'}}>
                    <Box>
                        <Typography variant="h1" sx={{fontSize: '4rem', fontWeight: 'bold'}} className={styles.LargerFont} >
                        I’m Rayan Adlrdard <Typography as="span" sx={{ color: 'rgba(255, 180, 0, 1)' ,fontSize: '4rem', fontWeight: 'bold' }}> Front-end </Typography> Developer 
                        </Typography>
                        <Typography variany='p' sx={{paddingTop: '18px', color:'rgba(118, 118, 118, 1)', textTransform:'capitalize', maxWidth:'400px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                        </Typography>
                    </Box>
                    <HiringBtn />
                </Box>
                <Box sx={{flex: '1 1 35%', height: '100%'}} >
                    <img src={PersonImage} alt="Person-image" className="PersonImage" />
                </Box>
            </Box>
        </Container>
     );
}
 
export default Home;