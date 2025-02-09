
let questions = [
    {
        id: 1,
        question: "Fill in the blank. The ___ of a short story tells where the story takes place.",
        answer: "SETTING",
        options: [
            "CHARACTERS",
            "SETTING",
            "PLOT",
            "CONFLICT"
        ]
    },
    {
        id: 2,
        question: "What person point-of-view when the story is told through a character?",
        answer: "FIRST PERSON",
        options: [
            "THIRD PERSON LIMITED",
            "SECOND PERSON",
            "FIRST PERSON",
            "THIRD PERSON OMNISCIENT"
        ]
    },
    {
        id: 3,
        question: "Who are the people in the short story?",
        answer: "CHARACTER",
        options: [
            "PLOT",
            "SETTING",
            "CONFLICT",
            "CHARACTER"
        ]
    },
    {   
        id: 4,
        question: "Which of the following is NOT characterized by the story?",
        answer: "PERSONA",
        options: [
            "PERSONA",
            "MOOD",
            "WEATHER CONDITION",
            "TIME"
        ]
    },
    {
        id: 5,
        question: "What kind of conflict is this sentence?: A nerd being looked down by other kids.",
        answer: "MAN VS. SOCIETY",
        options: [
            "MAN VS. NATURE",
            "MAN VS. SOCIETY",
            "MAN VS. SELF",
            "MAN VS. MAN"
        ]
    },
    {   
        id: 6,
        question: "What kind of conflict is this sentence?: The typhoon that destroyed many houses.",
        answer: "MAN VS. NATURE",
        options: [
            "MAN VS. MAN",
            "MAN VS. SELF",
            "MAN VS. NATURE",
            "MAN VS. SOCIETY"
        ]
    },
    {   
        id: 7,
        question: "What kind of conflict is this sentence?: A girl feeling that she cannot dance well.",
        answer: "MAN VS. SELF",
        options: [
            "MAN VS. SOCIETY",
            "MAN VS. NATURE",
            "MAN VS. MAN",
            "MAN VS. SELF"
        ]
    },
    {   
        id: 8,
        question: "What kind of conflict is this sentence?: An argument between a girl and a mother.",
        answer: "MAN VS. MAN",
        options: [
            "MAN VS. SELF",
            "MAN VS. MAN",
            "MAN VS. NATURE",
            "MAN VS. SOCIETY"
        ]
    },
    {
        id: 9,
        question: "What part that contains the sequence of events?",
        answer: "PLOT",
        options: [
            "CHARACTERS",
            "CONFLICT",
            "PLOT",
            "THEME"
        ]
    },
    {
        id: 10,
        question: "What person point-of-view is told in 3rd persoon, using pronouns they, he, she, it, etc.?",
        answer: "3RD PERSON LIMITED",
        options: [
            "2ND PERSON",
            "3RD PERSON OMNISCIENT",
            "1ST PERSON",
            "3RD PERSON LIMITED"
        ]
    },
    {
        id: 11,
        question: "It is where the setting and characters are introduced.",
        answer: "EXPOSITION",
        options: [
            "CLIMAX",
            "FALLING ACTION",
            "RISING ACTION",
            "EXPOSITION"
        ]
    },
    {
        id: 12,
        question: "It is the highest point of the story.",
        answer: "CLIMAX",
        options: [
            "FALLING ACTION",
            "EXPOSITION",
            "RISING ACTION",
            "CLIMAX"
        ]
    },
    {
        id: 13,
        question: "It is outcome/result in the story.",
        answer: "DENOUEMENT",
        options: [
            "EXPOSITION",
            "DENOUEMENT",
            "CLIMAX",
            "FALLING ACTION"
        ]
    },
    {
        id: 14,
        question: "You can find the complictaions and conflict in this part of the plot.",
        answer: "RISING ACTION",
        options: [
            "RISING ACTION",
            "FALLING ACTION",
            "CLIMAX",
            "EXPOSITION"
        ]
    },
    {
        id: 15,
        question: "It is where problems resolving themselves.",
        answer: "FALLING ACTION",
        options: [
            "RISING ACTION",
            "FALLING ACTION",
            "RISING ACTION",
            "DENOUEMENT"
        ]
    },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i <option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i<option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}



function next(){

    if(question_count == questions.length -1){
        location.href = "final-score.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points +=10;
    sessionStorage.setItem("points",points)
}
console.log(points);
 
question_count++;
show(question_count);
}
