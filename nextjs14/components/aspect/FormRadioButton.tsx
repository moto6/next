'use client'

import React, {useState} from "react";

/*
this aspect offering Radio button between  "Base64" VS "Hex"

- looks like down below
============

[✅]Base64
[   ]Hex

=============
 */

export default function FormRadioButton() {
    const [selectedValue, setSelectedValue] = useState("Base64");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <div className="form-check form-check-inline">
                <input
                    type="radio"
                    id="outputBase64"
                    name="outputFormat"
                    className="form-check-input"
                    value="Base64"
                    checked={selectedValue === "Base64"}
                    onChange={handleChange}
                />
                <label htmlFor="outputBase64" className="form-check-label">Base64</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    type="radio"
                    id="outputHex"
                    name="outputFormat"
                    className="form-check-input"
                    value="Hex"
                    checked={selectedValue === "Hex"}
                    onChange={handleChange}
                />
                <label htmlFor="outputHex" className="form-check-label">Hex</label>
            </div>
        </div>
    );
}
