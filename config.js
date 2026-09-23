/**
 * 返佣网配置 — 修改这里即可
 * 全站返佣率以 platforms[].rebateRate 为唯一数据源：
 * Hero 最高返佣、统计栏、收益计算器均自动引用，改比例只动这里。
 */
const CONFIG = {
    // Telegram Bot（返佣查询/领取）
    botUsername: "fanyongxyz_bot",
    get botLink() {
        return `https://t.me/${this.botUsername}`;
    },

    // 结算周期
    settlement: "每周一结算上周（周一00:00 ~ 周日23:59 UTC）",

    // 最低领取门槛（美元/周，不满自动滚存下周）
    minPayout: 10,

    // 支持的链
    chains: ["Solana", "Ethereum", "BSC", "Base", "Robinhood", "Stable", "Arc", "XLayer", "HyperEVM", "MegaETH", "Monad", "Tron"],

    // 合作返佣平台（各平台真实品牌配色 + Logo）
    // rebate: 展示文案；rebateRate: 数值费率（计算器与全站引用）
    platforms: [
        {
            name: "GMGN",
            tag: "Smart Money 交易终端",
            desc: "链上一站式交易，Smart Money 追踪，Pump 狙击，Holders 分析",
            chains: "SOL · ETH · BSC · Base",
            rebate: "最高 15%",
            rebateRate: 0.15,
            link: "https://gmgn.ai/r/FpX9SIsb",
            color: "#00FF88",
            color2: "#00DDAA",
            logo: "assets/logos/gmgn.png",
            active: true
        },
        {
            name: "Debot",
            tag: "Telegram 全链交易 Bot",
            desc: "Telegram Bot 即时交易，限价单、止盈止损、跟单系统，MEV 防护",
            chains: "SOL · ETH · BSC · Base",
            rebate: "最高 45% · 自动返",
            rebateRate: 0.45,
            link: "https://debot.ai/r/fanyongxyz",
            color: "#38BDF8",
            color2: "#0EA5E9",
            logo: "assets/logos/debot.png",
            active: true
        },
        {
            name: "AVE.ai",
            tag: "链上数据 + 一键交易",
            desc: "实时链上行情，代币深度分析，Smart Money 追踪，一键 Swap",
            chains: "SOL · ETH · BSC · Base · Arbitrum",
            rebate: "最高 30%",
            rebateRate: 0.30,
            link: "https://share.ave.ai?lang=zh-cn&code=fugesol",
            color: "#12B886",
            color2: "#3F80F7",
            logo: "assets/logos/ave.svg",
            active: true
        },
        {
            name: "XXYY",
            tag: "Fast Trading as Lightning",
            desc: "闪电级交易速度，实时 K 线，限价单，Smart Money 跟单",
            chains: "SOL · ETH · BSC",
            rebate: "最高 15%",
            rebateRate: 0.15,
            link: "#",
            color: "#AD76FF",
            color2: "#8B5CF6",
            logo: "assets/logos/xxyy.png",
            active: false
        }
    ],

    // 站内最高返佣（自动取已上线平台的最大费率）
    get maxRate() {
        return Math.max(...this.platforms.filter(p => p.active).map(p => p.rebateRate));
    }
};
