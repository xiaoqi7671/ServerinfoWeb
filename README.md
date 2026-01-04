# ServerinfoWeb

[中文](#中文) | [English](#english)

---

## 中文

### ⚠️ 重要声明
**本项目主要用于个人服务器部署使用。** 本项目的大部分代码由 **AI (Artificial Intelligence)** 辅助生成。由于 AI 生成内容的局限性，本仓库仅建议作为个人参考或特定环境部署使用，**不建议**在对代码安全性、健壮性有极高要求的生产环境直接大规模应用。

### 项目简介
`ServerinfoWeb` 是一个轻量级的、基于 Web 的 Minecraft 服务器信息展示页面。它通过读取本地 JSON 配置文件来动态显示服务器的 IP 地址、端口、游戏版本以及相关描述。

### 核心功能
* **配置分离**：所有服务器信息均存储在 `config.json` 中，无需修改代码。
* **一键复制**：支持点击按钮快速复制服务器 IP 地址。
* **响应式设计**：完美适配手机、平板及电脑浏览器。

### 快速开始
1.  克隆或下载本项目到你的服务器/部署环境。
2.  编辑 `config.json` 文件，填入你的服务器信息。
3.  使用任意静态 Web 服务器（如 Nginx, Vercel, GitHub Pages）部署 `index.html`。

---

## English

### ⚠️ Important Disclaimer
**This project is primarily intended for personal server deployment.**
The codebase for this project was developed with the assistance of **AI (Artificial Intelligence)**. Due to the inherent limitations of AI-generated content, this repository is intended for personal reference or specific deployment scenarios only. It is **NOT recommended** for use in production environments where extreme code security or robustness is required.

### Project Overview
`ServerinfoWeb` is a lightweight, web-based information display page for Minecraft servers. It dynamically renders the server's IP address, port, game version, 和 descriptions by reading a local JSON configuration file.

### Key Features
* **Configuration Separation**: All server details are stored in `config.json`, eliminating the need to edit HTML code.
* **One-Click Copy**: Includes a convenient button to quickly copy the server IP to the clipboard.
* **Responsive Design**: Fully optimized for mobile, tablet, 和 desktop browsers.

### Quick Start
1.  Clone or download this project to your server or deployment environment.
2.  Edit the `config.json` file with your specific server details.
3.  Deploy `index.html` using any static web server (e.g., Nginx, Vercel, GitHub Pages).
