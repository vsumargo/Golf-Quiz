let h1 = document.querySelector('h1');
let startGameBtn = document.querySelector('#startGame');
let closeGameBtn = document.querySelector('#closeGame');
let mainContentCol = document.querySelector('#mainContentCol');

var question1 = {
    "questionTitle" : "As of 2020, how many majors has Tiger Woods won?",
    "a" : 10,
    "b" : 16,
    "c" : 14,
    "d" : 12,
    "ans" : 14,
}
var question2 = {
    "questionTitle" : "How many majors has Jack Nicklaus won?",
    "a" : 20,
    "b" : 15,
    "c" : 18,
    "d" : 12,
    "ans" : 18,
}
var question3 = {
    "questionTitle" : "What country is Rory McIlroy from?",
    "a" : "Australia",
    "b" : "America",
    "c" : "United Kingdom",
    "d" : "Ireland",
    "ans" : "Ireland",
}
var question4 = {
    "questionTitle" : "What country is Dustin Johnson from?",
    "a" : "America",
    "b" : "South Africa",
    "c" : "United Kingdom",
    "d" : "Scotland",
    "ans" : "America",
}
var question5 = {
    "questionTitle" : "What ball brand is Tiger Woods using?",
    "a" : "Callaway",
    "b" : "Titleist",
    "c" : "Taylormade",
    "d" : "Srixon",
    "ans" : "Titleist",
}

let questions = [question1, question2, question3, question4, question5,];

let secondsLeft = document.querySelector('#secondsLeft');
let timeLeft = 60;
let counter = 0;

let i = 0;

let h2 = document.createElement('h2');
    h2.id = "h2";
    
let choiceA = document.createElement('div');
    choiceA.className = "multipleChoices";
    choiceA.id = "ansA";
    
let choiceB = document.createElement('div');
    choiceB.className = "multipleChoices";
    choiceB.id = "ansB";
  
let choiceC = document.createElement('div');
    choiceC.className = "multipleChoices";
    choiceC.id = "ansC";
  
let choiceD = document.createElement('div');
    choiceD.className = "multipleChoices";
    choiceD.id = "ansD";

let resultChoice = document.createElement('div');
    resultChoice.id = "resultChoice";

// defining variable for actions after time is up or user answered all the questions
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let forms = document.createElement('form');
        forms.setAttribute('class','user-details');
    let span1 = document.createElement('span');
        span1.setAttribute('id', 'span1');
    let username = document.createElement('input');
        username.setAttribute('type', 'text');
        username.setAttribute('class', 'user-input');
        username.setAttribute('id', 'username-input');
        username.setAttribute('required',"");
        username.setAttribute('placeholder','enter your name');
    let span2 = document.createElement('span');
        span2.setAttribute('id', 'span2');
    let email = document.createElement('input');
        email.setAttribute('type', 'email')
        email.setAttribute('class', 'user-input');
        email.setAttribute('id', 'email-input');
        email.setAttribute('required',"");
        email.setAttribute('placeholder','enter your email');
    let span3 = document.createElement('span');
        span3.setAttribute('id', 'span3');
    let submitBtn = document.createElement('button');
        submitBtn.setAttribute('type', 'button')
        submitBtn.setAttribute('id','userDetailsSubmitBtn');
        submitBtn.textContent = 'Submit';

    let yesBtn = document.createElement('button');
        yesBtn.textContent = 'YES';
    let noBtn = document.createElement('button');
        noBtn.textContent = 'NO';
  
let lastUserName = document.querySelector('#username');
let lastEmail = document.querySelector('#email');
let lastScore = document.querySelector('#highscore');   


function closeGame(event){
    event.preventDefault();
    console.log(event);
    window.close();
};

function startTimer(){
    var interval = setInterval(function(){
    secondsLeft.textContent = timeLeft;
    timeLeft--;
    secondsLeft.textContent = timeLeft;

    if(i >= questions.length){
        
        clearInterval(interval);
        timeLeft = 60;
        i = 0;
    }

    
    if (timeLeft === 0){
        
        clearInterval(interval);
        timeLeft = 60;
        counter = 0;
        i = 0;
        h2.remove();
        choiceA.remove();
        choiceB.remove();
        choiceC.remove();
        choiceD.remove();
        resultChoice.remove();

        h3.textContent = "Time is Up!"
        mainContentCol.appendChild(h3);

        h4.textContent = "Your scored: " + counter + " points";
        mainContentCol.appendChild(h4);

        h5.textContent = "Please enter your details below to record your score:";
        mainContentCol.appendChild(h5);

        mainContentCol.appendChild(forms);
        forms.appendChild(span1);
        span1.appendChild(username);
        forms.appendChild(span2);
        span2.appendChild(email);
        forms.appendChild(span3);
        span3.appendChild(submitBtn);
        submitBtn.addEventListener('click', submitUserDetails);
    }
    },1000);
}

