import { StartOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: 'calc(100vh - 100px)', backgroundColor: 'primary.main', padding: 4, borderRadius: 3}}>
            <Grid item xs={12}>
                <StartOutlined sx={{fontSize: 100, color: "white"}}/>
            </Grid>
            <Grid item xs={12}>
                <Typography color="white" variant="h5">Selecciona una entrada o una nota</Typography>
            </Grid>
        </Grid>
    )
}
