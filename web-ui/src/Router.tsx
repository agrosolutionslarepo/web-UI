import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/user/login";
import { RouterLayout } from "./common/RouterLayout";
import { AboutusPage } from "./pages/home/aboutus";
import { WikiPage } from "./pages/wiki/wiki";
import { SeedsPage } from "./pages/wiki/seeds";
import { RegisterPage } from "./pages/user/register";
import { ContactPage } from "./pages/contact";
import { ProfilePage } from "./pages/user/profile";
import { ProfileEditPage } from "./pages/user/profile-edit";
import { RecoverPasswordPage } from "./pages/user/recover-password";

//Rutas de las paginas
export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/nosotros" element={<AboutusPage />} />
                <Route path="/wiki" element={<WikiPage />} />
                <Route path="/semillas" element={<SeedsPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/perfil/editar" element={<ProfileEditPage />} />
                <Route path="/recuperar-contrasena" element={<RecoverPasswordPage />} />
            </Route>
        </Routes>
    );
}