import "../styles/global.css";
import React from "react";
import {Metadata} from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import TabAndNavbarLayout from "../components/aggregate/TabAndNavbarLayout";

export const metadata: Metadata = {
    title: {
        template: "%s | Layout NextApp",
        default: "My Demo app",
    },
    description: "App desc",
}
//: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const RootLayout: React.FC = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title></title>
        </head>
        <body>
        <div className="container-fluid mt-3">
            <div className="row">
                <TabAndNavbarLayout>{children}</TabAndNavbarLayout>
                <div className="text-center">&copy; {new Date().getFullYear()}
                    <p>
                        for learning next.js
                    </p>
                </div>
            </div>
        </div>
        </body>
        </html>
    )
}
export default RootLayout;
//
// <Navigation/>