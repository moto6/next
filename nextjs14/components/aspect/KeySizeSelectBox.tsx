"use client"
import React from "react";

export default function KeySizeSelectBox() {
    return (
        <div>
            <select id="keySize"
                    className="form-select"
                    defaultValue="128">
                <option value="128">128</option>
                <option value="192">192</option>
                <option value="256">256</option>
            </select>
        </div>
    );
}
