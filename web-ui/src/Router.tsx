import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/user/login";
import { RouterLayout } from "./common/RouterLayout";
import { NosotrosPage } from "./pages/home/nosotros";
import { WikiPage } from "./pages/wiki/wiki";

//Rutas de las paginas
export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/wiki" element={<WikiPage />} />
            </Route>
        </Routes>
    );
}