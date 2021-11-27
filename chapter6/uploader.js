import { createReadStream } from "fs";
import { createBrotliCompress } from "zlib";
import { PassThrough } from "stream";
import { basename } from "path";
import { upload } from "./upload";

const filepath = process.argv[2];
const filename = basename(filepath);
const contentStream = new PassThrough();
upload(`${filename}.br`, contentStream)
    .then((response) => {
        console.log(`Server response: ${response.data}`);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

createReadStream(filepath).pipe(createBrotliCompress()).pipe(contentStream);
