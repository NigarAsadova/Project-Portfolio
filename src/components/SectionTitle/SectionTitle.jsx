import { Box , Container, Typography } from "@mui/material";

const SectionTitle = (props) => {
    return ( 
        <Container sx={{display: 'flex', justifyContent: 'center', paddingBottom: '50px'}}>
            <Box sx={{textAlign: 'center', textTransform: 'capitalize', maxWidth: '470px'}} >
                <Typography variant="h2" sx={{fontSize: '2rem', fontWeight:'bold', lineHeight:'40px', paddingBottom:'25px'}}>
                    {props.title}
                </Typography>
                <Typography sx={{color: 'rgba(118, 118, 118, 1)' , fontWeight: '400', lineHeight: '24px'}}>
                    {props.description}
                </Typography>
            </Box>
        </Container>
     );
}
export default SectionTitle;