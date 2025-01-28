'use client'

import React from "react";

export default function DecryptPaddingSelectBox() {
    return (
        <div>
            < select
                id="paddingDecrypt"
                className="form-select"
                defaultValue="PKCS5Padding">
                <option value="PKCS5Padding"> PKCS5Padding</option>
                <option value="NoPadding">NoPadding</option>
            </select>
        </div>
    );
}

