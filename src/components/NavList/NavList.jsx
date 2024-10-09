import HomeIcon from '@mui/icons-material/Home';
import ServicesIcon from '@mui/icons-material/IntegrationInstructions';
import CvIcon from '@mui/icons-material/School';
import PortfolioIcon from '@mui/icons-material/HomeRepairService';
import BlogIcon from '@mui/icons-material/HistoryEdu';
import ContactIcon from '@mui/icons-material/ModeComment';
import { NavLink } from 'react-router-dom'
import { List, ListItemIcon , Box } from '@mui/material'
import { Element } from '../NavElements/NavElements'
import { BlackToolTip } from '../BlackToolTip/BlackToolTip';
const NavList = () => {
    return ( 
        <List sx={{ flex: '1 1 95%', display: 'flex', justifyContent:'center', padding: '0', gap:'14px'}}>
                <ListItemIcon>
                    <NavLink to='/'>
                    <BlackToolTip title="Home" placement="top">
                        <Element className='nav-element'>
                            <HomeIcon className='element-icon' sx={{ height: '24px', width: '24px'}}></HomeIcon>
                        </Element>
                    </BlackToolTip>
                    </NavLink>
                </ListItemIcon>
                <ListItemIcon>
                    <NavLink to='/Services'>
                        <BlackToolTip title="Services" placement="top">
                            <Element className='nav-element'>
                                <ServicesIcon className='element-icon' sx={{ height: '24px', width: '24px'}}></ServicesIcon>
                            </Element>
                        </BlackToolTip>
                    </NavLink>
                </ListItemIcon>
                <ListItemIcon>
                    <NavLink to='/Cv'>
                        <BlackToolTip title="Cv" placement="top">
                            <Element className='nav-element'>
                                <CvIcon className='element-icon' sx={{ height: '24px', width: '24px'}}></CvIcon>
                            </Element>
                        </BlackToolTip> 
                    </NavLink>
                </ListItemIcon>
                <ListItemIcon>
                    <NavLink to='/Portfolio'>
                        <BlackToolTip title="Portfolio" placement="top">
                            <Element className='nav-element'>
                                <PortfolioIcon className='element-icon' sx={{ height: '24px', width: '24px'}}></PortfolioIcon> 
                            </Element>
                        </BlackToolTip>
                    </NavLink>
                </ListItemIcon>
                <ListItemIcon>
                    <NavLink to='/Blog'>
                        <BlackToolTip title="Blog" placement="top">
                            <Element className='nav-element'>
                                <BlogIcon className='element-icon' sx={{ height: '24px', width: '24px'}}></BlogIcon>
                            </Element>
                        </BlackToolTip>
                    </NavLink>
                </ListItemIcon>
                <ListItemIcon>
                    <NavLink to='/Contact'>
                        <BlackToolTip title="Contact" placement="top">
                            <Element className='nav-element'>
                                <ContactIcon className='element-icon' sx={{ height: '24px', width: '24px'}}></ContactIcon>
                            </Element>
                        </BlackToolTip>
                    </NavLink>
                </ListItemIcon>
        </List>
     );
}
 
export default NavList;