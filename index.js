//sound play on key pressed -
document.addEventListener("keydown", function(event){
    makeSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
});

// sounds play on click - 
for(let i=0;i<=document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonKey = this.innerHTML;
        makeSound(buttonKey);
        buttonAnimation(buttonKey);

    });
}
    
function makeSound(key){
    switch(key){
        case "w":    
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "a":  
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "s":  
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":         
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "j":         
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "k":         
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "l":         
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(buttonKey);
    }
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}