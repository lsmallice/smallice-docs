---
title: OpenCode 配置
icon: material-symbols:code-blocks
date: 2026-05-12
category:
  - 第三方使用
tag:
  - OpenCode
  - CLI
---

# OpenCode 配置

OpenCode 可以通过 OpenAI 兼容配置接入 Smallice Chat。

## 安装 OpenCode

```bash
npm i -g opencode-ai
```

安装后先运行一次：

```bash
opencode
```

## 配置端点

打开 OpenCode 配置文件，添加 Smallice Chat 供应商。

OpenAI 兼容端点：

```text
https://api.smallice.chat/v1
```

API Key 使用你在 [https://smallice.chat](https://smallice.chat) 创建的密钥。

示例配置可按客户端实际格式填写：

```json
{
  "provider": "openai-compatible",
  "name": "Smallice Chat",
  "baseURL": "https://api.smallice.chat/v1",
  "apiKey": "你的 API Key",
  "model": "gpt-5.2"
}
```

## 验证

重新启动 OpenCode，然后使用模型列表或发送测试消息确认配置生效。

如果你同时配置 Claude 或 Gemini，请按对应工具使用：

- Claude：`https://api.smallice.chat`
- Gemini：`https://api.smallice.chat/gemini`
