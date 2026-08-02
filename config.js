/**
 * GMGN 返佣网站配置 — 修改这里即可
 */
const CONFIG = {
    // 你的 GMGN 推荐链接（直接用原始链接）
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
        gmgnMaxRate: 0.30,      // GMGN 给你的最高返佣比例 30%
        yourKeepRate: 0.10,      // 你自己留存 10%
        get userRate() {          // 自动计算给用户的返佣
            return (CONFIG.rebate.gmgnMaxRate - CONFIG.rebate.yourKeepRate) * 100;
        }
    },
    
    // 结算周期
    settlement: "每周一结算上周（周一00:00 ~ 周日23:59 UTC）",
    
    // Telegram Bot
    botUsername: "YOUR_BOT_USERNAME",
    
    // 支持的链
    chains: ["Solana", "Ethereum", "BSC", "Base", "Tron", "Blast"],

    // 合作返佣平台（在此修改链接即可）
    platforms: [
        {
            name: "GMGN",
            tag: "Memecoin 交易终端",
            desc: "Solana / Ethereum 链上一站式交易，Smart Money 追踪，Pump 狙击",
            chains: "SOL · ETH · BSC · Base",
            rebate: "最高 20%",
            link: "https://gmgn.ai/r/FpX9SIsb",
            color: "#00FF88",
            icon: "G",
            active: true
        },
        {
            name: "Debot",
            tag: "全链交易 Bot",
            desc: "Telegram Bot 即时交易，限价单、止盈止损、跟单系统",
            chains: "SOL · ETH · BSC · Base",
            rebate: "最高 20%",
            link: "https://debot.ai?inviteCode=FpX9SIsb",
            color: "#5B8DEF",
            icon: "D",
            active: true
        },
        {
            name: "AVE.ai",
            tag: "链上行情 + 交易",
            desc: "实时链上数据，代币深度分析，一键 Swap 交易",
            chains: "SOL · ETH · BSC · Base · Arbitrum",
            rebate: "最高 15%",
            link: "https://ave.ai?ref=FpX9SIsb",
            color: "#F0B90B",
            icon: "A",
            active: true
        },
        {
            name: "XXYY",
            tag: "新兴交易聚合器",
            desc: "多链聚合 Swap，最优路径，MEV 防护",
            chains: "SOL · ETH · BSC",
            rebate: "最高 15%",
            link: "#",
            color: "#FF6B6B",
            icon: "X",
            active: false
        }
    ],
};
