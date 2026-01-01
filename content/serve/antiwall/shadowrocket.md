---
title: Shadowrocket 使用教程
description: Shadowrocket（小火箭）使用教程，适用于 iOS / iPadOS 的经典代理客户端，支持订阅导入、节点切换、规则分流与多种代理协议。本文详细讲解客户端下载、订阅导入、节点切换、代理模式与 TUN 模式设置，适合新手快速上手。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/Shadowrocket.webp
---

# Shadowrocket 使用教程

**Shadowrocket（俗称小火箭）** 是一款运行于 **iOS / iPadOS** 平台的老牌代理客户端，因稳定、兼容性强而广受欢迎。

**支持协议包括**：  
SS、SSR、VMess（V2Ray）、VLESS（Xray）、Trojan、Hysteria、TUIC、Snell、Brook、HTTP(S)、SOCKS5 等。

通过本文的 **2026 最新 Shadowrocket 使用教程**，你可以快速完成客户端安装、订阅导入、节点测试与代理启用。

## Shadowrocket 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/Shadowrocket.webp',
      name: 'Shadowrocket',
      desc: 'Shadowrocket（小火箭），iOS 平台经典代理工具，稳定耐用，支持多种主流协议。',
      link: 'https://apps.apple.com/us/app/shadowrocket/id932747118'
    }
  ]"
/>

### 下载说明

- 国区 App Store **无法直接下载**
- 推荐使用 **非大陆区 Apple ID（如美区）**
- 也可购买已包含 Shadowrocket 的 Apple ID

相关参考：

- [美区 Apple ID](/serve/sharing/acc#苹果-id-账号价格表)
- [带 Shadowrocket 的 Apple ID](/serve/sharing/acc#小火箭shadowrocket账号)

## 添加节点（推荐订阅方式）

### 获取订阅地址

<!--@include: @/head.md-->

登录机场后台，复制 **订阅链接**。  
⚠️ 建议关闭浏览器自动翻译，避免订阅地址被破坏。

### 通过订阅 URL 添加节点

1. 打开 Shadowrocket
2. 点击左上角 **➕**
3. 类型选择 **Subscribe**
4. 在 **URL** 中粘贴订阅地址
5. 备注填写便于识别的名称
6. 保存即可

![Shadowrocket 订阅地址添加节点 =300x](https://i.theojs.cn/docs/20260104120350916.webp)

### 自动更新订阅（建议开启）

路径：  
**右下角设置 → 订阅设置**

- 开启「启动时更新」
- 可按需开启「后台自动更新」

![Shadowrocket 订阅设置 =300x](https://i.theojs.cn/docs/20260104120359055.webp)

![Shadowrocket 订阅设置界面 =300x](https://i.theojs.cn/docs/20260104120406172.webp)

## 手动添加节点（不推荐新手）

适用于自建服务器或单节点配置。

路径：  
**左上角 ➕ → 选择协议 → 填写参数 → 保存**

支持协议包括：

SS / SSR / VMess / VLESS / Trojan / Trojan-Go /  
Hysteria / TUIC / Snell / Brook / SOCKS5 / HTTP(S) / Relay / Lua

## 节点测试与启用代理

### 连通性测试

添加节点后，建议先进行 **连通性测试**：

- 数值越小，延迟越低
- 优先选择延迟较低的节点

![Shadowrocket 连通性测试 =300x](https://i.theojs.cn/docs/20260104120417933.webp)

### 启用代理

1. 选择一个节点
2. 打开右上角开关
3. 状态显示为已连接即成功

![Shadowrocket 开启代理 =300x](https://i.theojs.cn/docs/20260104120425805.webp)

## 全局路由模式说明（重点）

路径：  
**设置 → 全局路由**

推荐选择：**配置**

### 各模式说明

- **配置（推荐）**  
  按规则自动分流，国内直连、国外走代理
- **代理**  
  所有流量强制走代理
- **直连**  
  所有流量不使用代理
- **场景**  
  按场景切换规则（较少使用）

![Shadowrocket 全局路由 =300x](https://i.theojs.cn/docs/20260104120434708.webp)

## 使用建议

- 新手 **只用订阅，不要手动配节点**
- 日常使用选择 **全局路由 → 配置**
- 网络异常优先切换节点或测速

<!--@include: @/bottom.md-->

::: info 免责声明
本文仅供技术交流和学习参考，请遵守当地法律法规，合理合法使用网络服务。
:::
