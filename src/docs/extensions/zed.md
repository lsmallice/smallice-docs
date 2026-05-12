---
title: Zed 配置
icon: material-symbols:bolt
date: 2026-05-12
category:
  - 第三方使用
tag:
  - Zed
  - Agent
---

# Zed 配置

Zed 可以通过 Agent 或 Compatible APIs OpenAI 接入 Smallice Chat。

## ACP 模式

如果你在 Zed 中使用 ACP Agent，例如 Claude Code、Codex CLI、Gemini CLI，请先按对应页面完成本地 CLI 配置：

- [Claude Code 配置](../cli-config/claude-code.md)
- [Codex 配置](../cli-config/codex.md)
- [Gemini CLI 配置](../cli-config/gemini.md)

Zed 会调用本地 Agent，因此端点配置跟对应 CLI 保持一致即可。

## Zed Agent 模式

进入 Zed 的 Agent Panel，添加 Provider，选择兼容 OpenAI 的 API。

填写：

```text
Provider: Smallice Chat
API Base URL: https://api.smallice.chat/v1
API Key: 你的 API Key
Model: gpt-5.2
```

如果页面有 `support chat/completions` 选项，建议开启。

## 验证

保存配置后，在 Zed Agent 中选择 Smallice Chat 模型并发送测试消息。
