let name = window.prompt('Player Name');
score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    console.log('music is been played again');
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) {

        dino = document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino');
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 122 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }

}


setInterval(() => {
    gameover = document.querySelector('.gameover');
    dino = document.querySelector('.dino');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 70 && offsetY < 52) {
        gameover.innerHTML="Ur Game is Over bye bye--"+name;
            
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            // audio.pause();
        }, 1000);
        console.log("i'm inside the if block")
        obstacle.classList.remove('obani');
        afterOver();
    }
    else if (offsetX < 145 && cross) {
        score += 10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
    //this is for increasing the speed of obsctacle
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.01;
        obstacle.style.animationDuration = newDur + "s";
        // console.log("my new animation duration", newDur);
    }, 500);
}
    , 100);



function updateScore(score) {
    scorec.innerHTML = "Your Score: " + score
}
function afterOver() {

    document.getElementById('scorec').style.top = "44vh";
    document.getElementById('scorec').style.left = "44vw";
    document.getElementById('scorec').style.background = "red";
    dino.style.bottom="-5px;"
    dino.style.display="none";
    setTimeout(() => {
        alert('tap reload to play again '+name);
    }, 4000);
    //   container.style.opacity="0.3"
    
}