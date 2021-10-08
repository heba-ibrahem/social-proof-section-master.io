console.log("Hello")
let starCont = document.getElementById("starCont")
let starCont2 = document.getElementById("starCont2")
let starCont3 = document.getElementById("starCont3")

let star = document.getElementById("star")

for(let i=0; i<4;i++){
    console.log("Hello2")
    starCont.appendChild(star.cloneNode(true));
    starCont2.appendChild(star.cloneNode(true));
    starCont3.appendChild(star.cloneNode(true));


}