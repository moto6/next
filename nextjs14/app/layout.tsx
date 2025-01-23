import "../styles/global.css";
import Navigation from "../components/Navigation";
import React from "react";
import {Metadata} from "next";

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
        <Navigation/>
        {children}
        &copy; {new Date().getFullYear()}
        </body>
        </html>
    )
}