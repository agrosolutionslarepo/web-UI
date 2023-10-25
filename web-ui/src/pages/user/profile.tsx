import React, { useState } from "react";
import { Button, Container, Grid, Box, Typography, TextField, Paper, TextareaAutosize } from '@mui/material';
import { styled } from '@mui/system';
import user from '../../assets/img/user.png';

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    &:hover {
      border-color: #61E94B;
    }

    &:focus {
      border-color: #61E94B;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);


export const ProfilePage: React.FC<{}> = () => {
    const [textReplaced] = useState<boolean>(true);

    return (
        <Container >

            <Typography variant="h1" textAlign="center" color="black" sx={{ fontSize: { xs: "35px", lg: "50px" }, fontWeight: '500', mt: 12 }}>
                Perfil
            </Typography>



            <Grid
                container
                direction='row'
                alignItems='start'
                justifyContent='center'
                sx={{ pt: '3vh', pb: '3vh' }}
            >
                <Box sx={{ paddingRight: { lg: '30px', md: '30px', xs: '0' }, textAlign: 'center', paddingBottom: '20px' }}>

                    <img src={user} width={200} />
                </Box>

                <Grid item sx={{ minWidth: '70%', width: { lg: '70%', xs: '100%', md: '70%' }, }}>
                    <Paper sx={{
                        padding: { lg: 4, md: 2, xs: 1 },
                        border: 1,
                        borderColor: '#A39D9D',
                        background: 'transparent',
                    }}>
                        <Box component="div" sx={{
                            display: 'inline',
                            ml: { xs: '20px', lg: '0' },
                            mr: { xs: '20px', lg: '0' },
                        }}>

                            <Typography variant="h2" textAlign="left" color="black" sx={{ fontSize: { xs: "25px", lg: "30px" }, fontWeight: '500', pt: '10px', pb: '40px' }}>
                                Mis datos
                            </Typography>

                            <Box component="div" sx={{
                                display: {sx:'inline', md:'flex', lg:'flex'}
                            }}>
                                <Box component="div" sx={{
                                    display: 'inline', width: { lg: '48%', md: '100%', xs: '100%' }
                                }}>
                                    <Typography variant="h3" textAlign="left" color="black" sx={{ width: { lg: '48%', md: '100%', xs: '100%' }, fontSize: { xs: "20px", lg: "25px" }, fontWeight: '500', pt: '0px', pb: '20px' }}>
                                        Nombre
                                    </Typography>

                                    <Typography variant="body1" textAlign="left" color="grey" sx={{ width: { lg: '48%', md: '100%', xs: '100%' }, fontSize: { xs: "15px", lg: "20px" }, fontWeight: '500', pt: '0px', pb: {lg:'50px', xs:'30px'}  }}>
                                        John
                                    </Typography>
                                </Box>

                                <Box component="div" sx={{
                                    display: 'inline', width: { lg: '48%', md: '100%', xs: '100%' }
                                }}>
                                    <Typography variant="h3" textAlign="left" color="black" sx={{ width: { lg: '48%', md: '100%', xs: '100%' }, fontSize: { xs: "20px", lg: "25px" }, fontWeight: '500', pt: '0px', pb: '20px' }}>
                                        Apellido
                                    </Typography>

                                    <Typography variant="body1" textAlign="left" color="grey" sx={{ width: { lg: '48%', md: '100%', xs: '100%' }, fontSize: { xs: "15px", lg: "20px" }, fontWeight: '400', pt: '0px',pb: {lg:'50px', xs:'30px'}  }}>
                                        Doe
                                    </Typography>
                                </Box>
                            </Box>

                            <Box component="div" sx={{
                                display: 'inline', width: { lg: '48%', md: '100%', xs: '100%'}
                            }}>
                                <Typography variant="h3" textAlign="left" color="black" sx={{ width: { lg: '48%', md: '100%', xs: '100%' }, fontSize: { xs: "20px", lg: "25px" }, fontWeight: '500', pt: '0px', pb: '20px' }}>
                                    Email
                                </Typography>

                                <Typography variant="body1" textAlign="left" color="grey" sx={{ width: { lg: '48%', md: '100%', xs: '100%' }, fontSize: { xs: "15px", lg: "20px" }, fontWeight: '400', pt: '0px', pb: {lg:'50px', xs:'30px'}  }}>
                                    jonhdoe@gmail.com
                                </Typography>
                            </Box>

                            <Box component="div" sx={{
                                display: 'inline', width: { lg: '48%', md: '100%', xs: '100%' }
                            }}>
                                <Typography variant="h3" textAlign="left" color="black" sx={{ width: { lg: '48%', md: '100%', xs: '100%' }, fontSize: { xs: "20px", lg: "25px" }, fontWeight: '500', pt: '0px', pb: '20px' }}>
                                    Contraseña
                                </Typography>

                                <Typography variant="body1" textAlign="left" color="grey" sx={{ width: { lg: '48%', md: '100%', xs: '100%' }, fontSize: { xs: "15px", lg: "20px" }, fontWeight: '400', pt: '0px', pb: {lg:'50px', xs:'30px'} }}>
                                    {textReplaced ? '*********' : 'contraseña'}
                                </Typography>
                            </Box>

                            <Button href="/perfil/editar" variant="contained" sx={{ color: 'white', width: { xs: '100%', lg: '30%', md: '30%' }, marginTop: 1, marginBottom: 1, p: '15px' }}>
                                Modificar datos</Button>
                        </Box>
                    </Paper>


                </Grid>
            </Grid>

        </Container>
    )
}