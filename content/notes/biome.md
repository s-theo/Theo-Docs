---
title: 为项目添加 Biome
description: 记录为项目添加 Biome 格式化代码的过程，提升代码一致性。
---

# 为项目添加 Biome

## 1. 配置 Biome 格式化代码

### 安装 Biome

::: code-group

```shell [pnpm]
pnpm add --save-dev @biomejs/biome
```

```shell [npm]
npm install --save-dev @biomejs/biome
```

```shell [yarn]
yarn add --dev @biomejs/biome
```

:::

### Biome 配置

新建 `biome.json` 配置如下

<<< @/../biome.json

### 使用 Biome 格式化所有文件

::: code-group

```shell [pnpm]
pnpm exec biome check --write .
```

```shell [npm]
npx @biomejs/biome check --write .
```

```shell [yarn]
yarn biome check --write .
```

:::
