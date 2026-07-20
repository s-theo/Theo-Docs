import type { DefaultTheme } from 'vitepress'

const code = '<span class="VPBadge tip small" aria-hidden="true">附折扣码</span>'
const ty = '<span class="VPBadge tip small" aria-hidden="true">通用订阅</span>'
const cq = '<span class="VPBadge tip small" aria-hidden="true">附长期折扣码</span>'
const zc = '<span class="VPBadge tip small" aria-hidden="true">注册试用</span>'
const wx = '<span class="VPBadge tip small" aria-hidden="true">无限流量</span>'

type SidebarItem = DefaultTheme.SidebarItem

// 侧边栏配置
export const sidebar: DefaultTheme.SidebarMulti = {
  '/vps/': { base: '/', items: Sidebar_vps() },
  '/asus/': { base: '/', items: Sidebar_Asus() },
  '/esxi/': { base: '/', items: Sidebar_ESXi() },
  '/fe/': { base: '/', items: Sidebar_FE() },
  '/notes/': { base: '/', items: Sidebar_notes() },
  '/serve/': { base: '/', items: Sidebar_serve() },
  '/streaming/': { base: '/', items: Sidebar_streaming() },
  '/ai/': { base: '/', items: Sidebar_ai() }
}

export function Sidebar_notes(): SidebarItem[] {
  return [
    {
      text: '文档记录',
      // collapsed: true,
      items: [
        { text: 'PicGo/PicList + Github搭建图床', link: '/notes/build-picture-bed' },
        { text: 'GitHub Actions 工作流程', link: '/notes/github-actions' },
        { text: 'VS Code 使用技巧', link: '/notes/vscode' },
        { text: '为项目添加 Biome 及规范提交信息工具', link: '/notes/biome' },
        { text: '使用 GPG 签名 Git Commit', link: '/notes/gpg' },
        { text: '使用 nvm 管理不同版本的 node', link: '/notes/nvm' },
        { text: '优化 iOS/Android 来电信息界面', link: '/notes/vcards' },
        { text: '添加 1Panel 第三方应用商店', link: '/notes/1panel-third-party-app-store' },
        { text: 'Tabby 配置同步', link: '/notes/tabby-sync' },
        { text: '添加 群晖DSM7.X 第三方套件源', link: '/notes/synology-third-party-suite' },
        // { text: '在线机场订阅节点测速平台', link: '/notes/airportest' },
        { text: '2026年最新 telegram（电报、飞机）注册使用教程', link: '/notes/telegram' }
      ]
    },
    {
      text: 'VitePress 搭建记录',
      // collapsed: true,
      items: [
        { text: '添加 Giscu评论', link: '/notes/vitepress/giscu' },
        { text: '实现单击图片放大', link: '/notes/vitepress/picture-enlargement' },
        { text: '宝塔面板部署', link: '/notes/vitepress/aapanel-deployment' }
      ]
    }
  ]
}

export function Sidebar_Asus(): SidebarItem[] {
  return [
    {
      // text: '梅林操作文档',
      // collapsed: true,
      items: [
        { text: '刷机需知', link: '/asus/flashing-prerequisites' },
        { text: '固件平台介绍', link: '/asus/firmware-platform-introduction' },
        { text: 'fancyss', link: '/asus/fancyss' },
        { text: 'Merlin Clash', link: '/asus/merlin-clash' },
        { text: '官改/梅林固件 常用命令集合', link: '/asus/common-commands' },
        { text: '提示检测非法关键词', link: '/asus/illegal-keywords' },
        { text: '关闭降级检查', link: '/asus/disable-downgrade-check' }
      ]
    }
  ]
}

