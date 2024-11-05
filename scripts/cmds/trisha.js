module.exports = {
 config: {
	 name: "trisha",
	 version: "1.0",
	 author: "AceGun|ar a bah~👨🏿‍🌾",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "trisha") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_ᴛʜɪs ʙᴏᴛ ..\n❥︎----ღ᭄_ᴍᴀᴋᴇ ʙʏ ❞࿐👨🏾👨🏾‍🔧\‣𒁍𝙈𝙍✓𝙏𝘼𝙍𝙄𝙁✓𝙔𝙩✓𝐱130 \n\𝙱☺︎︎𝚃 owner\
‣𒁍亗 ɱʀ ƬʌʀᎥʆ Ƴt✓𝐱130」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/VUm00eC.png")
 });
 }
 }
}
