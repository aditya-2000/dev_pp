const puppeteer= require("puppeteer");

const id="bohon31914@revutap.com";
const pass="123456";
let tab;

let browserpromise=puppeteer.launch(
    {headless:false,
     defaultViewport:null,
     args:["--start-maximized"]
    }
    );
browserpromise.then(function(browser){
    return browser.pages();
}).then(function(pages){
   tab=pages[0];
   return tab.goto("https://www.hackerrank.com/auth/login");
}).then(function(){
   return tab.type("#input-1",id);
}).then(function(){
   return tab.type("#input-2",pass);
}).then(function(){
   return  tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
}).then(function(){
   return tab.waitForSelector("#base-card-1-link",{visible:true});
}).then(function(){
    return tab.click("#base-card-1-link");
}).then(function(){
    return tab.waitForSelector('a[data-attr1="warmup"]',{visible:true});
 }).then(function(){
     return tab.click('a[data-attr1="warmup"]');
 })


