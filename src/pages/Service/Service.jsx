import {Box, Container} from '@mui/material'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ServiceInfo from '../../components/Service-info/Service-info';
import { Services } from '../../data/Services';
const Service = () => {

    const title = 'My Services';
    const description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'


    return ( 
        <Container>
            <Box>
                <SectionTitle title={title} description={description} />
                <ServiceInfo Services = {Services} />
            </Box>
        </Container>
     );
}
 
export default Service;