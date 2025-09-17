// Christian Knowledge Quiz - JavaScript Implementation

class ChristianKnowledgeQuiz {
  constructor() {
    // Quiz configuration
    this.timeLimit = 30 * 60; // 30 minutes in seconds
    this.totalQuestions = 60;
    this.currentQuestionIndex = 0;
    this.timeRemaining = this.timeLimit;
    this.timerInterval = null;

    // User data
    this.studentName = "";
    this.registrationNumber = "";
    this.answers = {};
    this.score = 0;

    // Quiz questions and answers
    this.questions = [
      {
        question: "Who wrote the most books in the New Testament?",
        options: ["Peter", "Paul", "John", "Luke"],
        correct: 1,
      },
      {
        question: "What is the first book of the Bible?",
        options: ["Exodus", "Genesis", "Psalms", "Matthew"],
        correct: 1,
      },
      {
        question: "How many days did Jesus fast in the wilderness?",
        options: ["30 days", "40 days", "50 days", "60 days"],
        correct: 1,
      },
      {
        question: "What was the name of Moses' brother?",
        options: ["Joshua", "Aaron", "Caleb", "David"],
        correct: 1,
      },
      {
        question: "In which city was Jesus born?",
        options: ["Jerusalem", "Nazareth", "Bethlehem", "Capernaum"],
        correct: 2,
      },
      {
        question: "How many disciples did Jesus choose?",
        options: ["10", "11", "12", "13"],
        correct: 2,
      },
      {
        question: "What is the last book of the Bible?",
        options: ["Jude", "Revelation", "3 John", "Hebrews"],
        correct: 1,
      },
      {
        question: "Who baptized Jesus?",
        options: ["Peter", "John the Baptist", "Andrew", "Philip"],
        correct: 1,
      },
      {
        question: "What did God create on the first day?",
        options: ["Land and sea", "Light", "Animals", "Man"],
        correct: 1,
      },
      {
        question: "How many commandments did God give Moses?",
        options: ["8", "10", "12", "15"],
        correct: 1,
      },
      {
        question: "What was the name of Adam's wife?",
        options: ["Sarah", "Eve", "Mary", "Ruth"],
        correct: 1,
      },
      {
        question: "Who was swallowed by a great fish?",
        options: ["Elijah", "Jonah", "Daniel", "Ezekiel"],
        correct: 1,
      },
      {
        question: "What is the golden rule according to Jesus?",
        options: [
          "Love your enemies",
          "Do unto others as you would have them do unto you",
          "Turn the other cheek",
          "Blessed are the meek",
        ],
        correct: 1,
      },
      {
        question: "How many plagues did God send to Egypt?",
        options: ["7", "8", "9", "10"],
        correct: 3,
      },
      {
        question: "Who denied Jesus three times?",
        options: ["Judas", "Peter", "Thomas", "James"],
        correct: 1,
      },
      {
        question:
          "What is the first fruit of the Spirit mentioned in Galatians?",
        options: ["Peace", "Love", "Joy", "Patience"],
        correct: 1,
      },
      {
        question: "Who was the first king of Israel?",
        options: ["David", "Saul", "Solomon", "Samuel"],
        correct: 1,
      },
      {
        question: "In which river was Jesus baptized?",
        options: ["Nile", "Jordan", "Euphrates", "Tigris"],
        correct: 1,
      },
      {
        question: "What was the name of the garden where Adam and Eve lived?",
        options: ["Gethsemane", "Eden", "Olivet", "Galilee"],
        correct: 1,
      },
      {
        question: "How many sons did Jacob have?",
        options: ["10", "11", "12", "13"],
        correct: 2,
      },
      {
        question: "Who built the ark?",
        options: ["Abraham", "Noah", "Moses", "Joshua"],
        correct: 1,
      },
      {
        question: "What is the shortest verse in the Bible?",
        options: ["God is love", "Jesus wept", "Pray continually", "Be still"],
        correct: 1,
      },
      {
        question: "Who was the mother of Jesus?",
        options: ["Martha", "Mary", "Elizabeth", "Sarah"],
        correct: 1,
      },
      {
        question: "What did Jesus turn water into at the wedding?",
        options: ["Oil", "Wine", "Milk", "Honey"],
        correct: 1,
      },
      {
        question: "Who was thrown into the lion's den?",
        options: ["Daniel", "David", "Elijah", "Jeremiah"],
        correct: 0,
      },
      {
        question: "What is the name of the place where Jesus was crucified?",
        options: ["Mount Sinai", "Golgotha", "Mount Zion", "Mount Carmel"],
        correct: 1,
      },
      {
        question: "How many books are in the New Testament?",
        options: ["25", "26", "27", "28"],
        correct: 2,
      },
      {
        question: "Who was the tax collector that Jesus called to follow him?",
        options: ["Matthew", "Mark", "Luke", "John"],
        correct: 0,
      },
      {
        question: "What was the name of Abraham's wife?",
        options: ["Rachel", "Sarah", "Leah", "Rebecca"],
        correct: 1,
      },
      {
        question: "How many days was Jonah in the belly of the fish?",
        options: ["1 day", "2 days", "3 days", "4 days"],
        correct: 2,
      },
      {
        question: "Who was the wisest king in the Bible?",
        options: ["David", "Saul", "Solomon", "Hezekiah"],
        correct: 2,
      },
      {
        question: "What did Jesus do for a living before his ministry?",
        options: ["Fisherman", "Carpenter", "Shepherd", "Teacher"],
        correct: 1,
      },
      {
        question: "Who was the first martyr in the New Testament?",
        options: ["James", "Stephen", "Peter", "John"],
        correct: 1,
      },
      {
        question: "What is the great commission?",
        options: [
          "Love your neighbor",
          "Go and make disciples",
          "Feed the hungry",
          "Visit the sick",
        ],
        correct: 1,
      },
      {
        question: "Who walked on water with Jesus?",
        options: ["John", "Peter", "Andrew", "James"],
        correct: 1,
      },
      {
        question: "What was Paul's name before his conversion?",
        options: ["Simon", "Saul", "Samuel", "Solomon"],
        correct: 1,
      },
      {
        question: "How many years did the Israelites wander in the wilderness?",
        options: ["30 years", "40 years", "50 years", "60 years"],
        correct: 1,
      },
      {
        question: "Who was the first woman judge in Israel?",
        options: ["Miriam", "Deborah", "Ruth", "Esther"],
        correct: 1,
      },
      {
        question: "What is the fruit of the Spirit?",
        options: [
          "Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control",
          "Faith, hope, love",
          "Wisdom, knowledge, understanding",
          "Power, love, sound mind",
        ],
        correct: 0,
      },
      {
        question: "Who was sold into slavery by his brothers?",
        options: ["Benjamin", "Joseph", "Judah", "Reuben"],
        correct: 1,
      },
      {
        question: "What is the armor of God?",
        options: [
          "Sword and shield",
          "Belt of truth, breastplate of righteousness, feet fitted with readiness, shield of faith, helmet of salvation, sword of the Spirit",
          "Prayer and fasting",
          "Love and forgiveness",
        ],
        correct: 1,
      },
      {
        question: "Who replaced Judas as a disciple?",
        options: ["Paul", "Matthias", "Barnabas", "Timothy"],
        correct: 1,
      },
      {
        question: "What did Jesus say is the greatest commandment?",
        options: [
          "Do not steal",
          "Love God with all your heart, soul, mind, and strength",
          "Honor your father and mother",
          "Do not commit adultery",
        ],
        correct: 1,
      },
      {
        question: "Who was the strongest man in the Bible?",
        options: ["David", "Goliath", "Samson", "Joshua"],
        correct: 2,
      },
      {
        question: "What happened on the day of Pentecost?",
        options: [
          "Jesus was born",
          "Jesus was crucified",
          "The Holy Spirit came upon the disciples",
          "Jesus ascended to heaven",
        ],
        correct: 2,
      },
      {
        question: "Who was the oldest man in the Bible?",
        options: ["Adam", "Noah", "Methuselah", "Abraham"],
        correct: 2,
      },
      {
        question: "What is the Lord's Prayer?",
        options: [
          "The prayer Jesus taught his disciples",
          "A prayer by David",
          "A prayer by Paul",
          "A prayer by Moses",
        ],
        correct: 0,
      },
      {
        question:
          "Who was the first person to see Jesus after his resurrection?",
        options: ["Peter", "John", "Mary Magdalene", "Thomas"],
        correct: 2,
      },
      {
        question: "What is baptism a symbol of?",
        options: [
          "Birth",
          "Death and resurrection with Christ",
          "Marriage",
          "Prosperity",
        ],
        correct: 1,
      },
      {
        question: "Who wrote the book of Revelation?",
        options: ["Peter", "Paul", "John", "James"],
        correct: 2,
      },
      {
        question:
          "What are the names of the first four books of the New Testament?",
        options: [
          "Matthew, Mark, Luke, John",
          "Genesis, Exodus, Leviticus, Numbers",
          "Romans, Corinthians, Galatians, Ephesians",
          "Acts, Romans, Hebrews, James",
        ],
        correct: 0,
      },
      {
        question: "Who was the queen that saved her people from destruction?",
        options: ["Ruth", "Esther", "Bathsheba", "Abigail"],
        correct: 1,
      },
      {
        question: "What is the second coming of Christ?",
        options: [
          "His birth",
          "His resurrection",
          "His return to earth",
          "His baptism",
        ],
        correct: 2,
      },
      {
        question: "Who was the father of John the Baptist?",
        options: ["Joseph", "Zacharias", "Simeon", "Eli"],
        correct: 1,
      },
      {
        question: "What does 'Emmanuel' mean?",
        options: [
          "Prince of Peace",
          "God with us",
          "Mighty God",
          "Wonderful Counselor",
        ],
        correct: 1,
      },
      {
        question: "Who was the first high priest of Israel?",
        options: ["Moses", "Aaron", "Joshua", "Samuel"],
        correct: 1,
      },
      {
        question: "What is salvation?",
        options: [
          "Good works",
          "Being saved from sin through faith in Jesus Christ",
          "Following the law",
          "Going to church",
        ],
        correct: 1,
      },
      {
        question: "Who was David's best friend?",
        options: ["Solomon", "Jonathan", "Samuel", "Nathan"],
        correct: 1,
      },
      {
        question: "What is the Trinity?",
        options: [
          "Three gods",
          "Father, Son, and Holy Spirit - one God in three persons",
          "Three angels",
          "Three prophets",
        ],
        correct: 1,
      },
      {
        question: "Who wrote most of the Psalms?",
        options: ["Solomon", "David", "Moses", "Samuel"],
        correct: 1,
      },
      {
        question: "What is grace?",
        options: [
          "Earning God's favor",
          "God's unmerited favor",
          "Following rules",
          "Being perfect",
        ],
        correct: 1,
      },
    ];

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.showLoginContainer();
  }

