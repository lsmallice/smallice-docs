---
title: WSL 配置
icon: material-symbols:terminal
date: 2026-05-12
category:
  - 第三方使用
tag:
  - WSL
  - Windows
---

# WSL 配置

WSL 是 Windows Subsystem for Linux。很多 AI CLI 工具在 Linux 环境下更稳定，因此 Windows 用户可以在 WSL 中运行 Codex、Claude Code、Gemini CLI、Hermes 等工具。

## 安装 WSL

在 Windows 终端中执行：

```bash
wsl --install
```

安装完成后按提示重启，并创建 Linux 用户。

查看发行版状态：

```bash
wsl -l -v
```

进入 WSL：

```bash
wsl
```

## 安装 Node.js

进入 WSL 后，建议用 nvm 安装 Node.js：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22
```

## 安装 CLI 工具

以 Codex 为例：

```bash
npm i -g @openai/codex@latest
```

然后按 [Codex 配置](../cli-config/codex.md) 写入 Smallice Chat 配置。

## 迁移配置文件

Windows 和 WSL 的用户目录不互通。如果你已经在 Windows 中配置过 `.codex` 或 `.claude`，需要复制到 WSL 用户目录。

WSL 用户目录通常类似：

```text
\\wsl.localhost\Ubuntu\home\你的用户名
```

把 `.codex`、`.claude`、`.gemini` 等配置目录复制进去后，重新打开 WSL 终端。

## VS Code 与 WSL

如果你用 VS Code：

1. 安装 Remote - WSL 扩展。
2. 点击左下角远程连接按钮。
3. 选择 Connect to WSL。
4. 在 WSL 环境中打开项目。

这样 VS Code 终端和插件都会使用 WSL 环境，更适合运行 CLI 工具。
