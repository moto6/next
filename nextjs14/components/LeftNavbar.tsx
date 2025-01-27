"use client"

import React from "react";
import {useTab} from "./TabAndNavbarLayout";

const LeftNavbar = () => {
    const {tabs, openTab, removeTab} = useTab();

    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar mt-5">
            <div className="position-sticky mt-2">
                <ul className="nav flex-column">

                    <li className="nav-item">
                        <a className="nav-link" onClick={() =>
                            openTab({id: 2, label: "About-Us", href: "/about-us"})}
                        >About-Us</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" onClick={() =>
                            openTab({id: 2, label: "Dashboard", href: "/dashboard"})}
                        >Dashboard</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({id: 3, label: "Settings", href: "/settings"})}
                        >Settings</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({id: 4, label: "AES", href: "/crypto/aes"})}
                        >AES</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({id: 5, label: "BASE64", href: "/crypto/base64"})}
                        >Base64</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({id: 6, label: "BASE32", href: "/crypto/base32"})}
                        >Base32</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({id: 7, label: "rsa", href: "/crypto/rsa"})}
                        >RSA</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({id: 8, label: "jwt", href: "/crypto/jwt"})}
                        >JWT</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({id: 9, label: "hash", href: "/crypto/hash"})}
                        >Hash</a>
                    </li>


                </ul>
            </div>
        </nav>
    );
};

export default LeftNavbar;
