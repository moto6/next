"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useTab} from "./TabAndNavbarLayout";

const MultiPageNabTab: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const {tabs, removeTab} = useTab();
    const pathname = usePathname();
    return (

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex bg-gray-100 p-2 border-bottom">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`d-flex align-items-center px-4 py-2 ${pathname === tab.href ? "bg-white border" : "bg-gray-200"}`}
                    >
                        <Link href={tab.href} className="nav-link me-2">
                            {tab.label}
                        </Link>
                        <button onClick={() => removeTab(tab.id)} className="btn btn-link text-danger p-0">
                            x
                        </button>
                    </div>
                ))}
            </div>
            {children}
        </main>

    );
};

export default MultiPageNabTab;
