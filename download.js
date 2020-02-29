// ==UserScript==
// @name         Theishter-script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  download PDFs from http://www.theishter.com/sheet-music.html with a button
// @author       NOED
// @match        http://www.theishter.com/sheet-music.html
// @grant        none
// ==/UserScript==

window.onload=function() {
    'use strict';

    var id;
    var count=0;
    var downloadprefix="https://drive.google.com/u/0/uc?id=";
    var dwnld;
    var string;
    var links=document.getElementsByTagName('a');
    for(let item of links) {
        if(item.href.toString().includes("drive.google.com") && !item.href.toString().includes("&export=download")){

            if(item.href.toString().includes("open")){
                id=(item.href.toString().split("/")[3]).replace("open?id=","");
             }
             else if(item.href.toString().includes("file")){
                 id=(links[11].href.toString().split("/")[5]);
             }
            count++;
            dwnld=downloadprefix+id+"&export=download";
            //console.log(dwnld);
            //console.log(dwnld);
            //string="<a href="+dwnld+">   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe0yTrscxvCtQSSYecldTwJhb446m5cG2BGRy4gsa2AEKBJWQR' width='30'></img></a>";
            //dwnld="https://www.google.it";
            //dwnld="https://www.google.it";
            string="<a class='_randomClass_name' href='"+dwnld+"'>   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe0yTrscxvCtQSSYecldTwJhb446m5cG2BGRy4gsa2AEKBJWQR' width='30'></img></a>";
            //console.log(string);
            item.insertAdjacentHTML("afterEnd",string);

        }

    }
    console.log(count);
}();
