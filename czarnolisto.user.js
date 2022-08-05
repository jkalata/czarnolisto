// ==UserScript==
// @name        Czarnolisto
// @namespace   wykop.pl
// @match       https://www.wykop.pl/*
// @grant       none
// @version     1.0
// @author      jkalata
// @description 28.07.2022, 19:10:16
// ==/UserScript==
const blacklist = [
  'famemma',
  //tu można dodać własne tagi, które mają być filtrowane
]

const feedList = document.getElementsByClassName('entry iC');

Array.from(feedList).forEach(feed => {
  const feedTags = Array.from(feed.getElementsByClassName('showTagSummary')).map(tag => tag.innerHTML);
  
  if(feedTags.some(tag => blacklist.includes(tag))){
    feed.remove();
  }
})
