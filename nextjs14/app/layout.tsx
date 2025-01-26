import "../styles/global.css";
import React from "react";
import {Metadata} from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import TabAndNavbarLayout from "../components/TabAndNavbarLayout";

export const metadata: Metadata = {
    title: {
        template: "%s | Layout NextApp",
        default: "My Demo app",
    },
    description: "App desc",
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title></title>
        </head>
        <body>
        <div className="container-fluid mt-5">
            <div className="row">
                <TabAndNavbarLayout/>
                &copy; {new Date().getFullYear()}
            </div>
        </div>
        </body>
        </html>
    )
}
//
// <Navigation/>