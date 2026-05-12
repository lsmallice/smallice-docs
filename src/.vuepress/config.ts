import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

import { navbar } from "./navbar.js";
import { sidebar } from "./sidebar.js";

export default defineUserConfig({
  base: "/smallice-docs/",
  lang: "zh-CN",
  title: "Smallice Docs",
  description: "Smallice Chat 使用说明与 API 文档",

  bundler: viteBundler(),

  theme: hopeTheme({
    hostname: "https://lsmallice.github.io",
    logo: "/logo.svg",
    repo: "lsmallice/smallice-docs",
    docsDir: "src",

    author: {
      name: "Smallice",
      url: "https://smallice.chat",
    },

    navbar,
    sidebar,

    pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],
    lastUpdated: true,
    contributors: true,
    editLink: true,

    displayFooter: true,
    footer: "Smallice Chat Docs | Copyright © 2026",

    markdown: {
      tabs: true,
      codeTabs: true,
      tasklist: true,
      align: true,
    },

    plugins: {
      copyCode: true,
    },
  }),
});
