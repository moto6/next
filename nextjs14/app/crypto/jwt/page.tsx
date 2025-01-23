import React from "react";
import {Metadata} from "next";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
    title: "aes",
}

export default function JwtPage() {
    return (
        <div className="container my-5">

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