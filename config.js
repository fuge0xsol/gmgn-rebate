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
};
