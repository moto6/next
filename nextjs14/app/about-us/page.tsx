import React from "react";
import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us",
}

export default function AboutUsPage() {
    return (
        <div className="m-1">
            <h1>About Us</h1>
            <Image
                src="/img/DALLE_2025-01-27_dong.webp"
                width={800}
                height={800}
                alt="About Us logo img"
                unoptimized
            />
        </div>
    )
}