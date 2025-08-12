---
title: Debian/Ubuntu 系统优化设置
description: 本文介绍如何在 Debian 和 Ubuntu 系统上进行性能优化，包括内核调优、网络优化和服务管理等。
---

# Debian/Ubuntu 系统优化设置

## 系统下载

<Links
  :grid="2"
  :items="[
    {
      icon: 'logos:ubuntu',
      name: 'Ubuntu',
      desc: '下载官方桌面版 Ubuntu 系统',
      link: 'https://cn.ubuntu.com/download/desktop'
    },
    {
      icon: 'logos:debian',
      name: 'Debian',
      desc: '访问 Debian 官方网站了解和下载系统',
      link: 'https://www.debian.org/'
    }
  ]"
/>

## 开启 SSH 服务远程登录

### 安装 net-tools 和 openssh-server

```sh
sudo apt install net-tools openssh-server
```

### 查看是否开启 ssh 服务

```sh
dpkg -l | grep ssh
```

如果看到 `sshd`，说明 `ssh-server` 已经启动。如果没有可执行以下命令启动：

```sh
sudo /etc/init.d/ssh start
# 或
sudo service ssh start
```

## 安装 nano 和 htop

```sh
sudo apt install nano htop
```

## 删除系统自带软件

```sh
sudo apt --purge remove thunderbird totem rhythmbox empathy brasero simple-scan gnome-mahjongg aisleriot gnome-mines cheese transmission-common gnome-orca gnome-sudoku remmina
```

## 自动卸载不需要的依赖

```sh
sudo apt --purge autoremove
sudo apt upgrade	#更新软件仓库
```

## 卸载桌面环境

```sh
# 卸载 gnome-shell
sudo apt remove gnome-shell

# 卸载 gnome
sudo apt remove gnome

# 卸载不需要的依赖关系
sudo apt autoremove

# 彻底卸载删除gnome的相关配置文件
sudo apt purge gnome

# 清理安装gnome时候留下的缓存程序软件包
sudo apt autoclean
sudo apt clean
```

## 同步时间

### 安装 `ntpdate`

```sh
sudo apt install ntpdate
```

### 设置系统时间与网络时间同步

```sh
sudo ntpdate cn.pool.ntp.org
```

### 将时间更新到硬件

```sh
sudo hwclock --systohc
```

## 修改主机名

```sh
nano /etc/hostname

```

主机名存放在 `/etc/hostname` 文件中，编辑 `hostname` 并输入新的主机名保存即可。

```sh
reboot #重启
hostname #重新查看主机名
```

## 开启 Root 登陆

### 取得 Root 权限

先从浏览器打开或者 SSH 工具连接服务器，登陆成功之后输入一下命令

```bash
sudo -i #切换到root
passwd #修改密码
```

### 修改 ssh 配置文件

```bash
nano /etc/ssh/sshd_config #编辑文件
PermitRootLogin yes #默认为no，需要开启root用户访问改为yes
PasswordAuthentication yes #默认为no，改为yes开启密码登陆
```

:::tip
按 `i` 进入编辑模式，按 `esc` 退出，输入 `:wq` 保存
:::

### 重启服务器

```bash
reboot    #重启服务器
```
