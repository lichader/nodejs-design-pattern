import { createGzip, createGunzip } from "zlib";
import { createCipheriv, createDecipheriv, scryptSync } from "crypto";
import Pumpify from "pumpify";
function createKey(password) {
    return scryptSync(password, "salt", 24);
}

export function createCompressAndEncrypt(password, iv) {
    const key = createKey(password);

    const combinedStream = new Pumpify(
        createGzip(),
        createCipheriv("aes192", key, iv)
    );

    combinedStream.iv = iv;
    return combinedStream;
}

export function createDecryptAndDecompress(password, iv) {
    const key = createKey(password);
    return new Pumpify(createDecipheriv("aes192", key, iv), createGunzip());
}
