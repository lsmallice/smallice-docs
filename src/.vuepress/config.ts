import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

import { navbar } from "./navbar.js";
import { sidebar } from "./sidebar.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "我的文档",
  description: "一个使用 VuePress Theme Hope 搭建的文档站",

  bundler: viteBundler(),

  theme: hopeTheme({
    hostname: "https://example.com",
    logo: "/logo.svg",
    repo: "lsmallice/smallice-docs",
    docsDir: "src",

    author: {
      name: "你的名字",
      url: "https://example.com",
    },

    navbar,
    sidebar,

    pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],
    lastUpdated: true,
    contributors: true,
    editLink: true,

    displayFooter: true,
    footer: "MIT Licensed | Copyright © 2026",

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
