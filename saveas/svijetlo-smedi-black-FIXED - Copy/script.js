var avatar = document.getElementById("avatar");   

avatar.onmouseenter = function() {hoverIN()};
avatar.onmouseleave = function() {hoverOUT()};

function hoverIN(){
    avatar.style.transform = "scale(" + 125 + "%)";
    avatar.style.transition = 0.5 + "s cubic-bezier(0.82, 0, 0.18, 1)";
    avatar.style.mixBlendMode = "difference";
}

function hoverOUT(){ 
    avatar.style.transform = "scale(" + 102 + "%)";
    avatar.style.transition = 0.5 + "s cubic-bezier(0.82, 0, 0.18, 1)";
    avatar.style.mixBlendMode = "normal";
}



var headerC = document.getElementById("headerC");   
var skrivenaA = document.getElementById("skrivenaA");   
var skrivenaB = document.getElementById("skrivenaB");   
var skrivenaC = document.getElementById("skrivenaC");   
var headerM = document.getElementById("headerM");   
var headerS = document.getElementById("headerS");   

function slikaIN(fotka) {
    fotka.style.display = "block";  
}
function slikaOUT(fotka) {
    fotka.style.display = "none";
}
 
headerC.onmouseenter = function() {slikaIN(skrivenaA)}; 
headerC.onmouseleave = function() {slikaOUT(skrivenaA)}; 

headerM.onmouseenter = function() {slikaIN(skrivenaB)}; 
headerM.onmouseleave = function() {slikaOUT(skrivenaB)}; 

headerS.onmouseenter = function() {slikaIN(skrivenaC)}; 
headerS.onmouseleave = function() {slikaOUT(skrivenaC)}; 







/*
const koef = 1.1;

var pg = document.getElementById("three").clientWidth;  
var bd = document.getElementById("bodi");   




const txt1e = document.getElementById("e1");  
const txt2e = document.getElementById("e2");  
const txt3e = document.getElementById("e3");



const podlogaThree1 = document.getElementById("three-1");  
const podlogaThree2 = document.getElementById("three-2");  
const podlogaFour2 = document.getElementById("four-2");
 

pg = document.getElementById("three").clientWidth;   

txt1e.style.fontSize = pg*koef + "px"; 
txt2e.style.fontSize = pg*koef + "px"; 
txt3e.style.fontSize = pg*koef + "px"; 
 
console.log("10k");

document.getElementById("bodi").onresize = function() {promijeni()};
 
function promijeni() {
    pg = document.getElementById("three").clientWidth;  

    txt1e.style.fontSize = pg*koef + "px"; 
    txt2e.style.fontSize = pg*koef + "px"; 
    txt3e.style.fontSize = pg*koef + "px";  
}
 
podlogaThree1.onmouseenter = function() {haverIN(txt1e)};
podlogaThree1.onmouseleave = function() {haverOUT(txt1e)};


podlogaThree2.onmouseenter = function() {haverIN(txt2e)};
podlogaThree2.onmouseleave = function() {haverOUT(txt2e)};


podlogaFour2.onmouseenter = function() {haverIN(txt3e)};
podlogaFour2.onmouseleave = function() {haverOUT(txt3e)};

function haverIN(txt123e) { 
    //bijela
    txt123e.style.color = "#ded5c4"; 
}
function haverOUT(txt123e) { 
    txt123e.style.color = "#1c1920"; 
}

*/