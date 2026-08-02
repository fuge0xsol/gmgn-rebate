/**
 * 返佣网配置 — 修改这里即可
 */
const CONFIG = {
    // GMGN 推荐码
    referralCode: "FpX9SIsb",
    
    // 推荐链接
    get referralLink() {
        return `https://gmgn.ai/r/FpX9SIsb`;
    },
    get websiteLink() {
        return `https://gmgn.ai/r/FpX9SIsb`;
    },
    get botLink() {
        return `https://t.me/gmgnaibot?start=i_FpX9SIsb`;
    },
    
    // 返佣规则
    rebate: {
        gmgnMaxRate: 0.30,
        yourKeepRate: 0.10,
        get userRate() {
            return (CONFIG.rebate.gmgnMaxRate - CONFIG.rebate.yourKeepRate) * 100;
        }
    },
    
    // 结算周期
    settlement: "每周一结算上周（周一00:00 ~ 周日23:59 UTC）",
    
    // Telegram Bot
    botUsername: "fanyongxyz_bot",
    get botLink() {
        return `https://t.me/${this.botUsername}`;
    },
    
    // 支持的链
    chains: ["Solana", "Ethereum", "BSC", "Base", "Robinhood", "Stable", "Arc", "XLayer", "HyperEVM", "MegaETH", "Monad", "Tron"],

    // 合作返佣平台（各平台真实品牌配色 + Logo）
    platforms: [
        {
            name: "GMGN",
            tag: "Smart Money 交易终端",
            desc: "链上一站式交易，Smart Money 追踪，Pump 狙击，Holders 分析",
            chains: "SOL · ETH · BSC · Base",
            rebate: "最高 20%",
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
            rebate: "最高 20%",
            link: "https://debot.ai?inviteCode=FpX9SIsb",
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
            rebate: "最高 15%",
            link: "https://ave.ai?ref=FpX9SIsb",
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
            link: "#",
            color: "#AD76FF",
            color2: "#8B5CF6",
            logo: "assets/logos/xxyy.png",
            active: false
        }
    ],
};
