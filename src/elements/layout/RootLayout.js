import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

import 'App.scss';

export default function RootLayout(props) {
    return (
        <>
            <Navigation />
            {props.children}
            <Outlet />
            <Footer />
        </>
    );
}