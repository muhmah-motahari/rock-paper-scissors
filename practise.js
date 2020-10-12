const startGameBtn = document.getElementById('start-game-btn');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const playGameBtn = document.getElementById('play-again-button');
const langEnBtn = document.getElementById('lang-en-button');
const langFaBtn = document.getElementById('lang-fa-button');

playGameBtn.addEventListener('click',playGame);

let ROCK = 'سنگ';
let PAPER = 'کاغذ';
let SCISSORS = 'قیچی';
let enterName = 'اسم خودتان را وارد کنید';
let pleaseChoice = 'لطفا یکی را انتخاب کن';
let draw = 'مساوی کردی';
let win = ' تو بردی ';
let lose = ' عزیزم باختی ';
let selection;
let computerCh;


let selectionFinal;
let ComputerChFinal;

let massage;



/* startGameBtn.addEventListener('click',startGame)
 */
let playerName;

let playerPoint;
let computerPoint;




function playGame(){
    playerName = prompt(enterName,"");
    document.getElementById('player-name').innerHTML = playerName;
    playerPoint = 0;
    computerPoint = 0;
    document.getElementById('player-point').innerHTML = playerPoint;
    document.getElementById('computer-point').innerHTML = computerPoint;
    document.getElementById('game-content').innerHTML = pleaseChoice;
    document.getElementById('game-content-result').innerHTML = '';
    rockBtn.addEventListener('click', rockBtnFunc/* () => {selection = ROCK;return selection} */);
    paperBtn.addEventListener('click', paperBtnFunc/* () => {selection = PAPER;return selection} */);
    scissorsBtn.addEventListener('click', scissorsBtnFunc/* () => {selection = SCISSORS;return selection} */);
}

function startGame(){
    console.log('game starting...');
    /* selection = prompt('Please enter '+ROCK+' or '+PAPER+' or '+SCISSORS, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert('You entered a invalid type of game.Your choice set to '+ROCK);
        selection = DEFAULT_USER_CHOICE;
    } */
    

    let random = Math.random();
    let cChoice;
    if (random < 0.37){
        cChoice = ROCK;
    } else if(random < 0.73){
        cChoice = PAPER;
    } else {
        cChoice = SCISSORS;
    }
    computerCh = cChoice;
    ComputerChFinal = computerCh;
}
    

    
function rockBtnFunc(){
    startGame();
    selection = ROCK;
    result();
    selectionFinal = selection;
    return selection;
}
function paperBtnFunc(){
    startGame();
    selection = PAPER;
    result();
    selectionFinal = selection;
    return selection;
}
function scissorsBtnFunc(){
    startGame();
    selection = SCISSORS;
    result();
    selectionFinal = selection;
    return selection;
}
function result(){
    if (computerCh === ROCK){
        document.getElementById('rock-computer').style ='animation-name:computer-anime;animation-duration:2s';
    }
    if (computerCh === PAPER){
        document.getElementById('paper-computer').style ='animation-name:computer-anime;animation-duration:2s';
    }
    if (computerCh === SCISSORS){
        document.getElementById('scissors-computer').style ='animation-name:computer-anime;animation-duration:2s';
    }

    
    
    massage = `<p>تو </p><p style="font-size:25px;color:#00ffd4;font-weight: bold;"> ${selection} </p><p> را انتخاب کردی و کامپیوتر هم </p><p style="font-size:25px;color:#bf0;font-weight: bold;"> ${computerCh} </p><p> را</p>` ;
    let massage2;
    if(computerCh === selection){
        document.getElementById('game-content').innerHTML=massage;
        massage2 = draw;
        document.getElementById('game-content-result').style='color:#fff;';
    } else if(selection === ROCK && computerCh === SCISSORS || selection === PAPER && computerCh === ROCK || selection === SCISSORS && computerCh === PAPER){
        document.getElementById('game-content').innerHTML=massage;
        massage2 = playerName+ win;
        document.getElementById('game-content-result').style='color:#68ff00;';
        playerPoint++;
    } else{
        document.getElementById('game-content').innerHTML=massage;
        massage2 = lose;
        document.getElementById('game-content-result').style='color:#b3063f;';
        computerPoint++;
    }


    /* document.getElementById('game-content').innerHTML = massage; */
    document.getElementById('game-content-result').innerHTML = massage2;
    document.getElementById('game-content-result').style='animation-name:game-content-result;animation-duration:0.7s;';
    document.getElementById('player-point').innerHTML = playerPoint;
    document.getElementById('computer-point').innerHTML = computerPoint;
        /* document.getElementById('game-content-result').style=''; */
    setTimeout(function(){
        document.getElementById('rock-computer').style="";
        document.getElementById('paper-computer').style="";
        document.getElementById('scissors-computer').style="";
        document.getElementById('game-content-result').style="";
    },2000);
}
function enBtn(){
    ROCK = 'ROCK';
    PAPER = 'PAPER';
    SCISSORS = 'SCISSORS';
    enterName = 'Enter your name';
    pleaseChoice = 'please select your choice';
    draw = 'Draw';
    win = 'You win';
    lose = 'You lose';
    playGame();
    massage = `<p>you selected </p><p style="font-size:25px;color:#00ffd4;font-weight: bold;"> ${selectionFinal} </p><p> and computer selected </p><p style="font-size:25px;color:#bf0;font-weight: bold;"> ${computerChFinal} </p>` ;
}
function faBtn(){
    ROCK = 'سنگ';
    PAPER = 'کاغذ';
    SCISSORS = 'قیچی';
    enterName = 'اسم خودتان را وارد کنید';
    pleaseChoice = 'لطفا یکی را انتخاب کن';
    draw = 'مساوی کردی';
    win = ' تو بردی ';
    lose = ' عزیزم باختی ';
    playGame();
    massage = `<p>تو </p><p style="font-size:25px;color:#00ffd4;font-weight: bold;"> ${selectionFinal} </p><p> را انتخاب کردی و کامپیوتر هم </p><p style="font-size:25px;color:#bf0;font-weight: bold;"> ${computerChFinal} </p><p> را</p>` ;
}

