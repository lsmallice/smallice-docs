---
title: Kilo Code 配置
icon: material-symbols:extension
date: 2026-05-12
category:
  - 第三方使用
tag:
  - Kilo Code
  - VS Code
---

# Kilo Code 配置

Kilo Code 是 VS Code 中常用的 AI 编程插件。它支持 OpenAI Compatible Responses，可以接入 Smallice Chat。

## 安装插件

在 VS Code 扩展面板搜索 `Kilo Code`，安装发布者为 `kilocode.ai` 的扩展。

## 配置服务商

打开 Kilo Code 设置，添加或编辑 provider：

```text
API Provider: OpenAI Compatible (Responses)
Base URL: https://api.smallice.chat/v1
API Key: 你的 API Key
Model: gpt-5.2
```

API Key 在 [https://smallice.chat](https://smallice.chat) 创建。

## 推荐选项

可以按需启用：

- Enable Reasoning Effort
- Prompt Caching
- Max Output Tokens 保持默认，或按模型能力填写
- Context Window Size 按模型能力填写

## 验证

保存配置后回到插件首页，选择刚刚创建的 profile，发送一句简单问题测试。

如果报错，优先检查 API 地址是否为 `https://api.smallice.chat/v1`。
