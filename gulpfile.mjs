import { src, dest } from "gulp";


const sourceDir = "src";
const outputDir = "project";

export async function build() {
  src(`${sourceDir}/**/*`).pipe(dest(outputDir));
}

export default build;
