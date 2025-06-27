import React from "react";
import {
    Button,
    Container,
    Grid,
    Box,
    Typography,
    TextField,
    Paper,
    TextareaAutosize,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material';
import { styled } from '@mui/system';

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

export const ContactPage: React.FC<{}> = () => {
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://nicolasfoster.com/agrosolutions/contact.php', {
                method: 'POST',
                body: formData
            });
            setSuccess(response.ok);
        } catch (err) {
            setSuccess(false);
        } finally {
            setOpen(true);
            form.reset();
        }
    };

    const handleClose = () => setOpen(false);

    return (
        <Container >

            <Typography variant="h1" textAlign="center" color="black" sx={{ fontSize: { xs: "20px", lg: "50px" }, fontWeight: '300', mt: 12 }}>
                ¿Nesecitas Ayuda?
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', color: 'black', fontWeight: '300', pb: '20px', pt: '20px', fontSize: { xs: '15px', md: '15px', lg: '30px' } }}>
                Solamente tenes que llenar el formulario y nos contactaremos a la brevedad
            </Typography>

            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ pt: '3vh', pb: '3vh' }}
            >

                <Grid item sx={{ minWidth: '80%', width: { lg: '80%', xs: '100%', md: '55%' }, }}>
                    <Paper sx={{
                        padding: { lg: 4, md: 2, xs: 1 },
                        border: 1,
                        borderColor: '#A39D9D',
                        background: 'transparent',
                    }}>
                        <Box component="form" onSubmit={handleSubmit} method="POST" sx={{

                            ml: { xs: '20px', lg: '0' },
                            mr: { xs: '20px', lg: '0' },
                        }}>

                            <TextField type="text" name="nombre" label='Nombre' sx={{
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
                            }} required />

                            <TextField type="text" name="apellido" label='Apellido' sx={{
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
                            }} required />

                            <TextField fullWidth name="email" type="email" label='Email' sx={{
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
                            }} required />


                            <Typography variant="body1" sx={{ textAlign: 'left', color: 'black', fontWeight: '600', pb: '5px', pt: '10px', fontSize: { xs: '12px', md: '12px', lg: '15px' } }}>
                                Contanos el motivo de tu Solicitud (de la manera mas detallada posible)
                            </Typography>

                            <StyledTextarea name="mensaje"
                                style={{
                                    minWidth: '100%',
                                    width: '100%',
                                    maxWidth: '100%',
                                    minHeight: '200px',
                                    height: '200px',
                                    maxHeight: '200px',

                                    padding: '12px',

                                    color: 'black',
                                    fontSize: '17px',

                                    background: 'none',
                                    border: '0.5px solid #A39D9D',

                                    resize: 'vertical',
                                    overflow: 'visible'
                                }}
                                placeholder="Mensaje*"
                                required />

                            <input
                                type="text"
                                name="contact_hidden"
                                style={{ display: 'none' }}
                            />


                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Button type="submit" variant="contained" sx={{ color: 'white', width: { xs: '100%', lg: '30%', md: '30%' }, marginTop: 1, marginBottom: 1, p: '15px' }}>Enviar</Button>


                            </Grid>
                        </Box>
                    </Paper>


                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText sx={{ textAlign: 'center' }}>
                        {success ? 'Mensaje enviado correctamente.' : 'Hubo un error al enviar. Intente nuevamente.'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Button onClick={handleClose} autoFocus>Aceptar</Button>
                </DialogActions>
            </Dialog>

        </Container>
    )
}