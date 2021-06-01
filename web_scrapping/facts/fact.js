let request=require("request");
let fs= require("fs");
let cheerio = require('cheerio');

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
request(url,function(error,response,body){
  //fs.writeFileSync("./data.html",body);
  let ch=cheerio.load(body);
  let candidate=ch('.match-comment-wrapper .match-comment-long-text[itemprop="articleBody"]>p');
  console.log(ch(candidate[1]).text());

});