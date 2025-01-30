import React from "react";
import {Metadata} from "next";
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
                                <h3 className="text-center mt-1">Input = Cipher</h3>
                                <label className="form-label" htmlFor="encryptedText">Enter your Base64 data down below,
                                    then push the decode button
                                </label>
                                <textarea id="encryptedText" className="form-control" rows={3}
                                          placeholder="Enter Base64-data to be Decrypted here"></textarea>
                                <div className="mt-1">
                                    <CharsetSelectBox/>
                                </div>

                                <div className="mt-1 mb-1">
                                    <input type="checkbox" id="scales" name="scales"/>
                                    <label htmlFor="scales">&nbsp;Decode each line separately </label>
                                </div>

                                <div><p/><p/><p/></div>


                            </div>
                            <div className="card-body">
                                <h3 className="text-center">Output = Plain-Text</h3>
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