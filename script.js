// Quiz Data - Christian Quiz (60 Questions)
const quizData = [
    // Section 1: Gospel of John (Chapters 1-10) – 15 Questions
    {
        question: "Who is called the \"Lamb of God\" in John 1:29?",
        options: ["Moses", "John the Baptist", "Jesus", "Peter"],
        correct: 2,
        section: "Gospel of John"
    },
    {
        question: "What does Jesus tell Nicodemus is necessary for salvation?",
        options: ["Keeping the Law", "Being born again", "Giving alms", "Fasting"],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "In John 4, Jesus speaks with a Samaritan woman at:",
        options: ["The Temple", "Jacob's Well", "The Jordan River", "Mount Sinai"],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "Jesus' first miracle in John's Gospel was turning water into wine at:",
        options: ["Capernaum", "Cana", "Bethany", "Nazareth"],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "In John 5, Jesus heals a man who had been ill for how many years?",
        options: ["10", "25", "38", "50"],
        correct: 2,
        section: "Gospel of John"
    },
    {
        question: "In John 6, how many baskets of leftovers were collected after feeding the 5,000?",
        options: ["7", "12", "5", "3"],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "Jesus says, \"I am the bread of life\" in which chapter?",
        options: ["John 3", "John 6", "John 8", "John 10"],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "In John 8, what does Jesus declare to the Pharisees?",
        options: ["\"I am the Messiah.\"", "\"Before Abraham was, I AM.\"", "\"Destroy this temple.\"", "\"You must be perfect.\""],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "In John 9, Jesus heals a man born blind using:",
        options: ["A touch", "Mud and saliva", "A spoken word", "Water from the Pool of Siloam"],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "In John 10, Jesus calls Himself the:",
        options: ["Light of the World", "Good Shepherd", "True Vine", "Way, Truth, and Life"],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "Who tries to stone Jesus in John 8?",
        options: ["The Romans", "The Sadducees", "The Pharisees", "The Samaritans"],
        correct: 2,
        section: "Gospel of John"
    },
    {
        question: "In John 4, what does Jesus say true worshipers must worship in?",
        options: ["Jerusalem", "Spirit and truth", "The Temple", "Righteousness"],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "Who secretly follows Jesus at night in John 3?",
        options: ["Judas Iscariot", "Nicodemus", "Joseph of Arimathea", "Zacchaeus"],
        correct: 1,
        section: "Gospel of John"
    },
    {
        question: "In John 5, Jesus heals a man at which pool?",
        options: ["Bethesda", "Siloam", "Gihon", "Hebron"],
        correct: 0,
        section: "Gospel of John"
    },
    {
        question: "What feast is mentioned in John 5?",
        options: ["Passover", "Pentecost", "Feast of Tabernacles", "Feast of Dedication"],
        correct: 0,
        section: "Gospel of John"
    },
    // Section 2: Book of Judith (Chapters 1-10) – 10 Questions
    {
        question: "Who was Judith's husband?",
        options: ["Manasseh", "Simeon", "Joachim", "Hezekiah"],
        correct: 0,
        section: "Book of Judith"
    },
    {
        question: "Which king sent Holofernes to conquer Israel?",
        options: ["Nebuchadnezzar", "Darius", "Cyrus", "Ahasuerus"],
        correct: 0,
        section: "Book of Judith"
    },
    {
        question: "What city was under siege by Holofernes?",
        options: ["Jerusalem", "Bethulia", "Jericho", "Samaria"],
        correct: 1,
        section: "Book of Judith"
    },
    {
        question: "How many days did the Israelites wait before considering surrender?",
        options: ["7", "20", "34", "40"],
        correct: 2,
        section: "Book of Judith"
    },
    {
        question: "What did Judith take with her to Holofernes' camp?",
        options: ["A sword", "A flask of oil", "Kosher food", "A scroll of the Law"],
        correct: 2,
        section: "Book of Judith"
    },
    {
        question: "How did Judith gain Holofernes' trust?",
        options: ["By prophesying victory", "By pretending to betray Israel", "By offering military advice", "By dancing for him"],
        correct: 1,
        section: "Book of Judith"
    },
    {
        question: "What did Judith use to behead Holofernes?",
        options: ["His own sword", "A dagger", "A sickle", "A spear"],
        correct: 0,
        section: "Book of Judith"
    },
    {
        question: "What did Judith do with Holofernes' head?",
        options: ["Buried it", "Displayed it on the city wall", "Sent it to Nebuchadnezzar", "Threw it in a river"],
        correct: 1,
        section: "Book of Judith"
    },
    {
        question: "How did Israel celebrate Judith's victory?",
        options: ["A feast and songs", "Building a monument", "Making her queen", "A pilgrimage to Jerusalem"],
        correct: 0,
        section: "Book of Judith"
    },
    {
        question: "What was Judith's tribe?",
        options: ["Judah", "Levi", "Simeon", "Benjamin"],
        correct: 3,
        section: "Book of Judith"
    },
    // Section 3: Catechism of the Catholic Church – 15 Questions
    {
        question: "What is the highest form of prayer according to the Catechism?",
        options: ["The Rosary", "The Liturgy (Eucharist)", "Lectio Divina", "Charismatic prayer"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "Which sacrament is called the \"Sacrament of Initiation\"?",
        options: ["Matrimony", "Holy Orders", "Baptism", "Anointing of the Sick"],
        correct: 2,
        section: "Catechism"
    },
    {
        question: "How many commandments are in the Decalogue?",
        options: ["7", "10", "12", "5"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "What is the \"seal of confession\"?",
        options: ["A priest's vow of secrecy", "A physical seal on church documents", "A special prayer", "A confirmation ritual"],
        correct: 0,
        section: "Catechism"
    },
    {
        question: "Which virtue enables us to believe in God?",
        options: ["Hope", "Faith", "Charity", "Prudence"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "What does the Church consider the \"source and summit\" of Christian life?",
        options: ["The Bible", "The Eucharist", "The Papacy", "The Saints"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "Which council produced the current Catechism?",
        options: ["Vatican I", "Vatican II", "Council of Trent", "Lateran IV"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "What are the four marks of the Church?",
        options: ["Holy, Roman, Universal, Apostolic", "One, Holy, Catholic, Apostolic", "Faithful, Obedient, Charitable, Pure", "Ancient, Mystical, Visible, Invisible"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "Which sin cries out to heaven for vengeance?",
        options: ["Gluttony", "The oppression of the poor", "Sloth", "Vanity"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "What is the proper disposition for receiving Communion?",
        options: ["Being in a state of grace", "Fasting for 24 hours", "Wearing formal attire", "Memorizing Scripture"],
        correct: 0,
        section: "Catechism"
    },
    {
        question: "Which is NOT a fruit of the Holy Spirit?",
        options: ["Chastity", "Self-control", "Wealth", "Peace"],
        correct: 2,
        section: "Catechism"
    },
    {
        question: "What is the \"canon\" of Scripture?",
        options: ["A type of church music", "The official list of inspired books", "A priest's vestment", "A papal decree"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "Which prayer is central to the Liturgy of the Hours?",
        options: ["The Jesus Prayer", "The Psalms", "The Magnificat", "The Stations of the Cross"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "What is the Church's teaching on artificial contraception?",
        options: ["Permitted in marriage", "Forbidden as intrinsically evil", "Allowed for health reasons", "A matter of personal conscience"],
        correct: 1,
        section: "Catechism"
    },
    {
        question: "Which is a corporal work of mercy?",
        options: ["Instructing the ignorant", "Feeding the hungry", "Praying for the living", "Adorning churches"],
        correct: 1,
        section: "Catechism"
    },
    // Section 4: Catholic Church Doctrine – 10 Questions
    {
        question: "What dogma was defined in 1854?",
        options: ["The Assumption", "The Immaculate Conception", "Papal Infallibility", "The Real Presence"],
        correct: 1,
        section: "Catholic Doctrine"
    },
    {
        question: "Who can validly confer the sacrament of Holy Orders?",
        options: ["Any baptized Christian", "A bishop", "A priest with special permission", "The Pope alone"],
        correct: 1,
        section: "Catholic Doctrine"
    },
    {
        question: "What is the \"sensus fidei\"?",
        options: ["The sense of smell of saints", "The supernatural appreciation of faith by all believers", "A type of liturgical dance", "A medieval heresy"],
        correct: 1,
        section: "Catholic Doctrine"
    },
    {
        question: "Which Marian title refers to her role as \"God-bearer\"?",
        options: ["Theotokos", "Mediatrix", "Queen of Heaven", "Our Lady of Sorrows"],
        correct: 0,
        section: "Catholic Doctrine"
    },
    {
        question: "What is the \"ordinary magisterium\"?",
        options: ["The Pope's daily schedule", "The Church's normal teaching authority", "A book of liturgical rubrics", "The diocesan curia"],
        correct: 1,
        section: "Catholic Doctrine"
    },
    {
        question: "Which document contains the Church's social teaching?",
        options: ["Gaudium et Spes", "Rerum Novarum", "Laudato Si'", "All of the above"],
        correct: 3,
        section: "Catholic Doctrine"
    },
    {
        question: "What is the \"communion of saints\"?",
        options: ["Only those in heaven", "The unity of all believers (living, dead, in purgatory)", "A type of Eucharistic devotion", "A medieval guild"],
        correct: 1,
        section: "Catholic Doctrine"
    },
    {
        question: "Which is NOT a holy day of obligation in the universal Church?",
        options: ["The Assumption (August 15)", "All Saints' Day (November 1)", "Corpus Christi", "The Immaculate Conception (December 8)"],
        correct: 2,
        section: "Catholic Doctrine"
    },
    {
        question: "What does \"ex cathedra\" mean?",
        options: ["From the chair (of Peter)", "Outside the cathedral", "A type of church architecture", "A liturgical book"],
        correct: 0,
        section: "Catholic Doctrine"
    },
    {
        question: "Which council addressed Protestant Reformation challenges?",
        options: ["Vatican II", "Trent", "Nicea I", "Lateran V"],
        correct: 1,
        section: "Catholic Doctrine"
    },
    // Section 5: World Current Affairs (Christian Perspective) – 10 Questions
    {
        question: "In 2023, which country passed laws restricting Christian worship?",
        options: ["Nicaragua", "China", "India", "All of the above"],
        correct: 3,
        section: "Current Affairs"
    },
    {
        question: "Which Christian leader met with Ukraine's President Zelensky in 2023?",
        options: ["Pope Francis", "Patriarch Kirill", "Archbishop Welby", "Rev. Franklin Graham"],
        correct: 0,
        section: "Current Affairs"
    },
    {
        question: "Where is the Catholic Church growing fastest today?",
        options: ["Europe", "Africa", "South America", "North America"],
        correct: 1,
        section: "Current Affairs"
    },
    {
        question: "What 2023 document addressed climate change from a Christian perspective?",
        options: ["Laudato Si'", "Fratelli Tutti", "Dignitas Infinita", "None of the above"],
        correct: 0,
        section: "Current Affairs"
    },
    {
        question: "Which country recently criminalized conversion therapy?",
        options: ["Canada", "Mexico", "Italy", "Poland"],
        correct: 0,
        section: "Current Affairs"
    },
    {
        question: "In 2024, where will World Youth Day be held?",
        options: ["Rome", "Lisbon", "Seoul", "Sydney"],
        correct: 2,
        section: "Current Affairs"
    },
    {
        question: "Which global issue has the Vatican prioritized recently?",
        options: ["Artificial intelligence ethics", "Cryptocurrency regulation", "Space exploration", "Fast food consumption"],
        correct: 0,
        section: "Current Affairs"
    },
    {
        question: "Where are Christians currently experiencing severe persecution?",
        options: ["North Korea", "Nigeria", "Pakistan", "All of the above"],
        correct: 3,
        section: "Current Affairs"
    },
    {
        question: "What was a key theme of Pope Francis' 2023 travels?",
        options: ["Peace negotiations", "Climate change", "Migrant rights", "All of the above"],
        correct: 3,
        section: "Current Affairs"
    },
    {
        question: "Which Christian group faced attacks in India in 2023?",
        options: ["Catholics", "Pentecostals", "Syrian Christians", "All of the above"],
        correct: 3,
        section: "Current Affairs"
    }
];

// Student Data
let studentData = {
    name: '',
    registrationNumber: ''
};

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let timeLeft = 1800; // 30 minutes in seconds (increased from 15 minutes for 60 questions)
let timerInterval;
let quizStartTime;

// DOM Elements
const loginContainer = document.getElementById('loginContainer');
const quizContainer = document.getElementById('quizContainer');
const loginForm = document.getElementById('loginForm');
const studentNameInput = document.getElementById('studentName');
const registrationNumberInput = document.getElementById('registrationNumber');
const nameError = document.getElementById('nameError');
const regError = document.getElementById('regError');

const quizForm = document.getElementById('quizForm');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const progressFill = document.getElementById('progressFill');
const timerElement = document.getElementById('timer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const results = document.getElementById('results');
const scoreText = document.getElementById('scoreText');
const scoreLabel = document.getElementById('scoreLabel');
const performanceMessage = document.getElementById('performanceMessage');
const restartBtn = document.getElementById('restartBtn');
const logoutBtn = document.getElementById('logoutBtn');

const displayName = document.getElementById('displayName');
const displayReg = document.getElementById('displayReg');
const resultName = document.getElementById('resultName');
const resultReg = document.getElementById('resultReg');

// Login Functions
function validateName(name) {
    return name.length >= 2 && name.length <= 50 && /^[a-zA-Z\s.-]+$/.test(name);
}

function validateRegistrationNumber(regNum) {
    return regNum.length >= 3 && regNum.length <= 20 && /^[A-Za-z0-9\-/]+$/.test(regNum);
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function hideError(input, errorElement) {
    input.classList.remove('error');
    errorElement.classList.remove('show');
}

function handleLogin(e) {
    e.preventDefault();
    
    const name = studentNameInput.value.trim();
    const regNumber = registrationNumberInput.value.trim();
    
    let isValid = true;
    
    // Validate name
    if (!validateName(name)) {
        showError(studentNameInput, nameError, 'Please enter a valid name (2-50 characters, letters only)');
        isValid = false;
    } else {
        hideError(studentNameInput, nameError);
    }
    
    // Validate registration number
    if (!validateRegistrationNumber(regNumber)) {
        showError(registrationNumberInput, regError, 'Please enter a valid registration number (3-20 characters)');
        isValid = false;
    } else {
        hideError(registrationNumberInput, regError);
    }
    
    if (isValid) {
        // Store student data
        studentData.name = name;
        studentData.registrationNumber = regNumber;
        
        // Show quiz container and hide login
        showQuiz();
    }
}

function showQuiz() {
    loginContainer.style.display = 'none';
    quizContainer.classList.add('active');
    quizContainer.style.display = 'block';
    
    // Display student info
    displayName.textContent = studentData.name;
    displayReg.textContent = studentData.registrationNumber;
    
    // Initialize quiz
    initQuiz();
}

function handleLogout() {
    if (confirm('Are you sure you want to logout? Your progress will be lost.')) {
        // Clear timer
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        // Reset quiz state
        resetQuizState();
        
        // Show login container and hide quiz
        quizContainer.style.display = 'none';
        quizContainer.classList.remove('active');
        loginContainer.style.display = 'block';
        
        // Clear login form
        loginForm.reset();
        hideError(studentNameInput, nameError);
        hideError(registrationNumberInput, regError);
    }
}

function resetQuizState() {
    currentQuestionIndex = 0;
    userAnswers = [];
    timeLeft = 1800;
    
    // Hide results
    results.classList.remove('active');
    
    // Show quiz elements
    quizForm.style.display = 'block';
    document.querySelector('.navigation').style.display = 'flex';
    document.querySelector('.progress-container').style.display = 'block';
    
    // Reset timer display
    timerElement.classList.remove('warning');
    
    // Reset all selections
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => option.classList.remove('selected'));
    
    const allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => radio.checked = false);
}

// Initialize Quiz
function initQuiz() {
    totalQuestionsSpan.textContent = quizData.length;
    userAnswers = new Array(quizData.length).fill(null);
    generateQuestions();
    showQuestion(0);
    startTimer();
    quizStartTime = Date.now();
}

// Generate HTML for all questions
function generateQuestions() {
    quizForm.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        questionContainer.id = `question-${index}`;
        
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = `${index + 1}. ${question.question}`;
        fieldset.appendChild(legend);
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options';
        
        question.options.forEach((option, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q${index}`;
            radio.value = optionIndex;
            radio.id = `q${index}_${optionIndex}`;
            
            const label = document.createElement('label');
            label.htmlFor = `q${index}_${optionIndex}`;
            label.className = 'option-text';
            label.textContent = option;
            
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            
            // Add click handler for the entire option
            optionDiv.addEventListener('click', () => {
                selectOption(index, optionIndex, optionDiv);
            });
            
            optionsContainer.appendChild(optionDiv);
        });
        
        fieldset.appendChild(optionsContainer);
        questionContainer.appendChild(fieldset);
        quizForm.appendChild(questionContainer);
    });
}

// Select an option
function selectOption(questionIndex, optionIndex, optionElement) {
    // Remove previous selection
    const questionContainer = document.getElementById(`question-${questionIndex}`);
    const allOptions = questionContainer.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    
    // Add selection to clicked option
    optionElement.classList.add('selected');
    
    // Update radio button
    const radio = optionElement.querySelector('input[type="radio"]');
    radio.checked = true;
    
    // Store answer
    userAnswers[questionIndex] = optionIndex;
    
    // Update navigation
    updateNavigation();
}

// Show specific question
function showQuestion(index) {
    // Hide all questions
    const allQuestions = document.querySelectorAll('.question-container');
    allQuestions.forEach(q => q.classList.remove('active'));
    
    // Show current question
    const currentQuestion = document.getElementById(`question-${index}`);
    if (currentQuestion) {
        currentQuestion.classList.add('active');
    }
    
    // Update progress
    currentQuestionIndex = index;
    currentQuestionSpan.textContent = index + 1;
    updateProgress();
    updateNavigation();
    
    // Restore previous answer if exists
    if (userAnswers[index] !== null) {
        const questionContainer = document.getElementById(`question-${index}`);
        const options = questionContainer.querySelectorAll('.option');
        const radio = questionContainer.querySelector(`input[value="${userAnswers[index]}"]`);
        if (radio) {
            radio.checked = true;
            options[userAnswers[index]].classList.add('selected');
        }
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Update navigation buttons
function updateNavigation() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// Navigation functions
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    }
}

// Timer functions
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 600) { // 10 minutes remaining (changed from 5 minutes)
            timerElement.classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Submit quiz
function submitQuiz() {
    clearInterval(timerInterval);
    
    // Calculate score
    let correctAnswers = 0;
    const totalQuestions = quizData.length;
    
    for (let i = 0; i < totalQuestions; i++) {
        if (userAnswers[i] === quizData[i].correct) {
            correctAnswers++;
        }
    }
    
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Hide quiz form and navigation
    quizForm.style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    
    // Show results
    displayResults(percentage, correctAnswers, totalQuestions);
}

// Display results
function displayResults(percentage, correctAnswers, totalQuestions) {
    scoreText.textContent = `${percentage}%`;
    
    // Update score circle color based on performance
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.classList.remove('excellent', 'good', 'needs-improvement');
    
    let message = '';
    let label = 'Your Score';
    
    if (percentage >= 90) {
        scoreCircle.classList.add('excellent');
        message = `🎉 Outstanding! You scored ${correctAnswers} out of ${totalQuestions} questions correctly. You have an excellent understanding of Christian faith and doctrine!`;
        label = 'Excellent Performance!';
    } else if (percentage >= 80) {
        scoreCircle.classList.add('excellent');
        message = `🌟 Great job! You scored ${correctAnswers} out of ${totalQuestions} questions correctly. You have a strong grasp of Christian knowledge!`;
        label = 'Great Performance!';
    } else if (percentage >= 70) {
        scoreCircle.classList.add('good');
        message = `👍 Good work! You scored ${correctAnswers} out of ${totalQuestions} questions correctly. You understand most of the concepts well.`;
        label = 'Good Performance!';
    } else if (percentage >= 60) {
        scoreCircle.classList.add('good');
        message = `📚 Not bad! You scored ${correctAnswers} out of ${totalQuestions} questions correctly. Consider reviewing Christian doctrine and Scripture to strengthen your understanding.`;
        label = 'Fair Performance';
    } else {
        scoreCircle.classList.add('needs-improvement');
        message = `📖 You scored ${correctAnswers} out of ${totalQuestions} questions correctly. I'd recommend studying the Bible, Catechism, and Church teachings more deeply.`;
        label = 'Needs Improvement';
    }
    
    scoreLabel.textContent = label;
    performanceMessage.textContent = message;
    
    // Display student details
    resultName.textContent = studentData.name;
    resultReg.textContent = studentData.registrationNumber;
    
    // Show results with animation
    results.classList.add('active');
    
    // Calculate time taken
    const timeElapsed = Math.round((Date.now() - quizStartTime) / 1000);
    const timeTakenMinutes = Math.floor(timeElapsed / 60);
    const timeTakenSeconds = timeElapsed % 60;
    
    // Add time information
    setTimeout(() => {
        const timeInfo = document.createElement('p');
        timeInfo.style.marginTop = '20px';
        timeInfo.style.color = '#666';
        timeInfo.style.fontSize = '1.1em';
        timeInfo.textContent = `⏱️ Time taken: ${timeTakenMinutes}:${timeTakenSeconds.toString().padStart(2, '0')}`;
        performanceMessage.appendChild(document.createElement('br'));
        performanceMessage.appendChild(timeInfo);
    }, 1000);
}

// Restart quiz
function restartQuiz() {
    // Reset all variables
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    timeLeft = 1800; // Reset to 30 minutes
    
    // Clear timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Reset timer display
    timerElement.classList.remove('warning');
    
    // Hide results
    results.classList.remove('active');
    
    // Show quiz elements
    quizForm.style.display = 'block';
    document.querySelector('.navigation').style.display = 'flex';
    document.querySelector('.progress-container').style.display = 'block';
    
    // Reset all selections
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => option.classList.remove('selected'));
    
    const allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => radio.checked = false);
    
    // Show first question
    showQuestion(0);
    
    // Restart timer
    startTimer();
    quizStartTime = Date.now();
}

// Handle page visibility change (prevent cheating)
document.addEventListener('visibilitychange', function() {
    if (document.hidden && timeLeft > 0 && quizContainer.style.display !== 'none') {
        // User left the tab - you could implement stricter measures here
        console.log('User left the tab');
        // For now, just log it. In a real exam, you might want to submit automatically
    }
});

// Prevent right-click context menu (basic anti-cheat)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Prevent certain keyboard shortcuts (basic anti-cheat)
document.addEventListener('keydown', function(e) {
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U
    if (e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67)) || // Ctrl+Shift+I/C
        (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U
        e.preventDefault();
        return false;
    }
});

// Function to get unanswered questions
function getUnansweredQuestions() {
    const unanswered = [];
    userAnswers.forEach((answer, index) => {
        if (answer === null) {
            unanswered.push(index + 1);
        }
    });
    return unanswered;
}

// Function to show warning for unanswered questions
function checkUnansweredQuestions() {
    const unanswered = getUnansweredQuestions();
    if (unanswered.length > 0) {
        const message = `You have ${unanswered.length} unanswered questions: ${unanswered.join(', ')}. Are you sure you want to submit?`;
        return confirm(message);
    }
    return true;
}

// Override submit function to check for unanswered questions
const originalSubmit = submitQuiz;
submitQuiz = function() {
    if (checkUnansweredQuestions()) {
        originalSubmit();
    }
};

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Login form event listener
    loginForm.addEventListener('submit', handleLogin);
    
    // Real-time validation
    studentNameInput.addEventListener('input', function() {
        if (this.value.length > 0 && validateName(this.value)) {
            hideError(this, nameError);
        }
    });
    
    registrationNumberInput.addEventListener('input', function() {
        if (this.value.length > 0 && validateRegistrationNumber(this.value)) {
            hideError(this, regError);
        }
    });
    
    // Quiz navigation event listeners
    prevBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
    restartBtn.addEventListener('click', restartQuiz);
    logoutBtn.addEventListener('click', handleLogout);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Only allow keyboard shortcuts when quiz is active
        if (quizContainer.style.display === 'none') return;
        
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            previousQuestion();
        } else if (e.key === 'ArrowRight' && nextBtn.style.display !== 'none') {
            nextQuestion();
        } else if (e.key === 'Enter' && submitBtn.style.display !== 'none') {
            submitQuiz();
        }
        
        // Number keys for selecting options (1-4)
        if (e.key >= '1' && e.key <= '4') {
            const optionIndex = parseInt(e.key) - 1;
            const currentQuestionContainer = document.getElementById(`question-${currentQuestionIndex}`);
            if (currentQuestionContainer) {
                const options = currentQuestionContainer.querySelectorAll('.option');
                if (options[optionIndex]) {
                    options[optionIndex].click();
                }
            }
        }
    });
});

// Handle beforeunload event
window.addEventListener('beforeunload', function(e) {
    if (timeLeft > 0 && userAnswers.some(answer => answer !== null) && quizContainer.style.display !== 'none') {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your quiz progress will be lost.';
        return e.returnValue;
    }
});

// Auto-save progress to prevent data loss (basic implementation)
function saveProgress() {
    if (quizContainer.style.display !== 'none') {
        const progressData = {
            studentData,
            currentQuestionIndex,
            userAnswers,
            timeLeft,
            startTime: quizStartTime
        };
        // Note: localStorage is not available in Claude artifacts
        // In a real implementation, you would save to localStorage or server
        console.log('Progress saved:', progressData);
    }
}

// Save progress every 30 seconds
setInterval(saveProgress, 30000);

// Utility function to shuffle array (for randomizing questions if needed)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
