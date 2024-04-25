let restart = document.querySelector("#restart");
let submit = document.querySelector("#submit");
let player = document.querySelector("#play-guess");
let computer = document.querySelector("#com-guess");
let result =  document.querySelector("#wResult")



function play(){
    let guess = frm1.player.value;
    validate(guess);
    
}
function start(){   
    restyle();
    result.setAttribute("placeholder","");
    computer.setAttribute("placeholder","");
    frm1.player.value = 0;
    
}
function validate(e){
    if(e == ""||e<0||e>100){
        result.setAttribute("placeholder","Please check your guess");
        style();
    }
    else{
        let e =frm1.player.value
        game(e);
    }
}

function game(guess){
    let luck  = Math.floor(Math.random()*101);
    computer.setAttribute("placeholder",luck);  
    console.log(guess);
    player.setAttribute("placeholder",guess);
    frm1.player.value = ""
    style();
    check(guess,luck);
}
function check(g,l){
    if(g == l){
      result.setAttribute("placeholder","Congratulations!!!!!!!");
    }
    if(g == 69){
        result.setAttribute("placeholder","Achievement Unlocked:Simp")
    }
    else{
        
        result.setAttribute("placeholder","OH!!Please try again");
    }
}
function style(){
    submit.style.display = "none";
    restart.style.display ="flex";
}
function restyle(){
    submit.style.display = "flex";
    restart.style.display ="none";

}
