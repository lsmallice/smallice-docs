import type { SidebarOptions } from "vuepress-theme-hope";

export const sidebar: SidebarOptions = {
  "/docs/": [
    {
      text: "使用说明",
      icon: "material-symbols:menu-book",
      prefix: "guide/",
      children: [
        "smallice-chat",
      ],
    },
    {
      text: "快速开始",
      icon: "fa6-solid:rocket",
      prefix: "quick-start/",
      children: [
        "intro",
        "install",
      ],
    },
    {
      text: "API 文档",
      icon: "material-symbols:api",
      prefix: "api/",
      children: [
        "overview",
      ],
    },
  ],
  "/docs/guide/": [
    {
      text: "使用说明",
      icon: "material-symbols:menu-book",
      children: [
        "smallice-chat",
      ],
    },
  ],
  "/docs/quick-start/": [
    {
      text: "快速开始",
      icon: "fa6-solid:rocket",
      children: [
        "intro",
        "install",
      ],
    },
  ],
  "/docs/api/": [
    {
      text: "API 文档",
      icon: "material-symbols:api",
      children: [
        "overview",
      ],
    },
  ],
};
