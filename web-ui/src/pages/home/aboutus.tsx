import React from "react";
import { Container, Grid, Typography, Box, Divider } from '@mui/material';
import problematica from "../../assets/img/problematica.png";
import beneficios from "../../assets/img/beneficios.png";
import ceci from "../../assets/img/ceci.png";
import nico from "../../assets/img/nico.png";
import tom from "../../assets/img/tom.png";
import fran from "../../assets/img/fran.png";
import { Join } from "../../common/join";

export const AboutusPage: React.FC<{}> = () => {
    return (
        <Container sx={{ mt: '60px', pl: 0, ml: 0, pr: 0, mr: 0 }} disableGutters maxWidth={false}>

            <Box sx={{ width: '100%', pt: '60px', pb: '60px' }}
            >
                <Grid spacing={10} container sx={{
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'inline-flex',
                }} >
                    <Grid item xs={10} lg={5} md={5}>
                        <img src={problematica} width={'100%'} />
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            La Problemática
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px', borderBottom: 'solid 1px' }}>
                            La gestión de un espacio rural puede tornarse un poco difícil en la mayoría de las veces,
                            teniendo en cuenta que uno tiene que estar pendiente de las situaciones climáticas
                            (como sequías o inundaciones), el trato con las plagas, el control del inventario
                            de semillas o la cantidad de cosecha que uno logró realizar una vez que se recolectó
                            lo sembrado y a qué precio se puede comercializar
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{
                width: '100%', pt: '60px', pb: '60px'
            }}
            >
                <Grid spacing={10} container sx={{
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'inline-flex',
                }}>

                    <Grid item xs={10} lg={10} md={10}>
                        <Typography variant="h2" textAlign="center" color="black" sx={{
                            textAlign: { xs: 'left', md: 'center', lg: 'center' }, fontSize: { xs: '30px', md: '40px', lg: '40px' }, pb: '20px'
                        }}>
                            Nuestra Solución
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: { xs: 'left', md: 'center', lg: 'center' }, color: 'black', fontWeight: '300', pb: '20px', fontSize: { xs: '20px', md: '30px', lg: '30px' } }}>
                            Nosotros planteamos el uso de las nuevas tecnologías para mejorar el gestionamiento
                            del campo. presentando la idea del uso de una aplicación móvil fácil de utilizar que
                            permite la administración de un campo de una forma ágil, dinámica e intuitiva, desde
                            cualquier dispositivo móvil.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{
                width: '100%', pt: '60px', pb: '60px'
            }}
            >
                <Grid spacing={10} container sx={{
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: { xs: 'column-reverse', lg: 'row', md: 'row' },
                    display: 'inline-flex',
                }}>

                    <Grid item xs={10} lg={5} md={5}>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Los Beneficios
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Centraliza la gestión del campo en un solo lugar que permite una mayor organización a la hora de administrarlo.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Transmite tranquilidad al recordarle a sus usuarios cuando deben regar, rotar o fumigar sus cultivos.
                            Además con la aplicación del clima que tiene incorporada los alerta cuando hay una sequía o una inundación.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px', borderBottom: 'solid 1px' }}>
                            Brinda accesibilidad al poder revisar todo lo relacionado a tu campo en la palma de tu mano.
                        </Typography>
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <img src={beneficios} width={'100%'} />
                    </Grid>
                </Grid>
            </Box>

            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                display: {xs:'none' ,lg:'inline-flex'},
            }}>
                <Grid item xs={10}><Divider variant='fullWidth' sx={{ background: '#61E94B', opacity: '1', height:2, ml:20, mr:20}}></Divider></Grid>
            </Grid>

            <Box sx={{ width: '100%', pt: '60px', pb: '60px' }}
            >

                <Grid spacing={10} container sx={{
                    pt: { lg: '60px', xs: '30px' }, alignContent: 'center',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'inline-flex',
                }}>
                    <Grid item xs={10} sx={{}}>
                        <Typography variant="h2" textAlign="left" color="black" sx={{
                            fontSize: { lg: "48px", xs: "36px" }
                        }}>
                            Nuestro Equipo
                        </Typography>
                    </Grid>
                </Grid>

                <Grid spacing={10} container sx={{
                    pt: '60px', alignContent: 'center',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'inline-flex',
                }}>
                    <Grid item xs={10} lg={5} md={5}  >
                        <Box sx={{ paddingBottom: '20px', textAlign: { md: 'left', xs: 'center', lg: 'left', } }}>
                            <img src={ceci} width={150} />
                        </Box>

                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Cecilia Perez de San Roman
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Es Chief Marketing Officer y Chief Product Officer  en Agrosolutions,
                            y esta encargada del diseño e imagen de la marca y proceso todo los
                            requerimientos para el producto.
                        </Typography>
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <Box sx={{ paddingBottom: '20px', textAlign: { md: 'left', xs: 'center', lg: 'left', } }}>
                            <img src={tom} width={150} />
                        </Box>

                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Tomas Paciulli
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Es Chief Information security Officer & Chief Commercial Officer.
                            Mantiene la visión del desarrollo comercial y la seguridad de la compañía.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid spacing={10} container sx={{
                    pt: '60px', alignContent: 'center',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'inline-flex',
                }}>
                    <Grid item xs={10} lg={5} md={5}>
                        <Box sx={{ paddingBottom: '20px', textAlign: { md: 'left', xs: 'center', lg: 'left', } }}>
                            <img src={nico} width={150} />
                        </Box>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Nicolás Foster
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Es chief digital officer de agrosolutions, encargado del desarrollo e
                            implementación de la página web.
                        </Typography>
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <Box sx={{ paddingBottom: '20px', textAlign: { md: 'left', xs: 'center', lg: 'left', } }}>
                            <img src={fran} width={150} />
                        </Box>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Franco de San Vicente
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Es chief technical officer, principalmente me encargo de elegir
                            las mejores tecnologías para la aplicación.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Join />

        </Container>
    )
}