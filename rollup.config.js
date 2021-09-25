import path from "path";

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV !== "development";

export default {
  input: "src/index.js",
  output: {
    file: "build/main.js",
    format: "iife",
    sourcemap: true,
    globals: {
      react: 'react',
      'react-dom': 'react-dom'
    }
  },
  plugins: [
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    terser(),
    resolve({
      browser: true
    }),
    image(),
    postcss({
      extensions: [".css"],
      extract: path.resolve("build/main.css"),
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    !isProduction &&
      serve({
        open: true,
        verbose: true,
        contentBase: ["", "public"],
        host: "localhost",
        port: 3000,
      }),
    !isProduction && livereload({ watch: "build" }),
  ],
};
