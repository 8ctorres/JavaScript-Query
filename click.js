//declare samecolor() here
function samecolor(){

const doc = document;
let divs = doc.querySelectorAll("#samecolor > div");

for(let i=0;i<divs.length;i++){
divs[i].style.backgroundColor = "#ff0000";

}
}

//declare diffcolor() here
function diffcolor(){

const doc = document;
let divs = doc.querySelectorAll("#diffcolor div");

for(let i=0;i<divs.length;i=i+2){
divs[i].style.backgroundColor = "#ffffff";
divs[i+1].style.backgroundColor = "#0000ff";
}
}
