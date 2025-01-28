import React from "react";
import {Metadata} from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextFormRadioButton from "../../../components/aspect/TextFormRadioButton";
import DecryptPaddingSelectBox from "../../../components/aspect/DecryptPaddingSelectBox";
import KeySizeSelectBox from "../../../components/aspect/KeySizeSelectBox";

export const metadata: Metadata = {
    title: "aes",
}

export default function AesPage() {
    //const [selectedOutputFormat, setSelectedOutputFormat] = React.useState("Base64")
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center mb-4">AES Encryption and Decryption</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">AES Encryption</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="plainText" className="form-label">Enter Plain Text to
                                            Encrypt</label>
                                        <textarea id="plainText" className="form-control" rows={3}
                                                  placeholder="Enter plain text to be Encrypted"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cipherMode" className="form-label">Select Cipher Mode of
                                            Encryption</label>
                                        <select id="cipherMode"
                                                className="form-select"
                                                defaultValue="CBC">
                                            <option value="CBC">CBC</option>
                                            <option value="ECB">ECB</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">Z
                                        <label htmlFor="padding" className="form-label">Select Padding</label>
                                        <DecryptPaddingSelectBox/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="iv" className="form-label">Enter IV (Optional)</label>
                                        <input type="text" id="iv" className="form-control"
                                               placeholder="Enter initialization vector"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="keySize" className="form-label">Key Size in Bits</label>
                                        <KeySizeSelectBox/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="secretKey" className="form-label">Enter Secret Key</label>
                                        <input type="text" id="secretKey" className="form-control"
                                               placeholder="Enter secret key"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Output Text Format</label>
                                        <TextFormRadioButton/>
                                    </div>
                                    <button type="button" className="btn btn-primary w-100">Encrypt</button>
                                </form>
                                <div className="mt-3">
                                    <label className="form-label">AES Encrypted Output</label>
                                    <textarea className="form-control" rows={2} placeholder="Result goes here"
                                              readOnly={true}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">AES Decryption</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="encryptedText" className="form-label">AES Encrypted Text</label>
                                        <textarea id="encryptedText" className="form-control" rows={3}
                                                  placeholder="Enter text to be Decrypted"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cipherModeDecrypt" className="form-label">Select Cipher Mode of
                                            Decryption</label>
                                        <select id="cipherModeDecrypt" className="form-select">
                                            <option value="CBC">CBC</option>
                                            <option value="ECB">ECB</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="paddingDecrypt" className="form-label">Select Padding</label>
                                        <DecryptPaddingSelectBox/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="ivDecrypt" className="form-label">Enter IV Used During
                                            Encryption
                                            (Optional)</label>
                                        <input type="text" id="ivDecrypt" className="form-control"
                                               placeholder="Enter initialization vector"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="keySizeDecrypt" className="form-label">Key Size in Bits</label>
                                        <KeySizeSelectBox/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="secretKeyDecrypt" className="form-label">Enter Secret Key used
                                            for
                                            Encryption</label>
                                        <input type="text" id="secretKeyDecrypt" className="form-control"
                                               placeholder="Enter secret key"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Output Text Format</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input type="radio" id="outputPlain"
                                                       name="outputFormatDecrypt"
                                                       className="form-check-input"
                                                       value="Base64"
                                                />
                                                <label htmlFor="outputPlain"
                                                       className="form-check-label">Plain-Text</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input type="radio" id="outputBase64Decrypt" name="outputFormatDecrypt"
                                                       className="form-check-input" value="Base64"/>
                                                <label htmlFor="outputBase64Decrypt"
                                                       className="form-check-label">Base64</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary w-100">Decrypt</button>
                                </form>
                                <div className="mt-3">
                                    <label className="form-label">AES Decrypted Output</label>
                                    <textarea className="form-control" rows={2} placeholder="Decrypted result goes here"
                                              readOnly={true}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}