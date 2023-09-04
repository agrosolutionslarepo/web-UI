import React from "react";
import { Button, Container, Grid, Typography, Box, Link } from '@mui/material';
import banner from "../../assets/img/banner_1.png";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import trigo from "../../assets/img/trigo.png";
import soja from "../../assets/img/soja.png";
import maiz from "../../assets/img/maiz.png";
import { Join } from "../../common/join";

export const HomePage: React.FC<{}> = () => {
    return (
        <Container sx={{ mt: '60px', pl: 0, ml: 0, pr: 0, mr: 0 }} disableGutters maxWidth={false}>
            <Box sx={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '94vh',
                padding: '0',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                display: 'inline-flex'
            }}
            >
                <Link href="/" sx={{ pb: '5vh' }}>
                    <PlayArrowIcon sx={{ fontSize: '80px', color: 'white', background: '#61E94B', borderRadius: '45px', padding: '10px', opacity: '0.8' }}></PlayArrowIcon>
                </Link>
                <Typography variant="h1" textAlign="center" color="black" sx={{ fontSize: { xs: "30px", lg: "50px" }, fontWeight: '500', pb: '4vh' }}>
                    Unite a la mayor comunidad agricola de la web
                </Typography>
                <Button variant="contained" sx={{ fontSize: '17px', pl: '60px', pr: '60px', opacity: '0.8', color: 'white' }}>
                    ¡Unite!
                </Button>
            </Box>


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
                            Cultivo de Semillas
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
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Historia del Cultivo
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Hace aproximadamente 12 000 años, durante el Neolítico,
                            el surgimiento de la agricultura revolucionó la historia,
                            transformando el modo de vida y la supervivencia humana por completo.
                        </Typography>
                        <Button variant="outlined">
                            +info
                        </Button>
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Cultivo rapido
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            También hay plantas de rápido crecimiento en agua, como bambú,
                            ajo, romero, tulipanes, albahaca, etc. Las semillas que germinan
                            más rápido son las de la familia de la col: brócoli, lechuga y coliflor.
                            El árbol que crece más rápido es el plátano.
                        </Typography>
                        <Button variant="outlined">
                            +info
                        </Button>
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
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Cultivo hogareño
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Tanto las espinacas como las coles y el brócoli son relativamente
                            fáciles de plantar en casa. En el caso de las espinacas, se pueden
                            cultivar en pequeños huertos, separadas por unos 30 centímetros de
                            distancia entre sí, o esparciendo las semillas en maceteros.
                        </Typography>
                        <Button variant="outlined">
                            +info
                        </Button>
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Tierra cultivable
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Entre más materia orgánica tenga, la tierra será más propicia para el cultivo,
                            ya que será evidencia de la capacidad de que la vida se desarrolle. La forma
                            para saber si en la tierra hay suficiente materia orgánica es sencilla. Entre
                            más materia orgánica, esta adquirirá un color más oscuro.
                        </Typography>
                        <Button variant="outlined">
                            +info
                        </Button>
                    </Grid>
                </Grid>
            </Box>

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
                        <img src={trigo} width={'100%'} />
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Trigo
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Argentina se encuentra dentro del ranking de los once productores mundiales de trigo.
                            Según datos del USDA, la producción de trigo de Argentina a nivel mundial representó
                            en la campaña 2017/18 el 2,4% ocupando el 11° lugar en el ranking mundial. En tanto
                            la exportación de harina de trigo de la Argentina a nivel mundial representó el 5,4%
                            del volumen ocupando el 4° lugar en el ranking mundial de exportaciones
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{
                width: '100%', pt: '60px', pb: '60px',
                background: '#f7fef6'
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
                            Soja
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            La soja y sus derivados son conocidas fuentes de proteína y grasas saludables,
                            pero en las últimas décadas se le ha prestado una atención especial debido a su
                            elevado contenido en isoflavonas y a sus efectos positivos en la salud, al asociarse
                            a un menor riesgo de enfermedades cardiovasculares, cáncer de mama y de próstata, y
                            a la disminución de sofocos en la menopausia, entre otros
                        </Typography>
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <img src={soja} width={'100%'} />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: '100%', pt: '60px', pb: '60px' }}
            >
                <Grid spacing={10} container sx={{
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    display: 'inline-flex',
                }}>
                    <Grid item xs={10} lg={5} md={5}>
                        <img src={maiz} width={'100%'} />
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Maiz
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            Proporciona más del 10% de la ingesta diaria recomendada de fósforo, magnesio,
                            potasio, vitamina C y las vitaminas B folato, tiamina y B12, y también es una
                            buena fuente de provitamina A, vitamina E, hierro, manganeso, selenio, sodio y zinc.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Join />

        </Container>

    )
}