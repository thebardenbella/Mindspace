let questions = [{
    id: 1,
    question: "Which is a blood vessel that carries blood away from heart ?",
    answer: "Artery",
    options: [
      "Vein",
      "Artery",
      "Capillary",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Which of the following is not a member of the vitamin B complex?",
    answer: " Ascorbic acid",
    options: [
      " Ascorbic acid",
      " Folic acid",
      "Riboflavin",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "How many bones does a human body have",
    answer: "206",
    options: [
      "206",
      "204",
      "239",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Which of following temperature scale is based upon absolute zero",
    answer: "Kelvin",
    options: [
      "Celsius",
      "Fahrenheit",
      "Kelvin",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "Which among the following can produce virtual image?",
    answer: "All of the above",
    options: [
      "Converging lens",
      "Mirror",
      "All of the above",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

// When the window loads , we want the quesions to be visible. Hence we use window onload feature which calls show
// function which loads the question as soon as the window opens
window.onload = function() {
  show(question_count);

};

function next() {


  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul>
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
