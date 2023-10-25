import React from "react";
import { Button, Container, Grid, Box, Typography, TextField, Paper } from '@mui/material';

export const RecoverPasswordPage: React.FC<{}> = () => {
    return (
        <Container >

            <Typography variant="h1" textAlign="center" color="black" sx={{ fontSize: { xs: "20px", lg: "50px" }, fontWeight: '300', mt: 12 }}>
                ¡Recupera tu contraseña!
            </Typography>
            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ pt: '10vh', pb: '10vh' }}
            >

                <Grid item sx={{ minWidth: '55%' }}>
                    <Paper sx={{
                        padding: { lg: 4, md: 2, xs: 1 },
                        border: 1,
                        borderColor: '#A39D9D',
                        background: 'transparent',
                    }}>
                        <Box component="form" sx={{

                            ml: { xs: '20px', lg: '0' },
                            mr: { xs: '20px', lg: '0' },
                        }}>
                            <Typography variant="h2" textAlign="center" color="black" sx={{ fontSize: { xs: "20px", lg: "25px" }, fontWeight: '500', pt: '10px', pb: '20px' }}>
                                Te enviaremos un mail a la brevedad
                            </Typography>
                            <TextField fullWidth type="email" label='Email' sx={{
                                mt: 2, mb: 1.5, input: { color: "black" }, "label": { color: "black" },
                                '& label.Mui-focused': {
                                    color: 'black',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#61E94B',
                                        color: '#A39D9D',
                                        border: 'solid 0.5px',
                                        borderRadius: 0
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#61E94B',
                                        transition: '0.3s'
                                    }
                                }
                            }} required />

                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Button type="submit" variant="contained" sx={{ color: 'white', width: { xs: '100%', lg: '30%', md: '30%' }, marginTop: 1, marginBottom: 1 }}>Enviar</Button>
                            </Grid>
                        </Box>
                    </Paper>


                </Grid>
            </Grid>

        </Container>
    )
}