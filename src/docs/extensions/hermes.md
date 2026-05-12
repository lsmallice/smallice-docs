---
title: Hermes Agent 配置
icon: streamline:command
date: 2026-05-12
category:
  - 第三方使用
tag:
  - Hermes
  - Agent
---

# Hermes Agent 配置

Hermes Agent 可以通过自定义 OpenAI 兼容接口接入 Smallice Chat。

::: important
Windows 用户建议在 WSL 中使用 Hermes。Hermes 在 Linux/macOS 环境中体验更稳定。
:::

## 安装 Hermes

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

安装后重新打开终端，确认 `hermes` 命令可用。

## 修改配置

打开 Hermes 配置目录：

```bash
open "$HOME/.hermes"
```

Linux 可以使用：

```bash
xdg-open "$HOME/.hermes"
```

编辑 `config.yaml`：

```yaml
model:
  provider: custom
  default: gpt-5.2
  base_url: https://api.smallice.chat/v1
  api_mode: chat_completions
```

然后编辑 `.env`：

```text
OPENAI_API_KEY=你的 API Key
```

API Key 在 [https://smallice.chat](https://smallice.chat) 创建。

## 启动测试

```bash
hermes
```

发送一句简单问题。如果能正常返回，说明 Hermes 已经接入 Smallice Chat。

## 排查

- Key 错误：检查 `.env`。
- 地址错误：检查 `base_url` 是否为 `https://api.smallice.chat/v1`。
- 模型不存在：以主站后台模型列表为准。