function clickMultipleChoices(event){     
            event.preventDefault();
            console.log(event);
        
            let answer = event.target.textContent;
            console.log("answer choosen:" + answer);
       
            if(answer == questions[i].ans){
                counter = counter +1;
                resultChoice.textContent = "Correct Answer!";
                mainContentCol.appendChild(resultChoice);
                
            }else{
                counter = counter;
                timeLeft = timeLeft - 5;
                resultChoice.textContent = "Wrong Answer!";
                mainContentCol.appendChild(resultChoice);
            }
            console.log("points: " + counter);
            i++;
            console.log("i = " + i);

            if(i < questions.length){
                h2.textContent = questions[i].questionTitle;
                choiceA.textContent = questions[i].a ;
                choiceB.textContent = questions[i].b;
                choiceC.textContent = questions[i].c;
                choiceD.textContent = questions[i].d;   
            }
            else{
                h2.remove();
                choiceA.remove();
                choiceB.remove();
                choiceC.remove();
                choiceD.remove();
                resultChoice.remove();

                h3.textContent = "Finished!"
                mainContentCol.appendChild(h3);

                h4.textContent = "You scored: " + counter + " points";
                mainContentCol.appendChild(h4);

                h5.textContent = "Please enter your details below to record your score:";
                mainContentCol.appendChild(h5);
        
                mainContentCol.appendChild(forms);
                forms.appendChild(span1);
                span1.appendChild(username);
                forms.appendChild(span2);
                span2.appendChild(email);
                forms.appendChild(span3);
                span3.appendChild(submitBtn);
                submitBtn.addEventListener('click', submitUserDetails);
            }     
}
    
function startGame(event){
    event.preventDefault();
    console.log(event);

    startTimer();

    h1.remove();
    startGameBtn.remove();
    closeGameBtn.remove();

    h2.textContent = questions[i].questionTitle;
    mainContentCol.appendChild(h2);

    choiceA.textContent = questions[i].a ;
    mainContentCol.appendChild(choiceA);

    choiceB.textContent = questions[i].b;
    mainContentCol.appendChild(choiceB);

    choiceC.textContent = questions[i].c;
    mainContentCol.appendChild(choiceC);

    choiceD.textContent = questions[i].d;
    mainContentCol.appendChild(choiceD);

    let multipleChoices = document.querySelector('.multipleChoices');
    let ansA = document.querySelector('#ansA');
    let ansB = document.querySelector('#ansB');
    let ansC = document.querySelector('#ansC');
    let ansD = document.querySelector('#ansD');

    
    ansA.addEventListener('click', clickMultipleChoices )
    ansB.addEventListener('click', clickMultipleChoices )
    ansC.addEventListener('click', clickMultipleChoices )
    ansD.addEventListener('click', clickMultipleChoices )
    
}

function startGameAgain(event){
    event.preventDefault();
    console.log(event);

    counter = 0;
    startTimer();

    h3.remove();
    h4.remove();
    forms.remove();
    span1.remove();
    span2.remove();
    yesBtn.remove();
    noBtn.remove();

    h2.textContent = questions[i].questionTitle;
    mainContentCol.appendChild(h2);

    choiceA.textContent = questions[i].a ;
    mainContentCol.appendChild(choiceA);

    choiceB.textContent = questions[i].b;
    mainContentCol.appendChild(choiceB);

    choiceC.textContent = questions[i].c;
    mainContentCol.appendChild(choiceC);

    choiceD.textContent = questions[i].d;
    mainContentCol.appendChild(choiceD);

    let multipleChoices = document.querySelector('.multipleChoices');
    let ansA = document.querySelector('#ansA');
    let ansB = document.querySelector('#ansB');
    let ansC = document.querySelector('#ansC');
    let ansD = document.querySelector('#ansD');

    
    ansA.addEventListener('click', clickMultipleChoices )
    ansB.addEventListener('click', clickMultipleChoices )
    ansC.addEventListener('click', clickMultipleChoices )
    ansD.addEventListener('click', clickMultipleChoices )
}


function submitUserDetails(event){
    event.preventDefault();
    console.log(event);

    let usernameInput = document.querySelector('#username-input');
    let emailInput = document.querySelector('#email-input');

    let userinput ={
        name: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        score: "" + counter + "",
    };
    console.log(userinput);

    localStorage.setItem("userinput", JSON.stringify(userinput));

    let lastUser = JSON.parse(localStorage.getItem('userinput'));
    lastUserName.textContent = lastUser.name;
    lastEmail.textContent = lastUser.email;
    lastScore.textContent = lastUser.score;

    secondsLeft.textContent = "--";
    i = 0;

    h3.textContent = 'Thank you for entering your details. Your score has been recorded.'
    h4.textContent = 'Do you want to play again?';
    h5.remove();
    username.remove();
    email.remove();
    span3.remove();

    yesBtn.addEventListener('click', startGameAgain);
    span1.appendChild(yesBtn);

    noBtn.addEventListener('click', closeGame);
    span2.appendChild(noBtn);
}

let quitBtn = document.querySelector('#quit-btn');
    quitBtn.addEventListener('click', quit);
function quit (event){
    event.preventDefault();
    console.log(event);
    var quitInput = confirm("Do you really want to quit the Game?");

    if(quitInput === true){
        window.close();
    }

}

let scorecard = document.querySelector('.scorecard');
let viewScoreBtn = document.querySelector('#view-score-btn');
    viewScoreBtn.addEventListener('click', viewScore)
function viewScore(event){
    event.preventDefault();
    console.log(event);
    scorecard.setAttribute('style', 'display: block');
}

let hideBtn = document.querySelector('#hide-button');
    hideBtn.addEventListener('click', hideScore);
function hideScore(event){
    event.preventDefault();
    console.log(event);
    scorecard.setAttribute('style', 'display: none');
}

startGameBtn.addEventListener("click", startGame);

closeGameBtn.addEventListener('click', closeGame);




