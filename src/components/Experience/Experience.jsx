import { Container , Divider , List, ListItem} from "@mui/material";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Experience.scss'
const Experience = ({Experiences}) => {
    const theme = useTheme();
    return ( 
        <List sx={{padding:'19px 0px 10px 37px', backgroundColor:'#fff', paddingLeft:"37px"}}>
            {
                Experiences.map(
                    (Experience, id) => (
                        <>
                            {id !== 0 && <Divider variant="middle" />}
                            <ListItem sx={{padding:"28px 0"}} key={id}>
                                <Card sx={{ display: 'flex', textTransform:'capitalize', boxShadow:'none' , justifyContent:'space-between'}} className="card-container">
                                <Box sx={{ display: 'flex', flexDirection: 'column' , flexBasis:'25%'}} >
                                    <CardContent sx={{ flex: '1 0 auto' , padding:"0"}}>
                                    <Typography sx={{fontSize:'18px', fontWeight:'500', paddingBottom:'28px'}} variant="h4">{Experience.university}</Typography>
                                    <Typography
                                        sx={{ color: 'rgba(43, 43, 43, 1)', fontSize:'15px', fontWeight:'400', lineHeight:'24px' }}>
                                        {Experience.for}
                                        <Typography component="span" sx={{fontSize:'10px', color:'rgba(255, 255, 255, 1)', backgroundColor:'rgba(255, 180, 0, 1)', padding:"4px 7px", marginLeft:"21px"}}>{Experience.startDate} - {Experience.endDate}</Typography>
                                    </Typography>
                                    </CardContent>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', flexBasis:'60%', padding:"0" }}>
                                    <CardContent sx={{ flex: '1 0 auto', padding: "0" }}>
                                    <Typography variant="h4" sx={{fontSize:'18px', fontWeight:'500', paddingBottom:'28px'}}>{Experience.name}</Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component="div"
                                        sx={{ color: 'rgba(118, 118, 118, 1)', fontSize:'15px', fontWeight:'400', lineHeight:'24px' }}
                                    >
                                    {Experience.about}
                                    </Typography>
                                    </CardContent>
                                </Box>
                                </Card>
                                <Divider variant="middle" component="li" />                
                            </ListItem>
                        </>
                    )
                )
            }
        </List>        
     );
    }
 
export default Experience;