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

function play_round()
{
    let humanweap = prompt("Choose ur weapon").toLowerCase();
    alert(`Your weapon is ${humanweap}`);
    if (humanweap == "rock" || humanweap == "paper" || humanweap == "scissor")
    {

    }
    else
    {
        alert("Invalid choice . Starting another round")
        play_round();
    }
    let compweap = computer_choice();
    alert(`comp weapon is ${compweap}`);
    if(compweap == humanweap)
    {
        alert("Draw! Playing another round");
    }
    else if (compweap == "rock" && humanweap == "scissor")
    {
        computer_score++;
        alert("Computer Wins!");
    }
    else if (compweap == "paper" && humanweap == "rock")
    {
        computer_score++;
        alert("Computer Wins!");
    }
    else if (compweap == "scissor" && humanweap == "paper")
    {
        computer_score++;
        alert("Computer Wins!");
    }
    else
    {
        human_score++;
        alert("You Win!");
    }
    alert(`The current score is ${human_score}-${computer_score}`);
}

while(true)
{
    play_round();
    if(computer_score == 5)
    {
        alert("You were defeated!");
        break;
    }
    else if(human_score == 5)
    {
        alert("You were victorious");
        break;
    }

}