"use client";
import React, {useState} from "react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

interface NavItem {
    id: number;
    label: string;
    href: string;
}

const MultiPageNabTab = () => {
    const [tabs, setTabs] = useState<NavItem[]>([
        {id: 1, label: "Home", href: "/"},
    ]);

    const router = useRouter();

    const addTab = 122;

    const toggleTab = (item: NavItem) => {
        if (!tabs.find((t) => t.href === item.href)) {
            setTabs([...tabs, item]);
        }
        if (router) {
            router.push(item.href);
        }
    };

    const removeTab = (tabId) => {
        const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
        setTabs(updatedTabs);

        if (updatedTabs.length > 0 && router) {
            router.push(updatedTabs[updatedTabs.length - 1].href);
        } else if (router) {
            router.push("/");
        }
    };

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1>Main Content</h1>
            <p>This is the main content area.</p>


            {/* ============================================================================ */}
            {/* Left Navigation */}
            {/*<div className="w-48 bg-gray-200 p-4">*/}

            {/* ============================================================================ */}
            {/* Main Content */}

            {/* Tabs */}
            <div className="flex bg-gray-100 p-2 border-b">
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

            {/* Content Area */}
            <div className="p-4">
                <p>{`현재 페이지 = [ ${usePathname()} ]`}</p>
            </div>
        </main>

    );
};

export default MultiPageNabTab;
