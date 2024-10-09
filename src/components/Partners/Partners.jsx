import { Box } from "@mui/material";
import { PartnersInfo } from "../../data/PartnersInfo";
const Partners = () => {
    return ( 
        <Box sx={{display:'flex', justifyContent:'space-between', padding:'70px 20px', margin: '0 auto', flexWrap:'wrap'}} maxWidth='970px' className="partners-container">
            {PartnersInfo.map((partner, id) =>(
            <Box key={id}>
                <img src={partner.logo} alt={partner.logo} />
            </Box>            
            )) }           
        </Box>


     );
}
 
export default Partners;