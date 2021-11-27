import { concateFiles } from "./concate-files.js";
async function main() {
    try {
        await concateFiles(process.argv[2], process.argv.slice(3));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

    console.log("All files concatenated successfully");
}
main();
