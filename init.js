let hpNumber = document.getElementById("HpNumber");
let hp = 3;
hpNumber.innerHTML = hp.toString();

let intervalId = setInterval(() => {

    let firstEnemy = document.querySelector(".enemyFront");
    let firstEnemyStyle = window.getComputedStyle(firstEnemy);
    let firstEnemyStyleLeft = firstEnemyStyle.getPropertyValue("left");
    let firstEnemyStyleTop = firstEnemyStyle.getPropertyValue("top");


    let heroStyle = window.getComputedStyle(heroObject);
    let heroWidth = heroStyle.getPropertyValue("width");


    let firstEnemyLeftNumber = Number(firstEnemyStyleLeft.slice(0, firstEnemyStyleLeft.length-2));
    let firstEnemyTopNumber = Number(firstEnemyStyleTop.slice(0, firstEnemyStyleTop.length-2));
    let heroWidthNumber = Number(heroWidth.slice(0, heroWidth.length-2));


    //첫번째 적의 위티는 firstEnemyLeftNumber
    //히어로의 위치는 heroLeftPixel
    //히어로의 width는 heroWidthNumber

  
    //몬스터가 히어로의 머리 바로 위까지 도착했을 때
    
    if(firstEnemyTopNumber > 492){
        //몬스터 범위안에 들어왔는가?
        if(firstEnemyLeftNumber - 35 < heroLeftPixel && heroLeftPixel <firstEnemyLeftNumber + 45){
                //히어로의 width가 35일땐 바로 처리
                if(heroWidthNumber === 35){
                    //한번만 부딪히는 로직
                    if(firstEnemyTopNumber === 546){
                        hp--;
                    }
                }
                //히어로의 width가 22일땐 범위를 조정해서 처리
                if(parseInt(heroWidthNumber) === 21){
                    if(firstEnemyLeftNumber - 22 < heroLeftPixel && heroLeftPixel <firstEnemyLeftNumber + 45){
                        //한번만 부딪히는 로직
                        if(firstEnemyTopNumber === 546){
                           hp--;
                        }
                    }
                }
        }    
    }

    if(hp === 0){
        clearInterval(intervalId);
        alert("Game Over");
        window.location.reload(true);
    }

    hpNumber.innerHTML = hp.toString();
    
}, enemyFallingSpeed);
