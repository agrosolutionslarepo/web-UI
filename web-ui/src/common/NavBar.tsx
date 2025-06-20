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
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Padding } from "@mui/icons-material";

//Menu de navegación
export const NavBar: React.FC<{}> = () => {

    const [open, setOpen] = useState(false)

    return (
        <Box sx={{ flexGrow: 1,padding: 0 }}>
            <AppBar position="fixed" sx={{
                //backgroundImage: `url(${fondo})`,
                
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                padding: 0
            }}>
                <Toolbar>
                    <Container maxWidth="xl" sx={{ display: { xs: 'none', md: 'flex' }, padding: 0 }}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: 0 }}>
                            <Grid item >
                                <Button href="/" sx={{
                                    '&:hover': {
                                        background: "none",
                                    }
                                }}><img src={logo} width={100} /></Button>
                            </Grid>
                            <Grid item>

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

                                <Button href="/semillas" sx={{
                                    color: 'white',
                                    '&:hover': {
                                        background: "none",
                                    }
                                }} variant="text">Semillas</Button>

                                <Button href="/wiki" sx={{
                                    color: 'white',
                                    '&:hover': {
                                        background: "none",
                                    }
                                }} variant="text">Wiki</Button>

                                <Button href="/contacto" sx={{
                                    color: 'white',
                                    '&:hover': {
                                        background: "none",
                                    }
                                }} variant="text">Contacto</Button>
                            </Grid>
                        </Grid>
                    </Container>

                    <Container maxWidth="xl" sx={{ display: { xs: 'flex', md: 'none' }, padding: 0 }}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item >
                                <img src={logo} width={100} />
                            </Grid>
                            <Grid item>
                                <Button sx={{ color: 'white', padding: 0}} onClick={() => setOpen(true)} ><MenuIcon sx={{Padding:0, fontSize:'2rem'}}/></Button>
                            </Grid>
                        </Grid>

                        <Drawer
                            open={open}
                            anchor="right"
                            onClose={() => setOpen(false)}
                        >
                            <Container maxWidth="xl" sx={{ width: 300 }}>
                                <List>
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
                                        <ListItemButton href="/semillas">
                                            <ListItemIcon>
                                                <LocalFloristIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="semillas" />
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
                                        <ListItemButton href="/contacto">
                                            <ListItemIcon>
                                                <ContactSupportIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Contacto" />
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