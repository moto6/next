import "../styles/global.css";
import Navigation from "../components/navigation";
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
        <body>
        <Navigation/>
        {children}
        </body>
        &copy; {new Date().getFullYear()}
        </html>
    )
}