export function Sidebar_FE(): SidebarItem[] {
  return [
    {
      text: 'Linux 文档',
      collapsed: false,
      items: [
        { text: 'Linux 目录结构', link: '/fe/linux/directory' },
        { text: 'Linux 文件操作', link: '/fe/linux/file' },
        { text: 'Linux 文件权限', link: '/fe/linux/file-permission' },
        { text: 'Linux 常用网络操作', link: '/fe/linux/network' },
        { text: 'Linux 进程管理', link: '/fe/linux/process' },
        { text: 'Linux 管道命令', link: '/fe/linux/pipe' },
        { text: 'Linux 打包与拆包', link: '/fe/linux/tar' },
        { text: 'Linux VIM 编辑器', link: '/fe/linux/vim' },
        { text: 'Linux nano 编辑器', link: '/fe/linux/nano' }
      ]
    },
    {
      text: 'Docker 文档',
      collapsed: false,
      items: [
        { text: 'Docker 简介与安装', link: '/fe/docker/install' },
        { text: 'Docker 进程相关操作', link: '/fe/docker/process' },
        { text: 'Docker 国内镜像加速', link: '/fe/docker/mirror-source' },
        { text: 'Docker 镜像相关操作', link: '/fe/docker/mirror' },
        { text: 'Docker 容器相关操作', link: '/fe/docker/container' }
      ]
    },
    {
      text: 'Git 文档',
      collapsed: false,
      items: [
        { text: 'Git 简介与安装', link: '/fe/git/install' },
        { text: 'Git 设置用户信息', link: '/fe/git/user' },
        { text: 'Git 常用命令', link: '/fe/git/command' },
        { text: 'Git 版本回退', link: '/fe/git/reset' },
        { text: 'Git 合并commit', link: '/fe/git/commit' },
        { text: 'Git 缩减仓库', link: '/fe/git/clean-up' },
        { text: 'Git 重置提交记录', link: '/fe/git/reset-commit' }
      ]
    },
    {
      text: 'HomeBrew 文档',
      collapsed: false,
      items: [
        { text: 'HomeBrew 简介与安装', link: '/fe/homebrew/install' },
        { text: 'HomeBrew 安装软件', link: '/fe/homebrew/software' },
        { text: 'HomeBrew tap使用', link: '/fe/homebrew/tap' },
        { text: 'HomeBrew 切换镜像源', link: '/fe/homebrew/mirror-source' }
      ]
    },
    {
      text: 'pnpm 文档',
      collapsed: false,
      items: [
        { text: 'pnpm 安装', link: '/fe/pnpm/install' },
        { text: 'pnpm 切换镜像及恢复默认源', link: '/fe/pnpm/mirror' },
        { text: 'pnpm 管理依赖项', link: '/fe/pnpm/package' }
      ]
    }
  ]
}

export function Sidebar_vps(): SidebarItem[] {
  return [
    {
      text: 'Debian/Ubuntu',
      collapsed: false,
      items: [
        { text: '系统优化设置', link: '/vps/settings/ubuntu' },
        { text: '更改中文语言', link: '/vps/settings/chinese' },
        { text: '开启防火墙端口', link: '/vps/settings/firewall-port' },
        { text: 'Debian12 安装使用 Cloud 内核', link: '/vps/settings/debian12-cloud' },
        { text: 'oh-my-zsh 安装 & 配置', link: '/vps/settings/oh-my-zsh' },
        { text: '开机自动挂载 NAS磁盘', link: '/vps/settings/ubuntu-mount-nas' }
      ]
    },
    {
      text: '系统工具',
      collapsed: false,
      items: [
        { text: '全能工具箱', link: '/vps/tools/all-purpose-toolbox' },
        { text: 'dd.sh 重装系统', link: '/vps/tools/dd.sh' },
        { text: 'R 探长开机脚本', link: '/vps/tools/r-bot' },
        { text: 'IP 质量体检脚本', link: '/vps/tools/ipquality' },
        { text: '一键检测流媒体解锁', link: '/vps/tools/streaming-unlocked' },
        { text: '一键检测机场奈飞解锁', link: '/vps/tools/netflix-unlocked' }
      ]
    },
    {
      text: '搭建服务',
      collapsed: false,
      items: [
        { text: '哪吒面板', link: '/vps/serve/install-nezha-panel' },
        { text: '1Panel 面板', link: '/vps/serve/install-1panel' },
        { text: 'Docker 搭建 aria2+AriaNg', link: '/vps/serve/aria2+ariang' },
        { text: '一键安装 小雅Xiaoya全家桶', link: '/vps/serve/xiaoya-alist' }
      ]
    },
    {
      text: 'Oracle Cloud 甲骨文云',
      collapsed: false,
      items: [
        { text: '甲骨文云服务器 开启IPv6', link: '/vps/oracle-cloud/ipv6' },
        { text: 'Debian系统自动获取IPv6', link: '/vps/oracle-cloud/debian-ipv6' }
      ]
    }
  ]
}

