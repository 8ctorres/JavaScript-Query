//declare samecolor() here
function samecolor(){

const doc = document;
let divs = doc.querySelectorAll("#samecolor > div");

for(let i=0;i<divs.length;i++){
divs[i].style.backgroundColor = "#14e120";
divs[i].style.opacity = (i/5+.25)
}
}

//declare diffcolor() here
function diffcolor(){

const doc = document;
let divs = doc.querySelectorAll("#diffcolor div");

if (divs[0].style.backgroundColor=="ffa500") {

for(let i=0;i<divs.length;i=i+2){

divs[i].style.backgroundColor = "#005aff";
divs[i+1].style.backgroundColor = "#ffa500";
}
}

else if(divs[0].style.backgroundColor=="005aff") {

for(let i=0;i<divs.length;i=i+2){
divs[i].style.backgroundColor = "#ffa500";
divs[i+1].style.backgroundColor = "#005aff";
}
}

else {
    for(let i=0;i<divs.length;i=i+2){

    divs[i].style.backgroundColor = "#005aff";
    divs[i+1].style.backgroundColor = "#ffa500";
    }
}

}
