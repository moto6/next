'use client'

import React, {useState} from "react";

export default function TextLength() {
    const [text, setText] = useState('');
    const [length, setLength] = useState(0);
    const [bitCount, setBitCount] = useState(0);
    const [byteCount, setByteCount] = useState(0);

    const handleChange = (event) => {
        const inputText = event.target.value;
        setText(inputText);
        setLength(inputText.length);
        setBitCount(inputText.length * 16);
        setByteCount(new TextEncoder().encode(inputText).length);
    };

    return (
        <div>
            <div className="mb-3 mt-3">
                <h5 className="form-label">Text Input</h5>
                <textarea
                    className="form-control"
                    id="formControlInputText"
                    placeholder="UTF-8 Text to find out length"
                    rows={4}
                    value={text}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">String Length: {length}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Bit Count: {bitCount}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Byte Length: {byteCount}</label>
            </div>

            <div className="mb-3 mt-5">
                <div className="alert alert-warning" role="alert">
                    Manipulate : Cut / Padding
                </div>
                <label htmlFor="" className="form-label"></label>
                <button type="button" className="btn btn-outline-primary">to 128 bit</button>
                <button type="button" className="btn btn-outline-secondary ms-3">to 256 bit</button>
                <button type="button" className="btn btn-outline-success ms-3">to 384 bit</button>
                <button type="button" className="btn btn-outline-info ms-3">to 512 bit</button>

            </div>

        </div>
    );
}
