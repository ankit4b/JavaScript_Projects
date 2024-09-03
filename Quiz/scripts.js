const questions = [
  {
    question: "What is the capital of India?",
    options: [
      { text: "Mumbai", isCorrect: false },
      { text: "Delhi", isCorrect: true },
      { text: "Odisha", isCorrect: false },
      { text: "Hyderabad", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Odisha?",
    options: [
      { text: "Bhubaneswar", isCorrect: true },
      { text: "Cuttack", isCorrect: false },
      { text: "Sambalpur", isCorrect: false },
      { text: "Balangir", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Maharashtra?",
    options: [
      { text: "Pune", isCorrect: false },
      { text: "Nagpur", isCorrect: false },
      { text: "Aurangabad", isCorrect: false },
      { text: "Mumbai", isCorrect: true },
    ],
  },
  {
    question: "What is the capital of Uttar Pradesh?",
    options: [
      { text: "Kanpur", isCorrect: false },
      { text: "Varanasi", isCorrect: false },
      { text: "Lucknow", isCorrect: true },
      { text: "Agra", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Karnataka?",
    options: [
      { text: "Bangalore", isCorrect: true },
      { text: "Mysore", isCorrect: false },
      { text: "Mangalore", isCorrect: false },
      { text: "Belgaum", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Tamil Nadu?",
    options: [
      { text: "Chennai", isCorrect: true },
      { text: "Coimbatore", isCorrect: false },
      { text: "Madurai", isCorrect: false },
      { text: "Salem", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of West Bengal?",
    options: [
      { text: "Howrah", isCorrect: false },
      { text: "Kolkata", isCorrect: true },
      { text: "Durgapur", isCorrect: false },
      { text: "Siliguri", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Gujarat?",
    options: [
      { text: "Ahmedabad", isCorrect: false },
      { text: "Surat", isCorrect: false },
      { text: "Vadodara", isCorrect: false },
      { text: "Gandhinagar", isCorrect: true },
    ],
  },
  {
    question: "What is the capital of Rajasthan?",
    options: [
      { text: "Jodhpur", isCorrect: false },
      { text: "Udaipur", isCorrect: false },
      { text: "Jaipur", isCorrect: true },
      { text: "Bikaner", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Madhya Pradesh?",
    options: [
      { text: "Indore", isCorrect: false },
      { text: "Bhopal", isCorrect: true },
      { text: "Gwalior", isCorrect: false },
      { text: "Jabalpur", isCorrect: false },
    ],
  },
];

const question = document.querySelector("#question");
const options = document.querySelector("#options");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const totalQuestion = document.querySelector("#total");
const totalAnswer = document.querySelector("#correct");

let currentIndex = 0;
let total = questions.length;
let correctAns = 0;

function initiateQuiz() {
  result.style.display = "none";
  question.style.display = "block";
  options.style.display = "flex";
  btn.innerHTML = "Next";
  currentIndex = 0;
  correctAns = 0;
  showQuestion(currentIndex);
}

function showQuestion(index) {
  reset();
  let currentQuestion = questions[index];
  question.innerHTML = `${index + 1} : ${currentQuestion.question}`;

  currentQuestion.options.forEach((option) => {
    let li = document.createElement("li");
    li.innerHTML = option.text;
    if (option.isCorrect) {
      li.dataset.correct = option.isCorrect;
    }
    li.addEventListener("click", selectAnswer);
    options.append(li);
  });
}

function buttonClick() {
  if (btn.innerHTML === "Restart") {
    initiateQuiz();
  } else {
    console.log("prev currentIndex : ", currentIndex);
    currentIndex++;
    console.log("next currentIndex : ", currentIndex);
    if (currentIndex < questions.length) {
      showQuestion(currentIndex);
    } else {
      question.style.display = "none";
      options.style.display = "none";
      btn.innerHTML = "Restart";
      result.style.display = "initial";
      totalQuestion.innerHTML = total;
      totalAnswer.innerHTML = correctAns;
    }
  }
}

function selectAnswer(e) {
  let res = e.target;
  if (res.dataset.correct) {
    correctAns++;
    e.target.classList.add("correct");
  } else {
    e.target.classList.add("incorrect");
  }

  Array.from(options.children).forEach((child) => {
    if (child.dataset.correct) {
      child.classList.add("correct");
    }
    child.classList.add("disabled");
  });

  btn.style.display = "initial";
}

function reset() {
  btn.style.display = "none";
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

initiateQuiz();
