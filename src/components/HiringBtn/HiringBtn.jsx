import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const HiringBtn = () => {
    return ( 
        <Button variant="contained" size="medium" sx={{marginTop:'25px', color:'rgba(43, 43, 43, 1)', fontWeight:'500', backgroundColor:'rgba(255, 180, 0, 1)', textTransform:'uppercase', marginBottom:'10px'}}>
            hire me 
            <ArrowForwardIcon sx={{height:'16px', width:'16px', marginLeft:'9px'}} />
        </Button>
     );
}
 
export default HiringBtn;