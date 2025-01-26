"use client"

import React from "react";
import {useTab} from "./TabAndNavbarLayout";
// import {useTab} from "./TabContext";

const LeftNavbar = () => {
    const {tabs, toggleTab, removeTab} = useTab();

    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button
                            onClick={() =>
                                toggleTab({id: 2, label: "Dashboard", href: "/dashboard"})
                            }
                            className="block mb-2"
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() =>
                                toggleTab({id: 3, label: "Settings", href: "/settings"})
                            }
                            className="block mb-2"
                        >
                            Settings
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default LeftNavbar;
