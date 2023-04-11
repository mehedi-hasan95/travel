import React from "react";
import NavMenu from "../components/NavMenu";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />
        </div>
    );
};

export default Main;
