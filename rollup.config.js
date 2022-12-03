/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import typescript from "@rollup/plugin-typescript";
import html from "rollup-plugin-html";
import scss from "rollup-plugin-scss";
import packageJson from "./package.json" assert { type: "json" };

const userScriptBanner = `
// ==UserScript==
// @name         ${packageJson.name}
// @namespace    https://github.com/hotarunx
// @version      ${packageJson.version}
// @description  ${packageJson.description}
// @author       ${packageJson.author}
// @license      ${packageJson.license}
// @supportURL   ${packageJson.bugs.url}
// @match        https://atcoder.jp/contests/typical90/tasks/*
// @exclude      https://atcoder.jp/contests/typical90/tasks/*/*
// ==/UserScript==`.trim();

export default [
  {
    input: "src/main.ts",
    output: {
      banner: userScriptBanner,
      file: "dist/dist.js",
    },
    plugins: [
      html({
        include: "**/*.html",
      }),
      scss({
        output: false,
      }),
      typescript(),
    ],
  },
];
