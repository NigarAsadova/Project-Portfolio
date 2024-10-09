import { Box , Button, Container, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import './PricePlans.scss';
import { Prices } from "../../data/Prices";

const PricePlans = () => {
    return ( 
        <Container sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{display:"flex", gap:'21px', justifyContent:'center', alignItems:'center', flexWrap:"wrap"}} maxWidth='970px'>
                {
                    Prices.map(
                        (price, index) =>
                            (
                                <Box key={index} sx={{textAlign:'center', textTransform:'capitalize', backgroundColor:'#fff', flexBasis:'100% / 3 - 42px', transition:'.4s all ease-in-out', maxWidth:'300px' }} className='price-plan'>
                                    {
                                        price.type === 'gold' && (
                                            <Box sx={{fontWeight:'400', fontSize:'15px',lineHeight:'26px', backgroundColor:'rgba(255, 180, 0, 1)', minHeight:'30px' }}>most popular</Box>
                                        ) 
                                    }
                                    <Box sx={{padding:'25px'}}>
                                        <Typography variant="h3" sx={{fontWeight:'600', fontSize:'24px', paddingBottom:'19px'}}>{price.type}</Typography>
                                        <Typography variant="h2" sx={{fontWeight:'700', fontSize:'32px', lineHeight:'39.55px'}}>{price.price} <Typography sx={{fontSize:'15px', fontWeight:'400'}}>/Hour</Typography></Typography>
                                        <Typography sx={{color:'rgba(118, 118, 118, 1)', lineHeight:'24px', fontSize:'15px', padding:'8px 0 21px'}} >{price.info}</Typography>                                        
                                <List>
                                    {
                                        price.features.map(
                                            (item, id) => (
                                                <ListItem key={id}>
                                                    <ListItemIcon>
                                                        {item.checked? (<CheckIcon sx={{color:'rgba(255, 180, 0, 1)'}} />) : (<ClearIcon />)}
                                                    </ListItemIcon>
                                                    <ListItemText sx={{lineHeight:'24px', fontSize:'15px'}}>{item.feature}</ListItemText>
                                                </ListItem>
                                            )
                                        )
                                    }

                                </List>
                                <Button variant="outlined" sx={{borderRadius:'30px' , maxHeight:'38px', fontSize:'14px', fontWeight:'600', color:'rgba(43, 43, 43, 1)', borderColor:'rgba(43, 43, 43, 1)', textTransform:'uppercase', paddingLeft:'41px', paddingRight:'41px', marginTop:'21px', backgroundColor: price.type === "gold" && "rgba(255, 180, 0, 1)" }} className="order-button">order now</Button>
                                </Box>
                            </Box>
                            )
                    )           
                }
            </Box>
        </Container>
     );
}
 
export default PricePlans;