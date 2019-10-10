let bodyElement = document.getElementsByTagName("body")[0];
let heroJs = document.getElementById("heroJs");

let min = window.innerWidth/2 - 400;
let max = window.innerWidth/2 + 355;

let enemyFallingSpeed = 50;
let enemyCreatingSpeed = 1000;

//div를 찍어내는 class라고 생각해보자
class Enemy {
    constructor(){
        this.enemy = document.createElement("div");
        this.enemy.className = "enemyFront";
        this.position = Math.floor(Math.random()*(max - min)) + min;
        this.enemy.style.left = `${this.position}px`;
        this.enemy.style.height = "54px";

        bodyElement.insertBefore(this.enemy, heroJs);

        var currentEnemyTopPixel = this.enemy.style.top;
        let currentEnemyHeightPixel = this.enemy.style.height;

        //enemyFallingSpeed에 맞춰 내려오기
        let fallingMonster = setInterval( () => {

            let monsterDiv = document.getElementsByClassName("enemyFront")[0];

            currentEnemyTopPixel = this.enemy.style.top.slice(0, this.enemy.style.top.length-2);
            this.enemyTopPixel = Number(currentEnemyTopPixel) + 6; // 600과 54의 공약수로 설정할 것.
            this.enemy.style.top = `${this.enemyTopPixel}px`;

            //배경을 안벗어나게끔 height줄이기
            if(this.enemyTopPixel > 546){
                currentEnemyHeightPixel = this.enemy.style.height.slice(0, this.enemy.style.height.length-2);
                this.enemyHeightPixel = Number(currentEnemyHeightPixel) - 6;// 600과 54의 공약수로 설정할 것.
        
                this.enemy.style.height = `${this.enemyHeightPixel}px`;
            }

            //몬스터가 끝까지 도달하면 내려오는거 끝내기
            if(this.enemyTopPixel === 600){
                clearInterval(fallingMonster);
            }

            //바닥에 도착한 몬스터 요소 없애기
            if(this.enemyTopPixel === 600){
                monsterDiv.remove();
            }

        }, enemyFallingSpeed);

    } 
}
// enemyCreatingSpeed에 맞춰 몬스터 생성하기
setInterval(() => {
    new Enemy()
}, enemyCreatingSpeed);

//enemy.style.top = 600-108px 일때
//enemy.style.left + 45px < hero.style.left < enemy.style.left + 45px이면
//enemy랑 hero랑 닿은거임