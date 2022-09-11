const Discord = require("discord.js")

module.exports = {
  name: "donate", // Coloque o nome do comando
  description: "Doar pix para mim", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: 'quantidade',
        description: 'Quantidade de pagamento',
        type: Discord.ApplicationCommandOptionType.Number,
        required: true,
    }
],

  run: async (client, interaction) => {

    let cor_da_embed = "Yellow";
    let numero = interaction.options.getNumber('quantidade')
    let embed_1 = new Discord.EmbedBuilder()
    .setColor(cor_da_embed)
    .setTitle(`Code QR`)
    .setDescription(` \`5337309e-6555-436a-9b2b-63739324870f\`\n**${numero}R$** `)
    .setImage(`https://cdn.discordapp.com/attachments/1014769161467068451/1016953302644183050/Screenshot_20220907-0307432.png`)
    .setTimestamp()

    interaction.reply({ embeds: [embed_1] })

  }
}