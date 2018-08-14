function clean(msg) {
        msg.channel.fetchMessages()
        .then(messages => {
                messages.forEach((message) => { message.delete() });
        })
        .catch((error) => {
                console.error(error);
        })
}

module.exports.clean = clean;