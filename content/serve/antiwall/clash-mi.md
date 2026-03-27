---
title: Clash Mi 使用教程
description: Clash Mi 使用教程，基于强大 Mihomo 核心的、易于上手的代理客户端，特别为希望快速使用机场订阅、享受智能分流和隧道代理的用户设计，详细讲解客户端下载、订阅导入、节点切换与代理模式设置，适合新手快速上手，稳定访问海外网络服务。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/clashmi.webp
---

# Clash Mi 使用教程

**Clash Mi** 是一款基于 **Mihomo（Clash Meta）核心** 的代理客户端，界面简洁、操作直观，非常适合新手快速导入机场订阅并使用规则分流或全局代理。

## Clash Mi 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/clashmi.webp',
      name: 'Clash Mi',
      desc: '基于 Mihomo 核心的轻量代理客户端，支持订阅导入、规则分流与隧道代理',
      link: 'https://github.com/KaringX/clashmi/releases'
    }
  ]"
/>

> 建议优先下载 **最新正式版（Release）**

## Clash Mi 添加订阅教程

### 获取订阅地址

<!--@include: @/head.md-->

登录机场官网后台，复制 **订阅链接**。  
⚠️ 建议**关闭浏览器自动翻译功能**，避免订阅链接被错误处理。

### 新增配置

打开 Clash Mi：

- 进入首页
- 点击 **我的配置**
- 点击右上角 **＋**

![Clash Mi 添加订阅 =300x](https://i.theojs.cn/docs/20260102140626013.webp)

### 选择「从剪贴板导入」

提前复制好你的机场订阅链接，然后选择：

**从剪贴板导入**

![Clash Mi 从剪贴板导入订阅 =300x](https://i.theojs.cn/docs/20260102140653440.webp)

### 粘贴订阅链接并填写备注

在配置页面中：

- **配置链接 / 内容**：粘贴订阅地址
- **备注**：随意填写（如「我的订阅」）
- 点击右上角 **✔ 保存**

![Clash Mi 粘贴订阅链接 & 填写备注 =300x](https://i.theojs.cn/docs/20260102140716364.webp)

### 导入完成

看到提示后，点击 **确定** 即表示订阅导入成功。

![Clash Mi 导入成功 =300x](https://i.theojs.cn/docs/20260102140747584.webp)

## 启动代理连接

### 返回主界面

点击左上角返回首页。

![Clash Mi 返回首页 =300x](https://i.theojs.cn/docs/20260102140818878.webp)

### 开启连接

在首页进行以下操作：

- **代理模式**：建议选择「规则」或「全局」
- 打开右上角开关
- 状态显示 **已连接** 即表示代理生效

![Clash Mi 开启连接 =300x](https://i.theojs.cn/docs/20260102140840888.webp)

![Clash Mi 开启连接 =300x](https://i.theojs.cn/docs/20260102140910068)

## 节点切换方法

如果你的订阅包含多个节点：

1. 点击首页 **代理**
2. 进入节点列表
3. 选择需要使用的节点（如 🇭🇰 香港 / 🇸🇬 新加坡 / 🇺🇸 美国）

![Clash Mi 选择具体节点-1 =300x](https://i.theojs.cn/docs/20260102140934220.webp)

![Clash Mi 选择具体节点-2 =300x](https://i.theojs.cn/docs/20260102140952723)

![Clash Mi 选择具体节点-3 =300x](https://i.theojs.cn/docs/20260102141113416.webp)

## 常见使用建议

- 📌 **日常使用**：规则模式
- 🚀 **全局代理**：访问全部海外服务
- 🔄 **节点不通**：切换节点或更新订阅
- ⚡ **速度慢**：优先选择低延迟节点（SG / JP / HK）

<!--@include: @/bottom.md-->

::: info 免责声明
本文仅供技术交流与学习使用，请遵守当地法律法规，合理、合法使用网络服务。
:::
