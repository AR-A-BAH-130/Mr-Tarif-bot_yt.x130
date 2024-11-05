const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = "‣𒁍亗 ɱʀ ƬʌʀᎥʆ Ƴt✓𝐱130";
		const ownAge = "『 16+』";
		const messenger = "https://m.me/bd.afridi.10";
		const authorFB = "https://m.me/Mr.tarif.yt.x130";
		const authorNumber = "‣𒁍01568660030 ";
		const Status = "‣𒁍Single Pro Max ";
		const urls = [
"https://i.imgur.com/8a6M5Ii.gif",
"https://i.imgur.com/8a6M5Ii.gif",
"https://i.imgur.com/8a6M5Ii.gif",
"https://i.imgur.com/8a6M5Ii.gif"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `‣𒁍❏✓𝐁𝐨𝐭✓𝐀𝐧𝐝✓𝐎𝐰𝐧𝐞𝐫✓𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✓❏
╭─❏Bot Name: 
╰‣{global.GoatBot.config.nickNameBot}
╰‣❏Bot System prefix: ${global.GoatBot.config.prefix}
╰‣❏Owner name: ${authorName}
╰‣❏Age: ${ownAge}
╰‣❏Relationship: ${Status}
╰‣❏Wp: ${authorNumber}
╰‣❏Facebook link: ${authorFB}
╰‣❏Date: ${date}
╰‣❏Now Time: ${time}
╰‣❏Any help Contact: $const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = "‣𒁍亗 ɱʀ ƬʌʀᎥʆ Ƴt✓𝐱130";
		const ownAge = "『 16+』";
		const messenger = "https://m.me/bd.afridi.10";
		const authorFB = "https://m.me/Mr.tarif.yt.x130";
		const authorNumber = "‣𒁍01568660030 ";
		const Status = "‣𒁍Single Pro Max ";
		const urls = [
"https://i.imgur.com/8a6M5Ii.gif",
"https://i.imgur.com/8a6M5Ii.gif",
"https://i.imgur.com/8a6M5Ii.gif",
"https://i.imgur.com/8a6M5Ii.gif"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `‣𒁍❏✓𝐁𝐨𝐭✓𝐀𝐧𝐝✓𝐎𝐰𝐧𝐞𝐫✓𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✓❏
╭─❏Bot Name: 
╰‣{global.GoatBot.config.nickNameBot}
╰‣❏Bot System prefix: ${global.GoatBot.config.prefix}
╰‣❏Owner name: ${authorName}
╰‣❏Age: ${ownAge}
╰‣❏Relationship: ${Status}
╰‣❏Wp: ${authorNumber}
╰‣❏Facebook link: ${authorFB}
╰‣❏Date: ${date}
╰‣❏Now Time: ${time}
╰‣❏Any help Contact: ${messenger}
╰‣❏Bot Is Running For: ${uptimeString}
╭─𝑻𝒈:01615796682
╰‣❏𝑰𝒏𝒔𝒕𝒂: ×××
╰‣❏𝑪𝒂𝒑𝑪𝒖𝒕: ar a bah naj 👨🏿‍🌾👨🏾‍🔧🖇️
╰‣❏𝑻𝒊𝒌𝑻𝒐𝒌: md.tarif0196
╰‣❏𝒀𝒐𝒖𝑻𝒖𝒃𝒆: aj nai bole
\‣𒁍j✓❏✓✓✓✓✓✓✓✓✓✓✓✓✓`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};{messenger}
╰‣❏Bot Is Running For: ${uptimeString}
╭─𝑻𝒈:01615796682
╰‣❏𝑰𝒏𝒔𝒕𝒂: ×××
╰‣❏𝑪𝒂𝒑𝑪𝒖𝒕: ar a bah naj 👨🏿‍🌾👨🏾‍🔧🖇️
╰‣❏𝑻𝒊𝒌𝑻𝒐𝒌: md.tarif0196
╰‣❏𝒀𝒐𝒖𝑻𝒖𝒃𝒆: aj nai bole
\‣𒁍j✓❏✓✓✓✓✓✓✓✓✓✓✓✓✓`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
