console.log("Hello")
let starCont = document.getElementById("starCont")
let starCont2 = document.getElementById("starCont2")
let starCont3 = document.getElementById("starCont3")

let star = document.getElementById("star")
let star2 = document.getElementById("star2")
let star3 = document.getElementById("star3")

for(let i=0; i<4;i++){
    console.log("Hello2")
    starCont.appendChild(star.cloneNode(true));
    starCont2.appendChild(star2.cloneNode(true));
    starCont3.appendChild(star3.cloneNode(true));


}