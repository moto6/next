// // jwt.ts
export const jwtAlgorithms = [
    "HS256", "HS384", "HS512",
    "RS256", "RS384", "RS512",
    "ES256", "ES384", "ES512",
    "PS256", "PS384", "PS512"
];
export const jwtAlgorithmsOnChange = () => {
    try {
        //
    } catch (error) {
        //
    }
}

//
// Mock function to decode JWT payload
export const decodeJwt = (token: string) => {
    try {
        const payloadBase64 = token.split('.')[1];
        const decoded = atob(payloadBase64);
        return JSON.parse(decoded);
    } catch (error) {
        return {error: "Invalid JWT token"};
    }
};

// Mock function to generate verification formula
export const getVerificationFormula = (algorithm: string) => {
    return `HMAC${algorithm}(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-secret-key
)`;
};


document.addEventListener('DOMContentLoaded', () => {
    const encodedTokenInput = document.getElementById('encodedToken');
    const algorithmSelect = document.getElementById('algorithmSelect');
    const decodedPayloadDiv = document.getElementById('decodedPayload');
    const verifySignatureDiv = document.getElementById('verifySignature');

    // Populate algorithm dropdown
    algorithms.forEach(algo => {
        const option = document.createElement('option');
        option.value = algo;
        option.textContent = algo;
        algorithmSelect.appendChild(option);
    });

    // Event: Update decoded payload when token is entered
    encodedTokenInput.addEventListener('input', () => {
        const token = encodedTokenInput.value;
        const decoded = decodeJwt(token);
        decodedPayloadDiv.innerHTML = `<pre>${JSON.stringify(decoded, null, 2)}</pre>`;
    });

    // Event: Update verification formula when algorithm changes
    algorithmSelect.addEventListener('change', () => {
        const selectedAlgorithm = algorithmSelect.value;
        const formula = getVerificationFormula(selectedAlgorithm);
        verifySignatureDiv.innerHTML = `<pre>${formula}</pre>`;
    });
});
