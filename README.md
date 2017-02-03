# Amazon Twitter Feed
> A chrome extension that injects a twitter feed on the Amazon home page.

## Install

First, get files on computer:
`git clone https://github.com/collnwalkr/amazon-twitter-feed.git` 

Next, go to `chrome://extensions/` in Chrome and click on `Load Unpacked Extensions...`

Finally, Navigate to `build` directory in the project files and click `select`.

You should now see a grey square with the letter 'A' in your extensions. 

## Design

**This widget gives Amazon customers a fresh live social feed right on the homepage**. The main goal is to show customers how frequently people are talking about Amazon online. For this reason the main visual for each tweet is the relative time stamp often showing tweets in the last minute.

It is also important to keep customers on Amazon. To ensure that users won't link away, hyperlinks in the tweet are only enabled if they are targeting an Amazon domain. 

In the same way, **\#Amazon** is given a bright color to distinguish it from the other \#hashtags and to show the common thread between all of the tweets.

The widget also fits into the Amazon homepage design language. For instance, the carousel controls mimic other carousels on the page. Font sizes and colors are borrowed from the page's typography. 

## Development

**Twitter API**: In order to get fresh live data, I built and deployed a Twitter API proxy onto my digitalocean droplet. In the case that either my or Twitter's servers go down, there is a fallback `.json` file that can stand as a placeholder.

The widget itself was built using [vue](https://vuex.vuejs.org/): a flexible and component driven framework.
