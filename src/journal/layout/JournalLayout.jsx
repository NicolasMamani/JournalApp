import { Box } from "@mui/material"
import { NavBar } from "../components/Navbar";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'flex'}}>
            {/* navbar drawerWidth */}
            <NavBar drawerWidth={drawerWidth}/>
            {/* sidebart drawerWidth */}
            <Box 
                component='main'
                sx={{flexGrow: 1, p:3 }}
            >
                {/* Tool bar */}
                {children}
            </Box>
        </Box>
    )
}
