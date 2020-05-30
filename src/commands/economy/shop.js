
const Discord = require('discord.js');

module.exports = {
    /**
     * 
     * @param {Discord.Client} client Client
     * @param {Discord.Message} message Message
     * @param {Array} args Arguments
     */
    run: async function (client, message, [action, key]) {
        if (action === 'view') {
            if (!key) {
                return message.channel.send(new Discord.MessageEmbed()
                    .setColor(`RED`)
                    .setDescription(`You didn\'nt provide any arguments at \`[item]\`
                                Usage: \`${await message.guild.db.settings('prefix')}shop view [item]\`
                                Example: \`${await message.guild.db.settings('prefix')}shop view bread\``));
            }
            const item = client.shopitems.get(key.toLowerCase());
            if (!item) {
                return message.channel.send(new Discord.MessageEmbed()
                    .setColor(`RED`)
                    .setDescription(`Sorry, That item doesn\'t exists.`));
            };
            return message.channel.send(new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`${item.config.displayname}`)
                .setDescription(`**Price** : **${item.options.price}**\n**Description** : ${item.config.description}\n**ID** : \`${item.config.id}\``));
        }
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('**Shop**')
            .setDescription(`You can also do \`${await message.guild.db.settings('prefix')}shop view [item]\` to get an information from a specific item.\nYou currently have **${await message.author.db.coins.fetch()}** 💰`);
        const ITEMS = client.chunk(client.shopitems.sort((a, b) => b.options.price - a.options.price), 3);
        const pages = ITEMS.length;
        if (!pages) {
            return message.channel.send(new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription('The Shop is temporarily closed for today.'));
        }
        const PAGE = Number(action);
        if (!PAGE) {
            // ¯\_(ツ)_/¯
        } else if (PAGE > 0 && PAGE <= pages) {
            ITEMS[PAGE - 1].map(item => {
                embed.addField(`${item.config.displayname} ─ __**${item.options.price}**__ Coins`, `• ${item.config.description}\nID : \`${item.config.id}\``, false);
            });
            embed.setFooter(`Page ${PAGE} of ${pages} | ${message.author.tag}`, message.author.displayAvatarURL);
            return message.channel.send(embed);
        }
        ITEMS[0].map(item => {
            embed.addField(`${item.config.displayname} ─ __**${item.options.price}**__ Coins`, `• ${item.config.description}\nID : \`${item.config.id}\``, false);
        });
        embed.setFooter(`Page 1 of ${pages} | ${message.author.tag}`, message.author.displayAvatarURL);
        return message.channel.send(embed);
    },
    config: {
        name: 'shop',
        description: 'Shows buyable items from the shop!',
        permission: 'User',
    },
    options: {
        aliases: ['market', 'shopee', 'amazon', 'store'],
        clientPermissions: [],
        cooldown: 3,
        nsfwCommand: false,
        args: false,
        usage: 'shop view [Item]\nshop page [Page]',
        donatorOnly: false,
        premiumServer: false,
    }
}