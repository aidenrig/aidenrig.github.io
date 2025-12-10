[studyhelper.html](https://github.com/user-attachments/files/24089413/studyhelper.html)
[Uploadi<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flashcard Quiz App</title>
  <link rel="stylesheet" href="studyhelper.css">
</head>
<body>
  <header>
    <h1>Flashcard Quiz App</h1>
  </header>

  <!-- Flashcard Creator -->
  <section id="creator">
    <h2>Flashcard Creator</h2>
    <label for="question">Question:</label>
    <input type="text" id="question" placeholder="Enter question">
    
    <label for="answer">Answer:</label>
    <input type="text" id="answer" placeholder="Enter answer">
    
    <button id="addFlashcard">Add Flashcard</button>
  </section>

  <!-- Flashcard List -->
  <section id="list">
    <h2>Flashcard List</h2>
    <ul id="flashcardList"></ul>
  </section>

  <!-- Quiz Section -->
  <section id="quiz">
    <h2>Quiz Section</h2>
    <button id="startQuiz">Start Quiz</button>
    <div id="quizArea">
      <p id="quizQuestion">Question will appear here…</p>
      <label for="userAnswer">Your Answer:</label>
      <input type="text" id="userAnswer" placeholder="Type your answer">
      <button id="submitAnswer">Submit Answer</button>
      <button id="nextQuestion">Next Question</button>
    </div>
    <p id="feedback"></p>
  </section>

  <script src="studyhelper.js"></script>
</body>
</html>
ng studyhelper.html…]()

[studyhelper.js](https://github.com/user-attachments/files/24089423/studyhelper.js)

// Flashcard Quiz App
// Author: Aiden
// Description: Create flashcards, store them in an array of JSON objects, and quiz yourself.

// ===== Data =====
let flashcards = [];
let currentQuizIndex = 0;

// ===== Functions =====

// Add a flashcard (no return value)
function addFlashcard() {
  const question = document.getElementById("question").value.trim();
  const answer = document.getElementById("answer").value.trim();

  if (question && answer) {
    const card = { question, answer };
    flashcards.push(card);
    renderFlashcardList();
    clearInputs();
  }
}

// Render flashcard list (no return value)
function renderFlashcardList() {
  const list = document.getElementById("flashcardList");
  list.innerHTML = "";
  flashcards.forEach((card, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${card.question}`;
    list.appendChild(li);
  });
}

// Clear input fields
function clearInputs() {
  document.getElementById("question").value = "";
  document.getElementById("answer").value = "";
}

// Start quiz (no return value)
function startQuiz() {
  if (flashcards.length === 0) {
    alert("No flashcards added!");
    return;
  }
  currentQuizIndex = 0;
  showQuizQuestion();
}

// Show quiz question (no return value)
function showQuizQuestion() {
  const questionEl = document.getElementById("quizQuestion");
  questionEl.textContent = flashcards[currentQuizIndex].question;
  document.getElementById("userAnswer").value = "";
  document.getElementById("feedback").textContent = "";
}

// Submit answer (with return value: boolean correct/incorrect)
function submitAnswer() {
  const userAnswer = document.getElementById("userAnswer").value.trim();
  const correctAnswer = flashcards[currentQuizIndex].answer;
  const feedbackEl = document.getElementById("feedback");

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedbackEl.textContent = "✅ Correct!";
    return true;
  } else {
    feedbackEl.textContent = `❌ Incorrect. Correct answer: ${correctAnswer}`;
    return false;
  }
}

// Next question
function nextQuestion() {
  if (currentQuizIndex < flashcards.length - 1) {
    currentQuizIndex++;
    showQuizQuestion();
  } else {
    document.getElementById("quizQuestion").textContent = "Quiz finished!";
    document.getElementById("feedback").textContent = "";
  }
}

// ===== Event Listeners =====
document.getElementById("addFlashcard").addEventListener("click", addFlashcard);
document.getElementById("startQuiz").addEventListener("click", startQuiz);
document.getElementById("submitAnswer").addEventListener("click", submitAnswer);
document.getElementById("nextQuestion").addEventListener("click", nextQuestion);

[studyhelper.css](https://github.com/user-attachments/files/24089436/studyhelper.css)
:root {
  --bg: #0f172a;
  --panel: #111827;
  --accent: #38bdf8;
  --accent-2: #22c55e;
  --danger: #ef4444;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --border: #1f2937;
  --focus: #f59e0b;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }

.app-header, .app-footer { padding: 1rem; border-bottom: 1px solid var(--border); }
.app-footer { border-top: 1px solid var(--border); border-bottom: none; text-align: center; color: var(--muted); }

.app-header h1 { margin: 0 0 .5rem 0; font-size: 1.25rem; }
.controls { display: flex; gap: .75rem; align-items: center; flex-wrap: wrap; }
.controls label { color: var(--muted); }
.controls select, .controls button { background: var(--panel); color: var(--text); border: 1px solid var(--border); padding: .4rem .6rem; border-radius: .4rem; }
.controls button.danger { border-color: var(--danger); color: #fff; }

.app-main { max-width: 900px; margin: 0 auto; padding: 1rem; }

.tabs { display: flex; gap: .5rem; margin-bottom: .75rem; }
.tab { background: var(--panel); border: 1px solid var(--border); color: var(--text); padding: .5rem .8rem; border-radius: .4rem; cursor: pointer; }
.tab.active { border-color: var(--accent); color: var(--accent); }

.tab-panel { display: none; background: var(--panel); border: 1px solid var(--border); border-radius: .6rem; padding: 1rem; }
.tab-panel.active { display: block; }

.display-area { display: grid; gap: .5rem; margin-bottom: .75rem; }
.display-area input { width: 100%; padding: .6rem .8rem; border-radius: .4rem; border: 1px solid var(--border); background: #0b1220; color: var(--text); font-size: 1rem; }
.result { background: #0b1220; border: 1px solid var(--border); border-radius: .4rem; padding: .6rem .8rem; font-size: 1.1rem; min-height: 2.2rem; display: flex; align-items: center; }
.error { background: #1b0f13; border: 1px solid var(--danger); color: #fecaca; border-radius: .4rem; padding: .5rem .7rem; }

.button-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: .5rem; }
.btn { background: #172033; color: var(--text); border: 1px solid var(--border); padding: .8rem; border-radius: .5rem; cursor: pointer; text-align: center; }
.btn:hover { border-color: var(--accent); }
.btn.op { background: #1b2a45; }
.btn.fn { background: #1a263d; }
.btn.const { background: #192437; }
.btn.action.primary { background: var(--accent); color: #001221; font-weight: 600; }
.btn.action.danger { border-color: var(--danger); color: #fff; }
.btn.mem { background: #162036; }

.history-header { display: flex; align-items: center; gap: .5rem; }
.history-list { list-style: none; padding: 0; margin: .75rem 0 0; display: grid; gap: .4rem; }
.history-item { display: grid; grid-template-columns: 1fr auto; gap: .5rem; background: #0b1220; border: 1px solid var(--border); border-radius: .4rem; padding: .5rem .6rem; }
.history-item .expr { color: var(--muted); }
.history-item .ans { color: var(--accent-2); font-weight: 600; }

.secondary { background: #162036; border-color: var(--accent); color: var(--accent); }

button:focus, input:focus, select:focus { outline: 2px solid var(--focus); outline-offset: 3px; }

@media (max-width: 520px) {
  .button-grid { grid-template-columns: repeat(4, 1fr); }
  .controls { flex-direction: column; align-items: flex-start; }
}
