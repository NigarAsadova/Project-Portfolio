import { Avatar, Box, Container, Typography , Rating } from "@mui/material";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RecomItem.scss'

const RecomItem = ({ Recommendations }) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <Container sx={{ display: 'flex', justifyContent: 'center', padding: '0 20px 20px 20px' }} >
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}} maxWidth="970px" className = 'recom-container' >
                {Recommendations.map((recom, index) => (
                    <Box
                      key={index}
                      sx={{
                        padding:'25px 20px 25px 25px',
                        textTransform: 'capitalize',
                        backgroundColor: 'white',
                        flexBasis: 'calc(100% / 3 - 60px)',
                        cursor: 'pointer',
                        maxWidth:'300px'
                      }}
                      className = 'recom-item'
                    >
                      <Rating name="read-only" value={recom.value} readOnly sx={{fontSize:'18px', paddingBottom:'10px'}} />
                      <Typography variant="h4" sx={{ color: 'rgba(43, 43, 43, 1)' , fontSize:'18px', fontWeight:'500' , lineHeight:'22.25px' }}>
                        {recom.title}
                      </Typography>
                      <Typography  sx={{ color: 'rgba(118, 118, 118, 1)', fontSize:'14px', fontWeight:'400' , lineHeight:'24px', margin:'18px 0 30px', display:'inline-block', overflow:'hidden', textOverflow: 'ellipsis', whiteSpace:'nowrap', textWrap:"wrap" }}>
                        {recom.comment}
                      </Typography>
                      <Box sx={{display:'flex', alignItems:'center'}}>
                        <Box sx={{height:'80px', width:'80px', paddingRight:'13px'}}>
                          <Avatar src={recom.profile} alt={recom.profile} sx={{height:'100%', width:'100%'}} />
                        </Box>
                        <Box>
                          <Typography variant="h4" sx={{ color: 'rgba(43, 43, 43, 1)', fontSize:'18px', fontWeight:'500' }}>
                            {recom.name}
                          </Typography>
                          <Typography sx={{ color: 'rgba(118, 118, 118, 1)', fontSize:'15px', fontWeight:'400' }}>
                            {recom.profession}
                          </Typography>                
                        </Box>

                      </Box>
                    </Box>            
                ))}
              </Box>    
      </Container>
  );
};

export default RecomItem;
