const request = require('request');
const cheerio = require('cheerio');

function getLatestMeme() {
        return new Promise((resolve, reject) => {
                request('https://ifunny.co/', (error, response, body) => {
                        const $ = cheerio.load(body);
                        //console.log(body);
                        
                        var memes = [];
                        
                        $('img').map(function (i, e) {
                                let meme = $(e).attr('src');
                                if (meme.search(/ifcdn/g) > -1) {
                                        memes.push(meme);
                                }
                        })
                        
                        // all memes
                        memes.forEach((meme) => {
                                console.log(meme);
                        })
                        
                        resolve(memes[0]);
                })
        })
}

function getAllMemes() {
        return new Promise((resolve, reject) => {
                request('https://ifunny.co/', (error, response, body) => {
                        const $ = cheerio.load(body);
                        //console.log(body);
                        
                        var memes = [];
                        
                        $('img').map(function (i, e) {
                                let meme = $(e).attr('src');
                                if (meme.search(/ifcdn/g) > -1) {
                                        memes.push(meme);
                                }
                        })
                        
                        resolve(memes);
                })
        })
}

module.exports.getAllMemes = getAllMemes;
module.exports.getLatestMeme = getLatestMeme;