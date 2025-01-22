import Navigation from "../components/navigation";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Layout NextApp",
        default: "No_Metadata",
    },
    description: "App desc",
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        {/*<h1>root H1</h1>*/}
        {/* Layout UI */}
        <body>
        <Navigation/>
        <h6>RootLayout BEGIN</h6>
        {children}
        <h6>RootLayout END</h6>
        &copy; {new Date().getFullYear()}
        </body>
        </html>
    )
}