// quizzes = { your existing data (already in your file) }
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
  { q: "Give Answer For The Series : 2, 5, 10, 17, 26, ?", options: ["35", "36", "37", "38"], a: "37" }, // Easy
  { q: "Give Answer For The Series : 3, 6, 12, 24, 48, ?", options: ["72", "84", "96", "108"], a: "96" }, // Easy
  { q: "Give Answer For The Series : 12, 15, 21, 30, 42, ?", options: ["51", "54", "56", "57"], a: "57" }, // Easy
  { q: "Give Answer For The Series : 54, 48, 42, 36, 30, ?", options: ["24", "26", "27", "28"], a: "24" }, // Easy
  { q: "Give Answer For The Series : 7, 14, 21, 28, 35, ?", options: ["38", "39", "40", "42"], a: "42" }, // Easy
  { q: "Give Answer For The Series : 8, 13, 23, 38, 58, ?", options: ["70", "78", "80", "83"], a: "83" }, // Moderate
  { q: "Give Answer For The Series : 5, 11, 24, 51, 106, ?", options: ["201", "208", "217", "220"], a: "217" }, // Moderate
  { q: "Give Answer For The Series : 2, 6, 12, 20, 30, ?", options: ["36", "38", "40", "42"], a: "42" }, // Moderate
  { q: "Give Answer For The Series : 18, 20, 24, 32, 48, ?", options: ["64", "72", "80", "88"], a: "80" }, // Moderate
  { q: "Give Answer For The Series : 125, 136, 149, 164, 181, ?", options: ["190", "195", "200", "205"], a: "200" }, // Moderate
  { q: "Give Answer For The Series : 4, 12, 36, 108, 324, ?", options: ["648", "729", "864", "972"], a: "972" }, // Moderate
  { q: "Give Answer For The Series : 1, 3, 7, 13, 21, ?", options: ["27", "29", "30", "31"], a: "31" }, // Moderate
  { q: "Give Answer For The Series : 32, 35, 41, 50, 62, ?", options: ["72", "75", "77", "78"], a: "77" }, // Moderate
  { q: "Give Answer For The Series : 100, 92, 86, 82, 80, ?", options: ["79", "80", "81", "82"], a: "80" }, // Moderate
  { q: "Give Answer For The Series : 6, 13, 25, 45, 77, ?", options: ["111", "120", "126", "130"], a: "126" }, // Moderate
  { q: "Give Answer For The Series : 2, 3, 5, 7, 11, 13, ?", options: ["15", "16", "17", "18"], a: "17" }, // Difficult
  { q: "Give Answer For The Series : 1, 1, 2, 4, 7, 11, 16, ?", options: ["20", "21", "22", "23"], a: "22" }, // Difficult
  { q: "Give Answer For The Series : 5, 6, 15, 50, 207, ?", options: ["800", "930", "1023", "1044"], a: "1044" }, // Difficult
  { q: "Give Answer For The Series : 8, 4, 12, 6, 18, 9, ?", options: ["24", "26", "27", "28"], a: "27" }, // Difficult
  { q: "Give Answer For The Series : 3, 7, 16, 35, 74, ?", options: ["141", "149", "153", "159"], a: "153" } // Difficult
],
4: [
    { q: "Give Answer For The Series : A, C, E, G, ?", options: ["I", "H", "J", "K"], a: "I" },
    { q: "Give Answer For The Series : B, E, H, K, ?", options: ["N", "M", "L", "O"], a: "N" },
    { q: "Give Answer For The Series : M, N, O, P, ?", options: ["Q", "R", "S", "T"], a: "Q" },
    { q: "Give Answer For The Series : Z, X, V, T, ?", options: ["R", "S", "Q", "P"], a: "R" },
    { q: "Give Answer For The Series : D, H, L, P, ?", options: ["T", "S", "U", "V"], a: "T" },
    { q: "Give Answer For The Series : F, J, N, R, ?", options: ["V", "U", "W", "X"], a: "V" },
    { q: "Give Answer For The Series : B, D, G, K, ?", options: ["P", "O", "N", "M"], a: "P" },
    { q: "Give Answer For The Series : T, Q, N, K, ?", options: ["H", "I", "J", "L"], a: "H" },
    { q: "Give Answer For The Series : Y, U, Q, M, ?", options: ["I", "H", "J", "G"], a: "I" },
    { q: "Give Answer For The Series : C, G, L, R, ?", options: ["Z", "X", "Y", "W"], a: "Z" },
    { q: "Give Answer For The Series : D, G, K, P, ?", options: ["V", "U", "W", "X"], a: "V" },
    { q: "Give Answer For The Series : Z, W, S, N, ?", options: ["H", "I", "J", "K"], a: "H" },
    { q: "Give Answer For The Series : E, H, L, Q, ?", options: ["W", "V", "U", "X"], a: "W" },
    { q: "Give Answer For The Series : A, E, J, P, ?", options: ["W", "V", "X", "Y"], a: "W" },
    { q: "Give Answer For The Series : M, J, F, A, ?", options: ["U", "T", "V", "W"], a: "U" },
    { q: "Give Answer For The Series : G, L, R, Y, ?", options: ["G", "H", "F", "E"], a: "G" },
    { q: "Give Answer For The Series : Q, N, J, E, ?", options: ["Y", "X", "W", "V"], a: "Y" },
    { q: "Give Answer For The Series : H, M, S, X, ?", options: ["D", "C", "E", "B"], a: "D" },
    { q: "Give Answer For The Series : T, P, K, E, ?", options: ["X", "W", "Y", "Z"], a: "X" },
    { q: "Give Answer For The Series : V, S, O, J, ?", options: ["C", "B", "D", "E"], a: "C" }
],
5: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
6: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
7: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
8: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
9: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
10: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
11: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
12: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
13: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
14: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
],
15: [
    { q: "coming soon", options: ["", "", "", ""], a: "" }
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
let userAnswers = [];

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
  userAnswers = [];
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
    <label><input type="radio" name="option" value="${opt}" ${userAnswers[currentIndex] && userAnswers[currentIndex].selected === opt ? 'checked' : ''}> ${opt}</label>
  `).join('');

  document.getElementById('questionBox').innerHTML = `
    <p>${currentIndex + 1}. ${qObj.q}</p>
    ${optionsHtml}
  `;
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  const selectedValue = selected ? selected.value : null;

  userAnswers[currentIndex] = {
    q: currentQuiz[currentIndex].q,
    selected: selectedValue,
    correct: currentQuiz[currentIndex].a
  };

  currentIndex++;
  showQuestion();
}

function backQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

function finishQuiz() {
  clearInterval(timer);
  correct = 0;
  incorrect = 0;
  skipped = 0;

  userAnswers.forEach(ans => {
    if (!ans || ans.selected === null) {
      skipped++;
    } else if (ans.selected === ans.correct) {
      correct++;
    } else {
      incorrect++;
    }
  });

  localStorage.setItem('result', JSON.stringify({
    name: userName,
    id: userId,
    correct,
    incorrect,
    skipped,
    details: userAnswers
  }));
  window.location.href = 'result.html';
}
