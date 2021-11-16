const bird = document.getElementById("bird");
const lollipop = document.getElementById("lolipop");

document.addEventListener("keydown",function(event){
    jump();
});

function jump(){
    if(bird.classList != "jump")
    {
        bird.classList.add("jump");
    }
    setTimeout(function(){
        bird.classList.remove("jump")
    },300)
}

let isAlive = setInterval(function(){
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let lollipopLeft = parseInt(window.getComputedStyle(lollipop).getPropertyValue("left"));

    if(lollipopLeft < 50 && lollipopLeft > 0 && birdTop >= 130)
    {
        alert("GAME OVER!")
    }

},10)
    
