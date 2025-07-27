import { src, dest, series } from "gulp";
import { deleteAsync as del } from "del";


const sourceDir = "src";
const outputDir = "project";

export async function clean() {
  del([`${outputDir}/**`, `!${outputDir}`]);
}

export async function build() {
  src(`${sourceDir}/**/*`).pipe(dest(outputDir));
}

export default series(clean, build);
