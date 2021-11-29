import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Database } from "sqlite3";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const db = new Database(join(__dirname, "data.sqlite"));
