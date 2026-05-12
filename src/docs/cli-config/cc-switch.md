---
title: CC-Switch 配置
icon: material-symbols:toggle-on
date: 2026-05-12
category:
  - CLI 配置
tag:
  - CC-Switch
  - Codex
  - Claude Code
  - Gemini CLI
---

# CC-Switch 配置

CC-Switch 是一个本地 CLI 配置管理工具，适合在 Codex、Claude Code、Gemini CLI 等工具之间切换不同的 API 供应商。

使用 Smallice Chat 时，你可以通过 CC-Switch 把 API Key 和请求地址集中管理，后续切换工具或渠道会更方便。

::: tip
主站地址：[https://smallice.chat](https://smallice.chat)

API 端点：`https://api.smallice.chat`
:::

## CC-Switch 能做什么

- 管理多个 API 供应商配置
- 在不同 CLI 工具之间快速切换供应商
- 管理 Claude Code、Codex、Gemini CLI 等工具的本地配置
- 管理 MCP 服务器配置
- 通过图形界面减少手动编辑配置文件的出错概率

## 下载 CC-Switch

前往 CC-Switch 的发布页面下载并安装：

[CC-Switch Releases](https://github.com/Vaayne/cc-switch/releases)

安装完成后打开 CC-Switch，进入主界面。

## 准备 API Key

1. 打开 [https://smallice.chat](https://smallice.chat)。
2. 登录账号。
3. 进入 API Key 或密钥管理页面。
4. 创建一个新的 API Key。
5. 复制并保存该密钥。

API Key 不要公开发送，也不要提交到 GitHub。

## 添加 Smallice Chat 供应商

打开 CC-Switch 后，选择你要配置的 CLI 工具，例如 Codex、Claude Code 或 Gemini CLI，然后点击添加供应商。

如果 CC-Switch 内置列表里没有 Smallice Chat，可以选择自定义供应商，并按下面的端点填写。

| CLI 工具 | 请求地址 |
| --- | --- |
| Codex | `https://api.smallice.chat/v1` |
| Claude Code | `https://api.smallice.chat` |
| Gemini CLI | `https://api.smallice.chat/gemini` |

API Key 填写你在 Smallice Chat 主站创建的密钥。

## Codex 配置

在 Codex 的供应商配置中填写：

```text
名称: Smallice Chat
请求地址: https://api.smallice.chat/v1
API Key: 你的 API Key
```

保存后回到 CC-Switch 主界面，确认当前 Codex 使用的是 Smallice Chat。

## Claude Code 配置

在 Claude Code 的供应商配置中填写：

```text
名称: Smallice Chat
请求地址: https://api.smallice.chat
API Key: 你的 API Key
```

如果 CC-Switch 有通用设置页面，建议打开 `跳过 Claude Code 初次安装确认`。这样 Claude Code 首次启动时会少一步确认流程。

## Gemini CLI 配置

在 Gemini CLI 的供应商配置中填写：

```text
名称: Smallice Chat
请求地址: https://api.smallice.chat/gemini
API Key: 你的 API Key
```

保存后，确认 Gemini CLI 当前供应商已经切换到 Smallice Chat。

## 验证配置

配置完成后，打开终端运行对应 CLI，发送一条简单消息测试。

例如：

- Codex：启动 Codex 后发送一句测试问题
- Claude Code：启动 Claude Code 后发送一句测试问题
- Gemini CLI：启动 Gemini CLI 后发送一句测试问题

如果能正常返回内容，说明 CC-Switch 配置已经生效。

## 常见问题

### 401 或鉴权失败

检查 API Key 是否完整复制，前后是否有多余空格，密钥是否仍然有效。

### 404 或接口不存在

通常是请求地址填错。请按对应工具填写：

- Codex：`https://api.smallice.chat/v1`
- Claude Code：`https://api.smallice.chat`
- Gemini CLI：`https://api.smallice.chat/gemini`

### 切换后没有生效

关闭当前终端窗口，重新打开 CLI。部分工具只会在启动时读取配置。

### 不知道该选哪个端点

优先按工具类型选择。如果客户端明确要求 OpenAI Compatible Base URL，通常使用 `https://api.smallice.chat/v1`。
