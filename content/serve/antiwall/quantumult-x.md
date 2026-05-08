---
title: Quantumult X 使用教程
description: Quantumult X 使用教程。适用于 iOS 与 macOS 的高级代理客户端，支持订阅导入、节点切换、规则分流与多种代理协议，适合新手快速上手与进阶使用。本文详细讲解客户端下载、订阅导入、节点切换、代理模式与 TUN 模式设置，适合新手快速上手。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/qx.webp
---

# Quantumult X 使用教程

**Quantumult X（简称圈 X）** 是一款运行于 **iOS / iPadOS / macOS** 平台的高级网络代理客户端，集成节点管理、规则分流、策略组与脚本能力，适合日常代理与高级网络控制场景。

**支持协议包括**：  
Shadowsocks（SS）、ShadowsocksR（SSR）、VMess、VLESS、Trojan、HTTP / HTTPS、SOCKS5 等。

通过本文的 **2026 最新 Quantumult X 使用教程**，可快速完成客户端安装、订阅导入、节点切换与运行模式设置。

## Quantumult X 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/qx.webp',
      name: 'Quantumult X',
      desc: 'Quantumult X（圈X），一款功能强大的 iOS / macOS 网络代理工具，支持 SS / SSR / V2Ray / Trojan / HTTP(S)。',
      link: 'https://apps.apple.com/us/app/quantumult-x/id1443988620'
    }
  ]"
/>

### 关于下载说明

- 国区 App Store **无法直接下载**
- 推荐使用 **非大陆区 Apple ID（如美区）** 登录后下载
- 也可购买已包含 Quantumult X 的 Apple ID

相关说明可参考：

- [美区 Apple ID](/serve/sharing/acc#苹果-id-账号价格表)
- [带 Quantumult X 的 Apple ID](/serve/sharing/acc#圈xquantumult-x-独享-账号)

## Quantumult X 添加订阅

### 获取订阅地址

<!--@include: @/head.md-->

登录机场官网后台，复制 **订阅链接**。  
⚠️ 建议关闭浏览器自动翻译功能，避免订阅链接被破坏。

### 添加订阅节点资源

1. 打开 Quantumult X
2. 点击右下角 **风车图标** 进入设置页面

![Quantumult X 设置页面 =300x](https://i.theojs.cn/docs/20260104114502926.webp)

3. 在「节点」栏目中点击 **节点资源**

![Quantumult X 节点资源 =300x](https://i.theojs.cn/docs/20260104114510976.webp)

4. 点击左上角按钮，进入 **添加节点资源** 页面

![Quantumult X 节点资源页面 =300x](https://i.theojs.cn/docs/20260104114523115.webp)

5. 填写以下信息：
   - **资源标签**：自定义名称（如「机场订阅」）
   - **资源路径**：粘贴订阅地址
6. 点击右上角 **✔** 保存

![Quantumult X 添加节点资源页面 =300x](https://i.theojs.cn/docs/20260104114532832.webp)

## 启用代理与节点切换

添加完成后返回主界面，即可看到已导入的节点列表。

1. 选择任意节点
2. 点击右上角按钮启用代理

![Quantumult X 开启代理 =300x](https://i.theojs.cn/docs/20260104114542699.webp)

## 运行模式说明与切换

Quantumult X 支持三种运行模式：

- **全部代理**  
  所有网络请求均通过当前策略组中的代理节点

- **规则分流（推荐）**  
  根据分流规则与策略组决定流量走向，兼顾速度与可用性

- **全部直连**  
  所有请求均不通过代理，直接连接目标服务器

### 切换方法

长按右下角 **风车图标**，在弹出的菜单中选择所需运行模式。

![Quantumult X 切换运行模式 =300x](https://i.theojs.cn/docs/20260104114552304.webp)

## 使用建议

- 新手建议使用 **规则分流模式**
- 日常使用优先通过 **订阅管理节点**
- 遇到连接异常可尝试切换节点或运行模式
-
- 高级用户可配合 **规则 / 策略组 / 脚本** 实现更复杂的控制

<!--@include: @/bottom.md-->
