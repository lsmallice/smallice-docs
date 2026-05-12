---
title: Cherry Studio 配置
icon: material-symbols:chat
date: 2026-05-12
category:
  - 第三方使用
tag:
  - Cherry Studio
  - OpenAI Compatible
---

# Cherry Studio 配置

Cherry Studio 支持 OpenAI 兼容接口，可以直接接入 Smallice Chat。

## 准备 API Key

先在 [https://smallice.chat](https://smallice.chat) 登录并创建 API Key。

## 添加服务商

1. 打开 Cherry Studio。
2. 进入设置中的模型服务页面。
3. 点击添加服务商。
4. 服务商类型选择 `OpenAI` 或 `OpenAI Compatible`。

填写：

```text
服务商名称: Smallice Chat
API 地址: https://api.smallice.chat/v1
API Key: 你的 API Key
```

## 添加模型

点击获取模型列表，或手动填写主站后台展示的模型名。

常用配置示例：

```text
模型: gpt-5.2
API 地址: https://api.smallice.chat/v1
```

如果模型列表无法自动获取，可以先手动添加模型，再发送一句简单消息测试。

## 排查

- 获取模型失败：检查 API Key 和 API 地址。
- 对话报错：检查模型名是否存在，账号额度是否充足。
- 404：确认 API 地址是 `https://api.smallice.chat/v1`。
