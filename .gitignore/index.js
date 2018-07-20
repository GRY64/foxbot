const Discord = require('discord.js')
const bot = new Discord.Client()
const Client = require("fortnite");
const fortnite = new Client("dedb0aa4-2947-4e6e-bd60-6b0e43ca47c8");

bot.on('ready', function (){
	bot.user.setActivity('!help', { type: 'WATCHING' })
})

bot.on("guildMemberAdd", member => {
	var guildMember = new Discord.RichEmbed()
	.setTitle("✅ Nouvel arrivant !")
	.setDescription("Bienvenue à " + member.displayName + " sur le Discord FØX Clan ! Utilise la commande !help pour accéder à la liste des commandes disponibles.")
	.setColor("#50D84C")
    member.guild.channels.find("name", "general").send(guildMember)
    var role = member.guild.roles.find("name", "Soldats");
	member.addRole(role)
})

bot.on("guildMemberRemove", member => {
	var guildMember = new Discord.RichEmbed()
	.setTitle("❌ Quelqu'un a déserté !")
	.setDescription(member.displayName + " a quitté le serveur... J'ai toujours dit que c'était un noob !")
	.setColor("#FD4040")
	member.guild.channels.find("name", "general").send(guildMember)
})

bot.on('message', message => {

    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.content === '!help') {
        message.delete();
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

    if (message.content === '!info') {
        message.delete();
        var info = new Discord.RichEmbed()
        .setTitle("ℹ️ Informations")
        .setDescription("Les administrateurs de ce serveur CSGO / Fortnite sont GRY et Charivara, et n'importe qui est convié à nous rejoindre. On accepte ici des joueurs de tous niveaux, et tout le monde peut créer un lien d'invitation. Contactez GRY si vous avez des suggestions concernant le serveur ou le FØXBOT.")
        .setColor("0xE37A01")
        .setThumbnail(url="http://image.noelshack.com/fichiers/2018/27/4/1530815418-nouveau-logo12.png")
        message.channel.send(info);
    }

    if (message.content === '!servers') {
        message.delete();
        var servers = new Discord.RichEmbed()
        .setTitle("🌎 Serveurs")
        .setDescription("Listes de serveurs CSGO recommandés pour s'échauffer.")
        .addField("🔫 Traqueur de serveurs CSGO FR", "`https://www.gametracker.com/search/csgo/FR`", false)
        .addField("🔫 Serveurs Outfrag (Retakes / Executes)", "`http://outfrag.eu/bans`", false)
        .setColor("0xE37A01")
        .setThumbnail(url="http://www.icon100.com/up/2841/256/csgo.png")
        message.channel.send(servers);
    }

    if (message.content === '!color') {
        message.delete();
        var help = new Discord.RichEmbed()
        .setTitle("🎨 Changement de couleur")
        .setDescription("Vous pouvez changer la couleur d'affichage de votre pseudonyme. Vous avez le choix entre 10 couleurs différentes (9 + celle par défaut), que vous pouvez visionner ci-dessous.")
        .addField("🔠 Syntaxe", "`!<couleur>`", true)
        .addField("🖌️ Liste des couleurs", "10 couleurs disponibles :", true)
        .setColor("0xE37A01")
        .setImage(url="http://image.noelshack.com/fichiers/2018/27/4/1530818757-color.png")
        message.channel.send(help);
    }

    if (message.content === '!defaut') {
        message.delete();

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

        roleName = message.member.id;
        role10 = message.guild.roles.find("name", roleName);
        message.member.removeRole(role10)

        var info = new Discord.RichEmbed()
        .setTitle("🎨 Changement de couleur")
        .setDescription("Salut " + message.member.displayName + ", la couleur de ton pseudonyme a été réinitialisée !")
        message.channel.send(info);
    }

    if (message.content === '!jaune') {
        message.delete();
        
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
        .setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur `jaune` !")
        .setColor("#ffd600")
        message.channel.send(info);
        }

    if (message.content === '!orange') {
        message.delete();

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
        .setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur `orange` !")
        .setColor("#ff6f00")
        message.channel.send(info);
    }

    if (message.content === '!rouge') {
        message.delete();

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
        .setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur `rouge` !")
        .setColor("#cf2828")
        message.channel.send(info);
        }

    if (message.content === '!bleu') {
        message.delete();
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
        .setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur `bleue` !")
        .setColor("#3238cf")
        message.channel.send(info);
    }

    if (message.content === '!cyan') {
        message.delete();

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
        .setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur `cyan` !")
        .setColor("#0787d3")
        message.channel.send(info);
    }

    if (message.content === '!violet') {
        message.delete();

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
        .setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur `violette` !")
        .setColor("#a55dff")
        message.channel.send(info);
    }

    if (message.content === '!rose') {
        message.delete();

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
        .setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur `rose` !")
        .setColor("#ff4be4")
        message.channel.send(info);
    }

    if (message.content === '!vert') {
        message.delete();

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
        .setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur `verte` !")
        .setColor("#04a20d")
        message.channel.send(info);
    }

    if (message.content === '!marron') {
        message.delete();

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
        .setDescription("Salut " + message.member.displayName + ", ton pseudonyme apparaîtra dorénavant de couleur `marron` !")
        .setColor("#af5305")
        message.channel.send(info);
    }

    if(command === "customcolor") {

        color = args[0];

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

        roleName = message.member.id;
        role = message.guild.roles.find("name", roleName)

        if(role === null && color != undefined){
            message.guild.createRole({name : roleName, color : color})

            newColor = new Discord.RichEmbed()
            .setTitle("🎨 Changement de couleur")
            .setDescription("Un emplacement de couleur personnalisée vous a été attribuée, retapez votre commande pour en modifier la couleur.")
            .setColor("#0xE37A01")
        
        message.channel.send(newColor)
        message.delete();

        }if (role != null && color != undefined){
            role.setColor(color)
            message.member.addRole(role)

            newColor = new Discord.RichEmbed()
            .setTitle("🎨 Changement de couleur")
            .setDescription("Salut " + message.member.displayName + ", ta couleur personnalisée a bien été définie sur `" + color + "` !")
            .setColor(color)
        
        message.channel.send(newColor)
        message.delete();
        }
    }

    msgContent = message.content.toLowerCase();
    if(msgContent === "!customcolor") {
        customColor = new Discord.RichEmbed()
        .setTitle("Couleur customisable")
        .setDescription("Cette commande vous permet de choisir une couleur personnalisée. La couleur choisie doit préférablement être donnée en hexadécimal (#000000) comme le suggère l'image en haut à droite.")
        .setColor("#0xE37A01")
        .addField("Syntaxe", "`!customColor <colorCode>`", true)
        .setThumbnail("https://www.softpress.com/chroma/Resources/exibid_sample-colors.jpg")
        
        message.channel.send(customColor)
        message.delete();
    }

    if (message.content === '!maj1.1') {
        message.delete();
        var maj = new Discord.RichEmbed()
        .setTitle("🦊 FIX 1.1 | Le retour du FOXBOT")
        .setDescription("Salut tout le monde ! Après quelques jours d'absence, je suis de retour ! Je suis vraiment désolé pour la déconvenue (spam de notifications), je ne pensais qu'il était possible de se faire 'hacker' son bot Discord, tant ça parait inutile. La faille exploitée a été fixée, et voici les nouveautées de la dernière version du FOXBOT :")
        .addField("🔒 Correctifs de sécurité", "La clé (token) permettant le contrôle du bot n'est plus publique (variable stockée en dehors du dossier GitHub), ainsi plus personne ne peut intéragir avec lui mis à part son créateur. Le code est quant à lui toujours public.", true)
        .addField("📋 Modifications mineures", "Les commandes !help, !info, !servers, ainsi que l'intégralité des messages envoyés par le FOXBOT ont été modifiés.", true)
        .addField("🎨 Nouvelle commande", "La commande !color vous permet dorénavant de changer la couleur de votre pseudonyme sur le serveur !", true)
        .setColor("0xE37A01")
        .setThumbnail(url="http://image.noelshack.com/fichiers/2018/27/4/1530815418-nouveau-logo12.png")
        message.channel.send(maj);
    }

    if (message.content === '!maj1.2') {
        message.delete();
        var maj = new Discord.RichEmbed()
        .setTitle("🦊 FIX 1.2 | Statistiques Fortnite et Couleurs Infinies")
        .setDescription("Salut tout le monde ! Nouvelle mise à jour majeure du FOXBOT, voici les nouveautés :")
        .addField("⚔️ Statistiques Fortnite", "La toute nouvelle commande `!ftn` permet à tout le monde d'accéder à ses statistiques globales Fortnite sans avoir à quitter Discord. Des statistiques classées par mode seront prochainement disponibles (solo / duo / squad).", true)
        .addField("🎨 Couleurs infinies", "La nouvelle commande `!customColor` permet dorénavant de choisir une couleur parmi les `16 777 216 combinaisons` disponibles à l'aide du format hexadécimal !", true)
        .addField("📋 Modifications mineures", 'Toutes les commandes rentrées sont automatiquement supprimées une fois assimilées par le bot afin de ne pas flood le chat. Tous les messages envoyés par le bot, ainsi que son activité ("joue à...") ont été légèrement modifiés.', true)
        .addField("📂 Open-Source", "Le code du FOXBOT est accessible à tous : `https://github.com/GRY64/foxbot/blob/master/.gitignore/index.js`. N'hésitez pas à y jeter un oeil si vous êtes curieux !", true)
        .setColor("0xE37A01")
        .setThumbnail(url="http://image.noelshack.com/fichiers/2018/27/4/1530815418-nouveau-logo12.png")
        message.channel.send(maj);
    }


    if (command === 'ftn') {
        message.delete();
        let username = args[0];
        let platform = args[1] || 'pc';

        let ftnEmbed = new Discord.RichEmbed()
        .setTitle("FØXBOT Fortnite Statistics")
        .setColor("#0xE37A01")
        .setThumbnail(url="https://vignette.wikia.nocookie.net/fortnite/images/b/b2/Battle_Pass_icon.png/revision/latest?cb=20180315182746")
        .setDescription("Cette commande vous permet d'accéder à vos statisques Fortnite, à l'aide de la base de donnée Fortnite Tracker.")
        .addField("Syntaxe", "`!ftn <username> <platform>`", true);

        if(!username) return message.channel.send(ftnEmbed)

        let data = fortnite.user(username, platform).then(data => {
        console.log(data);
        let stats = data.stats;
        let lifetime = stats.lifetime;
        console.log(lifetime);

        let scoreLF = lifetime[6]['Score'];
        let mplayedLF = lifetime[7]['Matches Played'];
        let winsLF = lifetime[8]['Wins'];
        let winperLF = lifetime[9]['Win%'];
        let killsLF = lifetime[10]['Kills'];
        let kdLF = lifetime[11]['K/d'];

        let embed = new Discord.RichEmbed()
        .setTitle(data.username + " | Statistiques globales ⚔️")
        .setColor("#0xE37A01")
        .setThumbnail(url="https://vignette.wikia.nocookie.net/fortnite/images/b/b2/Battle_Pass_icon.png/revision/latest?cb=20180315182746")
        .addField("KDR", kdLF, true)
        .addField("TOP #1", winsLF, true)
        .addField("Kills", killsLF, true)
        .addField("Parties jouées", mplayedLF, true)
        .addField("Score", scoreLF, true)
        .addField("Pourcentage de victoires", winperLF, true)
        .setFooter("by Fortnite Tracker & GRY", "http://image.noelshack.com/fichiers/2018/29/5/1532087960-nouveau-logo12.png");
        message.channel.send(embed);
        })
    }

})

bot.login(process.env.TOKEN)

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
