const moment = require('moment-timezone');

module.exports = {
    config: {
        name: "info",
        version: "1.0",
        countDown: 20,
        role: 0,
        author: "dipto",
        description: "Owner information",
        category: "owner",
        guide: "{p}"
    },
  onStart: async ({ api, message ,event }) => {
        try {
            const botName = "✑Ꮇʀᵀᴬᴿᴵᶠ~𝙱𝙾𝚃~Ұ₮࿐";
            const botPrefix = "!";
            const authorName = "亗ㅤɱʀ Tʌʀɩʆ Ƴtㅤ亗";
            const ownAge = "16+";
            const teamName = "𝙈𝙍 𝙏𝘼𝙍𝙄𝙁 𝙔𝙩 team";
      const authorFB = "https://m.me/mr.tarif.yt130.T";
          const authorInsta = "aj nai bole";
  const link = "https://i.imgur.com/8a6M5Ii.gif";
        const now = moment().tz('Asia/Dhaka');
      const date = now.format('MMMM Do YYYY');
          const time = now.format('h:mm:ss A');
            const uptime = process.uptime();
      const seconds = Math.floor(uptime % 60);
const minutes = Math.floor((uptime / 60) % 60);
const hours = Math.floor((uptime / (60 * 60)) % 24);
const days = Math.floor(uptime / (60 * 60 * 24));
const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
            const buttons = {
                inline_keyboard: [
                    [
        { text: "Facebook", url: authorFB },
  { text: "Instagram", url: `https://t.me/${authorInsta}` }
                    ]
                ]
            };

            const caption = `
• Bot & Owner Info
╰‣ Bot Name: ${botName}
╰‣ Bot Prefix: ${botPrefix}
╰‣ Owner: ${authorName}
╰‣ Age: ${ownAge}
╰‣ Facebook: ${authorFB}
╰‣ Instagram: ${authorInsta}
╰‣ Date: ${date}
╰‣ Time: ${time}
╰‣ Team: ${teamName}
╰‣ Uptime: ${uptimeString}`;

            const hh = await api.sendPhoto(event.chat.id ,link, {caption: caption, reply_markup: buttons });
            setTimeout(() => {
             message.unsend(hh.message_id);
            }, 40000);
        } catch (error) {
            console.error("Error reading config file:", error);
        }
    },
    onChat: async function ({ event, message }) {
        if (event.body?.toLowerCase() === "info" || event.body?.toLowerCase() === "owner") {
            this.onStart({ message });
        }
    }
};