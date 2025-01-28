'use client'

import React from "react";

export default function FormRadioButton() {
    return (
        <div>
            <div className="form-check form-check-inline">
                <input type="radio"
                       id="outputBase64"
                       name="outputFormat"
                       className="form-check-input"
                       value="Base64"
                />
                <label htmlFor="outputBase64"
                       className="form-check-label">Base64</label>
            </div>
            <div className="form-check form-check-inline">
                <input type="radio"
                       id="outputHex"
                       name="outputFormat"
                       className="form-check-input"
                       value="Hex"/>
                <label
                    htmlFor="outputHex" className="form-check-label">Hex</label>
            </div>
        </div>
    );
}