---
title: v2rayN 使用教程
description: v2rayN 是一款运行在 Windows 平台的代理客户端，支持 VMess、VLESS、Trojan、Shadowsocks、Hysteria2、Tuic 等多种协议。本文详细讲解客户端下载、订阅导入、节点配置、系统代理与路由模式设置，适合新手快速上手。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/v2rayn.webp
---

# v2rayN 使用教程

**v2rayN** 是一款运行在 **Windows** 系统下的代理客户端，基于 v2ray / Xray / sing-box 内核开发，功能强大、协议支持全面。

支持的代理协议包括：

- VMess
- VLESS
- Trojan
- Shadowsocks
- Socks
- Hysteria2
- Tuic

通过本文（2026 最新版）可完成 **软件下载 → 订阅导入 → 节点选择 → 系统代理 → 路由模式** 的完整配置流程。

## v2rayN 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/v2rayn.webp',
      name: 'v2rayN',
      desc: 'Windows 平台代理客户端，支持 VMess、VLESS、Trojan、SS、Hysteria2、Tuic 等多种协议',
      link: 'https://github.com/2dust/v2rayN/releases'
    }
  ]"
/>

## 添加订阅与节点

### 获取订阅地址

<!--@include: @/head.md-->

登录机场官网后台，复制 **订阅链接**。

> ⚠️ 建议关闭浏览器自动翻译功能，避免订阅链接被破坏。

### 使用订阅分组导入（推荐）

点击软件主界面顶部 **「订阅分组」 → 订阅分组设置**。

![v2rayN 订阅分组 =600x](https://i.theojs.cn/docs/20260105111003561.webp)

在弹出的窗口中点击 **添加**。

![v2rayN 添加订阅分组 =600x](https://i.theojs.cn/docs/20260105111011206.webp)

填写以下内容：

- 别名：自定义名称
- 可选地址（URL）：粘贴订阅链接

点击 **添加 → 确定** 保存。

![v2rayN 订阅分组设置 =600x](https://i.theojs.cn/docs/20260105111018867.webp)

添加完成后，点击：

**订阅分组 → 更新全部订阅（不通过代理）**

![v2rayN 更新订阅 =600x](https://i.theojs.cn/docs/20260105111026723.webp)

### 从剪贴板导入节点

复制机场提供的节点链接（需完整复制）：

- VMess：`vmess://`
- VLESS：`vless://`
- Shadowsocks：`ss://`
- Socks：`socks5://`
- Trojan：`trojan://`

点击 **服务器 → 从剪贴板导入批量 URL** 即可完成导入。

![v2rayN 剪贴板导入 =600x](https://i.theojs.cn/docs/20260105111035551.webp)

### 扫描屏幕二维码导入

打开节点二维码图片，点击：

**服务器 → 扫描屏幕上的二维码**

![v2rayN 扫描二维码 =600x](https://i.theojs.cn/docs/20260105111044394.webp)

## 手动添加节点（进阶）

> 一般机场用户无需手动添加，以下适合自建或特殊配置用户。

支持手动添加的节点类型：

- VMess
- VLESS（Xray）
- Shadowsocks
- Socks
- Trojan
- Hysteria2
- Tuic

路径统一为：

**服务器 → 添加对应协议服务器 → 填写参数 → 确定保存**

（以下截图仅示例，配置方式一致）

![v2rayN 添加 VMess =600x](https://i.theojs.cn/docs/20260105111055286.webp)

![v2rayN 配置 VMess =600x](https://i.theojs.cn/docs/20260105111102645.webp)

## 基础使用说明

### 选择节点

在主界面节点列表中：

- **双击左键** 直接启用节点
- 或 **右键 → 设为活动服务器**

![v2rayN 选择节点  =600x](https://i.theojs.cn/docs/20260105111110903.webp)

### 启用系统代理

在任务栏右下角系统托盘中：

**右键 v2rayN 图标 → 自动配置系统代理**

图标变为红色表示已启用。

![v2rayN 系统代理](https://i.theojs.cn/docs/20260105111119897.webp)

### 路由模式说明

v2rayN 支持三种常用路由模式：

- **绕过大陆（Whitelist）**：仅国外流量走代理（推荐）
- **黑名单（Blacklist）**：除指定域名外均走代理
- **全局（Global）**：所有流量走代理

一般用户选择 **绕过大陆模式** 即可。

![v2rayN 路由模式](https://i.theojs.cn/docs/20260105111129111.webp)

### 开机自动启动

进入：

**设置 → 参数设置 → v2rayN 设置**

勾选 **开机自动启动**，点击确认保存。

![v2rayN 开机启动 =600x](https://i.theojs.cn/docs/20260105111136698.webp)

### 在线更新

支持在线更新以下组件：

- v2rayN 客户端
- Xray Core
- sing-box Core
- Geo 文件

点击 **检查更新** 即可。

![v2rayN 在线更新 =600x](https://i.theojs.cn/docs/20260105111144994.webp)

<!--@include: @/bottom.md-->
