const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login(process.env.TOKEN)

bot.on('ready', function (){
	bot.user.setGame('!help').catch(console.error)
})

bot.on("guildMemberAdd", member => {
	member.guild.channels.find("name", "general").send("```Bienvenue à " + member.displayName + " sur le Discord FØX Clan ! Utilise la commande !help pour accéder à la liste des commandes disponibles.```")
})

bot.on("guildMemberRemove", member => {
	member.guild.channels.find("name", "general").send("```" + member.displayName + " a quitté le serveur... J'ai toujours dit que c'était un noob !```")
})

bot.on("guildMemberAdd", member => {
	var role = member.guild.roles.find("name", "Soldats");
	member.addRole(role)
})

bot.on("member", message => {
  if (message.content === '!jaune') {
    var roleColor = member.guild.roles.find("name", "jaune");
	member.addRole(roleColor)
  }
})

bot.on('message', message => {
  if (message.content === '!help') {
    var help = new Discord.RichEmbed()
		.setTitle("🆘 Help")
		.setDescription("Liste des commandes disponibles.")
		.addField("ℹ️ !info", "Informations.", true)
		.addField("🌎 !servers", "Serveurs CSGO recommandés.", true)
		.setColor("0xE37A01")
		message.channel.send(help);
  }
})

bot.on('message', message => {
  if (message.content === '!info') {
    var info = new Discord.RichEmbed()
		.setTitle("ℹ️ Informations")
		.setDescription("Les administrateurs de ce serveur CSGO / Fortnite sont GRY et Charivara, et n'importe qui est convié à nous rejoindre. On accepte ici des joueurs de tous niveaux, et tout le monde peut créer un lien d'invitation. Contactez GRY si vous avez des suggestions concernant le serveur ou le FØXBOT.")
		.setColor("0xE37A01")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!servers') {
    var servers = new Discord.RichEmbed()
		.setTitle("🌎 Serveurs")
		.setDescription("Listes de serveurs CSGO recommandés pour s'échauffer.")
		.addField("🔫 Traqueur de serveurs CSGO FR", "https://www.gametracker.com/search/csgo/FR", true)
		.addField("🔫 Serveurs Outfrag (Retakes / Executes)", "http://outfrag.eu/bans", true)
		.setColor("0xE37A01")
		message.channel.send(servers);
  }
})