// ESXi安装指南
export function Sidebar_ESXi(): SidebarItem[] {
  return [
    {
      text: 'ESXi 8.0 部署指南',
      // collapsed: true,
      items: [
        { text: 'ESXi 安装指南', link: '/esxi/install/guide' },
        { text: '安装 Openwrt', link: '/esxi/install/openwrt' },
        { text: '安装 AdGuardHome', link: '/esxi/install/adguardhome' },
        { text: '安装 Windows 11', link: '/esxi/install/windows11' }
      ]
    },
    {
      text: 'OpenWrt/iStoreOS',
      // collapsed: true,
      items: [
        { text: 'iStore 插件包', link: '/esxi/openwrt/istore-plugin-package' },
        { text: 'PPPOE拨号', link: '/esxi/openwrt/pppoe-dial-up' },
        { text: '关闭IPV6', link: '/esxi/openwrt/turn-off-ipv6' },
        { text: '实时抓包', link: '/esxi/openwrt/openwrt-real-time-packet-capture' },
        { text: '动态DNS设置', link: '/esxi/openwrt/ddns-settings' },
        { text: '刷新 DNS 缓存', link: '/esxi/openwrt/clear-dns-cache' },
        { text: 'iStoreOS 文件共享步骤', link: '/esxi/openwrt/istoreos-file-sharing-steps' },
        { text: 'H3C NX30Pro 刷 openwrt', link: '/esxi/openwrt/h3c-nx30pro' },
        { text: 'openwrt 安装 clouddrive2', link: '/esxi/openwrt/openwrt-install-clouddrive2' },
        { text: '旁路由设置', link: '/esxi/openwrt/bypass' }
      ]
    }
  ]
}

// 流媒体观影指南
export function Sidebar_streaming(): SidebarItem[] {
  return [
    {
      // text: 'Netflix 观看指南',
      // collapsed: true,
      items: [
        {
          text: 'Netflix 观看指南',
          link: '/streaming/netflix-guide',
          items: [
            { text: '秘密分类的技巧', link: '/streaming/netflix-secret-classification' },
            { text: '全球各国影视剧数量', link: '/streaming/netflix-number-of-movies-and-tv-series' },
            { text: '常用浏览器插件汇总', link: '/streaming/netflix-browser-plug-in-summary' }
          ]
        },
        { text: 'Disney+ 观看指南', link: '/streaming/disney-introduce' },
        { text: 'Spotify Premium 指南', link: '/streaming/spotify' },
        { text: 'YouTube Premium 会员权益及订阅指南', link: '/streaming/youtube' },
        { text: 'Hulu 国内观看指南', link: '/streaming/hulu' },
        { text: 'HBO Max 国内观看指南', link: '/streaming/hbo-max' }
      ]
    }
  ]
}

// AI
export function Sidebar_ai(): SidebarItem[] {
  return [
    {
      text: 'ChatGPT',
      // collapsed: true,
      items: [
        { text: 'ChatGPT 是什么？新手入门指南', link: '/ai/chatgpt/what-is-chatgpt' },
        { text: 'ChatGPT 国内怎么用？(官网+镜像)', link: '/ai/chatgpt/china-access' },
        { text: 'ChatGPT 常见问题与使用技巧', link: '/ai/chatgpt/faq' }
      ]
    },
    {
      text: 'Gemini',
      // collapsed: true,
      items: [
        { text: 'Gemini 是什么？新手入门指南', link: '/ai/gemini/what-is-gemini' },
        { text: 'Gemini 国内怎么用？(官网+镜像)', link: '/ai/gemini/china-access' },
        { text: 'Gemini 常见问题与使用技巧', link: '/ai/gemini/faq' }
      ]
    },
    {
      text: '国内镜像站',
      // collapsed: true,
      items: [{ text: '青龙(QingLong) AI镜像中转站国内使用教程', link: '/ai/mirror/qinglong' }]
    }
  ]
}

