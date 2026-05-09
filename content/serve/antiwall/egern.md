---
title: Egern 使用教程
description: Egern 使用教程。是一款功能丰富且强大的网络工具，专门用于代理、拦截和修改网络流量。本文详细讲解客户端下载、订阅导入、节点切换、代理模式与 TUN 模式设置，适合新手快速上手。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/egern.svg
---

# Egern 使用教程

**Egern** 是一款功能丰富且强大的网络工具，专为代理、拦截和修改网络流量而设计。

主要特点包括：

- 详细记录 TCP、UDP、DNS 和 HTTP 网络流量。
- 支持丰富的规则类型：域名、域名关键词、域名后缀、域名正则表达式、地理位置、IPv4/IPv6 CIDR、URL 正则表达式、规则集以及默认规则。
- 提供灵活的策略组选项：选择、自动测试、故障切换、负载均衡和外部策略。
- 支持多种代理协议：HTTP、SOCKS5、Shadowsocks、Trojan、Hysteria2、Vless 和 Vmess。
- URL 重写功能，让您更自由地定制网络请求。
- 高度可定制的请求和响应头部重写功能。
- 灵活的请求和响应内容重写能力。
- 通过 JavaScript 脚本为您提供自定义请求和响应数据的操作。
- 支持本地 HTTP 代理服务器和本地 SOCKS5 代理服务器，满足各种网络需求。
- DNS 转发规则可将流量代理至支持 DoH、DoT 和 DoQ 协议的服务器。
- 通过 iCloud 实现跨设备配置信息同步，让您的网络设置随时随地保持一致。
- Egern 作为您的网络管理利器，帮助您轻松应对各种网络环境，实现高效网络控制和调试。无论您是网络安全专家、开发者还是对网络管理感兴趣的用户，Egern 都将成为您不可或缺的工具。快来体验 Egern 的强大功能，打造专属的网络环境吧！

## Egern 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/egern.svg',
      name: 'Egern',
      desc: 'Egern 是一款功能丰富且强大的网络工具，专门用于代理、拦截和修改网络流量。',
      link: 'https://apps.apple.com/us/app/egern/id1616105820'
    }
  ]"
/>

## Egern 添加订阅教程

### 获取订阅地址

<!--@include: @/head.md-->

登录机场官网后台，复制 **订阅链接**。  
⚠️ 建议**关闭浏览器自动翻译功能**，避免订阅链接被错误处理。

### 导入配置模板

![Egern 导入配置模板](https://i.theojs.cn/docs/20260102193938014.webp)

### 下载配置

1. 打开 Egern 应用，在应用界面底部的 Tab 栏中选择“工具”。
2. 在工具页面的右上角，您会看到 `...` 图标，点击该图标。
3. 在弹出的菜单中选择“下载配置”。
4. 在“下载配置”页面的 URL 输入框中，输入地址：`https://raw.githubusercontent.com/egerndaddy/quick-start/main/example.yaml`
5. 完成输入后，点击“下载”按钮。Egern 将从您提供的 URL 地址下载配置文件。

### 添加订阅

- 返回到 Egern 工具页面。
- 进入“策略组”页面。
- 在策略组页面中，找到并打开 所有订阅。
- 在此页面，您将看到一个 URL 输入栏。请在此输入您的订阅地址。
- 输入完成后，点击保存，以确保您的订阅被正确添加。

<!--@include: @/bottom.md-->
