import { src, dest } from "gulp";

export default async function build() {
  src("src/**/*").pipe(dest("project"));
}
