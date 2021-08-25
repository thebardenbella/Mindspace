let questions = [{
    id: 1,
    question: "Which is not a correct feature of Rig-Vedic economy?",
    answer: "Abundance of wage earners",
    options: [
      "Abundance of wage earners",
      "Cultivation of multiple cereals",
      "Primarily pastoral economy",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Bhagat Singh was involved in which conspiracy case",
    answer: " Lahore Conspiracy Case",
    options: [
      "Sialkot Conspiracy case",
      "Lahore Conspiracy Case",
      "Bhagalapur Conspiracy Case",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "Which report said that “Paramountcy must remain paramount”?",
    answer: "Butler Commission Report",
    options: [
      "Strachey Commission Report",
      "Butler Commission Report",
      "Campbell Commission Report",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "During WW1 ,which country signed the Peace treaty with Germany",
    answer: "Russia",
    options: [
      "England",
      "Russia",
      "India",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "In which year America Joined WWII",
    answer: "1941",
    options: [
      "1941",
      "1942",
      "1940",
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
