import {useTab} from "./TabContext";
import React from "react";

const LeftNavbar = () => {
    const { tabs, toggleTab, removeTab} = useTab();

    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="position-sticky">
                <ul className="nav flex-column">

                    <li className="nav-item">
                        <a className="nav-link" href="#"
                           onClick={() => toggleTab({id: 2, label: "Dashboard", href: "/dashboard"})}
                        >dashboard</a>

                        <button
                            onClick={() => toggleTab({id: 2, label: "Dashboard", href: "/dashboard"})}
                            className="block mb-2"
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => toggleTab({id: 3, label: "Settings", href: "/settings"})}
                            className="block mb-2"
                        >
                            Settings
                        </button>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Help</a>
                    </li>
                </ul>


            </div>
        </nav>
    );
};

export default LeftNavbar;


/*
<div id="left-navbar">
                <ul className="nav nav-tabs flex-column">
                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() => toggleTab({id: 2, label: "Dashboard", href: "/dashboard"})}>
                            Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() => toggleTab({id: 3, label: "Settings", href: "/settings"})}>
                            Settings</a>
                    </li>
                </ul>
            </div>

 */