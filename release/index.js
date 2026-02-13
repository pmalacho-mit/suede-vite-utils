/// <reference types="node" />

import { resolve, dirname as dir } from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : dir(fileURLToPath(import.meta.url));

export default dirname;

export const suederoot = resolve(dirname, "../");

/**
 *
 * @param  {string[]} segments
 * @returns {string}
 */
export const fromSuedeRoot = (...segments) =>
  resolve(suederoot, ...segments);
