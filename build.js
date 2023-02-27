/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require("esbuild");

const { dependencies } = require("./package.json");

const sharedConfig = {
  bundle: true,
  entryPoints: ["./src/index.tsx"],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(dependencies),
  logLevel: "info",
  minify: true,
  sourcemap: true,
};

esbuild.build({
  ...sharedConfig,
  format: "esm",
  outfile: "./dist/index.esm.js",
  target: ["esnext", "node14.0.0"],
});

esbuild.build({
  ...sharedConfig,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
  target: ["esnext", "node14.0.0"],
});
