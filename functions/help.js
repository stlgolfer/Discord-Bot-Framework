/**
 * Displays the help message
 * @param  {[type]} inboundmessage the inbound message (user sending the command)
 */
function displayHelp(inboundmessage) {
        inboundmessage.channel.send({
                embed: {
                        title: 'swag-bot help',
                        url: 'https://amtstl.xyz',
                        description: 'Help for using swag-bot',
                        fields: [
                                {
                                        name: '/ping',
                                        value: 'Pings the bot'
                                },
                                {
                                        name: '/btc',
                                        value: 'Gets an approximate value for the value of BTC in USD'
                                },
                                {
                                        name: '/join',
                                        value: 'Joins your current voice channel'
                                },
                                {
                                        name: '/leave',
                                        value: 'Leaves your current voice channel'
                                },
                                {
                                        name: '/rock',
                                        value: 'Not implemented yet!'
                                },
                                {
                                        name: '/paper',
                                        value: 'Not implemented yet!'
                                },
                                {
                                        name: '/scissors',
                                        value: 'Not implemented yet!'
                                },
                                {
                                        name: '/score',
                                        value: 'Not implemented yet!'
                                },
                                {
                                        name: '/dtrending {index}',
                                        value: 'Gets a trending bit for Destiny 2. If no index is provided, index 0 is defaulted'
                                },
                                {
                                        name: '/dact',
                                        value: 'Gets an activity for Destiny 2'
                                },
                                {
                                        name: '/dserverstatus',
                                        value: 'Gets the Bungie Server status'
                                },
                                {
                                        name: '/dsearch {player name}',
                                        value: 'Displays known records of a player from Bungie'
                                },
                                {
                                        name: '/ethnews',
                                        value: 'Gets a tweet from @ethereumproject on twitter'
                                },
                                {
                                        name: '/memes {index}',
                                        value: 'Gets a meme at a given index. Defaults to index 0'
                                },
                                {
                                        name: '/features',
                                        value: 'Gets the iFunny current features'
                                }
                        ]
                }
        })
}

module.exports.displayHelp = displayHelp;