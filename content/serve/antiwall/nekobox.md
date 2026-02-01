---
title: NekoBox 使用教程
description: NekoBox 使用教程。基于 sing-box 的多平台代理客户端，支持订阅导入、手动添加节点、路由分流与 TUN 模式，适合新手快速上手。本文详细讲解客户端下载、订阅导入、节点切换、代理模式与 TUN 模式设置，适合新手快速上手。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/logo/nekobox.webp
---

# NekoBox 使用教程

**NekoBox for Android** 是一款基于 **sing-box** 内核的 Android 代理客户端，支持多协议、多节点管理与灵活的路由分流，适合新手与进阶用户使用。

**支持协议**：  
HTTPS、Hysteria、NaïveProxy、Shadowsocks、SOCKS5、SSH、Trojan、TUIC、V2Ray、WireGuard、Xray 等。

## NekoBox 客户端下载

<Links
  :grid="2"
  :items="[
    {
      image: 'https://i.theojs.cn/logo/nekobox.webp',
      name: 'NekoBox for Android',
      desc: '基于 sing-box 的多协议代理客户端，功能全面，更新活跃。',
      link: 'https://github.com/MatsuriDayo/NekoBoxForAndroid/releases'
    }
  ]"
/>

## NekoBox 添加订阅

### 获取订阅地址

<!--@include: @/head.md-->

登录机场官网后台，复制 **订阅链接**。  
⚠️ 建议关闭浏览器自动翻译，避免订阅链接被错误处理。

### 新建订阅分组

1. 点击左上角菜单 → **分组**
2. 右上角点击 **➕**
3. 分组类型选择 **订阅**
4. 粘贴订阅地址并保存
5. 更新分组拉取节点

返回主页选择节点即可连接。

## 手动添加节点

适用于单节点、自建服务器或测试用途。

### 常用导入方式

- **扫码导入**：➕ → 扫描二维码
- **剪贴板导入**：➕ → 从剪贴板导入

常见节点链接前缀：

- VMess：`vmess://`
- VLESS：`vless://`
- Shadowsocks：`ss://`
- Trojan：`trojan://`
- SOCKS5：`socks5://`

> 注意复制完整链接。

### 支持手动配置的协议

SOCKS / HTTP / Shadowsocks / VMess / VLESS / Trojan / Trojan-Go /  
Naïve / Hysteria / TUIC / SSH / WireGuard / ShadowTLS

路径：  
**➕ → 手动输入 → 选择协议 → 填写参数 → 保存**

## 启用代理服务器

1. 主页选择任意节点
2. 点击底部 **连接**
3. 首次使用需允许 VPN 权限

连接成功后底部状态显示为 **已连接**。

## 路由与分流设置

路径：左上角菜单 → **路由**

常用规则说明：

- **屏蔽 QUIC**：改善 YouTube / Google 视频卡顿
- **屏蔽广告**：建议开启
- **屏蔽跟踪器**：建议开启
- **中国域名 / IP**：默认直连
- **Play 商店规则**：默认走代理

合理配置可明显提升速度与稳定性。

## 使用建议

- 新手优先使用 **订阅导入**
- 节点异常可切换协议或开启「屏蔽 QUIC」
- 高级用户可结合规则实现精细分流

<!--@include: @/bottom.md-->

::: info 免责声明
本文仅供技术交流与学习参考，请遵守当地法律法规，合理合法使用网络服务。
:::
