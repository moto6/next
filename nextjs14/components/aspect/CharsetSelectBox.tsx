"use client"

import {useState} from "react";

export default function CharsetSelectBox() {
    const [errorMessage, setErrorMessage] = useState("");
    const supportedCharsets = ["UTF-8"];
    const handleChange = (event) => {
        const newValue: string = event.currentTarget.value;
        console.log(supportedCharsets.indexOf(newValue));
        if (supportedCharsets.indexOf(newValue) === -1) {
            setErrorMessage("Not Support");
        } else {
            setErrorMessage("");
        }
    }

    return (
        <div>
            <label htmlFor="encodingSelect" className="form-label">Select Charset</label>
            <label className="form-label text-danger mt-1 mb-1">{errorMessage.length != 0 &&
                <div> : ❌ {errorMessage}</div>}</label>
            <select className="form-select" id="encodingSelect" onChange={handleChange}>
                <optgroup label="Poplulars">
                    <option defaultValue={0}>UTF-8</option>
                    <option>ASCII</option>
                    <option>ISO-8859-1</option>
                    <option>ISO-8859-2</option>
                    <option>ISO-8859-6</option>
                    <option>ISO-8859-15</option>
                    <option>Windows-1252</option>
                </optgroup>
                <optgroup label="Others">
                    <option>ASCII-8</option>
                    <option>BIG-5</option>
                    <option>CP850</option>
                    <option>CP866</option>
                    <option>CP932</option>
                    <option>CP936</option>
                    <option>CP950</option>
                </optgroup>
            </select>

        </div>
    );
}