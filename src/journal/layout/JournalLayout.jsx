import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'flex'}}>
            {/* navbar drawerWidth */}
            <NavBar drawerWidth={drawerWidth}/>
            {/* sidebart drawerWidth */}
            <SideBar drawerWith={drawerWidth}/>
            <Box 
                component='main'
                sx={{flexGrow: 1, p:3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
