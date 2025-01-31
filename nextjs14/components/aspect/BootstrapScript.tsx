"use client"

import {useEffect} from "react";

export default function BootstrapScript() {
    useEffect(() => {
        const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX
        const script = document.createElement("script");
        script.src = `${assetPrefix}/bootstrap/js/bootstrap.bundle.min.js`;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script); // cleanup
        };
    }, []);
    // return <div>Script is loading...</div>;
    return (<div></div>);
}
