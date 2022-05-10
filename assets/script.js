const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];
let sec = 50;
let i = 0;
let score;
let stop;
let ini;

const displayNone = (id) => {
  document.querySelector(`#${id}`).style.display = "none";
};
displayNone("box2");
displayNone("box3");
displayNone("box4");
function count(){
    stop = setInterval(function () {
    if(sec <= 0){
      clearInterval(stop);  
      score = sec;
		localStorage.setItem("currscore", score);
    }  
    else if(sec < 10)
    document.getElementById("count").innerText = "Time: 0" + sec;
    else 
      document.getElementById("count").innerText = "Time: " + sec;
    sec--;
    console.log(sec);
    }, 1000);
}

function check(s, i)
{
	console.log(s)
	console.log(questions[i].answer)
	if(s.localeCompare(questions[i].answer) == 0){
	  document.getElementById("ans").innerText = "Correct!";
	}
	else
	{
	  document.getElementById("ans").innerText = "Incorrect!";
	  sec = sec - 10;
	}
	console.log("i = " + i);

}

function putQuestion(i){
	document.getElementById("question").innerText = questions[i].questionText;
	document.getElementById("a").innerText = questions[i].options[0];
	document.getElementById("b").innerText = questions[i].options[1];
	document.getElementById("c").innerText = questions[i].options[2];
	document.getElementById("d").innerText = questions[i].options[3];
	document.getElementById("a").value = questions[i].options[0];
	document.getElementById("b").value = questions[i].options[1];
	document.getElementById("c").value = questions[i].options[2];
	document.getElementById("d").value = questions[i].options[3];
	console.log("i"+i);
}


function onClickOption(op){
  let s = document.getElementById(op).value;
	if(i == 4){
    check(s, i);
	  clearInterval(stop);
	  score = sec;
    displayNone("box2");
		document.querySelector("#box3").style.display = "";
    document.getElementById("s").innerText = "Your final score is: " + score ;
    
	}
  else if(i < 4){
	
	check(s, i);
	i = i+1;
	putQuestion(i);
  }
}

function viewScore(){
  let temp = Object.keys(localStorage);
   
  let count = 1;
  const list = document.getElementById("highscores");

  for(let i = 0; i < 2 ; i++){
      let temp1 = "";
      temp1 = temp1 + temp[i] + " - " + localStorage.getItem(temp[i]);
      count++;
      const entry = document.createElement('li');
      entry.appendChild(document.createTextNode(temp1));
      list.appendChild(entry);
  }
  console.log(temp);

}

function back(){
  displayNone("box2");
  displayNone("box3");
  displayNone("box4");
  document.querySelector("#box1").style.display = "";
  sec = 50;
  i = 0;
}
putQuestion(0);
document.getElementById("a").onclick = function() {onClickOption("a");};
document.getElementById("b").onclick = function() {onClickOption("b");};
document.getElementById("c").onclick = function() {onClickOption("c");};
document.getElementById("d").onclick = function() {onClickOption("d");};
document.getElementById("start").onclick = function() {count();
                                                        displayNone("box1");
                                                      document.querySelector("#box2").style.display = "";}
document.getElementById("info").onsubmit = function() {localStorage.setItem(document.getElementById("initials").value, score);
                                                      };
document.getElementById("back").onclick = function() {back();};
document.getElementById("leaderboard").onclick = function(){displayNone("box1");
document.querySelector("#box4").style.display = "";}
viewScore();
