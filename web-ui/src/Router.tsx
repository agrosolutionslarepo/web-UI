import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { RouterLayout } from "./common/RouterLayout";
import { AboutusPage } from "./pages/home/aboutus";
import { WikiPage } from "./pages/wiki/wiki";
import { SeedsPage } from "./pages/wiki/seeds";
import { ContactPage } from "./pages/contact";
//Rutas de las paginas
export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/nosotros" element={<AboutusPage />} />
                <Route path="/wiki" element={<WikiPage />} />
                <Route path="/semillas" element={<SeedsPage />} />
                <Route path="/contacto" element={<ContactPage />} />
            </Route>
        </Routes>
    );
}