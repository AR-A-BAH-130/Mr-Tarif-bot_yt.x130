module.exports = {
 config: {
	 name: "Tarif",
	 version: "1.0",
	 author: "AceGun|ar a bah~👨🏿‍🌾",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "𝗡𝗢 𝗣𝗥𝗘𝗙𝗜𝗫",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "tarif") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_ᴛʜɪs ʙᴏᴛ ..\n❥︎----ღ᭄_ᴍᴀᴋᴇ ʙʏ ❞࿐🌴.\‣𒁍Ꮇʀ✓┳ꋬɾ꒐ᶠ✓𝐱130,ᴏᴋʜ ʙʏᴇ\n\n𝙱☺︎︎𝚃 owner\‣𒁍亗 ɱʀ ƬʌʀᎥʆ Ƴt✓𝐱130」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/tKgVilB.mp4")
 });
 }
 }
}
