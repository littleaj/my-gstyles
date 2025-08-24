import { src, dest, series } from "gulp";
import { deleteAsync as del } from "del";
import path from "path";
// cspell:disable


const sourceDir = "src";
const outputDir = "project";
const manifestFilename = "appsscript.json";

export async function clean() {
  del([`${outputDir}/**`, `!${outputDir}`]);
}

async function transformManifest() {
  src(path.join(sourceDir, manifestFilename))
    .on("data", async file => {
      const json = JSON.parse(file.contents.toString());
      delete json["$schema"];
      file.contents = Buffer.from(JSON.stringify(json, null, 2));
    })
    .pipe(dest(outputDir));
}

async function copySource() {
  src([`${sourceDir}/**/*`, `!${sourceDir}/${manifestFilename}`, `!${sourceDir}/@types/**`])
    .pipe(dest(outputDir));
}

export const build = series(copySource, transformManifest);

export default series(clean, build);
