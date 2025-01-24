import "../styles/global.css";
import React from "react";
import {Metadata} from "next";
import NavigationTab from "../components/NavigationTab";

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
        <NavigationTab/>
        {children}
        &copy; {new Date().getFullYear()}
        </body>
        </html>
    )
}
// <Navigation/>