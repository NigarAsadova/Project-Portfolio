import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Link } from '@mui/material';
import BusinessStartUp from '../../assets/pics/web-site.png'
import BusinessCard from '../../assets/pics/business-card.png'
import BlackWhiteProject from '../../assets/pics/black-white-project.png'
import ItalianFoodSite from '../../assets/pics/traditional-italian-food.png'
import MockUp from '../../assets/pics/mockup.png'
import PinkBusinessCard from '../../assets/pics/pink-business-card.png'
import MockUPDesignHere from '../../assets/pics/mockup-design-here.png'
import ModernBusinessBrochure from '../../assets/pics/modern-business-brochure.png'
import BrandingSet from '../../assets/pics/red-branding-set.png'
import PlusSign from '../../assets/icons/Vector.svg'
const AllCategories = () => {
    return ( 
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <ImageList sx={{ width: 970, height: 'fit-content'}} cols={3} gap={20}>
            {itemData.map((item) => (
                <Link href='#'>
                    <ImageListItem key={item.img} sx={{height:'300px'}} className='hover-img'>
                    <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        height='100%'
                    />
                    <Box
                    className="overlay"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(255, 180, 0, 0.95)",
                        opacity: 0,
                        transition: 'opacity 0.3s',
                    }}
                    />
                    <Link href="!" className='add-button'
                    sx={{
                        position: 'absolute',
                        top: 'calc(50% - (30.33px / 2))',
                        left: 'calc(50% - (30.33px / 2))',
                        opacity: 0,
                        transition: 'opacity 0.3s',
                    }}>
                        <img src={PlusSign} alt="" />
                    </Link>
                    </ImageListItem>            
                </Link>

            ))}
            </ImageList>        
        </Box>
     );
}

const itemData = [
    {
      img: BusinessStartUp,
      title: 'BusinessStartUp',
    },
    {
      img: BusinessCard,
      title: 'BusinessCard',
    },
    {
      img: BlackWhiteProject,
      title: 'BlackWhiteProject',
    },
    {
      img: ItalianFoodSite,
      title: 'ItalianFoodSite',
    },
    {
      img: MockUp,
      title: 'MockUp',
    },
    {
      img: PinkBusinessCard,
      title: 'PinkBusinessCard',
    },
    {
      img: MockUPDesignHere,
      title: 'MockUPDesignHere',
    },
    {
      img: ModernBusinessBrochure,
      title: 'ModernBusinessBrochure',
    },
    {
      img: BrandingSet,
      title: 'BrandingSet',
    },
  ];
 
export default AllCategories;