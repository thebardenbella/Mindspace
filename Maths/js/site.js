let questions = [{
    id: 1,
    question: "The average of first 50 natural numbers is",
    answer: "25.5",
    options: [
      "25.30",
      "25.5",
      "25",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "The number of 3-digit numbers divisible by 6, is",
    answer: "150",
    options: [
      "150",
      "221",
      "144",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "% of discount if a car which price was $4000 was sold for $3200?",
    answer: "20%",
    options: [
      "18%",
      "20%",
      "13%",
      "None of these"
    ]
  },
  {
    id: 4,
    question: " If x and y are complementary angles, then",
    answer: "sec x = cosec y",
    options: [
      "sec x = cosec y",
      "tan x = tan y",
      "cos x = cos y",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "The value of cos 0°. cos 1°. cos 2°. cos 3°… cos 89° cos 90° is",
    answer: "0",
    options: [
      "1",
      "-1",
      "0",
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
