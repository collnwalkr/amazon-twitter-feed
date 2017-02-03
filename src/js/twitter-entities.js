/*
 * twitter-entities.js
 * This function converts a tweet with "entity" metadata
 * from plain text to linkified HTML.
 *
 * See the documentation here: http://dev.twitter.com/pages/tweet_entities
 * Basically, add ?include_entities=true to your timeline call
 *
 * Based off existing code from Wade Simmons
 * Licensed under the MIT license
 * http://wades.im/mons
 *
 * Modified by lénaïc Terrier
 * Licensed under the MIT license
 *
 * Modified by Collin Walker
 * Licensed under the MIT license
 * Requires jQuery
 */

import $ from 'jquery'
import parse from 'url-parse'

export default function linkifyEntities(tweet)
{
    function escapeHTML(text)
    {
        return $('<div/>').text(htmlCharsCorrect(text)).html();
    }

    function htmlCharsCorrect(text)
    {
        text = text.replace(/&amp;/g,'\u0026');
        text = text.replace(/&gt;/g,'\u003E');
        text = text.replace(/&lt;/g,'\u003C');
        text = text.replace(/&(quot;|apos;)/g,'\u0022');
        text = text.replace(/&#039;+/g,'\u0027');
        return text;
    }

    var
        index_map = {},
        result = "",
        last_i = 0,
        i = 0,
        end,
        func,
        emoji;

    var ranges = [
        '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
        '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
        '\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
    ];
    var emojis = [];
    tweet.text = escapeHTML(tweet.text.replace(new RegExp(ranges.join('|'), 'g'), function(match, offset, string){
        emojis.push({
            offset: offset,
            char: match
        });
        return '\u0091';
    }));

    if (!(tweet.entities)) {
        return escapeHTML(tweet.text);
    }

    if (tweet.entities.urls) {
        $.each(tweet.entities.urls, function(i,entry) {
            let host = parse(entry.expanded_url).host;
            let amazonUrl = host.includes('amazon') || host.includes('amzn');
            if(amazonUrl){
                index_map[entry.indices[0]] = [entry.indices[1], function(text) {return "<a class='amazon-url' href='"+escapeHTML(entry.url)+"'>"+escapeHTML(entry.display_url)+"</a>";}];
            }
            else {
                index_map[entry.indices[0]] = [entry.indices[1], function(text) {return "<span>"+escapeHTML(entry.display_url)+"</span>";}];
            }
        });
    }

    if (tweet.entities.hashtags) {
        $.each(tweet.entities.hashtags, function(i,entry) {
            let addClass = entry.text.toLowerCase() === 'amazon' ? 'amazon-hashtag' : '';
            index_map[entry.indices[0]] = [entry.indices[1], function(text) {return "<span class='hashtag " + addClass + "'>"+escapeHTML(text)+"</span>";}];
        });
    }

    if (tweet.entities.user_mentions) {
        $.each(tweet.entities.user_mentions, function(i,entry) {
            index_map[entry.indices[0]] = [entry.indices[1], function(text) {return "<span class='user'>"+escapeHTML(text)+"</span>";}];
        });
    }

    if(tweet.entities.hasOwnProperty('media')) {
        $.each(tweet.entities.media, function(i,entry) {
            index_map[entry.indices[0]] = [entry.indices[1], function(text) {return "<a class='mediahref' data-lightbox='"+entry.id+"' href='"+escapeHTML(entry.media_url)+"'></a>";}];
        });
    }

    for (i=0; i < tweet.text.length; ++i) {
        var ind = index_map[i];
        if (ind) {
            end = ind[0];
            func = ind[1];
            if (i > last_i) {
                result += escapeHTML(tweet.text.substring(last_i, i));
            }
            result += func(tweet.text.substring(i, end));
            i = end - 1;
            last_i = end;
        }
    }

    if (i > last_i) {
        result += escapeHTML(tweet.text.substring(last_i, i));
    }

    result = result.replace(/\u0091/g, function(match, offset, string){
        emoji = emojis.shift();
        return '<span class="emoji" data-emoji="u'+emoji.char.charCodeAt(0)+'">'+emoji.char+'</span>'
    });

    return result;
}