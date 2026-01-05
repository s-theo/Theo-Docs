---
title: Clash Verge Rev 使用教程
description: Clash Verge Rev 使用教程。Clash Verge Rev 基于 Mihomo 内核，功能强大、界面简洁，支持自定义主题。本文详细讲解客户端下载、订阅导入、节点切换、代理模式与 TUN 模式设置，适合新手快速上手。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/clash-verge-rev.webp
---

# Clash Verge Rev 使用教程

**Clash Verge Rev** 是 Clash Verge 的延续版本，是一款基于 **Tauri + Clash Meta（Mihomo）内核** 的桌面端 GUI 客户端。

在延续原有版本号与使用逻辑的基础上，对界面与功能进行了优化升级。只要用过 Clash 系列客户端，基本可以做到 **零学习成本上手**。

## Clash Verge Rev 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/clash-verge-rev.webp',
      name: 'Clash Verge Rev',
      desc: '基于 Mihomo 内核的桌面代理客户端，功能完整，界面简洁，支持订阅管理、节点切换与自定义主题',
      link: '/serve/antiwall/clash-verge-rev'
    }
  ]"
/>

## Clash Verge Rev 添加订阅教程

### 获取订阅地址

<!--@include: @/head.md-->

登录机场官网后台，复制 **订阅链接**。  
⚠️ 建议**关闭浏览器自动翻译功能**，避免订阅链接被错误处理。

### 通过订阅链接导入配置文件

在 **订阅配置文件** 页面中：

- 复制你购买的机场订阅链接（URL）
- 粘贴到输入框
- 点击 **导入**，等待配置下载完成

![Clash Verge Rev 订阅链接导入](https://i.theojs.cn/docs/20260105115031668.webp)

### 选择节点

切换到 **代理** 页面：

- 可以看到订阅内的所有节点
- 点击无线图标可测试延迟
- **直接单击节点名称即可切换**

> 其他选项如不清楚用途，建议保持默认，不要随意修改。

![Clash Verge Rev 选择节点](https://i.theojs.cn/docs/20260105115525822.webp)

### 开启系统代理

进入 **设置** 页面：

- 打开 **系统代理**
- 如需局域网设备共享代理，可开启「允许局域网连接」（默认关闭）

![Clash Verge Rev 开启系统代理](https://i.theojs.cn/docs/20260105115059757.webp)

完成以上步骤后，即可正常访问代理网络环境中的网站。

## 首次使用建议（很重要）

- 建议先使用 **浏览器隐私 / 无痕模式** 测试访问 Google
- 如果隐私模式可以访问、普通模式不行：
  - 通常是浏览器插件干扰
  - 停用可疑插件即可解决

## 代理模式说明

- **全局（Global）**  
  所有请求全部通过代理服务器转发

- **规则（Rule）**（推荐）  
  根据配置文件规则进行智能分流

- **直连（Direct）**  
  所有请求直接连接目标网站，不使用代理

## 上不了网 / 无法访问的解决方法

出现「无法访问，请检查代理」时，可按顺序尝试以下方法：

**1. 删除当前配置文件，通过订阅 URL 重新导入**

**2. 重置网络（Windows）**

- 在任务栏搜索 `cmd`
- 右键 **命令提示符 → 以管理员身份运行**
- 执行以下命令后回车：`netsh winsock reset`
- 重启电脑后重新启动 Clash Verge Rev

**3. 重置系统代理**

- 系统设置 → 网络和 Internet → 关闭代理
- 完全退出 Clash Verge Rev
- 再重新启动并开启系统代理

![重置系统代理](https://i.theojs.cn/docs/20260102144939298.webp)

## 开启 TUN 模式说明

**TUN 模式（Tunnel）** 是 Windows 下的一种虚拟网络接口模式，常用于 VPN 与高级代理场景。

其主要特点包括：

- 创建一个虚拟的点对点网络接口
- 在系统中表现为独立的网络适配器
- 直接路由 IP 数据包（非以太网帧）
- 常见于 OpenVPN、IPsec 等技术

适用场景：

- 系统级流量接管
- 游戏或应用不走系统代理的情况
- 安卓模拟器代理支持

**开启 TUN 模式后，绝大多数安卓模拟器即可通过 Clash Verge Rev 的节点正常访问外网。**

<!--@include: @/bottom.md-->

::: info 免责声明
本文仅供技术交流与学习使用，请遵守当地法律法规，合理、合法使用网络服务。
:::
