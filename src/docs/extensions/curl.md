---
title: Curl 调用示例
icon: si:pull-request-fill
date: 2026-05-12
category:
  - 第三方使用
tag:
  - Curl
  - API
---

# Curl 调用示例

本文提供 Smallice Chat 常用接口的 Curl 调用示例。

::: tip
主站用于创建 API Key：[https://smallice.chat](https://smallice.chat)

OpenAI 兼容端点：`https://api.smallice.chat/v1`
:::

## Responses 接口

```bash
curl https://api.smallice.chat/v1/responses \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer 你的 API Key' \
  -d '{
    "model": "gpt-5.2",
    "input": [
      {
        "type": "message",
        "role": "user",
        "content": [
          {
            "type": "input_text",
            "text": "你好"
          }
        ]
      }
    ],
    "stream": true
  }'
```

## Chat Completions 接口

```bash
curl https://api.smallice.chat/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer 你的 API Key' \
  -d '{
    "model": "gpt-5.2",
    "messages": [
      {
        "role": "user",
        "content": "你好"
      }
    ],
    "stream": true
  }'
```

## Claude Messages 接口

```bash
curl https://api.smallice.chat/v1/messages \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: 你的 API Key' \
  -d '{
    "model": "claude-sonnet-4-5-20250929",
    "messages": [
      {
        "role": "user",
        "content": "你好"
      }
    ],
    "max_tokens": 4096,
    "stream": true
  }'
```

## Gemini 接口

```bash
curl 'https://api.smallice.chat/gemini/v1beta/models/gemini-3-pro-preview:streamGenerateContent?alt=sse' \
  -H 'Content-Type: application/json' \
  -H 'x-goog-api-key: 你的 API Key' \
  -d '{
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": "你好"
          }
        ]
      }
    ]
  }'
```

## 常见问题

- `401`：检查 API Key 是否正确。
- `404`：检查路径是否写错，例如 OpenAI 兼容接口需要 `/v1`。
- 模型不存在：以 Smallice Chat 主站后台展示的模型名为准。
