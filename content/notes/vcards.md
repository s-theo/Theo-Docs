---
title: 优化 iOS/Android 来电、信息界面体验
description: 提升 iOS/Android 来电和信息界面的用户体验，优化界面设计与交互。
head:
  - - meta
    - property: og:image
      content: https://user-images.githubusercontent.com/2666735/59692672-0b6bdf00-9218-11e9-881e-5856e263f3aa.png
---

# 优化 iOS/Android 来电、信息界面体验

![CardDAV =688x](https://user-images.githubusercontent.com/2666735/59692672-0b6bdf00-9218-11e9-881e-5856e263f3aa.png '优化 iOS/Android 来电、信息界面体验')

## 方法一：安装 CardDAV 描述文件（推荐）

### 1. 使用系统相机扫描下方二维码，下载配置描述文件

![扫描二维码 =150x](https://github.com/user-attachments/assets/238f9d9a-5aa6-4636-8e67-4829535eaab9)

### 2. 打开“设置”App，轻点“已下载描述文件”或“注册 [组织的名称]”

![打开描述文件 =320x](https://github.com/user-attachments/assets/12997c2d-6172-49f0-9236-0b4f30ad9ebd)

### 3. 在右上角点击“安装”，按屏幕提示操作完成导入。

## 方法二：手动订阅 CardDAV 服务

采用订阅方式导入，优势是会自动更新，也方便区分和管理个人通讯录和黄页，避免混合两种列表。

- 服务器：`vcards.metowolf.com`
- 用户名：`cn`
- 密码：`cn` 或任意填写

如担心隐私问题，可参考 [自建教程](https://github.com/metowolf/vCards/issues/208)。

### 设置步骤

- **iOS** [^1]
  「设置」→「通讯录」→「账户」→「添加账户」→「其他」→「添加 CardDAV 账户」

- **Mac** [^2]
  「通讯录」→「设置」→「账户」→「其他通讯录账户」

> ⚠️ 默认 iOS 获取新资料的方式为「自动」，此情况下只有连接电源和 WLAN 时才会推送数据，请耐心等待。

## 方法三：下载导入

1. 前往 <Pill :icon="{ icon: 'cib:github', color: { light: '#000', dark: '#fff' } }" name="vCards Releases 页面" link="https://github.com/metowolf/vCards/releases" /> 下载最新打包文件 `archive.zip`
2. 解压后，根据不同平台指南导入 `vcf` 文件至 iCloud（建议单独创建「黄页」分组以便管理与隐藏）

### macOS

- [在 Mac 上的“通讯录”中创建联系人群组](https://support.apple.com/zh-cn/guide/contacts/adrb3280fe91/12.0/mac/10.14)
- [在 Mac 上的“通讯录”中导入来自其他应用的联系人](https://support.apple.com/zh-cn/guide/contacts/adrbk1457/mac)

### iOS / Web

- [在 iCloud 通讯录中创建群组](https://support.apple.com/kb/PH2667?locale=zh_CN)
- [将联系人导入 iCloud 通讯录](https://support.apple.com/kb/ph3605?locale=zh_CN)

[^1]: [在 iPhone 上设置邮件、通讯录和日历账户](https://support.apple.com/zh-cn/guide/iphone/ipha0d932e96/ios)

[^2]: [在 Mac 上将来自 iCloud、谷歌等的联系人添加到“通讯录”](https://support.apple.com/zh-cn/guide/contacts/adrb7e5aaa2a/mac)
