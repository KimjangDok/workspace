var character = document.getElementById("character");

document.addEventListener("click", jump);



function jump(){
    if (character.classList == "animate") {return;}
    character.classList.add("animate");
    setTimeout(removeJump, 300); //300ms = length of animation
    counting();
}

function removeJump(){
    character.classList.remove("animate");
}

var block = document.getElementById("block");

function checkDead(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130){
        alert("Game Over..");
    }
}

setInterval(checkDead, 10);

var countDiv = document.getElementById("count");
var countNum = 0;
function counting(){
    countNum++;
    console.log("jump : " + countNum);
    document.getElementById("count").append(countNum);
    // countDiv.style.color('blue');
    // $(".count").text(countNum);
    // var count = 0;
    // count = 0;
    // count++;
}
