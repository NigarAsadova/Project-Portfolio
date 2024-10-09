import * as React from 'react';
import { Box ,Tab } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import './Portfolio.scss'
import UIDesign from '../../components/UiDesign/UIDesign';
import WebTemplates from '../../components/WebTemplates/WebTemplates';
import AllCategories from '../../components/AllCategories/AllCategories';
import Logo from '../../components/Logo/Logo';
import Branding from '../../components/Branding/Branding';
const Portfolio = () => {

    const Section ={
        title: "Portfolio",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
    }

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return ( 
        <Box>
            <SectionTitle  title={Section.title} description={Section.description} />
            <Box sx={{ width: '100%', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box sx={{display:"flex", justifyContent:'center'}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example"
                        sx={{
                            '& .Mui-selected': {
                            color: 'rgba(255, 180, 0, 1)',
                            borderBottom: 'none',
                            },}}>
                            <Tab label="All categories" value="1" sx={{fontWeight:'500', color:'rgba(43, 43, 43, 1)', textTransform:'capitalize', fontSize:'18px', lineHeight:'22.25px'}} />
                            <Tab label="UI Design" value="2" sx={{fontWeight:'500', color:'rgba(43, 43, 43, 1)', textTransform:'capitalize', fontSize:'18px', lineHeight:'22.25px'}} />
                            <Tab label="Web Templates" value="3" sx={{fontWeight:'500', color:'rgba(43, 43, 43, 1)', textTransform:'capitalize', fontSize:'18px', lineHeight:'22.25px'}} />
                            <Tab label="Logo" value="4" sx={{fontWeight:'500', color:'rgba(43, 43, 43, 1)', textTransform:'capitalize', fontSize:'18px', lineHeight:'22.25px'}} />
                            <Tab label="Branding" value="5"sx={{fontWeight:'500', color:'rgba(43, 43, 43, 1)', textTransform:'capitalize', fontSize:'18px', lineHeight:'22.25px'}}  />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><AllCategories /> </TabPanel>
                    <TabPanel value="2"><UIDesign /></TabPanel>
                    <TabPanel value="3"><WebTemplates /></TabPanel>
                    <TabPanel value="4"><Logo /></TabPanel>
                    <TabPanel value="5"><Branding /></TabPanel>
                </TabContext>
            </Box>
        </Box>
     );
}
 
export default Portfolio;