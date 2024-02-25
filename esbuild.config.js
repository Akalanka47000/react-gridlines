import { execSync } from "child_process";
import { build } from "esbuild";

execSync("rm -rf ./dist && mkdir dist");

const options = {
  entryPoints: ["./src/index.js"],
  bundle: true,
  platform: "browser",
  minify: true,
  sourcemap: true,
  keepNames: true,
  external: ["react"]
};

const formats = ["esm", "cjs"];

formats.forEach((format) => {
  build({
    ...options,
    outfile: `./dist/index.${format}.js`,
    format
  });
});
