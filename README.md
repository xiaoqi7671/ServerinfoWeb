# ServerinfoWeb (Cloudflare Serverless Edition)

[中文](#中文) | [English](#english)

---

## 中文

### ⚠️ 重要声明
**本项目由 AI (Artificial Intelligence) 辅助生成。** 鉴于 AI 生成内容的局限性，本仓库仅建议作为个人参考或特定环境部署使用。由于采用 Serverless 架构，本项目在安全性与稳定性上优于传统静态方案，但仍建议在部署后自行测试。

### 项目简介
`ServerinfoWeb` 是一个极简、优雅且**完全运行在云端**的 Minecraft 服务器信息展示页面。它摒弃了传统的本地 JSON 文件读取方式，转而使用 Cloudflare Pages Functions 与 KV 数据库，实现了真正的“无服务器化”管理。

### 核心优势
* **零成本维护**：利用 Cloudflare 免费额度，无需购买服务器或域名（可使用 Pages 自带域名）。
* **云端实时更新**：直接在 Cloudflare 控制台修改 KV 数据库，网页无需重新部署即可秒速同步。
* **强力路由保护**：内置 `_redirects` 约束，自动屏蔽非法路径探测，并将乱码后缀强制重定向至首页。
* **原生性能**：无框架依赖，极致轻量，全球边缘节点加速。

### 快速部署
1.  **仓库准备**：克隆本项目并推送到您的 GitHub。确保包含 `index.html`、`functions/` 文件夹及 `_redirects` 文件。
2.  **创建 KV**：在 Cloudflare [Workers & Pages] -> [KV] 中创建一个 Namespace，命名为 `SERVER_DB`。
3.  **绑定环境**：
    * 进入 Pages 项目设置 -> [Settings] -> [Functions]。
    * 在 [KV namespace bindings] 中添加绑定：**变量名**填 `SERVER_DB`，**命名空间**选择你刚才创建的。
4.  **初始化数据**：在 KV 空间的 `config` 键（Key）中填入您的服务器 JSON 配置。
5.  **重新部署**：在 [Deployments] 中选择 [Retry deployment] 激活后端。

---

## English

### ⚠️ Important Disclaimer
**This project was developed with the assistance of AI.** Due to the nature of AI-generated content, this repository is intended for personal reference. The Serverless architecture provides enhanced security and stability, but user discretion is advised for large-scale production use.

### Project Overview
`ServerinfoWeb` is a minimalist, elegant **Cloud-Native** Minecraft server information display. It replaces static JSON file reading with Cloudflare Pages Functions and KV storage, enabling a true "serverless" management experience.

### Key Features
* **Zero-Cost**: Runs entirely within the Cloudflare free tier—no VPS required.
* **Real-time Cloud Management**: Update server details via the Cloudflare KV dashboard; no code changes or redeployments needed.
* **Routing Security**: Built-in `_redirects` rules prevent directory traversal and clean up URL suffixes automatically.
* **Vanilla Performance**: No heavy frameworks; high-speed delivery via Cloudflare's global edge network.

### Quick Start
1.  **Repository**: Push this project to GitHub. Ensure `functions/` and `_redirects` are in the root directory.
2.  **KV Setup**: Create a KV Namespace named `SERVER_DB` in the Cloudflare dashboard.
3.  **Binding**: Go to Pages [Settings] -> [Functions] -> [KV namespace bindings]. Set **Variable name** to `SERVER_DB` and select your namespace.
4.  **Data**: Add a key named `config` in your KV space and paste your server JSON configuration.
5.  **Activate**: Trigger a [Retry deployment] to enable the backend functions.

---

### 📝 配置示例 / Configuration Example (JSON)
在 KV 中使用的 `config` 键对应的值模板：

```json
{
  "serverName": "My Awesome Server",
  "description": "Join our community!",
  "java": { "ip": "play.example.com", "port": "25565", "version": "1.21.x" },
  "bedrock": { "ip": "play.example.com", "port": "19132", "version": "Latest" },
  "features": ["Survival", "Creative", "No Lag"]
}
