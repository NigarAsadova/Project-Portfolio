import React from 'react'
import './Heading.scss'
import { Box } from '@mui/material'
import NavList from '../NavList/NavList';
import ModeChanger from '../ModeChanger/ModeChanger';
const Heading = () => {
    return (  
        <Box sx={{
            display: 'flex',
            padding: '34px 50px',
            backgroundColor: 'rgba(228, 230, 235, 1)'
        }} >
            <NavList />
            <ModeChanger />
        </Box>
    );
}
 
export default Heading;