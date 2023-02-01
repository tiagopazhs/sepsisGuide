import { Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import SimpleList from "../components/SimpleList";

function PatientsList() {
    return (
        <Box sx={{ pb: 7 }}>
            <Box style={{ marginTop: '15vh', backgroundColor: '#C2EBFF' }}>
                <Grid container className='d-flex justify-content-center' >
                    <SimpleList />
                </Grid>
            </Box>
            <Paper elevation={3} sx={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#005681' }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    style={{ width: '100vw' }}
                >
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#C2EBFF'} >
                            Patients list
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container className='d-flex justify-content-center pt-2 pb-3 pe-2' >
                            <Grid item xs={12} sm={10} md={8} lg={6} className="d-flex justify-content-center" >
                                <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" size="small" sx={{ width: '85%', borderRadius: 5 }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        </Box>
    )
}

export default PatientsList;