import SectionTitle from "../../components/SectionTitle/SectionTitle";
import * as React from 'react';
import { Box } from "@mui/material";
import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogContent } from "../../data/BlogContent";
const Blog = () => {

    const Section ={
        title: "Blog",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
    }

    return ( 
        <Box sx={{paddingBottom:"70px"}}>
            <SectionTitle  title={Section.title} description={Section.description} />
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <BlogCard BlogContent = {BlogContent} />
            </Box>
        </Box>
     );

}
 
export default Blog;