import React from "react";
import {Outlet} from "react-router-dom";
import {NavBar } from "./NavBar";
import {Footer} from "./Footer";

export const RouterLayout: React.FC<{}> = () =>{

    return(
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}