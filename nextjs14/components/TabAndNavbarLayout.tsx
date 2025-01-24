import React from "react";
import {TabProvider} from "./TabContext";
import MultiPageNabTab from "./MultiPageNabTab";
import LeftNavbar from "./LeftNavbar";

const TabAndNavbarLayout = () => {
    return (
        <TabProvider>
            <LeftNavbar/>
            <MultiPageNabTab/>
        </TabProvider>
    );
};

export default TabAndNavbarLayout;