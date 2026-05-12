---
title: Smallice Chat 使用说明
icon: material-symbols:rocket-launch
date: 2026-05-12
category:
  - 使用说明
tag:
  - Smallice Chat
  - Sub2API
  - API
---

# Smallice Chat 使用说明

Smallice Chat 是一个基于 Sub2API 搭建的 AI API 网关服务。你可以在主站生成自己的 API Key，然后把它配置到 Codex、Claude Code、Cherry Studio、OpenAI SDK 或其他兼容工具中使用。

主站地址：[https://smallice.chat](https://smallice.chat)

::: tip
本文面向普通用户，介绍如何获取密钥、配置调用地址和排查常见问题。具体可用模型、额度、价格和分组权限，以主站后台显示为准。
:::

## 基本概念

使用 Smallice Chat 时，通常只需要关注三个信息：

| 项目 | 内容 |
| --- | --- |
| Base URL | `https://api.smallice.chat` |
| API Key | 在主站后台创建，用作请求鉴权 |
| 模型名称 | 在主站后台或工具的模型列表中查看 |

Sub2API 会在后台负责鉴权、用量统计、账号调度和请求转发。用户侧只需要像使用普通 API 服务一样配置地址和密钥。

## 获取 API Key

1. 打开 [https://smallice.chat](https://smallice.chat)。
2. 登录你的账号。
3. 进入 API Key 或密钥管理页面。
4. 创建一个新的 API Key。
5. 复制并妥善保存该密钥。

API Key 只会在创建时完整展示一次。不要把它公开到 GitHub、群聊、截图或日志里。

## 通用调用方式

大多数兼容 OpenAI 格式的工具可以使用下面的配置：

```text
Base URL: https://api.smallice.chat
API Key: 你的 API Key
```

如果工具要求填写完整接口前缀，可以按工具类型尝试：

```text
OpenAI 兼容接口: https://api.smallice.chat/v1
Anthropic 兼容接口: https://api.smallice.chat
Gemini 兼容接口: https://api.smallice.chat
```

不同客户端对 Base URL 的拼接方式不完全相同。如果出现 404，优先检查工具是否自动追加了 `/v1`。

## Codex 配置

Codex 使用 OpenAI 兼容接口时，通常配置：

```bash
export OPENAI_API_KEY="你的 API Key"
export OPENAI_BASE_URL="https://api.smallice.chat/v1"
```

然后正常启动 Codex。模型名称请填写主站后台可用的模型名。

如果你的 Codex 配置文件支持自定义 provider，可以把 Base URL 写成：

```text
https://api.smallice.chat/v1
```

## Claude Code 配置

Claude Code 走 Anthropic 兼容接口时，通常需要：

```bash
export ANTHROPIC_API_KEY="你的 API Key"
export ANTHROPIC_BASE_URL="https://api.smallice.chat"
```

如果客户端要求填写 endpoint，请优先使用：

```text
https://api.smallice.chat
```

模型名以主站后台展示为准。

## OpenAI SDK 示例

Node.js 示例：

```ts
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.smallice.chat/v1",
});

const response = await client.chat.completions.create({
  model: "你的模型名",
  messages: [
    {
      role: "user",
      content: "你好，介绍一下 Smallice Chat。",
    },
  ],
});

console.log(response.choices[0]?.message?.content);
```

Python 示例：

```py
from openai import OpenAI

client = OpenAI(
    api_key="你的 API Key",
    base_url="https://api.smallice.chat/v1",
)

response = client.chat.completions.create(
    model="你的模型名",
    messages=[
        {"role": "user", "content": "你好，介绍一下 Smallice Chat。"}
    ],
)

print(response.choices[0].message.content)
```

## Cherry Studio 等客户端

在支持自定义 OpenAI 兼容服务的客户端中：

1. 新增一个自定义服务商。
2. API 地址填写 `https://api.smallice.chat/v1`。
3. API Key 填写你在主站创建的密钥。
4. 添加或刷新模型列表。
5. 选择可用模型开始对话。

如果模型列表无法自动拉取，可以手动填写主站后台提供的模型名称。

## 用量与额度

你可以在主站后台查看：

- API Key 列表
- 每个密钥的使用情况
- 当前账号可用额度
- 分组或订阅状态
- 请求记录和扣费记录

如果某个 API Key 不再使用，建议及时禁用或删除。

## 常见问题

### 401 或鉴权失败

检查 API Key 是否填写完整，前后是否有空格，是否误用了其他站点的密钥。

### 404 或接口不存在

检查 Base URL 是否重复拼接了 `/v1`。有些客户端需要填 `https://api.smallice.chat`，有些客户端需要填 `https://api.smallice.chat/v1`。

### 模型不存在

检查模型名是否和主站后台完全一致。模型名称通常区分大小写，也不要多加空格。

### 请求超时

可以稍后重试，或切换其他可用模型。如果持续超时，请保留报错信息和大致时间，方便排查。

### 额度不足

进入主站后台查看余额、订阅或分组额度。额度不足时，请按主站规则充值或联系管理员处理。

## 安全建议

- 不要公开分享 API Key。
- 不要把 API Key 写进前端代码。
- 不要把 API Key 提交到 GitHub。
- 为不同设备或项目创建不同的 API Key，方便单独禁用。
- 发现密钥泄露后，立即删除旧密钥并创建新密钥。

## 联系支持

如果你遇到无法解决的问题，请准备以下信息后联系管理员：

- 你的账号
- 使用的客户端
- Base URL 配置
- 模型名称
- 报错截图或错误文本
- 问题发生的大致时间

不要在公开场合发送完整 API Key。
