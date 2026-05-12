---
title: Codex 配置
icon: simple-icons:openai
date: 2026-05-12
category:
  - CLI 配置
tag:
  - Codex
  - Smallice Chat
  - API
---

# Codex 配置

本文介绍如何手动把 Codex 接入 Smallice Chat 中转站。

::: tip
如果你不熟悉手动编辑配置文件，建议优先使用 [CC-Switch 配置](./cc-switch.md)。
:::

## 安装 Codex

如果你使用命令行版本，可以先安装 Codex CLI：

```bash
npm i -g @openai/codex@latest
```

Codex CLI 包地址：[https://www.npmjs.com/package/@openai/codex](https://www.npmjs.com/package/@openai/codex)

如果你使用 VSCode，也可以安装官方扩展，或在扩展中心搜索 `codex`。

## 准备 API Key

1. 打开 [https://smallice.chat](https://smallice.chat)。
2. 登录账号。
3. 进入 API Key 或密钥管理页面。
4. 创建并复制你的 API Key。

Codex 使用的 API 端点是：

```text
https://api.smallice.chat/v1
```

## 打开 Codex 配置目录

首先打开终端，然后根据系统运行下面的命令。

Windows CMD：

```bat
start "" "%USERPROFILE%\.codex"
```

macOS：

```bash
open "$HOME/.codex"
```

如果目录不存在，可以先创建：

```bash
mkdir -p "$HOME/.codex"
open "$HOME/.codex"
```

## 创建 `config.toml`

在 `.codex` 目录下创建或编辑 `config.toml`：

```toml
model_provider = "smallice"
model = "gpt-5.2"
model_reasoning_effort = "xhigh"
network_access = "enabled"
disable_response_storage = true
windows_wsl_setup_acknowledged = true
model_verbosity = "high"

[model_providers.smallice]
name = "Smallice Chat"
base_url = "https://api.smallice.chat/v1"
wire_api = "responses"
requires_openai_auth = true
```

模型名称请以 Smallice Chat 主站后台展示为准。如果你要使用其他模型，可以修改 `model` 字段。

## 创建 `auth.json`

在 `.codex` 目录下创建或编辑 `auth.json`：

```json
{
  "OPENAI_API_KEY": "你的 API Key"
}
```

把 `你的 API Key` 替换成 Smallice Chat 主站生成的真实密钥。

## 启动 Codex

保存 `config.toml` 和 `auth.json` 后，重新打开终端并运行：

```bash
codex
```

如果可以正常对话，说明配置已经生效。

## 模型提醒

- CLI 启动后，尽量不要在会话中频繁切换模型。
- 如果你切换过模型，建议退出当前会话后重新启动。
- 修改 `config.toml` 或 `auth.json` 后，需要重启 Codex 才会生效。

也可以通过命令行临时指定模型：

```bash
codex -m gpt-5.3-codex -c model_reasoning_effort="xhigh"
```

## 常见问题

### 401 或鉴权失败

检查 `auth.json` 中的 `OPENAI_API_KEY` 是否完整，前后是否有多余空格。

### 404 或接口不存在

检查 `base_url` 是否为：

```text
https://api.smallice.chat/v1
```

### 修改后没有生效

先按 `Ctrl + C` 退出当前 Codex，再重新运行 `codex`。

### 不要泄露密钥

不要把 `auth.json` 上传到公开仓库，也不要在截图或日志中展示完整 API Key。
