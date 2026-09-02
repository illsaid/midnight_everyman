import {cp, mkdir, rm} from "node:fs/promises";
import {fileURLToPath} from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(projectRoot, "assets-canon");
const destination = path.join(projectRoot, "public", "assets-canon");

await rm(destination, {recursive: true, force: true});
await mkdir(destination, {recursive: true});
await cp(source, destination, {recursive: true});

console.log("Synced assets-canon/ to public/assets-canon/ for Remotion staticFile().");
