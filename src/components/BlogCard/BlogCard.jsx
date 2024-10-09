import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box , Link } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './BlogCard.scss'
const BlogCard = ({BlogContent}) => {
    return ( 
            <Box sx={{display:"flex", gap:"20px", textTransform:"capitalize", flexWrap:'wrap'}} className="blog-container" >
                {
                BlogContent.map((content, id) =>(    
                    <Box as="a" sx={{cursor:"pointer", textDecoration:"none"}} href="#">
                        <Card sx={{minHeight:"474px",  maxWidth:"310px",":hover": {boxShadow: 5}, transition:"0.4s all ease-in-out", backgroundColor:"#fff"}} key={id}  className = "blog-card" >
                        <CardMedia
                            component="img"
                            image={content.image}
                            alt={content.image}
                        />
                        <CardContent sx={{padding: "25px 35px 16px 25px"}} >
                            <Typography variant="h4" sx={{fontSize:"18px", fontWeight:"500", lineHeight:"22.25px" , paddingBottom:"8px"}}>{content.title}</Typography>
                            <Typography variant="body2" sx={{ color: "rgba(118, 118, 118, 1)" , fontSize:"15px" , fontWeight:"400", lineHeight:"24px" ,marginBottom:"9px" }}>{content.body}</Typography>
                            <Link href="#" underline="hover"  variant="h4" sx={{color:"rgba(255, 180, 0, 1)", fontSize:"18px", fontWeight:"500", lineHeight:"22.25px"}}>Learn more <ArrowForwardIosIcon sx={{fontSize: "10px", display:"inline-block"}} /></Link>
                        </CardContent>
                        <CardActions disableSpacing>
                        </CardActions>
                    </Card>                         
                    </Box>           

                )
                ) }            
            </Box>
     );
}
 
export default BlogCard;