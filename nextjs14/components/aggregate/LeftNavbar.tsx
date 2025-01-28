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
                            openTab({label: "About-Us", href: "/about-us"})}
                        >About-Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() =>
                            openTab({label: "Dashboard", href: "/dashboard"})}
                        >Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({label: "Settings", href: "/settings"})}
                        >Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({label: "AES", href: "/content/aes"})}
                        >AES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({label: "BASE64", href: "/content/base64"})}
                        >Base64</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({label: "BASE32", href: "/content/base32"})}
                        >Base32</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({label: "rsa", href: "/content/rsa"})}
                        >RSA</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({label: "jwt", href: "/content/jwt"})}
                        >JWT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           onClick={() =>
                               openTab({label: "hash", href: "/content/hash"})}
                        >Hash</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default LeftNavbar;
