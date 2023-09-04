import React from "react";
import { Button, Container, Grid, Typography, Box, List, Divider, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import aplanadora from "../../assets/img/aplanadora.png";
import siembra from "../../assets/img/siembra.png";
import hierbas from "../../assets/img/hierbas.png";
import abono from "../../assets/img/abono.png";
import { Join } from "../../common/join";
import cultivo from "../../assets/img/cultivo.png";
import terreno from "../../assets/img/terreno.png";
import CircleIcon from '@mui/icons-material/Circle';

export const WikiPage: React.FC<{}> = () => {
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
                        <img src={cultivo} width={'100%'} />
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Como Empezar a cultivar tu tierra
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px', borderBottom: 'solid 1px #61E94B' }}>
                            5 pasos para preparar la tierra para sembrar
                            <List sx={{ paddingLeft: { xs: '20px', lg: '40px', md: '30px' } }}>

                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <CircleIcon sx={{ color: 'black', fontSize: '5px' }} />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color: 'black', fontWeight: '300' }}>
                                        Identifica el tipo de terreno donde vas a sembrar
                                    </ListItemText>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <CircleIcon sx={{ color: 'black', fontSize: '5px' }} />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color: 'black', fontWeight: '300' }}>
                                        Elimina las malas hierbas del terreno
                                    </ListItemText>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <CircleIcon sx={{ color: 'black', fontSize: '5px' }} />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color: 'black', fontWeight: '300' }}>
                                        Airea la tierra antes de sembrar
                                    </ListItemText>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <CircleIcon sx={{ color: 'black', fontSize: '5px' }} />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color: 'black', fontWeight: '300' }}>
                                        Allana el terreno tras la aireación
                                    </ListItemText>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <CircleIcon sx={{ color: 'black', fontSize: '5px' }} />
                                    </ListItemIcon>
                                    <ListItemText disableTypography sx={{ color: 'black', fontWeight: '300' }}>
                                        Abona y enriquece la tierra para dejarla lista para sembrar
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Typography>

                    </Grid>
                </Grid>
            </Box>

            <Box sx={{
                width: '100%', pt: { xs: 0, md: 0, lg: '60px' }, pb: { xs: 0, md: 0, lg: '20px' }
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
                            textAlign: { xs: 'left', md: 'center', lg: 'center' }, fontSize: { xs: '20px', md: '40px', lg: '40px' },
                        }}>
                            Si quieres obtener una buena cosecha el próximo año, sigue los siguientes consejos:
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
                    flexDirection: { xs: 'column-reverse', lg: 'row', md: 'column-reverse' },
                    display: 'inline-flex',
                }}>

                    <Grid item xs={10} lg={5} md={10}>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Identifica el tipo de terreno donde vas a sembrar
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '50px' }}>
                            Es algo en lo que no se suele pensar cuando se va a preparar la tierra y es vital
                            conocer las características del suelo donde se va a sembrar, ya que nos va a ayudar
                            a saber qué necesita para estar siempre en equilibrio. Podemos dividir los tipos de
                            terreno en dos grandes grupos:
                        </Typography>

                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            <CircleIcon sx={{ color: 'black', fontSize: '5px' }} /> Tierras arenosas.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '50px' }}>
                            Este tipo de tierra permite una evacuación del agua rápida, por lo que es perfecta para
                            aquellos cultivos que necesitan mucha humedad. Una de sus ventajas más importante es que
                            permite una elevada oxigenación de las raíces, gracias a esa capacidad de drenaje que posee.
                        </Typography>

                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            <CircleIcon sx={{ color: 'black', fontSize: '5px' }} /> Tierras arcillosas.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300' }}>
                            Estos tipos de terrenos tienen una alta capacidad para retener el agua, pero no tienen
                            tanta capacidad de drenaje, esto es algo que repercute de forma negativa en la oxigenación
                            y en la salud de las raíces.
                        </Typography>
                    </Grid>
                    <Grid item xs={10} lg={5} md={10} sx={{ height: '100%' }}>
                        <img src={terreno} width={'100%'} />
                    </Grid>
                </Grid>
            </Box>

            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                <Grid item xs={10}>
                    <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px', textAlign: 'center' }}>
                        Lo ideal para el terreno es conseguir un equilibrio entre el terreno arcilloso y el arenoso. Este equilibrio, en el estado natural, es muy difícil de encontrar.
                    </Typography>
                    <Divider variant='fullWidth' sx={{ background: '#61E94B', opacity: '1', height: 2, ml: { lg: 30, md: 10, xs: 0 }, mr: { lg: 30, md: 10, xs: 0 } }}></Divider></Grid>
            </Grid>

            <Box sx={{ width: '100%', pt: '60px', pb: '60px' }}
            >

                <Grid spacing={10} container sx={{
                    pt: '60px', alignContent: 'center',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'inline-flex',
                }}>
                    <Grid item xs={10} lg={5} md={10} sx={{}}>

                        <img src={hierbas} width={'100%'} />
                        <Box sx={{ border: 'solid 1px #A39D9D', mt: '-10px', pb: '20px', height: {lg:'300px', md:'100%', xs:'100%'} }}>
                            <Typography variant="h3" textAlign="left" color="black" sx={{
                                fontSize: '24px', fontWeight: 'bold', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' }, pt: '20px', pb: '20px'
                            }}>
                                Elimina las malas hierbas del terreno
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' } }}>
                                Antes de realizar cualquier otra labor en la tierra, es muy importante eliminar las malas hierbas
                                del terreno, ya que pueden entrar en conflicto con el resto de plantas por los recursos del agua.
                                Si el cultivo va a estar destinado a productos de alimentación, lo ideal es prescindir de cualquier
                                tipo de químico para eliminar las malas hierbas, lo suyo es quitarlas de raíz.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} lg={5} md={10} sx={{}}>
                        <img src={siembra} width={'100%'} />
                        <Box sx={{ border: 'solid 1px #A39D9D', mt: '-10px', pb: '20px', height: {lg:'300px', md:'100%', xs:'100%'} }}>
                            <Typography variant="h3" textAlign="left" color="black" sx={{
                                fontSize: '24px', fontWeight: 'bold', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' }, pt: '20px', pb: '20px'
                            }}>
                                Airea la tierra antes de sembrar
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' } }}>
                                Esta es una de las tareas encargadas de oxigenar la tierra, para ello,
                                es necesario que la tierra esté húmeda. Podemos aprovechar después de
                                un día de lluvia o mojar la tierra antes de airearla, de esta manera
                                se puede trabajar mucho más fácil.
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' }, pt: '20px' }}>
                                Se debe cavar alrededor de 20-25 centímetros de la superficie,
                                sacando toda la tierra y moviéndola.
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>

                <Grid spacing={10} container sx={{
                    pt: '60px', alignContent: 'center',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'inline-flex',
                }}>
                    <Grid item xs={10} lg={5} md={10} sx={{}}>

                        <img src={aplanadora} width={'100%'} />
                        <Box sx={{ border: 'solid 1px #A39D9D', mt: '-10px', pb: '20px', height: {lg:'300px', md:'100%', xs:'100%'} }}>

                            <Typography variant="h3" textAlign="left" color="black" sx={{
                                fontSize: '24px', fontWeight: 'bold', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' }, pt: '20px', pb: '20px'
                            }}>
                                Allana el terreno tras la aireación
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' } }}>
                                Una vez que ya está el terreno aireado y con el fertilizante, es el momento de
                                allanar o nivelar el terreno para que la tierra presente
                                un aspecto fino y unificado. Para ello lo ideal es utilizar un nivel láser
                                y postes, para marcar la nivelación exacta del terreno.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} lg={5} md={10} sx={{}}>
                        <img src={abono} width={'100%'} />
                        <Box sx={{ border: 'solid 1px #A39D9D', mt: '-10px', pb: '20px', height: {lg:'300px', md:'100%', xs:'100%'} }}>

                            <Typography variant="h3" textAlign="left" color="black" sx={{
                                fontSize: '24px', fontWeight: 'bold', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' }, pt: '20px', pb: '20px'
                            }}>
                                Elimina las malas hierbas del terreno
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' } }}>
                                Aunque le hayamos echado fertilizantes al terreno, no está de más echarle más nutrientes,
                                para ello, lo mejor es aportar al suelo materia orgánica que ayude a enriquecerlo, como el
                                humus de lombriz o el estiércol. Estos pueden ser los últimos puntos para preparar la
                                tierra para sembrar.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Join />

        </Container>
    )
}