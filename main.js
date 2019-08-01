// for storing the questions
const question = [
    "Who is the father of physics?",
    "Who is the father of computer?",
    "What is the national game of Russia",
    "Which country won the ICC circket world cup 2019?",
    "Who is the first man climb mount everest?"
];

//options to show dynamically
const options = [['Alebert Einstien', 'Issac Newton', 'Stephen Hawking', 'Thomas Alva Edtion'],
['Charles Babbage', 'Hillary Clinton', 'Bill Gates', 'Linus Tarvolds'],
['Football', 'TableTenis', 'Basket Ball', 'Ice Hockey'],
['NewZeland', 'England', 'West Indies', 'Australia'],
['Edmund Hillary', 'Passang Lamu', 'James Cook', 'Lakpa Sherpa']
];

//correct options 
const correct = ['1', '1', '3', '2', '1'];

// tracking score
let score = 0;
// tracking question number
let qtrack = 0;
// stopping questionUpdate() to run after end
let end = false;

//tracking wrong and right answer
let wright = [];
let wrong = [];

//check question is end or not if end then show result
function isEnd() {
    if (qtrack >= question.length) {
        let temp = document.querySelector("#wrapper");
        let note = "<div id=\"res\"><h1>";
        note += "You got " + score + " question right.</h1>";
        note += "<h2>You give wright answer:</h2>"
        for (i = 0; i < wright.length; i++) {
            note += "<p>" + question[wright[i]] + "</p>";
        }
        note += "<h2 style=\"margin-top:30px;\">You give wrong answer:</h2>";
        for (i = 0; i < wrong.length; i++) {
            note += "<p>" + question[wrong[i]] + "</p>";
        }
        note += "</div>"
        temp.innerHTML = note;
        end = true;
    }
}

//updates question
function updateQuestion() {
    let newQuestion = document.querySelector('#question');
    newQuestion.innerHTML = "<p>Q" + (qtrack + 1) + ")" + question[qtrack] + "</p>";

    let next = document.querySelector('.answer');
    let nques = "<input type=\"radio\" name=\"ans\" value=\"1\" checked><span>" + options[qtrack][0] + "</span><br>";
    nques += "<input type=\"radio\" name=\"ans\" value=\"2\"><span>" + options[qtrack][1] + "</span><br>";
    nques += "<input type=\"radio\" name=\"ans\" value=\"3\"><span>" + options[qtrack][2] + "</span><br>";
    nques += "<input type=\"radio\" name=\"ans\" value=\"4\"><span>" + options[qtrack][3] + "</span><br>";
    next.innerHTML = nques;
    document.querySelector("#newBttn").innerHTML = "<input type=\"button\" value=\"Next\" id=\"bttn\" onclick=\"nextQuestion()\">";

}

//check answer is true or false
function checkAnswer() {
    let userAnswer = document.getElementsByName('ans');
    let cAns;
    for (i = 0; i < userAnswer.length; i++) {
        if (userAnswer[i].checked) {
            cAns = userAnswer[i].value;
        }
    }
    if (cAns == correct[qtrack]) {
        score++;
        wright.push(qtrack);
    }
    else wrong.push(qtrack);
}


//this function is called when next button is pressed;
function nextQuestion() {
    checkAnswer();
    qtrack += 1;
    isEnd();
    if (!end) updateQuestion();
}