// 服务推荐
export function Sidebar_serve(): SidebarItem[] {
  return [
    {
      text: '优质机场汇总',
      link: '/serve/airport/summary',
      // collapsed: true,
      items: [
        { text: `星岛梦(StarDream)${ty}${code}`, link: '/serve/airport/xdm' },
        { text: `Sogo云${code}`, link: '/serve/airport/sogo' },
        { text: `宇宙云(YuZhou)${code}`, link: '/serve/airport/yuzhou' },
        { text: `一翻云(1Fly)${code}`, link: '/serve/airport/1fly' },
        { text: `青云梯(QingYunTi)${cq}`, link: '/serve/airport/qingyunti' },
        { text: `隐云(YinYun)${zc}${wx}`, link: '/serve/airport/yinyun' },
        { text: `二猫云(2mao)${code}`, link: '/serve/airport/2mao' },
        { text: `Echo${code}${zc}`, link: '/serve/airport/echo' },
        { text: `SSLAR${code}`, link: '/serve/airport/sslar' },
        { text: `边缘节点(EdgeNova)${code}`, link: '/serve/airport/edgenova' },
        { text: `快狸(KuaiLi)${code}`, link: '/serve/airport/kuaili' },
        { text: `速界(SuJie)${code}`, link: '/serve/airport/sujie' },
        { text: '可达(KeDa)', link: '/serve/airport/keda' },
        { text: `银河云(GalaxyCloud)${code}`, link: '/serve/airport/galaxy' },
        { text: `光速云(LightSpeed)${code}`, link: '/serve/airport/lightspeed' },
        //  { text: '美乐云(MeiLe)' + zc, link: '/serve/airport/meile' },
        { text: `TNT Cloud${code}`, link: '/serve/airport/tnt' },
        { text: '龙猫云(TotoroCloud)', link: '/serve/airport/totoro' },
        { text: `小蜜蜂(XmfWww)${code}`, link: '/serve/airport/bee' },
        // { text: 'OKANC' + zc, link: '/serve/airport/okanc' },
        { text: '肥猫云(FatCatCloud)', link: '/serve/airport/fatcat' },
        { text: '酷酷云(KuKuCloud)', link: '/serve/airport/kukucloud' },
        // { text: '奈云(NaiYun)' + zc, link: '/serve/airport/naiyun' },
        { text: `飞鸟机场(FlyingBird)${cq}`, link: '/serve/airport/flyingbird' }
      ]
    },
    {
      text: '账号合租平台',
      link: '/serve/sharing/account-sharing-guide',
      // collapsed: true,
      items: [
        { text: '账号星球', link: '/serve/sharing/acc' },
        { text: 'NIKE小店', link: '/serve/sharing/nike' },
        { text: '银河录像局', link: '/serve/sharing/nf-video' }
      ]
    },
    {
      text: '科学上网',
      // collapsed: true,
      items: [
        { text: '2026机场避坑指南：3个关键指标，帮你避开90%的坑', link: '/serve/routes/choose-guide' },
        { text: '直连、中转、专线机场怎么选？', link: '/serve/routes/selection' },
        { text: '直连、中转、专线机场区别', link: '/serve/routes/difference' },
        { text: '直连线路', link: '/serve/routes/direct-route' },
        { text: '中转线路', link: '/serve/routes/transit-route' },
        { text: 'IEPL/IPLC专线', link: '/serve/routes/dedicated-line' },
        { text: '如何判断机场使用线路类型', link: '/serve/routes/determine-line-type' }
      ]
    },
    {
      text: '科学上网软件使用指南',
      link: '/serve/antiwall/summary',
      items: [
        { text: 'Clash Verge Rev', link: '/serve/antiwall/clash-verge-rev' },
        { text: 'v2rayN', link: '/serve/antiwall/v2rayn' },
        { text: 'Clash Party', link: '/serve/antiwall/clash-party' },
        { text: 'FlClash', link: '/serve/antiwall/flclash' },
        { text: 'Surfboard', link: '/serve/antiwall/surfboard' },
        { text: 'Clash meta For Android', link: '/serve/antiwall/clash-meta-for-android' },
        { text: 'NekoBox', link: '/serve/antiwall/nekobox' },
        { text: 'Clash Mi', link: '/serve/antiwall/clash-mi' },
        { text: 'Shadowrocket', link: '/serve/antiwall/shadowrocket' },
        { text: 'Quantumult X', link: '/serve/antiwall/quantumult-x' },
        { text: 'Egern', link: '/serve/antiwall/egern' }
      ]
    },
    {
      text: '接码平台',
      // collapsed: true,
      items: [{ text: `Hero-SMS${code}`, link: '/serve/code/sms' }]
    }
  ]
}
