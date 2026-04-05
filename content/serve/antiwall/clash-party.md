---
title: Clash Party 使用教程
description: Clash Party 使用教程，基于Mihomo核心的新一代网络代理工具，界面简介清晰，功能强大。支持所有主要桌面操作系统，能广泛满足不同用户的需求。详细讲解客户端下载、订阅导入、节点切换与代理模式设置，适合新手快速上手，稳定访问海外网络服务。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/clash-party.webp
---

# Clash Party 使用教程

**Clash Party** 是一款简单易用的基于 Clash Meta（Mihomo）核心的科学上网客户端。自 Clash for Windows 删库之后，又出现了很多 Clash 客户端。但相比之下，我觉得 **Clash Party** 是对新手很友好的。

## Clash Party 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/clash-party.webp',
      name: 'Clash Party',
      desc: '基于Mihomo核心的新一代网络代理工具，界面简介清晰，功能强大。支持所有主要桌面操作系统，能广泛满足不同用户的需求。',
      link: 'https://github.com/mihomo-party-org/clash-party/releases'
    }
  ]"
/>

## Clash Party 添加订阅教程

### 获取订阅地址

<!--@include: @/head.md-->

登录机场官网后台，复制 **订阅链接**。  
⚠️ 建议**关闭浏览器自动翻译功能**，避免订阅链接被错误处理。

### 导入订阅

**启动 Clash Party 后：**

- 进入配置或订阅管理页面
- 粘贴你的机场订阅链接
- 确认导入

![导入订阅](https://i.theojs.cn/docs/20260102143014522.webp)

### 选择节点开启代理

订阅导入成功后：

1. 进入 **节点 / Proxies**
2. 选择需要使用的节点（如 🇭🇰 香港 / 🇸🇬 新加坡 / 🇺🇸 美国）
3. 确认节点生效

![选择节点开启代理](https://i.theojs.cn/docs/20260105120039905.webp)

### 模式选择

根据使用场景选择合适的模式：

- **规则模式（Rule）**：推荐日常使用
- **全局模式（Global）**：所有流量走代理
- **直连模式（Direct）**：不使用代理

![模式选择](https://i.theojs.cn/docs/20260102143037110.webp)

## 使用建议

- 📌 日常浏览与软件使用：**规则模式**
- 🚀 访问海外服务异常：尝试切换节点
- 🔄 节点失效或延迟高：更新订阅或更换线路
- ⚡ 优先选择低延迟、低丢包节点

<!--@include: @/bottom.md-->
