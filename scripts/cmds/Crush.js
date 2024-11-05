module.exports = {
 config: {
	 name: "crush",
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
 if (event.body && event.body.toLowerCase() === "crush") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_My emotion🙈🥹😘 ..\n❥︎----ღ᭄\n\n𝙱☺︎︎𝚃 owner\°
 ‣𒁍亗 ɱʀ ƬʌʀᎥʆ Ƴt✓𝐱130」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/fiUWX0X.mp4")
 });
 }
 }
}
