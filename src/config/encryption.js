import CryptoJS from "crypto-js";

const AES_KEY = 'e9bdf743bc62df1e4e6a2c9771a55e5f'; // Same as backend

export const decrypt = (encrypted) => {
    console.log(process.env.NODE_ENV);
    if (!encrypted || process.env.NODE_ENV !== 'production') {
        return encrypted;
    }

    const [ivHex, cipherHex] = encrypted.split(':');
    if (!ivHex || !cipherHex) {
        console.error("Invalid encrypted format");
        return null;
    }

    const key = CryptoJS.enc.Hex.parse(AES_KEY);
    const iv = CryptoJS.enc.Hex.parse(ivHex);
    const encryptedWords = CryptoJS.enc.Hex.parse(cipherHex);
    const base64Cipher = CryptoJS.enc.Base64.stringify(encryptedWords);

    const decrypted = CryptoJS.AES.decrypt(base64Cipher, key, { iv });
    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

    try {
        return JSON.parse(decryptedText);
    } catch (err) {
        console.error("Failed to parse JSON:", decryptedText);
        return null;
    }
};
