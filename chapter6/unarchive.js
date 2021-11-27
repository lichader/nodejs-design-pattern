import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { randomBytes } from "crypto";
import { createDecryptAndDecompress } from "./combined-streams.js";
const [, , password, source] = process.argv;
const iv = Buffer.from("e35c8e6b09fb351282f7d4a06baba49a", "hex");

const destination = `${source}.txt`;
pipeline(
    createReadStream(source),
    createDecryptAndDecompress(password, iv),
    createWriteStream(destination),
    (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        console.log(`${destination} created`);
    }
);
