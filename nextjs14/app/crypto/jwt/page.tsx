import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "aes",
}

export default function AesPage() {
    return (
        <div className="container my-5">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <h1 className="text-center mb-4">JWT Decoder</h1>
            <div className="row">
                <div className="col-md-6">
                    <h4>Encoded</h4>
                    <textarea id="encodedToken" className="form-control" rows={6}
                              placeholder="Paste a token here"></textarea>
                </div>

                <div className="col-md-6">
                    <h4>Decoded</h4>
                    <div className="mb-3">
                        <label htmlFor="algorithmSelect" className="form-label">Algorithm & Token Type</label>
                        <select id="algorithmSelect" className="form-select">
                            <option selected>HS256</option>
                            <option>HS384</option>
                            <option>HS512</option>
                            <option>RS256</option>
                            <option>RS384</option>
                            <option>RS512</option>
                            <option>ES256</option>
                            <option>ES384</option>
                            <option>ES512</option>
                            <option>PS256</option>
                            <option>PS384</option>
                            <option>PS512</option>
                        </select>
                    </div>
                    <div className="border p-3 bg-light" id="decodedPayload">
                        <pre className="mb-0">Decoded payload will appear here...</pre>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h4>Verify Signature</h4>
                <div className="border p-3 bg-light" id="verifySignature">
                    <pre className="mb-0">Signature verification formula will appear here...</pre>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" id="base64Check"/>
                        <label className="form-check-label" htmlFor="base64Check">
                            Secret base64 encoded
                        </label>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-primary" id="shareJwtButton">Share JWT</button>
            </div>
        </div>
    );
}