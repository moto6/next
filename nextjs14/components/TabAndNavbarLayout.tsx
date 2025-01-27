"use client";

import React, {createContext, useContext, useState} from "react";
import MultiPageNabTab from "./MultiPageNabTab";
import LeftNavbar from "./LeftNavbar";
import {useRouter} from "next/navigation";

interface NavItem {
    id: number;
    label: string;
    href: string;
}

interface TabContextProps {
    tabs: NavItem[];
    openTab: (item: NavItem) => void;
    removeTab: (id: number) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export const useTab = () => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error("useTab must be used within a TabProvider");
    }
    return context;
};

const TabAndNavbarLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [tabs, setTabs] = useState<NavItem[]>([{id: 1, label: "Home", href: "/"}]);
    const router = useRouter();

    const openTab = (item: NavItem) => {
        if (!tabs.find((t) => t.href === item.href)) {
            setTabs([...tabs, item]);
        }
        if (router) {
            router.push(item.href);
        }
    };

    const removeTab = (tabId: number) => {
        const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
        setTabs(updatedTabs);

        if (updatedTabs.length > 0 && router) {
            router.push(updatedTabs[updatedTabs.length - 1].href);
        } else if (router) {
            router.push("/");
        }
    };

    return (
        <TabContext.Provider value={{tabs, openTab, removeTab}}>
            <LeftNavbar>
            </LeftNavbar>
            <MultiPageNabTab>
                {children}
            </MultiPageNabTab>
        </TabContext.Provider>
    );
};

export default TabAndNavbarLayout;
