---
title: Gemini CLI 配置
icon: material-symbols:terminal
date: 2026-05-12
category:
  - CLI 配置
tag:
  - Gemini CLI
  - Smallice Chat
  - API
---

# Gemini CLI 配置

本文介绍如何把 Gemini CLI 接入 Smallice Chat 中转站。

::: tip
主站用于登录、创建 API Key 和查看额度：[https://smallice.chat](https://smallice.chat)

Gemini CLI 调用用的 API 端点是：`https://api.smallice.chat/gemini`
:::

## 准备 API Key

1. 打开 [https://smallice.chat](https://smallice.chat)。
2. 登录账号。
3. 进入 API Key 或密钥管理页面。
4. 创建并复制你的 API Key。

不要把 API Key 发到公开群聊、截图、日志或 GitHub 仓库里。

## 打开配置目录

Gemini CLI 的配置文件通常在用户目录下的 `.gemini` 文件夹中。

macOS / Linux 可以在终端执行：

```bash
open ~/.gemini
```

如果目录不存在，可以先创建：

```bash
mkdir -p ~/.gemini
open ~/.gemini
```

Windows 可以在资源管理器地址栏输入：

```text
%USERPROFILE%\.gemini
```

如果目录不存在，可以手动创建 `.gemini` 文件夹。

## 新建或编辑 `.env`

在 `.gemini` 目录下新建一个名为 `.env` 的文件。如果已经存在，就直接编辑它。

写入下面的配置：

```text
GOOGLE_GEMINI_BASE_URL=https://api.smallice.chat/gemini
GEMINI_API_KEY=你的 API Key
```

把 `你的 API Key` 替换成你在 Smallice Chat 主站创建的真实密钥。

## 验证配置

保存 `.env` 后，重新打开一个终端窗口，再启动 Gemini CLI。

如果客户端可以正常对话，说明配置已经生效。

如果报错，请优先检查：

- `.env` 文件名是否正确，不要写成 `.env.txt`
- API Key 是否完整复制
- `GOOGLE_GEMINI_BASE_URL` 是否为 `https://api.smallice.chat/gemini`
- 终端是否已经重新打开
- 当前账号额度是否充足

## 常见问题

### 401 或鉴权失败

通常是 API Key 填错、复制不完整，或者密钥已经被删除。请回到主站重新创建 API Key 后再试。

### 404 或接口不存在

检查中转地址是否写成了 `https://api.smallice.chat/gemini`。不要漏掉末尾的 `/gemini`。

### 请求超时

可以稍后重试。如果持续超时，请记录报错内容、使用时间和模型名称，方便排查。

### 配置后仍然没生效

关闭当前终端，重新打开 Gemini CLI。部分环境变量只会在新进程启动时读取。
