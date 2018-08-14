/**
 * Gets the tweets of a given user
 * @param  {string} user the username
 * @return {Promise} an array of tweets
 */
function getTweets(user) {
        return new Promise((resolve, reject) => {
                var Twitter = require('twitter');
                 
                var client = new Twitter({
                        consumer_key: '0lAkFbiAoxCmphaLiGTqWdKbR',
                        consumer_secret: 'O4EIJZm7BBeHtYC0Gqwfm0ztuLYUmLRCYgKS5zfYCCtmh5hpwK',
                        access_token_key: '941409515840434176-jEsHsLzleQyG3oXGO5jTbwwpwcZPBL7',
                        access_token_secret: 'OluErkQLzmalyuTkaSVyGDFFi2gYfw95jJYwrkGoHfLXB'
                });
                
                var params = {screen_name: user};
                client.get('statuses/user_timeline', params, function(error, tweets, response) {
                        if (!error) {
                                resolve(tweets);
                        }
                        else {
                                console.log(error);
                                reject(`Could not get tweets for ${user}`);
                        }
                });
        })
}

module.exports.getTweets = getTweets;