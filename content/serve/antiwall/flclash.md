---
title: FlClash 使用教程
description: FlClash 使用教程。基于 Clash 核心的多功能图形用户界面 (GUI) 工具，专为那些需要简单、直观地管理网络代理的用户设计。本文详细讲解客户端下载、订阅导入、节点切换、代理模式与 TUN 模式设置，适合新手快速上手。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/flclash.webp
---

# FlClash 使用教程

**FlClash** 是一款基于 Clash 核心的多功能图形用户界面 (GUI) 工具，专为那些需要简单、直观地管理网络代理的用户设计。它通过丰富的功能和友好的界面，简化了代理配置和管理过程，为用户提供了一个高效且稳定的解决方案。

## FlClash 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/flclash.webp',
      name: 'FlClash',
      desc: '基于 ClashMeta(Mihomo) 核心的网络代理工具，它的界面基于 Material You 设计，简单易用，开源且无广告。',
      link: 'https://github.com/chen08209/FlClash/releases'
    }
  ]"
/>

## FlClash 添加订阅教程

### 获取订阅地址

<!--@include: @/head.md-->

登录机场官网后台，复制 **订阅链接**。  
⚠️ 建议**关闭浏览器自动翻译功能**，避免订阅链接被错误处理。

### 一键导入

机场面板基本都有导入到Clash的按钮，直接一键导入即可。以v2board面板为例子：点击首页的一键订阅导入的clash。

![FlClash 一键导入订阅 =700x](https://i.theojs.cn/docs/20260103093955573.webp)

### 手动复制订阅导入

选择【配置】页面–点击加号–选择 第三个URL–粘贴复制的订阅进去–提交

![FlClash 手动导入订阅 =700x](https://i.theojs.cn/docs/20260103094004644.webp)

![FlClash 手动导入订阅2 =300x](data:image/webp;base64,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)

## 打开开关，开始使用

打开首页仪表盘右下角开关即可使用。就这么简单，太方便了。打开开关就是开启系统代理（接管你电脑的所有请求，clash进行分流需不需要走代理），很多用户根本不明白系统代理是什么意思，也不需要知道其实。

![FlClash 打开开关 =700x](https://i.theojs.cn/docs/20260103094103306.webp)

## 选择节点

代理页面可以选择一个节点，默认是自动选择的。

![FlClash 选择节点 =700x](https://i.theojs.cn/docs/20260103094110984.webp)

## 其他设置

### 开机自启–工具–应用程序

![FlClash 开机自启 =700x](https://i.theojs.cn/docs/20260103094119421.webp)

![FlClash 开机自启2 =300x](https://i.theojs.cn/docs/20260103094129150.webp)

<!--@include: @/bottom.md-->

::: info 免责声明
本文仅供技术交流和学习参考，请遵守当地法律法规，合理合法使用网络服务。
:::
