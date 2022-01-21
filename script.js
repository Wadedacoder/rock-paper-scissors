window.onload = function(){
let human_score = 0;
let computer_score = 0;

function computer_choice()
{
    let compno = Math.floor((Math.random()*3)+1);
    let compw;
    switch(compno)
    {
        case 1:
            compw = "rock";
            break;
        case 2:
            compw = "paper";
            break;
        case 3:
            compw = "scissor";
            break;
    }
    return compw;
}

function refresh_score(){
//    document.getElementById("#cscore").innerHTML=computer_score.toString;
//    document.getElementById("#hscore").innerHTML=human_score.toString;
document.querySelector('#hscore').innerHTML = human_score;
document.querySelector('#cscore').innerHTML = computer_score;
}

function check_score(){
    if(human_score == 5 || computer_score == 5){
        return true;
    }
    return false;
}

function print_winner(e){
    document.querySelector(".result").innerHTML = `${e} is the winner`;  
    return;                   
}

function play_round(e)
{
    let humanweap = e.target.id;
    humanweap = humanweap.toLowerCase();
    let compweap = computer_choice();
    if (check_score()){
        if (computer_score > human_score){
            print_winner("CPU");
            return;
        }
        else{
            print_winner("Human");
            return;
        }
    }
    if(compweap == humanweap)
    {
        
    }
    else if (compweap == "rock" && humanweap == "scissor")
    {
        computer_score++;
        
    }
    else if (compweap == "paper" && humanweap == "rock")
    {
        computer_score++;
        
    }
    else if (compweap == "scissor" && humanweap == "paper")
    {
        computer_score++;
        
    }
    else
    {
        human_score++;
    }
    console.log(`Human-${human_score} || CPU-${computer_score}`);
    refresh_score();
    return;
}
let buttons = document.querySelectorAll(".weapon");
buttons.forEach((button)=>{
    const weapon = button.id;
    button.addEventListener('click', play_round);
    
});
};
