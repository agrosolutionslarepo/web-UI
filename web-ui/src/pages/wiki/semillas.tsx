import React from "react";
import { Button, Container, Grid, Box, Typography, TextField, Paper } from '@mui/material';

export const SemillasPage: React.FC<{}> = () => {
    return (
        <Container >

            <Typography variant="h1" textAlign="center" color="black" sx={{ fontSize: { xs: "30px", lg: "50px" }, fontWeight: '300', mt: 12 }}>
                ¡Bienvenido Agro-Usuario!
            </Typography>
            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ minHeight: '60vh' }}
            >

                <Grid item>
                    <Paper sx={{
                        padding: 2,
                        border: 1,
                        borderColor: '#000000',
                        background: 'transparent'
                    }}>
                        <Box component="form" sx={{

                            ml: { xs: '20px', lg: '0' },
                            mr: { xs: '20px', lg: '0' },
                        }}>
                            <Typography variant="h2" textAlign="left" color="black" sx={{ fontSize: { xs: "20px", lg: "30px" }, fontWeight: '500' }}>
                                Ingresa
                            </Typography>
                            <TextField fullWidth label='Email' sx={{ mt: 2, mb: 1.5}} required/>
                            <TextField fullWidth type="password" label='Contraseña' sx={{ mt: 1, mb: 1.5 }} required />
                            <Button type="submit" fullWidth variant="contained" sx={{ color: 'white' }}>Iniciar Sesión</Button>
                        </Box>
                    </Paper>


                </Grid>
            </Grid>

        </Container>
    )
}