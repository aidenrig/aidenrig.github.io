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
