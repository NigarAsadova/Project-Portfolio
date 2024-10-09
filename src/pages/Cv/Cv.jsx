import { Box } from "@mui/material";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PricePlans from "../../components/PricePlans/PricePlans";
import RecomItem from "../../components/RecomItems/RecomItem";
import { Recommendations } from "../../data/Recommendations";
import Courses from "../../components/Courses/Courses";
import { Certificates } from "../../data/Certificates";
import { Experiences } from "../../data/Experiences.js";
import Experience from "../../components/Experience/Experience.jsx";
const Cv = () => {

    const PricePlan = {
        title: 'Price plans',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
    }
    
    const recommendations = {
        title: 'Recommendations',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
    }

    const education = {
        title: 'Education',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
    }

    const WorkHistory = {
        title: 'Work History',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return ( 
        <Box>
            <Box sx={{margin: "0 auto"}}>
                <SectionTitle title={PricePlan.title} description={PricePlan.description}/>
                <PricePlans />
            </Box>
            <Box sx={{margin: " 70px auto 0"}}> 
                <SectionTitle title ={recommendations.title} description = {recommendations.description} />
                <RecomItem  Recommendations={Recommendations} />
            </Box>
            <Box maxWidth="970px" sx={{margin: " 70px auto 0", padding:'0 20px 0'}}>
                <SectionTitle title = {education.title} description = {education.description} />
                <Courses Certificates = {Certificates} />
            </Box>
            <Box maxWidth="970px" sx={{margin: " 70px auto 0", padding:'0 20px 0'}}>
                <SectionTitle title = {WorkHistory.title} description = {WorkHistory.description} />
                <Experience Experiences = {Experiences} />
            </Box>
        </Box>
     );
}
 
export default Cv;