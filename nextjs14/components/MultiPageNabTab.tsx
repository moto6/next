"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useTab} from "./TabAndNavbarLayout";

const MultiPageNabTab = ({children}: { children: React.ReactNode }) => {
    const {tabs, openTab, removeTab} = useTab();
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="flex bg-gray-100 p-2 border-b">
                {/*<h1>Main Content</h1>*/}
                {/*<p>This is the main content area.</p>*/}

                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`flex items-center px-4 py-2 ${usePathname() === tab.href ? "bg-white border" : "bg-gray-200"}`}
                    >
                        <Link id="link" href={tab.href} className="mr-2">
                            {tab.label}
                        </Link>
                        <button onClick={() => removeTab(tab.id)} className="text-red-500">
                            x
                        </button>
                    </div>
                ))}
            </div>
            {children}
            {/* Content Area */}
            <div className="p-4">
                <p>{`현재 페이지 = [ ${usePathname()} ]`}</p>
            </div>
        </main>

    );
};

export default MultiPageNabTab;
