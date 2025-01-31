"use client"

import {useEffect} from "react";

export default function BootstrapSheet() {
    useEffect(() => {
        const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = `${assetPrefix}/bootstrap/css/bootstrap.min.css`;
        document.head.appendChild(linkElement);
    }, []);
    return (<div></div>);
}
///*<link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>*/