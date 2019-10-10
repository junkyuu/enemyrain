let heroObject = document.getElementById("hero");

heroObject.style.left = `${((window.innerWidth + 35)/2).toString()}px`;

let currentHeroLeftPixel = heroObject.style.left;
let heroLeftPixel = Number(heroObject.style.left.slice(0,heroObject.style.left.length-2));

function keyDownHandler(e) {
   
    //왼쪽방향키 눌렀을 때  
    if(e.keyCode == 37){
        heroObject.style.width = `22px`;
        //hero의 클래스가 heroLeft가 아니라면
        //heroLeft로 바꾼다.
        if(heroObject.classList[0] !== "heroLeft"){
            heroObject.classList.replace(heroObject.classList[0], "heroLeft");
        }
        if(heroLeftPixel > window.innerWidth/2 - 393){
            //왼쪽 이동
            currentHeroLeftPixel = heroObject.style.left.slice(0,heroObject.style.left.length-2);
            heroLeftPixel = Number(currentHeroLeftPixel) - 7;
            heroObject.style.left = `${heroLeftPixel}px`;
        }
    }

    //오른방향키 눌렀을 때
    if(e.keyCode == 39) {
        heroObject.style.width = `22px`;
        //hero의 클래스중에 heroRight가 아니라면
        //heroRight로 바꾼다.
        if(heroObject.classList[0] !== "heroRight"){
            heroObject.classList.replace(heroObject.classList[0], "heroRight");
        }
        if(heroLeftPixel < window.innerWidth/2 + 373){
            //오른쪽 이동
            currentHeroLeftPixel = heroObject.style.left.slice(0,heroObject.style.left.length-2);
            heroLeftPixel = Number(currentHeroLeftPixel) + 7;
            heroObject.style.left = `${heroLeftPixel}px`;
        }
    }

    //위쪽 방향키 눌렀을 때
    if(e.keyCode == 38){
        heroObject.style.width = `35px`;
        if(heroObject.classList[0] !== "heroBack"){
            heroObject.classList.replace(heroObject.classList[0], "heroBack");
        }
    }
    //아래 방향키 눌렀을 때
    if(e.keyCode == 40){
        heroObject.style.width = `35px`;
        if(heroObject.classList[0] !== "heroFront"){
            heroObject.classList.replace(heroObject.classList[0], "heroFront");
        }
    }

}

document.addEventListener("keydown", keyDownHandler, false);



