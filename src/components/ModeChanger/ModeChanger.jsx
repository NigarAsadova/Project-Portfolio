import { Box, Button, useColorScheme } from "@mui/material";
import Contrast from '../../assets/icons/Contrast.svg'
const ModeChanger = () => {

    const{mode, setMode} = useColorScheme();

    const ToggleButton = () =>{
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    return ( 
        <Box variant="contained" onClick={ToggleButton} sx={{ flex:'1 1 5%', height: "30px", width:"30px" , padding:'5px 0', display: 'flex', justifyContent: 'end'}}>
            <img src={Contrast} alt="Contrast-icon" />
        </Box>
     );
}
 
export default ModeChanger;