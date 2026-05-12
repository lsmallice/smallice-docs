import type { NavbarOptions } from "vuepress-theme-hope";

export const navbar: NavbarOptions = [
  {
    text: "使用说明",
    icon: "fa6-solid:rocket",
    link: "/docs/guide/smallice-chat.html",
  },
  {
    text: "API 文档",
    icon: "material-symbols:api",
    link: "/docs/api/overview.html",
  },
  {
    text: "CLI 配置",
    icon: "material-symbols:terminal",
    link: "/docs/cli-config/gemini.html",
  },
  {
    text: "第三方使用",
    icon: "streamline-freehand-color:plugin-jigsaw-puzzle",
    link: "/docs/extensions/curl.html",
  },
  {
    text: "主站",
    icon: "nimbus:link",
    link: "https://smallice.chat",
  },
];
