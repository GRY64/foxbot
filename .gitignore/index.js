const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login(process.env.TOKEN)

bot.on('message', message => {
	if (message.content === '!testColor') {
		var role = message.guild.roles.find("name", "message.member")
		if (role === null) {
			message.guild.createRole({name : "message.member", color : "#FFFFFF"});
			message.member.addRole(role)
		}
		else {
			role.setColor("#FFFFFF")
			message.channel.send("non null " + role)
			message.member.addRole(role)
		}
	}
})

bot.on('ready', function (){
	bot.user.setGame('!help').catch(console.error)
})

bot.on("guildMemberAdd", member => {
	var guildMember = new Discord.RichEmbed()
	.setTitle("✅ Nouvel arrivant !")
	.setDescription("Bienvenue à " + member.displayName + " sur le Discord FØX Clan ! Utilise la commande !help pour accéder à la liste des commandes disponibles.")
	.setColor("#50D84C")
	member.guild.channels.find("name", "general").send(guildMember)
})

bot.on("guildMemberRemove", member => {
	var guildMember = new Discord.RichEmbed()
	.setTitle("❌ Quelqu'un a déserté !")
	.setDescription(member.displayName + " a quitté le serveur... J'ai toujours dit que c'était un noob !")
	.setColor("#FD4040")
	member.guild.channels.find("name", "general").send(guildMember)
})

bot.on("guildMemberAdd", member => {
	var role = member.guild.roles.find("name", "Soldats");
	member.addRole(role)
})

bot.on('message', message => {
  if (message.content === '!defaut') {

		var role1 = message.guild.roles.find("name", "jaune");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "rouge");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "orange");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "cyan");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "rose");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "bleu");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "violet");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "vert");
		message.member.removeRole(role8)

		var role9 = message.guild.roles.find("name", "marron");
		message.member.removeRole(role9)

		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", la couleur de ton pseudonyme a été réinitialisée !")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!jaune') {
		var role = message.guild.roles.find("name", "jaune");
		message.member.addRole(role)

		var role1 = message.guild.roles.find("name", "orange");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "rouge");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "bleu");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "cyan");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "rose");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "marron");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "violet");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "vert");
		message.member.removeRole(role8)
		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur jaune !")
		.setColor("#ffd600")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!orange') {
		var role = message.guild.roles.find("name", "orange");
		message.member.addRole(role)

		var role1 = message.guild.roles.find("name", "jaune");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "rouge");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "bleu");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "cyan");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "rose");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "marron");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "violet");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "vert");
		message.member.removeRole(role8)

		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur orange !")
		.setColor("#ff6f00")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!rouge') {
		var role = message.guild.roles.find("name", "rouge");
		message.member.addRole(role)

		var role1 = message.guild.roles.find("name", "jaune");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "orange");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "bleu");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "cyan");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "rose");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "marron");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "violet");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "vert");
		message.member.removeRole(role8)

		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur rouge !")
		.setColor("#cf2828")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!bleu') {
		var role = message.guild.roles.find("name", "bleu");
		message.member.addRole(role)

		var role1 = message.guild.roles.find("name", "jaune");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "rouge");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "orange");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "cyan");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "rose");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "marron");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "violet");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "vert");
		message.member.removeRole(role8)

		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur bleue !")
		.setColor("#3238cf")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!cyan') {
		var role = message.guild.roles.find("name", "cyan");
		message.member.addRole(role)

		var role1 = message.guild.roles.find("name", "jaune");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "rouge");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "orange");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "bleu");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "rose");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "marron");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "violet");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "vert");
		message.member.removeRole(role8)

		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur cyan !")
		.setColor("#0787d3")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!violet') {
		var role = message.guild.roles.find("name", "violet");
		message.member.addRole(role)

		var role1 = message.guild.roles.find("name", "jaune");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "rouge");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "orange");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "cyan");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "rose");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "marron");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "bleu");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "vert");
		message.member.removeRole(role8)

		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur violette !")
		.setColor("#a55dff")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!rose') {
		var role = message.guild.roles.find("name", "rose");
		message.member.addRole(role)

		var role1 = message.guild.roles.find("name", "jaune");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "rouge");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "orange");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "cyan");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "bleu");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "marron");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "violet");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "vert");
		message.member.removeRole(role8)

		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur rose !")
		.setColor("#ff4be4")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!vert') {
		var role = message.guild.roles.find("name", "vert");
		message.member.addRole(role)

		var role1 = message.guild.roles.find("name", "jaune");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "rouge");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "orange");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "cyan");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "rose");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "marron");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "violet");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "bleu");
		message.member.removeRole(role8)

		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur verte !")
		.setColor("#04a20d")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!marron') {
		var role = message.guild.roles.find("name", "marron");
		message.member.addRole(role)

		var role1 = message.guild.roles.find("name", "jaune");
		message.member.removeRole(role1)

		var role2 = message.guild.roles.find("name", "rouge");
		message.member.removeRole(role2)

		var role3 = message.guild.roles.find("name", "orange");
		message.member.removeRole(role3)

		var role4 = message.guild.roles.find("name", "cyan");
		message.member.removeRole(role4)

		var role5 = message.guild.roles.find("name", "rose");
		message.member.removeRole(role5)

		var role6 = message.guild.roles.find("name", "bleu");
		message.member.removeRole(role6)

		var role7 = message.guild.roles.find("name", "violet");
		message.member.removeRole(role7)

		var role8 = message.guild.roles.find("name", "vert");
		message.member.removeRole(role8)

		var info = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur marron !")
		.setColor("#af5305")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!help') {
    var help = new Discord.RichEmbed()
		.setTitle("⁉️ HELP")
		.setDescription("Liste des commandes disponibles. N'hésitez pas à faire vos suggestions afin d'agrandir cette liste.")
		.setFooter("by GRY | 2018")
		.addField("ℹ️ !info", "Informations concernant le serveur.", true)
		.addField("🌎 !servers", "Serveurs CSGO recommandés.", true)
		.addField("🎨 !color", "Changement de couleur.", true)
		.setColor("0xE37A01")
		.setThumbnail(url="https://housing.umn.edu/sites/housing.umn.edu/files/help.png")
		message.channel.send(help);
  }
})

