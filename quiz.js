const quizzes = {
  1: [
    { q: "Give Answer For The Series : 7, 14, 28, 56, ?, 224", options: ["84", "98", "112", "126"], a: "112" },
    { q: "Give Answer For The Series : 3, 6, 11, 18, 27, ?", options: ["35", "36", "38", "40"], a: "38" },
    { q: "Give Answer For The Series : 2, 4, 8, 16, ?, 64", options: ["24", "32", "40", "48"], a: "32" },
    { q: "Give Answer For The Series : 1, 4, 9, 16, ?, 36", options: ["20", "24", "25", "30"], a: "25" },
    { q: "Give Answer For The Series : 11, 13, 17, 19, 23, ?", options: ["27", "29", "31", "33"], a: "29" },
    { q: "Give Answer For The Series : 5, 10, 17, 26, ?, 50", options: ["35", "37", "39", "41"], a: "37" },
    { q: "Give Answer For The Series : 21, 18, 15, 12, ?, 6", options: ["9", "8", "7", "5"], a: "9" },
    { q: "Give Answer For The Series : 1, 2, 6, 24, 120, ?", options: ["480", "600", "720", "840"], a: "720" },
    { q: "Give Answer For The Series : 13, 17, 19, 23, 29, ?", options: ["31", "33", "35", "37"], a: "31" },
    { q: "Give Answer For The Series : 81, 27, 9, 3, ?", options: ["1", "2", "3", "0"], a: "1" },
    { q: "Give Answer For The Series : 8, 24, 12, 36, 18, ?", options: ["54", "72", "63", "48"], a: "54" },
    { q: "Give Answer For The Series : 3, 12, 27, 48, 75, ?", options: ["98", "108", "100", "102"], a: "108" },
    { q: "Give Answer For The Series : 6, 11, 21, 36, ?, 66", options: ["51", "52", "53", "54"], a: "56" },
    { q: "Give Answer For The Series : 10, 12, 16, 24, 36, ?", options: ["42", "48", "52", "54"], a: "54" },
    { q: "Give Answer For The Series : 15, 31, 63, 127, ?", options: ["255", "251", "253", "257"], a: "255" },
    { q: "Give Answer For The Series : 1, 4, 10, 22, 46, ?", options: ["94", "90", "92", "96"], a: "94" },
    { q: "Give Answer For The Series : 80, 40, 20, 10, ?", options: ["4", "5", "6", "7"], a: "5" },
    { q: "Give Answer For The Series : 7, 9, 12, 16, 21, ?", options: ["25", "27", "28", "29"], a: "27" },
    { q: "Give Answer For The Series : 5, 7, 11, 17, 25, ?", options: ["35", "37", "39", "41"], a: "35" },
    { q: "Give Answer For The Series : 100, 96, 92, 88, ?", options: ["82", "84", "86", "90"], a: "84" }
  ],
  2: [
    { q: "Give Answer For The Series : 2, 5, 10, 17, 26, ?", options: ["35", "36", "37", "38"], a: "37" },
    { q: "Give Answer For The Series : 4, 9, 16, 25, ?", options: ["36", "35", "37", "38"], a: "36" },
    { q: "Give Answer For The Series : 10, 20, 30, 40, ?", options: ["45", "50", "55", "60"], a: "50" },
    { q: "Give Answer For The Series : 81, 72, 63, 54, ?", options: ["45", "46", "47", "48"], a: "45" },
    { q: "Give Answer For The Series : 5, 10, 20, 40, ?", options: ["60", "70", "80", "90"], a: "80" },
    { q: "Give Answer For The Series : 1, 8, 27, 64, ?", options: ["100", "121", "125", "144"], a: "125" },
    { q: "Give Answer For The Series : 50, 45, 40, 35, ?", options: ["25", "28", "30", "32"], a: "30" },
    { q: "Give Answer For The Series : 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], a: "13" },
    { q: "Give Answer For The Series : 100, 90, 80, 70, ?", options: ["50", "55", "60", "65"], a: "60" },
    { q: "Give Answer For The Series : 6, 11, 16, 21, ?", options: ["25", "26", "27", "28"], a: "26" },
    { q: "Give Answer For The Series : 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], a: "30" },
    { q: "Give Answer For The Series : 4, 7, 10, 13, ?", options: ["15", "16", "17", "18"], a: "16" },
    { q: "Give Answer For The Series : 3, 7, 13, 21, ?", options: ["29", "30", "31", "32"], a: "31" },
    { q: "Give Answer For The Series : 1, 2, 3, 5, 8, ?", options: ["11", "12", "13", "14"], a: "13" },
    { q: "Give Answer For The Series : 20, 18, 16, 14, ?", options: ["10", "11", "12", "13"], a: "12" },
    { q: "Give Answer For The Series : 7, 14, 21, 28, ?", options: ["35", "36", "37", "38"], a: "35" },
    { q: "Give Answer For The Series : 11, 22, 33, 44, ?", options: ["54", "55", "56", "57"], a: "55" },
    { q: "Give Answer For The Series : 9, 18, 27, 36, ?", options: ["44", "45", "46", "47"], a: "45" },
    { q: "Give Answer For The Series : 4, 8, 12, 16, ?", options: ["18", "19", "20", "21"], a: "20" },
    { q: "Give Answer For The Series : 15, 30, 45, 60, ?", options: ["75", "76", "77", "78"], a: "75" }
  ],
  3: [
    { q: "Give Answer For The Series : 3, 6, 12, 24, 48, ?", options: ["72", "84", "96", "108"], a: "96" },
    { q: "Give Answer For The Series : 5, 11, 17, 23, ?", options: ["27", "29", "31", "33"], a: "29" },
    { q: "Give Answer For The Series : 2, 3, 5, 8, ?", options: ["11", "12", "13", "14"], a: "13" },
    { q: "Give Answer For The Series : 4, 16, 36, 64, ?", options: ["100", "110", "120", "144"], a: "144" },
    { q: "Give Answer For The Series : 7, 14, 28, 56, ?", options: ["84", "98", "112", "126"], a: "112" },
    { q: "Give Answer For The Series : 10, 20, 40, 80, ?", options: ["120", "140", "160", "180"], a: "160" },
    { q: "Give Answer For The Series : 1, 1, 2, 3, 5, ?", options: ["7", "8", "9", "10"], a: "8" },
    { q: "Give Answer For The Series : 50, 45, 40, 35, ?", options: ["25", "30", "32", "33"], a: "30" },
    { q: "Give Answer For The Series : 3, 9, 27, 81, ?", options: ["243", "256", "270", "300"], a: "243" },
    { q: "Give Answer For The Series : 6, 12, 24, 48, ?", options: ["60", "72", "84", "96"], a: "96" },
    { q: "Give Answer For The Series : 11, 13, 17, 19, ?", options: ["23", "25", "27", "29"], a: "23" },
    { q: "Give Answer For The Series : 5, 10, 20, 40, ?", options: ["60", "80", "100", "120"], a: "80" },
    { q: "Give Answer For The Series : 15, 30, 45, 60, ?", options: ["75", "90", "105", "120"], a: "75" },
    { q: "Give Answer For The Series : 8, 16, 32, 64, ?", options: ["96", "112", "128", "144"], a: "128" },
    { q: "Give Answer For The Series : 100, 95, 90, 85, ?", options: ["75", "80", "85", "90"], a: "80" },
    { q: "Give Answer For The Series : 1, 4, 9, 16, ?", options: ["20", "24", "25", "30"], a: "25" },
    { q: "Give Answer For The Series : 20, 18, 16, 14, ?", options: ["10", "11", "12", "13"], a: "12" },
    { q: "Give Answer For The Series : 13, 17, 19, 23, ?", options: ["27", "29", "31", "33"], a: "29" },
    { q: "Give Answer For The Series : 2, 6, 12, 20, ?", options: ["24", "28", "30", "32"], a: "30" },
    { q: "Give Answer For The Series : 7, 14, 21, 28, ?", options: ["32", "35", "36", "39"], a: "35" }
  ]
};

let currentQuiz = [];
let currentIndex = 0;
let correct = 0;
let incorrect = 0;
let skipped = 0;
let timer;
let timeLeft = 1200;

let userName = '';
let userId = '';

function proceedToQuizSelection() {
  const nameInput = document.getElementById('userName').value.trim();
  const idInput = document.getElementById('userId').value.trim();

  if (nameInput === '' || idInput === '') {
    alert('Please enter both Name and ID to proceed.');
    return;
  }

  userName = nameInput;
  userId = idInput;

  document.getElementById('userInfoBox').style.display = 'none';
  document.getElementById('quizInfo').style.display = 'block';
}

function startQuiz(quizNumber) {
  currentQuiz = quizzes[quizNumber];
  currentIndex = 0;
  correct = 0;
  incorrect = 0;
  skipped = 0;
  timeLeft = 1200;
  document.getElementById('quizInfo').style.display = 'none';
  document.getElementById('quizBox').style.display = 'block';
  startTimer();
  showQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      finishQuiz();
    } else {
      timeLeft--;
      let min = Math.floor(timeLeft / 60);
      let sec = timeLeft % 60;
      document.getElementById('timer').innerText = `Time Left: ${min}:${sec < 10 ? '0' + sec : sec}`;
    }
  }, 1000);
}

function showQuestion() {
  if (currentIndex >= currentQuiz.length) {
    finishQuiz();
    return;
  }
  const qObj = currentQuiz[currentIndex];
  const optionsHtml = qObj.options.map(opt => `
    <label><input type="radio" name="option" value="${opt}"> ${opt}</label>
  `).join('');
  
  document.getElementById('questionBox').innerHTML = `
    <p>${currentIndex + 1}. ${qObj.q}</p>
    ${optionsHtml}
  `;
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    if (selected.value === currentQuiz[currentIndex].a) {
      correct++;
    } else {
      incorrect++;
    }
  } else {
    skipped++;
  }
  currentIndex++;
  showQuestion();
}

function finishQuiz() {
  clearInterval(timer);
  localStorage.setItem('result', JSON.stringify({
    name: userName,
    id: userId,
    correct,
    incorrect,
    skipped
  }));
  window.location.href = 'result.html';
}
