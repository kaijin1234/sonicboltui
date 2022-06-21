import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      excludeDependenciesFromBundle({
        dependencies: true,
        peerDependencies: true
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/__tests__",
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/*.test.js",
          "**/*.test.jsx",
          "node_modules",
          "dist",
          "**/*.stories.tsx",
          ".storybook"
        ]
      }),
      postcss(),
      terser()
    ],
    external: [
      "react",
      "@types/react",
      "react-dom",
      "prop-types",
      "@testing-library/react",
      "jest"
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/]
  }
];
