import React from "react";
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
    return (
        <Container >

            <Typography variant="h1" textAlign="center" color="black" sx={{ fontSize: { xs: "20px", lg: "50px" }, fontWeight: '300', mt: 12 }}>
                Perfil
            </Typography>



            <Grid
                container
                direction='row'
                alignItems='start'
                justifyContent='center'
                sx={{ pt: '3vh', pb: '3vh'}}
            >
                <Box  sx={{ paddingRight:{lg:'30px', md:'30px', xs:'0'}, textAlign:'center', paddingBottom:'20px'}}>

                    <img src={user} width={200} />
                </Box>

                <Grid item sx={{ minWidth: '70%', width: { lg: '70%', xs: '100%', md: '70%' }, }}>
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

                            <Typography variant="h2" textAlign="left" color="black" sx={{ fontSize: { xs: "20px", lg: "25px" }, fontWeight: '500', pt: '10px', pb: '40px' }}>
                                Mis datos
                            </Typography>

                            <TextField type="text" label='Nombre' sx={{
                                width: { lg: '48%', md: '100%', xs: '100%' }, marginRight: { lg: '4%', md: '0', xs: '0' },
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
                            }} />

                            <TextField type="text" label='Apellido' sx={{
                                width: { lg: '48%', md: '100%', xs: '100%' },
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
                            }} />

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
                            }} />

                            <TextField fullWidth type="password" label='Contraseña' sx={{
                                mt: 1, mb: 1.5, input: { color: "black" }, "label": { color: "black" },
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
                            }} />


                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Button variant="contained" sx={{ color: 'white', width: { xs: '100%', lg: '30%', md: '30%' }, marginTop: 1, marginBottom: 1, p: '15px' }}>
                                    Modificar datos</Button>
                                <Button type="submit" variant="outlined" sx={{ width: { xs: '100%', lg: '30%', md: '30%' }, marginTop: 1, marginBottom: 1, p: '15px' }}>
                                    Guardar</Button>

                            </Grid>
                        </Box>
                    </Paper>


                </Grid>
            </Grid>

        </Container>
    )
}