bot.on('message', message => {
  if (message.content === '!info') {
    var info = new Discord.RichEmbed()
		.setTitle("ℹ️ Informations")
		.setDescription("Les administrateurs de ce serveur CSGO / Fortnite sont GRY et Charivara, et n'importe qui est convié à nous rejoindre. On accepte ici des joueurs de tous niveaux, et tout le monde peut créer un lien d'invitation. Contactez GRY si vous avez des suggestions concernant le serveur ou le FØXBOT.")
		.setColor("0xE37A01")
		.setThumbnail(url="http://image.noelshack.com/fichiers/2018/27/4/1530815418-nouveau-logo12.png")
		message.channel.send(info);
  }
})

bot.on('message', message => {
  if (message.content === '!servers') {
    var servers = new Discord.RichEmbed()
		.setTitle("🌎 Serveurs")
		.setDescription("Listes de serveurs CSGO recommandés pour s'échauffer.")
		.addField("🔫 Traqueur de serveurs CSGO FR", "https://www.gametracker.com/search/csgo/FR", false)
		.addField("🔫 Serveurs Outfrag (Retakes / Executes)", "http://outfrag.eu/bans", false)
		.setColor("0xE37A01")
		.setThumbnail(url="http://www.icon100.com/up/2841/256/csgo.png")
		message.channel.send(servers);
  }
})

bot.on('message', message => {
  if (message.content === '!color') {
    var help = new Discord.RichEmbed()
		.setTitle("🎨 Changement de couleur")
		.setDescription("Vous pouvez changer la couleur d'affichage de votre pseudonyme. Vous avez le choix entre 10 couleurs différentes (9 + celle par défaut), que vous pouvez visionner ci-dessous.")
		.addField("🔠 Syntaxe", "![couleur]", true)
		.addField("🖌️ Liste des couleurs", "10 couleurs disponibles :", true)
		.setColor("0xE37A01")
		.setImage(url="http://image.noelshack.com/fichiers/2018/27/4/1530818757-color.png")
		message.channel.send(help);
  }
})

bot.on('message', message => {
  if (message.content === '!maj') {
    var maj = new Discord.RichEmbed()
		.setTitle("🦊 FIX 1.1 | Le retour du FOXBOT")
		.setDescription("Salut @everyone ! Après quelques jours d'absence, je suis de retour ! Je suis vraiment désolé pour la déconvenue (spam de notifications), je ne pensais qu'il était possible de se faire 'hacker' son bot Discord, tant ça parait inutile. La faille exploitée a été fixée, et voici les nouveautées de la dernière version du FOXBOT :")
		.addField("🔒 Correctifs de sécurité", "La clé (token) permettant le contrôle du bot n'est plus publique (variable stockée en dehors du dossier GitHub), ainsi plus personne ne peut intéragir avec lui mis à part son créateur. Le code est quant à lui toujours public.", true)
		.addField("📋 Modifications mineures", "Les commandes !help, !info, !servers, ainsi que l'intégralité des messages envoyés par le FOXBOT ont été modifiés.", true)
		.addField("🎨 Nouvelle commande", "La commande !color vous permet dorénavant de changer la couleur de votre pseudonyme sur le serveur !", true)
		.setColor("0xE37A01")
		.setThumbnail(url="http://image.noelshack.com/fichiers/2018/27/4/1530815418-nouveau-logo12.png")
		message.channel.send(maj);
  }
})

/*colors 
rouge : #cf2828
orange : #ff6f00
jaune : #ffd600
bleu : #3238cf
cyan : #0787d3
violet : #a55dff
vert : #04a20d
rose : #ff4be4
marron : #af5305
*/
