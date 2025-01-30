import React from "react";
import {Metadata} from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import CharsetSelectBox from "../../../components/aspect/CharsetSelectBox";

export const metadata: Metadata = {
    title: "aes",
}

export default function Base64Page() {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center mb-4">Base64 Decode and Encode
                </h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">Decode from Base64 to Plane-Text
                            </div>
                            <div className="card-body">
                                <label className="form-label" htmlFor="encryptedText">Enter your Base64 data down below
                                </label>
                                <textarea id="encryptedText" className="form-control" rows={3}
                                          placeholder="Enter Base64-data to be Decrypted here"></textarea>
                                <CharsetSelectBox/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">Encode from Base64 format
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}