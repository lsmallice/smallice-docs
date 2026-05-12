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
    {
      text: "CLI 配置",
      icon: "material-symbols:terminal",
      prefix: "cli-config/",
      children: [
        "cc-switch",
        "claude-code",
        "codex",
        "gemini",
      ],
    },
    {
      text: "第三方使用",
      icon: "streamline-freehand-color:plugin-jigsaw-puzzle",
      prefix: "extensions/",
      children: [
        "curl",
        "cherry-studio",
        "opencode",
        "kilo-code",
        "zed",
        "hermes",
        "wsl",
      ],
    },
  ],
};
