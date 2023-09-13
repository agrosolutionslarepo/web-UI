import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";


type ThemeProp = {
    children: JSX.Element;
}

//Paleta de colores
export enum themePallete {
    BG = "#ffffff",
    GREEN = "#61E94B",
    FONT_GLOBAL = "'Montserrat', sans-serif;"
}

//Estilos default
const theme = createTheme({
    //Definicion de paleta de colores
    palette:{
        mode:"dark",
        
        background:{
            default: themePallete.BG,
        },

        primary:{
            main: themePallete.GREEN
        }
    },

    //Tipografia
    typography:{
        fontFamily: themePallete.FONT_GLOBAL,
    },

    //estilo por componentes
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                    boxShadow: "none",
                    borderRadius: "0.8em",    
                    transition:'0.8s'
                }
            }
        }

    }

    
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}