const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login('NDMyNDc5NDE0NTI2MTQ4NjA4.Daulpg.DTk81Zy3c5dCbOsUKPkSIZBMaSA')

bot.on('ready', function (){
	bot.user.setGame('!help').catch(console.error)
})

bot.on('message', message => {
  if (message.content === '!help') {
		message.guild.channels.find("name", "general").send("Voilà les différentes commandes disponibles : - !info - !servers")
  }
})

bot.on('message', message => {
  if (message.content === '!info') {
		message.guild.channels.find("name", "general").send("Les administrateurs de ce serveur CSGO / Fortnite sont GRY et Charivara, et n'importe qui est convié à nous rejoindre. On accepte ici des joueurs de tous niveaux, et tout le monde peut créer un lien d'invitation. Contactez GRY si vous avez des suggestions concernant le serveur ou le FØXBOT.")
  }
})

bot.on('message', message => {
  if (message.content === '!servers') {
		message.guild.channels.find("name", "general").send("Traqueur de serveurs CSGO FR : https://www.gametracker.com/search/csgo/FR.")
		message.guild.channels.find("name", "general").send("Serveurs Outfrag (Retakes / Executes) : http://outfrag.eu/bans.")
  }
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
