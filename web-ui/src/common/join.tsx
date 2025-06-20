import {  Box, Grid, Button, Typography } from "@mui/material";
import React from "react";

//Menu de navegación
export const Join: React.FC<{}> = () => {
    return (
        <Box sx={{
            width: '100%', pt: '60px', pb: '60px',
            background: '#f7fef6'
        }}
        >
            <Grid spacing={10} container sx={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                display: 'inline-flex'
            }}>
                <Grid item xs={10} lg={6} md={10}>
                    <Typography variant="h3" textAlign="left" color="black" sx={{
                        fontSize:{xs:'20px', lg:'30px'}, pb: {xs:'0px', lg:'20px'}
                    }}>
                        ¿Queres formar parte de la mayor comunidad de agricultores de Argentina? Estas a solo un click
                    </Typography>
                </Grid>
                <Grid item xs={10} lg={4} md={10} sx={{ textAlign: {xs:'left', lg:'right'} }}>
                    <Button href="/agrosolutions/contacto" variant="contained" sx={{  opacity: '0.8', color: 'white', width: {xs:'100px', md:'150px',lg:'150px'} }}>
                        Contactanos
                    </Button>
                </Grid>
            </Grid>
        </Box>

    )
}