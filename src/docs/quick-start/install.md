---
title: 安装说明
icon: material-symbols:download
date: 2026-05-12
category:
  - 快速开始
tag:
  - 安装
---

# 安装说明

本项目使用 Node.js 22。

```bash
nvm use
npm install
npm run docs:dev
```

构建生产版本：

```bash
npm run docs:build
```

构建产物会输出到 `src/.vuepress/dist`。
