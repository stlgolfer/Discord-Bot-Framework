/**
 * Connects to the user's voice channel and plays a file
 * @param  {Message} message the inbound message
 */
function connectToChannel(message) {
        if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                .then(connection => {
                        message.reply('Connected to voice channel');
                        connection.playFile(__dirname + '/../sounds/yuh.mp3');
                })
                .catch(console.error());
                // message.reply("'Couldn't connect to voice channel");
        }
        else {
                message.reply('You must be in a voice channel for swag-bot to join a voice channel');
        }
}

/**
 * Disconnects from the user's voice channel
 * @param  {Message} message the inbound message
 */
function disconnectFromChannel(message) {
        if (message.member.voiceChannel) {
                message.member.voiceChannel.leave();
        }
        else {
                message.reply('You must be in a voice channel for swag-bot to leave a voice channel');
        }
}

module.exports.connectToChannel = connectToChannel;
module.exports.disconnectFromChannel = disconnectFromChannel;