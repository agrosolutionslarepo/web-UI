import React from "react";
import { Button, Container, Grid, Box, Typography, TextField, Paper, ListItemIcon } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export const RegisterPage: React.FC<{}> = () => {
    return (
        <Container >

            <Typography variant="h1" textAlign="center" color="black" sx={{ fontSize: { xs: "20px", lg: "50px" }, fontWeight: '300', mt: 12 }}>
                ¿Estas listo para unirte a Agrosolutions?
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', color: 'black', fontWeight: '300', pb: '20px', pt: '20px', fontSize: { xs: '15px', md: '15px', lg: '30px' } }}>
                Solamente tenes que llenar el formulario o ingresar con tu cuneta de Google
            </Typography>

            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ pt: '3vh', pb: '3vh' }}
            >

                <Grid item sx={{ minWidth: '55%', width: {lg:'55%', xs:'100%', md:'55%'} }}>
                    <Paper sx={{
                        padding: {lg:4, md:2, xs:1},
                        border: 1,
                        borderColor: '#A39D9D',
                        background: 'transparent',
                    }}>
                        <Box component="form" sx={{

                            ml: { xs: '20px', lg: '0' },
                            mr: { xs: '20px', lg: '0' },
                        }}>
                            <Typography variant="h2" textAlign="left" color="black" sx={{ fontSize: { xs: "20px", lg: "25px" }, fontWeight: '500', pt: '10px', pb: '20px' }}>
                                Registrate
                            </Typography>

                            <TextField type="text" label='Nombre' sx={{
                                width: {lg:'48%', md:'100%', xs:'100%'}, marginRight:{lg:'4%', md:'0', xs:'0'},
                                mt: 1, mb: 1.5, input: { color: "black", fontSize: '15px' }, "label": { color: "black", fontSize: '15px' },
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

                            <TextField type="text" label='Apellido' sx={{
                                width: {lg:'48%', md:'100%', xs:'100%'},
                                mt: 1, mb: 1.5, input: { color: "black", fontSize: '15px' }, "label": { color: "black", fontSize: '15px' },
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

                            <TextField fullWidth type="email" label='Email' sx={{
                                mt: 1, mb: 1.5, input: { color: "black", fontSize: '15px' }, "label": { color: "black", fontSize: '15px' },
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



                            <TextField fullWidth type="password" label='Crear contraseña' sx={{
                                mt: 1, mb: 1.5, input: { color: "black", fontSize: '15px' }, "label": { color: "black", fontSize: '15px' },
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
                                <Button type="submit" variant="contained" sx={{ color: 'white', width: { xs: '100%', lg: '30%', md: '30%' }, marginTop: 1, marginBottom:1 }}>Registrarse</Button>


                                <Button variant="outlined" sx={{ width: { xs: '100%', lg: '30%', md: '30%' }, marginTop: 1, marginBottom:1 }}>
                                    <ListItemIcon sx={{ color: 'black', minWidth: '40px' }}>
                                        <GoogleIcon sx={{ color: '#61E94B' }} />
                                    </ListItemIcon>Google</Button>
                            </Grid>
                        </Box>
                    </Paper>


                </Grid>
            </Grid>

        </Container>
    )
}