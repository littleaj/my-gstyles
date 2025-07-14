import { src, dest } from "gulp";


const sourceDir = "src";
const outputDir = "project";

export default async function build() {
  src(`${sourceDir}/**/*`).pipe(dest(outputDir));
}
