import { Box, Grid, Button, Stack, Divider, Link, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/img/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

//Pie de página
export const Footer: React.FC<{}> = () => {
    return (
        <Box sx={{
            width: '100%', pt: '60px', pb: '60px'
        }}
        >
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                display: { lg: 'none', xs: 'inline-flex', md: 'none' },
            }}>

                <Grid item xs={10} sx={{ textAlign: "center" }}>
                    <Button sx={{ background: 'none' }}><img src={logo} width={150} /></Button>
                </Grid>
                <Grid item xs={10}>
                    <Stack direction="row" spacing={2} justifyContent="left">
                        <Button sx={{ color: 'black' }}>Mobile app</Button>
                        <Button sx={{ color: 'black' }}>Comunidad</Button>
                        <Button sx={{ color: 'black' }}>Compania</Button>
                    </Stack>
                </Grid>
                <Grid item xs={10} >
                    <Stack direction="row" spacing={2} justifyContent="right">
                        <Button sx={{ color: 'black' }}>Ayuda</Button>
                        <Button sx={{ color: 'black' }}>Blog</Button>
                        <Button sx={{ color: 'black' }}>Recursos</Button>
                    </Stack>
                </Grid>

            </Grid>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                display: { lg: 'inline-flex', xs: 'none', md: 'inline-flex' },
            }}>
                <Grid item xs={4}>
                    <Stack direction="row" spacing={10} justifyContent="left">
                        <Button sx={{ color: 'black' }}>Mobile app</Button>
                        <Button sx={{ color: 'black' }}>Comunidad</Button>
                        <Button sx={{ color: 'black' }}>Compania</Button>
                    </Stack>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: "center" }}>
                    <Button sx={{
                        background: 'none',
                        '&:hover': {
                            background: "none",
                        }
                    }}><img src={logo} width={150} /></Button>
                </Grid>
                <Grid item xs={4} >
                    <Stack direction="row" spacing={10} justifyContent="right">
                        <Button sx={{ color: 'black' }}>Ayuda</Button>
                        <Button sx={{ color: 'black' }}>Blog</Button>
                        <Button sx={{ color: 'black' }}>Recursos</Button>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                display: 'inline-flex',
            }}>
                <Grid item xs={10}><Divider variant='fullWidth' sx={{ background: 'black', opacity: '0.5' }}></Divider></Grid>
            </Grid>


            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                display: 'inline-flex',
            }}>
                <Grid item xs={10} container direction="row" justifyContent="center" alignItems="center" mt={6}>
                    <Link href="/" sx={{ pb: '5vh' }}>
                        <FacebookIcon sx={{ fontSize: {xs:'38px',md:'45px',lg:'45px'}, color: 'white', background: '#173c84', borderRadius: '45px', padding: '10px', opacity: '0.8', mr: '20px' }}></FacebookIcon>
                    </Link>
                    <Link href="/" sx={{ pb: '5vh' }}>
                        <InstagramIcon sx={{ fontSize: {xs:'38px',md:'45px',lg:'45px'}, color: 'white', background: '#bb0db8', borderRadius: '45px', padding: '10px', opacity: '0.8', mr: '20px' }}></InstagramIcon>
                    </Link>
                    <Link href="/" sx={{ pb: '5vh' }}>
                        <TwitterIcon sx={{ fontSize: {xs:'38px',md:'45px',lg:'45px'}, color: 'white', background: '#009cdb', borderRadius: '45px', padding: '10px', opacity: '0.8', mr: '20px' }}></TwitterIcon>
                    </Link>
                    <Link href="/" sx={{ pb: '5vh' }}>
                        <RedditIcon sx={{ fontSize: {xs:'38px',md:'45px',lg:'45px'}, color: 'white', background: '#fb4300', borderRadius: '45px', padding: '10px', opacity: '0.8' }}></RedditIcon>
                    </Link>
                </Grid>
            </Grid>

            <Grid container sx={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                display: 'inline-flex',
            }}>
                <Grid>
                    <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', textAlign: 'center' }}>
                        © Agrosolutions. 2022.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', textAlign: 'center' }}>
                        Amamos a nuestros usuarios!
                    </Typography>
                </Grid>
            </Grid>
        </Box>



    )
}