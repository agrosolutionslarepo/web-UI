import { AppBar, Box, Toolbar, Grid, Container, Button, Stack, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import fondo from "../assets/img/fondo_menu.png";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PeopleIcon from '@mui/icons-material/People';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

//Menu de navegación
export const NavBar: React.FC<{}> = () => {

    const [open, setOpen] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{
                backgroundImage: `url(${fondo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <Toolbar>
                    <Container maxWidth="xl" sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item >
                                <Button href="/" sx={{
                                    '&:hover': {
                                        background: "none",
                                    }
                                }}><img src={logo} width={150} /></Button>

                                <Button href="/" sx={{
                                    color: 'white',
                                    '&:hover': {
                                        background: "none",
                                    }
                                }} variant="text">Inicio</Button>

                                <Button href="/nosotros" sx={{
                                    color: 'white',
                                    '&:hover': {
                                        background: "none",
                                    }
                                }} variant="text">Nosotros</Button>

                                <Button href="/wiki" sx={{
                                    color: 'white',
                                    '&:hover': {
                                        background: "none",
                                    }
                                }} variant="text">Wiki</Button>
                                <Button sx={{
                                    color: 'white',
                                    '&:hover': {
                                        background: "none",
                                    }
                                }} variant="text">Contacto</Button>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button sx={{
                                        color: '#61E94B', backgroundColor: 'white',
                                        '&:hover': {
                                            color: '#fff',
                                            background: '#ffffff6b',

                                        }
                                    }} variant="contained" href="/login">Ingresar</Button>

                                    <Button sx={{
                                        color: 'white'
                                    }} variant="contained">Registrarse</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>

                    <Container maxWidth="xl" sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item >
                                <Button sx={{ color: 'white' }} onClick={() => setOpen(true)}><MenuIcon /></Button>
                            </Grid>
                            <Grid item>
                                <Button sx={{
                                    color: 'white', background: '#121212', 
                                    boxShadow: '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
                                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))'
                                }} onClick={() => setOpenLogin(true)}><PersonIcon /></Button>
                            </Grid>
                        </Grid>


                        <Drawer
                            open={open}
                            anchor="left"
                            onClose={() => setOpen(false)}
                        >
                            <Container maxWidth="xl" sx={{ width: 300 }}>
                                <List>
                                    <ListItem >
                                        <ListItemButton>
                                            <img src={logo} width={150} />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                    <ListItem >
                                        <ListItemButton href="/">
                                            <ListItemIcon>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Inicio" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemButton href="/wiki">
                                            <ListItemIcon>
                                                <CollectionsBookmarkIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="wiki" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemButton href="/nosotros">
                                            <ListItemIcon>
                                                <PeopleIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Nosotros" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <ContactSupportIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Contacto" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Container>
                        </Drawer>
                        <Drawer
                            open={openLogin}
                            anchor="right"
                            onClose={() => setOpenLogin(false)}
                        >
                            <Container maxWidth="xl" sx={{ width: 300 }}>
                                <List>
                                    <ListItem >
                                        <ListItemButton>
                                            <img src={logo} width={150} />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                    <ListItem >
                                        <ListItemButton href="/login">
                                            <ListItemIcon>
                                                <LoginIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="ingresar" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <AppRegistrationIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Registrarse" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Container>
                        </Drawer>
                    </Container>


                </Toolbar>
            </AppBar>
        </Box>

    )
}