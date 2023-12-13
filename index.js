var randomNumber1= (Math.floor(Math.random(0,6) * 6)) + 1;
var randomNumber2= (Math.floor(Math.random(0,6) * 6)) + 1;
var imageNames = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
var imageElement = document.getElementsByClassName("img1")[0];
var imageElement2 = document.getElementsByClassName("img2")[0];
imageElement.setAttribute('src', './images/' + imageNames[randomNumber1 - 1]);
imageElement2.setAttribute('src', './images/' + imageNames[randomNumber2 - 1]);

if(randomNumber1 > randomNumber2){
    document.addEventListener('DOMContentLoaded', function(){
    setTimeout (function(){
        document.querySelector('h1').textContent = "Player 1 wins.";
    },2000)
})
} else if(randomNumber2 > randomNumber1){
    document.addEventListener('DOMContentLoaded', function(){
        setTimeout (function(){
            document.querySelector('h1').textContent = "Player 2 wins.";
        },2000)
})
} else{
    document.addEventListener('DOMContentLoaded', function(){
        setTimeout (function(){
            document.querySelector('h1').textContent = "Draw !!";
        },2000)
})
}

