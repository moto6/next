"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useTab} from "./TabAndNavbarLayout";
//React.FC<{ children: React.ReactNode }>
const MultiPageNabTab: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const {tabs, removeTab} = useTab();
    const pathname = usePathname();
    return (

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="flex bg-gray-100 p-2 border-b">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`flex items-center px-4 py-2 ${pathname === tab.href ? "bg-white border" : "bg-gray-200"}`}
                    >
                        <Link href={tab.href} className="nav-link mr-2">
                            {tab.label}
                        </Link>
                        <button onClick={() => removeTab(tab.id)} className="text-red-500">
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
