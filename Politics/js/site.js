let questions = [{
    id: 1,
    question: "In which year, the GOI had set up the Sarkaria Commission ?",
    answer: "1983",
    options: [
      "1980",
      "1983",
      "1987",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Who won the US elections 2020",
    answer: "Joe Bidden",
    options: [
      "Donald Trump",
      "Joe Bidden",
      "Hilary Clinton",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "Which one decides how far the baisic rights can applied to army?",
    answer: "President of India",
    options: [
      "President of India",
      "Parliament of India",
      " Arms Forces themselves",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "when was indian constitution adopted",
    answer: "January 26, 1950",
    options: [
      "January 26, 1950",
      "January 26, 1955",
      "January 22, 1950",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "Who was the first PM of India",
    answer: "Jawaharlal Nehru",
    options: [
      "Jawaharlal Nehru",
      "Narendra Modi",
      "Subash Chandra Bose",
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
