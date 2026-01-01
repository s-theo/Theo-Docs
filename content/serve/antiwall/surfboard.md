---
title: Surfboard 使用教程
description: Surfboard 使用教程，是一款运行在 Android 系统上的网络代理工具，兼容 Surge 2 配置，可直接导入 Surge 标准配置文件使用。本文详细讲解客户端下载、订阅导入、节点切换与代理启动，适合新手快速上手。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/surfboard.webp
---

# Surfboard 使用教程

**Surfboard（冲浪板）** 是一款运行在 **Android** 系统上的代理客户端，**兼容 Surge 2 配置**，可直接导入 Surge 标准配置文件使用。

支持的代理协议包括：

- Shadowsocks（SS）
- V2Ray（VMess）
- Trojan
- HTTP / HTTPS
- SOCKS5 / SOCKS5 over TLS

通过本文（2026 最新版）可快速完成 **客户端下载 → 订阅导入 → 节点选择 → 启动代理** 的完整流程。

## Surfboard 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/surfboard.webp',
      name: 'Surfboard',
      desc: 'Android 平台代理工具，兼容 Surge 2 配置，可直接导入标准配置文件使用。',
      link: 'https://github.com/getsurfboard/surfboard/releases'
    }
  ]"
/>

## Surfboard 添加订阅

### 获取订阅地址

<!--@include: @/head.md-->

登录机场官网后台，复制 **订阅链接**。

> ⚠️ 建议关闭浏览器自动翻译功能，避免订阅链接被错误处理。

## 添加配置文件

点击软件主界面底部 **「配置」** 选项卡，点击右下角 **➕**，可看到以下四种导入方式：

- 扫描二维码导入
- 从文件导入
- 从零开始
- 从 URL 导入（推荐）

![Surfboard 添加配置文件 =500x](https://i.theojs.cn/docs/20260105105213240.webp)

### 扫描二维码导入

在电脑端打开或保存机场提供的二维码图片。

进入 **配置 → ➕ → 扫描二维码导入**，扫描电脑屏幕上的二维码或从手机相册选择二维码图片即可完成导入。

![Surfboard 扫描二维码导入 =500x](https://i.theojs.cn/docs/20260105105221266.webp)

### 从文件导入

进入 **配置 → ➕ → 从文件导入**，选择本地配置文件即可。

![Surfboard 从文件导入 =500x](https://i.theojs.cn/docs/20260105105228597.webp)

### 从零开始

进入 **配置 → ➕ → 从零开始**，手动创建并编辑配置文件（不推荐新手使用）。

![Surfboard 从零开始 =500x](https://i.theojs.cn/docs/20260105105236408.webp)

### 从 URL 导入（推荐）

进入 **配置 → ➕ → 从 URL 导入**。

![Surfboard 从 URL 导入 =500x](https://i.theojs.cn/docs/20260105105245712.webp)

在弹出的窗口中粘贴 **订阅链接**，点击导入。

![Surfboard 从 URL 导入订阅 =500x](https://i.theojs.cn/docs/20260105105252931.webp)

导入成功后：

1. 进入 **配置** 页面
2. 点击右上角按钮更新订阅
3. 切换到 **代理** 选项卡
4. 选择任意节点即可使用

![Surfboard 选择代理节点 =500x](https://i.theojs.cn/docs/20260105105302350.webp)

## 启动代理

切换到软件底部 **「仪表盘」** 选项卡，点击右下角 **▶ 按钮** 启动代理。

![Surfboard 启动代理 =500x](https://i.theojs.cn/docs/20260105105310253.webp)

代理启动成功后，按钮将变为 **计时器图标**，表示代理已正常运行。

<!--@include: @/bottom.md-->

::: info 免责声明
本文仅供技术交流和学习参考，请遵守当地法律法规，合理合法使用网络服务。
:::
