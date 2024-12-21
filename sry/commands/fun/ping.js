const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: '延遲',
  description: 'Ping!',
  async execute(message, args) {
    const sent = await message.channel.send('計算中...');
    const latency = sent.createdTimestamp - message.createdTimestamp;

    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('目前延遲!')
      .addFields(
        { name: '延遲', value: `${latency}ms`, inline: true },
        { name: 'API 延遲', value: `${Math.round(message.client.ws.ping)}ms`, inline: true }
      )
      .setTimestamp();

    sent.edit({ content: ' ', embeds: [embed] });
  },
};
