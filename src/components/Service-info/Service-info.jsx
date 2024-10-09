import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Service-info.scss';

const ServiceInfo = ({ Services }) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}} maxWidth="970px">
        {Services.map((Service, index) => (
          <Box
            key={index}
            sx={{
              padding: '28px 28px 0',
              textAlign: 'center',
              textTransform: 'capitalize',
              backgroundColor: 'white',
              flex: '1 1 calc(100% / 3 - 70px)',
              cursor: 'pointer',
              minWidth: '250px', 
            }}
          >
            <Box className='hover-item' sx={{ minHeight: '225px' }}>
              <Box className='without-hover'>
                <Box sx={{ marginBottom: '26px' }}>
                  <img src={Service.image} alt={Service.image} />
                </Box>
                <Typography variant="h4" sx={{ fontSize: '18px', lineHeight: '22px', marginBottom: '15px', fontWeight: '500' }}>
                  {Service.title}
                </Typography>
                <Typography sx={{ color: 'rgba(118, 118, 118, 1)', fontSize: '15px', lineHeight: '24px', fontWeight: '400' }}>
                  {Service.body}
                </Typography>              
              </Box>
              <Box className='hovered' sx={{ opacity: '0', display: 'none' }}>
                <Typography variant="h4" sx={{ fontSize: '18px', lineHeight: '22px', marginBottom: '15px', fontWeight: '500' }}>
                  {Service.title}
                </Typography>
                <Typography sx={{ color: 'rgba(118, 118, 118, 1)', fontSize: '15px', lineHeight: '24px', fontWeight: '400' }}>
                  {Service.details}
                </Typography>
                <Box sx={{ paddingTop: '30px' }}>
                  <Link href="#" sx={{
                    textDecoration: 'none',
                    color: 'rgba(255, 180, 0, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    "&:hover": {
                      textDecoration: 'underline'
                    }
                  }}>
                    order now
                    <KeyboardArrowRightIcon />
                  </Link>
                </Box>
              </Box>              
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ServiceInfo;
