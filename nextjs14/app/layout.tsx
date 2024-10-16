import Navigation from "../components/navigation";
import React from "react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        {/*<h1>root H1</h1>*/}
        {/* Layout UI */}
        <body>
        <Navigation/>
        <h6>layout 1</h6>
        {children}
        <h6>layout 2</h6>
        &copy; {new Date().getFullYear()}
        </body>
        </html>
    )
}