  setupEventListeners() {
    // Login form submission
    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleLogin();
    });

    // Navigation buttons
    document.getElementById("prevBtn").addEventListener("click", () => {
      this.previousQuestion();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      this.nextQuestion();
    });

    document.getElementById("submitBtn").addEventListener("click", () => {
      this.submitQuiz();
    });

    // Logout button
    document.getElementById("logoutBtn").addEventListener("click", () => {
      this.logout();
    });

    // Restart button
    document.getElementById("restartBtn").addEventListener("click", () => {
      this.restart();
    });

    // Form validation
    this.setupFormValidation();

    // Prevent tab switching
    this.setupTabSwitchPrevention();
  }

  setupFormValidation() {
    const nameInput = document.getElementById("studentName");
    const regInput = document.getElementById("registrationNumber");
    const nameError = document.getElementById("nameError");
    const regError = document.getElementById("regError");

    nameInput.addEventListener("blur", () => {
      if (!this.validateName(nameInput.value)) {
        nameInput.classList.add("error");
        nameError.classList.add("show");
      } else {
        nameInput.classList.remove("error");
        nameError.classList.remove("show");
      }
    });

    regInput.addEventListener("blur", () => {
      if (!this.validateRegistration(regInput.value)) {
        regInput.classList.add("error");
        regError.classList.add("show");
      } else {
        regInput.classList.remove("error");
        regError.classList.remove("show");
      }
    });
  }

  setupTabSwitchPrevention() {
    // Warn user when trying to leave the page
    window.addEventListener("beforeunload", (e) => {
      if (this.timerInterval) {
        e.preventDefault();
        e.returnValue = "";
        return "Are you sure you want to leave? Your quiz progress will be lost.";
      }
    });

    // Detect tab visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && this.timerInterval) {
        console.warn("Tab switch detected during quiz");
        // You could implement additional security measures here
      }
    });
  }

  validateName(name) {
    return name && name.trim().length >= 2 && name.trim().length <= 50;
  }

  validateRegistration(reg) {
    return (
      reg &&
      /^[A-Za-z0-9\-/]+$/.test(reg) &&
      reg.length >= 3 &&
      reg.length <= 20
    );
  }

  handleLogin() {
    const name = document.getElementById("studentName").value.trim();
    const reg = document.getElementById("registrationNumber").value.trim();

    if (!this.validateName(name) || !this.validateRegistration(reg)) {
      alert("Please enter valid information before starting the quiz.");
      return;
    }

    this.studentName = name;
    this.registrationNumber = reg;

    this.showQuizContainer();
    this.startQuiz();
  }

  showLoginContainer() {
    document.getElementById("loginContainer").classList.remove("hidden");
    document.getElementById("quizContainer").classList.remove("active");
  }

  showQuizContainer() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("quizContainer").classList.add("active");

    // Display user info
    document.getElementById("displayName").textContent = this.studentName;
    document.getElementById("displayReg").textContent = this.registrationNumber;
  }

  startQuiz() {
    this.shuffleQuestions();
    this.renderQuestion();
    this.startTimer();
    this.updateProgress();
  }

  shuffleQuestions() {
    // Shuffle questions to randomize order
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }

  renderQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    const form = document.getElementById("quizForm");

    form.innerHTML = `
            <div class="question-container active">
                <fieldset>
                    <legend>${question.question}</legend>
                    <div class="options">
                        ${question.options
                          .map(
                            (option, index) => `
                            <div class="option" onclick="quiz.selectOption(${index})">
                                <input 
                                    type="radio" 
                                    id="option${index}" 
                                    name="question${this.currentQuestionIndex}" 
                                    value="${index}"
                                    ${
                                      this.answers[
                                        this.currentQuestionIndex
                                      ] === index
                                        ? "checked"
                                        : ""
                                    }
                                >
                                <label class="option-text" for="option${index}">${option}</label>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </fieldset>
            </div>
        `;

    // Update selected state
    if (this.answers[this.currentQuestionIndex] !== undefined) {
      const selectedOption = form.querySelector(
        `input[value="${this.answers[this.currentQuestionIndex]}"]`
      );
      if (selectedOption) {
        selectedOption.closest(".option").classList.add("selected");
      }
    }

    this.updateNavigationButtons();
  }

  selectOption(optionIndex) {
    // Remove previous selection
    document.querySelectorAll(".option").forEach((opt) => {
      opt.classList.remove("selected");
    });

    // Add selection to clicked option
    const selectedOption = document.querySelector(
      `input[value="${optionIndex}"]`
    );
    if (selectedOption) {
      selectedOption.checked = true;
      selectedOption.closest(".option").classList.add("selected");
      this.answers[this.currentQuestionIndex] = optionIndex;
    }
  }

  updateNavigationButtons() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");

    prevBtn.disabled = this.currentQuestionIndex === 0;

    if (this.currentQuestionIndex === this.totalQuestions - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "block";
    } else {
      nextBtn.style.display = "block";
      submitBtn.style.display = "none";
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.renderQuestion();
      this.updateProgress();
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
      this.renderQuestion();
      this.updateProgress();
    }
  }

  updateProgress() {
    document.getElementById("currentQuestion").textContent =
      this.currentQuestionIndex + 1;
    document.getElementById("totalQuestions").textContent = this.totalQuestions;

    const progressPercent =
      ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
    document.getElementById("progressFill").style.width = progressPercent + "%";
  }

  startTimer() {
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();

      if (this.timeRemaining <= 0) {
        this.submitQuiz();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    const timerElement = document.getElementById("timer");

    timerElement.textContent = `Time: ${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Add warning class when time is running low
    if (this.timeRemaining <= 300) {
      // 5 minutes
      timerElement.classList.add("warning");
    }
  }

  submitQuiz() {
    clearInterval(this.timerInterval);
    this.calculateScore();
    this.showResults();
  }

  calculateScore() {
    let correctAnswers = 0;

    for (let i = 0; i < this.totalQuestions; i++) {
      if (this.answers[i] === this.questions[i].correct) {
        correctAnswers++;
      }
    }

    this.score = Math.round((correctAnswers / this.totalQuestions) * 100);
  }

  showResults() {
    document.getElementById("quizForm").style.display = "none";
    document.querySelector(".navigation").style.display = "none";
    document.querySelector(".progress-container").style.display = "none";

    const resultsDiv = document.getElementById("results");
    const scoreCircle = resultsDiv.querySelector(".score-circle");
    const scoreText = document.getElementById("scoreText");
    const scoreLabel = document.getElementById("scoreLabel");
    const performanceMessage = document.getElementById("performanceMessage");

    scoreText.textContent = this.score + "%";
    document.getElementById("resultName").textContent = this.studentName;
    document.getElementById("resultReg").textContent = this.registrationNumber;

    // Determine performance level and styling
    let performanceClass = "";
    let message = "";

    if (this.score >= 90) {
      performanceClass = "excellent";
      message =
        "Excellent! You have a strong understanding of Christian knowledge. Keep up the great work!";
    } else if (this.score >= 70) {
      performanceClass = "good";
      message =
        "Good job! You have a solid foundation in Christian knowledge. Continue studying to improve further.";
    } else {
      performanceClass = "needs-improvement";
      message =
        "You may want to spend more time studying Christian doctrine and biblical knowledge. Don't give up - keep learning!";
    }

    scoreCircle.className = `score-circle ${performanceClass}`;
    performanceMessage.textContent = message;

    resultsDiv.classList.add("active");
  }

  logout() {
    if (
      confirm("Are you sure you want to logout? Your progress will be lost.")
    ) {
      this.restart();
    }
  }

  restart() {
    // Clear timer
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    // Reset all properties
    this.currentQuestionIndex = 0;
    this.timeRemaining = this.timeLimit;
    this.answers = {};
    this.score = 0;
    this.studentName = "";
    this.registrationNumber = "";

    // Reset UI
    document.getElementById("quizForm").style.display = "block";
    document.querySelector(".navigation").style.display = "flex";
    document.querySelector(".progress-container").style.display = "block";
    document.getElementById("results").classList.remove("active");
    document.getElementById("timer").classList.remove("warning");

    // Clear form inputs
    document.getElementById("loginForm").reset();
    document
      .querySelectorAll(".error")
      .forEach((el) => el.classList.remove("error"));
    document
      .querySelectorAll(".error-message.show")
      .forEach((el) => el.classList.remove("show"));

    this.showLoginContainer();
  }
}

// Initialize the quiz when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.quiz = new ChristianKnowledgeQuiz();
});

// Export for potential module use
if (typeof module !== "undefined" && module.exports) {
  module.exports = ChristianKnowledgeQuiz;
}
