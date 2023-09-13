import React from "react";
import { Button,Container, Grid, Typography, Box, Divider } from '@mui/material';
import semillas from "../../assets/img/semillas.png";
import beneficios from "../../assets/img/beneficios.png";
import trigo from "../../assets/img/trigo.png";
import soja from "../../assets/img/soja.png";
import maiz from "../../assets/img/maiz.png";
import { Join } from "../../common/join";

export const SemillasPage: React.FC<{}> = () => {
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
                        <img src={semillas} width={'100%'} />
                    </Grid>
                    <Grid item xs={10} lg={5} md={5}>
                        <Typography variant="h3" textAlign="left" color="black" sx={{
                            fontSize: '24px', fontWeight: 'bold', pb: '20px'
                        }}>
                            Las Semillas y su Rotación
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px', borderBottom: 'solid 1px #61E94B' }}>
                            La rotación de cultivos consiste en la siembra sucesiva de diferentes
                            cultivos en un mismo terreno, siguiendo un orden definido. Este concepto
                            se contrapone al monocultivo, consistente en la siembra repetida de una
                            misma especie en el mismo campo, año tras año.
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
                            El Conicet llevo a cabo una investigacion
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: { xs: 'left', md: 'center', lg: 'center' }, color: 'black', fontWeight: '300', pb: '20px', fontSize: { xs: '20px', md: '30px', lg: '30px' } }}>
                            A cerca de la rotacion de cultivos y su beneficio en la riqueza de minerales en el suelo
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
                            En Resumen
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pb: '20px' }}>
                            El estudio se llevó a cabo en un ensayo de larga duración iniciado en 1975 bajo
                            siembra directa. De los tratamientos que conforman el ensayo sólo se seleccionaron
                            cuatrosecuencias de cultivos agrícolas: soja-soja (S-S), soja-trigo/soja (S-T/S),
                            maíz-soja (M-S) y maíz-trigo/soja (M-T/S). Sobre las muestras de suelo se determinaron
                            parámetros biológicos, como respiración microbiana y actividades enzimáticas, y parámetros
                            químicos como contenido de materia orgánica y macro nutrientes. El análisis conjunto de los
                            parámetros dio como resultado una diferenciación entre las secuencias que incluyeron al cultivo
                            invernal (S-T/S y M-T/S) de las secuencias basadas únicamente en cultivos de verano (S-S y M-S).
                            De esta manera las funciones microbianas junto a la materia orgánica y los nutrientes del suelo,
                            demostraron la importancia de la inclusión de trigo como cultivo de invierno en la rotación agrícola.
                        </Typography>
                        <Button variant="outlined" href="https://ri.conicet.gov.ar/handle/11336/127200" target="_blank">
                            +info
                        </Button>
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
                display: { xs: 'none', lg: 'inline-flex' },
            }}>
                <Grid item xs={10}><Divider variant='fullWidth' sx={{ background: '#61E94B', opacity: '1', height: 2, ml: 20, mr: 20 }}></Divider></Grid>
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
                            Las semillas de Rotación
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign:'left', color: 'black', fontWeight: '300', pb: '20px', fontSize: { xs: '20px', md: '30px', lg: '30px' }, pt:'20px' }}>
                            La 2 mejores convinaciones para rotacion de cultivos son Trigo-Soja y Maiz-Soja
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
                    <Grid item xs={10} lg={3.3} md={10} sx={{}}>

                        <img src={trigo} width={'100%'} />
                        <Box sx={{ border: 'solid 1px #A39D9D', mt: '-10px', pb: '20px', height: {lg:'400px', md:'100%', xs:'100%'} }}>
                            <Typography variant="h3" textAlign="left" color="black" sx={{
                                fontSize: '24px', fontWeight: 'bold', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' }, pt: '20px', pb: '20px'
                            }}>
                                Trigo
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' } }}>
                            El trigo es un tipo de cereal fuente de hidratos de carbono complejos y 
                            con una buena proporción de proteínas de origen vegetal (aproximadamente 
                            un 12%). Contiene una gran variedad de vitaminas y minerales: vitamina B, 
                            hierro, magnesio, fósforo y zinc.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={10} lg={3.3} md={10} sx={{}}>
                        <img src={soja} width={'100%'} />
                        <Box sx={{ border: 'solid 1px #A39D9D', mt: '-10px', pb: '20px', height: {lg:'400px', md:'100%', xs:'100%'} }}>
                            <Typography variant="h3" textAlign="left" color="black" sx={{
                                fontSize: '24px', fontWeight: 'bold', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' }, pt: '20px', pb: '20px'
                            }}>
                                Soja
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' } }}>
                            La soja y sus derivados son conocidas fuentes de proteína y grasas saludables, 
                            pero en las últimas décadas se le ha prestado una atención especial debido a 
                            su elevado contenido en isoflavonas y a sus efectos positivos en la salud, al 
                            asociarse a un menor riesgo de enfermedades cardiovasculares, cáncer de mama y 
                            de próstata, y a la disminución de sofocos en la menopausia, entre otros.
                            </Typography>

                        </Box>
                    </Grid>
                    
                    <Grid item xs={10} lg={3.3} md={10} sx={{}}>
                        <img src={maiz} width={'100%'} />
                        <Box sx={{ border: 'solid 1px #A39D9D', mt: '-10px', pb: '20px', height: {lg:'400px', md:'100%', xs:'100%'} }}>
                            <Typography variant="h3" textAlign="left" color="black" sx={{
                                fontSize: '24px', fontWeight: 'bold', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' }, pt: '20px', pb: '20px'
                            }}>
                                Maiz
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', fontWeight: '300', pl: { xs: '20px', lg: '40px' }, pr: { xs: '20px', lg: '40px' } }}>
                            Proporciona más del 10% de la ingesta diaria recomendada de fósforo, magnesio, 
                            potasio, vitamina C y las vitaminas B folato, tiamina y B12, y también es una 
                            buena fuente de provitamina A, vitamina E, hierro, manganeso, selenio, sodio y zinc.
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Join />

        </Container>
    )
}