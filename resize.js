//Declare tabletSize() here
tabletSize(){
    const doc = document;
    let divs = doc.querySelectorAll("div")

    for(let i=0;i<divs.length;i++){
    divs[i].style.height = "75%";
    divs[i].style.width = "75%" ;
    }
    }
}

//Declare phoneSize() here
phoneSize(){
    const doc = document;
    let divs = doc.querySelectorAll("div")

    for(let i=0;i<divs.length;i++){
    divs[i].style.height = "50%";
    divs[i].style.width = "50%" ;
    }
    }
}
