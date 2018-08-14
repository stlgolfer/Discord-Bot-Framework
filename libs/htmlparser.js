/**
 * Primes the html text for HTML cleaning
 * @deprecated
 * @param  {string} text the HTML content
 * @return {string} the cleaned HTML
 */
function parseStatus(text) {
        var lines = text.split('\n');
        return cleanHTML(lines[6]);
}

/**
 * This will mark a piece of text where html tags are present
 * @param  {string} html the piece of text to be tagged
 * @return {array} an array of objects where the html tags are present
 */
function markExtraction(html) {
        var cache = html;
        var extraction = [];
        
        for (var i = 0; i < cache.length; i++) {
                if (cache.charAt(i) == '<') {
                        extraction.push({
                                start: i,
                                end: null
                        });
                }
                else if (cache.charAt(i) == '>') {
                        extraction[extraction.length - 1].end = i;
                }
        }
        
        return extraction;
}

/**
 * This takes the marked text and removes the actual html pieces
 * @param  {string} html the text to be parsed
 * @return {string} the parsed text
 */
function cleanHTML(html) {
        var cache = html;
        var keywords = [];
        var marks = markExtraction(html);
        
        for (var i = 0; i < marks.length; i++) {
                keywords.push(html.substring(marks[i].start, marks[i].end + 1));
        }
        
        for (var f = 0; f < keywords.length; f++) {
                cache = cache.replace(keywords[f], '');
        }
        
        // the problem is that the lengths get thrown off, maybe start from the back
        return decodeURI(cache);
}

/**
 * Checks to see if a number is in between a range
 * @param  {int}  start starting index
 * @param  {int}  end ending index
 * @param  {int}  number number to be tested
 * @return {Boolean} false if it isn't in the range, true if it is
 */
function isBetween(start, end, number) {
        if (number <= end && number >= start) {
                return true;
        }
        else {
                return false;
        }
}

module.exports.parseStatus = parseStatus;
module.exports.cleanHTML = cleanHTML;