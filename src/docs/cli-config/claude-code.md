---
title: Claude Code 配置
icon: simple-icons:anthropic
date: 2026-05-12
category:
  - CLI 配置
tag:
  - Claude Code
  - Smallice Chat
  - API
---

# Claude Code 配置

本文介绍如何手动把 Claude Code 接入 Smallice Chat 中转站。

::: tip
如果你不熟悉手动编辑配置文件，建议优先使用 [CC-Switch 配置](./cc-switch.md)。
:::

## 准备 API Key

1. 打开 [https://smallice.chat](https://smallice.chat)。
2. 登录账号。
3. 进入 API Key 或密钥管理页面。
4. 创建并复制你的 API Key。

Claude Code 使用的 API 端点是：

```text
https://api.smallice.chat
```

## 打开 Claude Code 配置目录

首先打开终端，然后根据系统运行下面的命令。

Windows CMD：

```bat
start "" "%USERPROFILE%\.claude"
```

macOS：

```bash
open "$HOME/.claude"
```

如果目录不存在，可以先创建：

```bash
mkdir -p "$HOME/.claude"
open "$HOME/.claude"
```

## 创建 `settings.json`

在 `.claude` 目录下创建或编辑 `settings.json`，写入：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的 API Key",
    "ANTHROPIC_BASE_URL": "https://api.smallice.chat",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

把 `你的 API Key` 替换为 Smallice Chat 主站生成的真实密钥。

## 启动 Claude Code

保存文件后，重新打开终端并运行：

```bash
claude
```

发送一句简单问题测试。如果可以正常返回内容，说明配置已经生效。

## 常见问题

### 401 或鉴权失败

检查 `ANTHROPIC_AUTH_TOKEN` 是否填写完整，前后是否有多余空格。

### 404 或接口不存在

检查 `ANTHROPIC_BASE_URL` 是否为：

```text
https://api.smallice.chat
```

### 修改后没有生效

关闭当前 Claude Code 和终端窗口，重新打开后再运行 `claude`。

### 不要泄露密钥

不要把 `settings.json` 上传到公开仓库，也不要在截图或日志中展示完整 API Key。
