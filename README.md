# smallice-docs

这是一个 VuePress 2 + VuePress Theme Hope + GitHub Pages 工作流的静态文档项目。

## 本地开发

```bash
nvm use
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

## 日常维护

- 修改已有页面：直接编辑 `src/docs/**/*.md`，推送到 `main` 后网页会自动更新。
- 新增页面：在 `src/docs/` 下新增 `.md` 文件，并按需要更新 `src/.vuepress/sidebar.ts`。
- 修改顶部导航：编辑 `src/.vuepress/navbar.ts`。
- 修改站点名称、仓库地址、作者和部署路径：编辑 `src/.vuepress/config.ts`。

## 发布到 GitHub Pages

1. 新建 GitHub 仓库并推送代码。
2. 在仓库 `Settings -> Pages` 中，把 Source 设置为 `GitHub Actions`。
3. 修改 `src/.vuepress/config.ts` 里的 `hostname`、`repo`、`author`。
4. 如果部署到 `https://用户名.github.io/仓库名/`，把 `base` 改为 `"/仓库名/"`。
5. 推送到 `main` 分支，等待 Actions 自动部署。
