'use client'

import React from "react";

export default function EncryptionAlgorithmSelectBox() {
    return (
        <div>
            <select id="algorithmSelect" className="form-select">
                <option value="HS256">HS256</option>
                <option value="HS384">HS384</option>
                <option value="HS512">HS512</option>
                <option value="RS256">RS256</option>
                <option value="RS384">RS384</option>
                <option value="RS512">RS512</option>
                <option value="ES256">ES256</option>
                <option value="ES384">ES384</option>
                <option value="ES512">ES512</option>
                <option value="PS256">PS256</option>
                <option value="PS384">PS384</option>
                <option value="PS512">PS512</option>
            </select>
        </div>
    );
}
