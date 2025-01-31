import React from "react";
import {Metadata} from "next";
//
// import "/bootstrap/css/bootstrap.css";
// import "/bootstrap/js/bootstrap.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// import "../styles/global.css";
// import "@/styles/globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// import "../public/bootstrap/css/bootstrap.css.map";
// import "../public/bootstrap/js/bootstrap.js.map";

import TabAndNavbarLayout from "../components/aggregate/TabAndNavbarLayout";
import RootComponent from "../components/aggregate/RootComponent";
import BootstrapScript from "../components/aspect/BootstrapScript";
import BootstrapSheet from "../components/aspect/BootstrapSheet";

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
            <BootstrapSheet/>
            {/*<link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>*/}
        </head>
        <body>
        <RootComponent/>
        <div className="container-fluid mt-3">
            <div className="row">
                <TabAndNavbarLayout>{children}</TabAndNavbarLayout>
                <div className="text-center">&copy; {new Date().getFullYear()}
                    <p>
                        online encrypt & decrypt
                    </p>
                </div>
            </div>
            <footer>
                <BootstrapScript/>
                {/*<script src="/bootstrap/js/bootstrap.bundle.min.js" defer></script>*/}

            </footer>
        </div>
        </body>
        </html>
    );
}
export default RootLayout;
//
// <Navigation/>