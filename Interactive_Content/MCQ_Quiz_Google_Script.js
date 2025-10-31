// Google Apps Script for Interactive MCQ Quiz on Acute Diarrheal Diseases
// Deploy as Web App with execute permission: Anyone

function doGet() {
  return HtmlService
    .createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Acute Diarrheal Diseases - MCQ Quiz')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getQuestions() {
  return [
    {
      question: "Which of the following defines acute diarrhea according to WHO?",
      options: [
        "Passage of 1-2 loose stools per day",
        "Passage of 3 or more loose stools per day",
        "Passage of formed stools with mucus",
        "Passage of stools with blood only"
      ],
      correct: 1,
      explanation: "WHO defines acute diarrhea as the passage of 3 or more loose or liquid stools per day, or more frequent passage than normal for the individual."
    },
    {
      question: "Acute bloody diarrhea is also known as:",
      options: [
        "Cholera",
        "Dysentery",
        "Gastroenteritis",
        "Malabsorption syndrome"
      ],
      correct: 1,
      explanation: "Acute bloody diarrhea is also called dysentery, which is typically caused by Shigella, Campylobacter, or EHEC."
    },
    {
      question: "What is the leading cause of death in children under 5 years globally?",
      options: [
        "Malaria",
        "Pneumonia",
        "Diarrheal diseases",
        "Measles"
      ],
      correct: 2,
      explanation: "Diarrheal diseases are the third leading cause of death in children under 5 years, after pneumonia and preterm birth complications."
    },
    {
      question: "Which virus is the most common cause of acute diarrhea in children under 5 years?",
      options: [
        "Norovirus",
        "Adenovirus",
        "Rotavirus",
        "Astrovirus"
      ],
      correct: 2,
      explanation: "Rotavirus is the most common cause of severe diarrhea in children under 5 years worldwide."
    },
    {
      question: "Which sign is most reliable for assessing severe dehydration in children?",
      options: [
        "Dry mouth",
        "Sunken eyes",
        "Slow skin pinch (>2 seconds)",
        "Decreased urine output"
      ],
      correct: 2,
      explanation: "A slow skin pinch that takes more than 2 seconds to return to normal is the most reliable sign of severe dehydration."
    },
    {
      question: "Rice-water stools are characteristic of:",
      options: [
        "Viral gastroenteritis",
        "Bacillary dysentery",
        "Cholera",
        "Rotavirus infection"
      ],
      correct: 2,
      explanation: "Rice-water stools (colorless, odorless, with flecks of mucus) are characteristic of cholera caused by Vibrio cholerae."
    },
    {
      question: "The most severe complication of acute diarrhea is:",
      options: [
        "Malnutrition",
        "Dehydration",
        "Electrolyte imbalance",
        "Growth retardation"
      ],
      correct: 1,
      explanation: "Dehydration is the most severe and immediate complication of acute diarrhea, which can lead to hypovolemic shock and death."
    },
    {
      question: "What is the sodium concentration in WHO recommended ORS?",
      options: [
        "45 mmol/L",
        "60 mmol/L",
        "75 mmol/L",
        "90 mmol/L"
      ],
      correct: 2,
      explanation: "WHO recommended ORS contains 75 mmol/L of sodium, along with glucose (75 mmol/L), potassium (20 mmol/L), and citrate (10 mmol/L)."
    },
    {
      question: "Zinc supplementation in acute diarrhea reduces duration by:",
      options: [
        "10%",
        "25%",
        "40%",
        "50%"
      ],
      correct: 1,
      explanation: "Zinc supplementation reduces the duration of acute diarrhea by about 25% and decreases stool volume by 30%."
    },
    {
      question: "Antibiotics are routinely recommended for:",
      options: [
        "All cases of acute watery diarrhea",
        "Bloody diarrhea due to Shigella",
        "Viral gastroenteritis",
        "All parasitic infections"
      ],
      correct: 1,
      explanation: "Antibiotics are indicated for bloody diarrhea (dysentery) due to Shigella, and for cholera, but not for most cases of watery diarrhea."
    },
    {
      question: "Which intervention is most effective in preventing diarrheal diseases?",
      options: [
        "Antibiotic prophylaxis",
        "Safe drinking water",
        "Antimotility drugs",
        "IV fluid therapy"
      ],
      correct: 1,
      explanation: "Safe drinking water and adequate sanitation can reduce diarrheal disease risk by up to 50%."
    },
    {
      question: "Which vaccine helps prevent a common cause of childhood diarrhea?",
      options: [
        "Hepatitis B vaccine",
        "Rotavirus vaccine",
        "Typhoid vaccine",
        "Cholera vaccine"
      ],
      correct: 1,
      explanation: "Rotavirus vaccine prevents the most common cause of severe childhood diarrhea and is included in routine immunization schedules."
    },
    {
      question: "Which psychosocial factor most affects treatment compliance in diarrhea?",
      options: [
        "Maternal education",
        "Family income",
        "Distance to health facility",
        "All of the above"
      ],
      correct: 3,
      explanation: "All these factors - maternal education, family income, and distance to health facility - can affect treatment compliance in diarrhea cases."
    },
    {
      question: "Which strategy addresses psychosocial aspects of diarrhea prevention?",
      options: [
        "Mass vaccination campaigns",
        "Community health education",
        "Antibiotic distribution",
        "Hospital-based treatment"
      ],
      correct: 1,
      explanation: "Community health education addresses psychosocial aspects by building awareness, reducing stigma, and promoting behavior change."
    },
    {
      question: "Secretory diarrhea is caused by:",
      options: [
        "Increased intestinal motility",
        "Active chloride secretion",
        "Osmotic imbalance",
        "Mucosal damage"
      ],
      correct: 1,
      explanation: "Secretory diarrhea results from active secretion of electrolytes (especially chloride) by intestinal epithelial cells, as seen in cholera."
    },
    {
      question: "Which investigation is most useful in diagnosing bacillary dysentery?",
      options: [
        "Stool microscopy",
        "Stool culture",
        "Blood culture",
        "Serological tests"
      ],
      correct: 1,
      explanation: "Stool culture is the gold standard for diagnosing bacillary dysentery and identifying the specific bacterial pathogen."
    },
    {
      question: "In HIV-infected children with diarrhea, the most common opportunistic pathogen is:",
      options: [
        "Shigella",
        "Cryptosporidium",
        "Rotavirus",
        "E. coli"
      ],
      correct: 1,
      explanation: "Cryptosporidium is a common opportunistic pathogen causing chronic diarrhea in HIV-infected children."
    },
    {
      question: "During a cholera outbreak, the most important public health measure is:",
      options: [
        "Mass antibiotic distribution",
        "Safe water supply",
        "Vaccination campaign",
        "Hospital admission of all cases"
      ],
      correct: 1,
      explanation: "Safe water supply and sanitation are the most important measures during a cholera outbreak to prevent further transmission."
    },
    {
      question: "A 2-year-old child presents with 8 episodes of watery diarrhea and vomiting. He appears lethargic with sunken eyes. The most appropriate initial management is:",
      options: [
        "Antibiotics",
        "Antimotility drugs",
        "Oral rehydration therapy",
        "IV fluids immediately"
      ],
      correct: 2,
      explanation: "Oral rehydration therapy is the most appropriate initial management for a child with some dehydration due to watery diarrhea."
    },
    {
      question: "A child with severe dehydration develops convulsions. The most likely cause is:",
      options: [
        "Hyponatremia",
        "Hypoglycemia",
        "Hypocalcemia",
        "Acidosis"
      ],
      correct: 0,
      explanation: "Rapid administration of hypotonic fluids in severe dehydration can lead to hyponatremia and subsequent convulsions."
    }
  ];
}

function submitQuiz(answers) {
  const questions = getQuestions();
  let score = 0;
  let results = [];

  for (let i = 0; i < questions.length; i++) {
    const isCorrect = answers[i] == questions[i].correct;
    if (isCorrect) score++;

    results.push({
      question: questions[i].question,
      userAnswer: answers[i],
      correctAnswer: questions[i].correct,
      isCorrect: isCorrect,
      explanation: questions[i].explanation,
      options: questions[i].options
    });
  }

  return {
    score: score,
    total: questions.length,
    percentage: Math.round((score / questions.length) * 100),
    results: results
  };
}

function saveResult(name, score, percentage, timeSpent) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Quiz Results');
    if (!sheet) {
      // Create sheet if it doesn't exist
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Quiz Results');
      newSheet.appendRow(['Timestamp', 'Name', 'Score', 'Percentage', 'Time Spent (minutes)', 'Date']);
    }

    const sheetToUse = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Quiz Results');
    sheetToUse.appendRow([
      new Date(),
      name,
      score,
      percentage + '%',
      timeSpent,
      new Date().toLocaleDateString()
    ]);

    return { success: true, message: 'Result saved successfully!' };
  } catch (error) {
    return { success: false, message: 'Error saving result: ' + error.message };
  }
}

// HTML Template Functions
function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();
}

// Create HTML file content for Index.html
function createIndexHtml() {
  return `
<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Acute Diarrheal Diseases - MCQ Quiz</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
      color: white;
      padding: 30px;
      text-align: center;
    }

    .header h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      font-weight: 700;
    }

    .header p {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .content {
      padding: 40px;
    }

    .welcome-section {
      text-align: center;
      margin-bottom: 40px;
    }

    .welcome-section h2 {
      color: #1f2937;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .stat-card {
      background: #f8fafc;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      border: 2px solid #e5e7eb;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: #dc2626;
      margin-bottom: 5px;
    }

    .stat-label {
      color: #6b7280;
      font-size: 0.9rem;
    }

    .start-btn {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      padding: 15px 40px;
      font-size: 1.2rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    }

    .start-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
    }

    .quiz-section {
      display: none;
    }

    .question-card {
      background: #f8fafc;
      border-radius: 16px;
      padding: 30px;
      margin-bottom: 20px;
      border: 2px solid #e5e7eb;
    }

    .question-number {
      background: #3b82f6;
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 20px;
    }

    .question-text {
      font-size: 1.2rem;
      color: #1f2937;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .options {
      display: grid;
      gap: 12px;
    }

    .option {
      background: white;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      padding: 15px 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
    }

    .option:hover {
      border-color: #3b82f6;
      background: #eff6ff;
    }

    .option.selected {
      border-color: #10b981;
      background: #ecfdf5;
    }

    .option.correct {
      border-color: #10b981;
      background: #ecfdf5;
    }

    .option.incorrect {
      border-color: #dc2626;
      background: #fef2f2;
    }

    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
    }

    .nav-btn {
      background: #6b7280;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .nav-btn:hover {
      background: #4b5563;
    }

    .nav-btn.primary {
      background: #3b82f6;
    }

    .nav-btn.primary:hover {
      background: #2563eb;
    }

    .progress-bar {
      flex: 1;
      margin: 0 20px;
      height: 8px;
      background: #e5e7eb;
      border-radius: 4px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #10b981 0%, #3b82f6 100%);
      transition: width 0.3s ease;
    }

    .results-section {
      display: none;
      text-align: center;
    }

    .score-circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: conic-gradient(#10b981 0% var(--percentage), #e5e7eb var(--percentage) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      position: relative;
    }

    .score-circle::before {
      content: '';
      width: 120px;
      height: 120px;
      background: white;
      border-radius: 50%;
      position: absolute;
    }

    .score-text {
      position: relative;
      z-index: 1;
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
    }

    .score-label {
      position: relative;
      z-index: 1;
      font-size: 0.9rem;
      color: #6b7280;
      margin-top: 5px;
    }

    .result-message {
      font-size: 1.3rem;
      margin-bottom: 30px;
      color: #1f2937;
    }

    .review-btn {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      margin: 10px;
      transition: all 0.3s ease;
    }

    .review-btn:hover {
      background: #2563eb;
    }

    .explanation {
      background: #f8fafc;
      border-left: 4px solid #3b82f6;
      padding: 20px;
      margin: 15px 0;
      border-radius: 8px;
    }

    .explanation-title {
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 10px;
    }

    .name-input {
      margin-bottom: 20px;
    }

    .name-input label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #1f2937;
    }

    .name-input input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .name-input input:focus {
      outline: none;
      border-color: #3b82f6;
    }

    @media (max-width: 768px) {
      .container {
        margin: 10px;
        border-radius: 15px;
      }

      .header {
        padding: 20px;
      }

      .header h1 {
        font-size: 2rem;
      }

      .content {
        padding: 20px;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }

      .navigation {
        flex-direction: column;
        gap: 15px;
      }

      .progress-bar {
        margin: 0;
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🩺 Acute Diarrheal Diseases</h1>
      <p>Interactive MCQ Quiz for Medical Students</p>
    </div>

    <div class="content">
      <!-- Welcome Section -->
      <div id="welcome-section" class="welcome-section">
        <h2>Test Your Knowledge!</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">20</div>
            <div class="stat-label">Questions</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">15</div>
            <div class="stat-label">Minutes</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">80%</div>
            <div class="stat-label">Pass Mark</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">MBBS</div>
            <div class="stat-label">3rd Year</div>
          </div>
        </div>
        <button class="start-btn" onclick="startQuiz()">Start Quiz</button>
      </div>

      <!-- Quiz Section -->
      <div id="quiz-section" class="quiz-section">
        <div id="question-container"></div>
        <div class="navigation">
          <button class="nav-btn" id="prev-btn" onclick="previousQuestion()" style="display: none;">Previous</button>
          <div class="progress-bar">
            <div class="progress-fill" id="progress-fill" style="width: 0%"></div>
          </div>
          <button class="nav-btn primary" id="next-btn" onclick="nextQuestion()">Next</button>
        </div>
      </div>

      <!-- Results Section -->
      <div id="results-section" class="results-section">
        <div class="score-circle" id="score-circle">
          <div>
            <div class="score-text" id="score-text">0%</div>
            <div class="score-label">Score</div>
          </div>
        </div>
        <div class="result-message" id="result-message"></div>
        <div class="name-input">
          <label for="student-name">Enter your name to save results:</label>
          <input type="text" id="student-name" placeholder="Your full name">
        </div>
        <button class="review-btn" onclick="showReview()">Review Answers</button>
        <button class="review-btn" onclick="restartQuiz()">Try Again</button>
      </div>

      <!-- Review Section -->
      <div id="review-section" style="display: none;">
        <h3 style="text-align: center; margin-bottom: 30px; color: #1f2937;">Answer Review</h3>
        <div id="review-container"></div>
        <button class="review-btn" onclick="hideReview()" style="margin-top: 20px;">Back to Results</button>
      </div>
    </div>
  </div>

  <script>
    let questions = [];
    let currentQuestionIndex = 0;
    let answers = [];
    let startTime;
    let timer;

    google.script.run.withSuccessHandler(function(data) {
      questions = data;
      initializeQuiz();
    }).getQuestions();

    function initializeQuiz() {
      // Quiz is ready
    }

    function startQuiz() {
      document.getElementById('welcome-section').style.display = 'none';
      document.getElementById('quiz-section').style.display = 'block';
      startTime = new Date();
      showQuestion(0);
      startTimer();
    }

    function showQuestion(index) {
      currentQuestionIndex = index;
      const question = questions[index];

      const container = document.getElementById('question-container');
      container.innerHTML = \`
        <div class="question-card">
          <div class="question-number">Question \${index + 1} of \${questions.length}</div>
          <div class="question-text">\${question.question}</div>
          <div class="options">
            \${question.options.map((option, i) => \`
              <div class="option \${answers[index] === i ? 'selected' : ''}" onclick="selectOption(\${i})">
                \${String.fromCharCode(65 + i)}. \${option}
              </div>
            \`).join('')}
          </div>
        </div>
      \`;

      updateNavigation();
      updateProgress();
    }

    function selectOption(optionIndex) {
      answers[currentQuestionIndex] = optionIndex;
      const options = document.querySelectorAll('.option');
      options.forEach((option, index) => {
        option.classList.toggle('selected', index === optionIndex);
      });
    }

    function nextQuestion() {
      if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
      } else {
        finishQuiz();
      }
    }

    function previousQuestion() {
      if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
      }
    }

    function updateNavigation() {
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');

      prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
      nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next';
    }

    function updateProgress() {
      const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
      document.getElementById('progress-fill').style.width = progress + '%';
    }

    function startTimer() {
      timer = setInterval(() => {
        const elapsed = Math.floor((new Date() - startTime) / 1000 / 60);
        if (elapsed >= 15) { // 15 minute limit
          finishQuiz();
        }
      }, 1000);
    }

    function finishQuiz() {
      clearInterval(timer);
      const timeSpent = Math.floor((new Date() - startTime) / 1000 / 60);

      google.script.run.withSuccessHandler(showResults).submitQuiz(answers);
    }

    function showResults(result) {
      document.getElementById('quiz-section').style.display = 'none';
      document.getElementById('results-section').style.display = 'block';

      document.getElementById('score-text').textContent = result.percentage + '%';
      document.getElementById('score-circle').style.setProperty('--percentage', result.percentage + '%');

      let message = '';
      if (result.percentage >= 90) {
        message = '🎉 Excellent! Outstanding performance!';
      } else if (result.percentage >= 80) {
        message = '👍 Great job! Well done!';
      } else if (result.percentage >= 70) {
        message = '🙂 Good effort! Keep learning!';
      } else {
        message = '📚 Keep studying! You can do better!';
      }

      document.getElementById('result-message').textContent = \`You scored \${result.score} out of \${result.total} (\${result.percentage}%)\n\${message}\`;
    }

    function showReview() {
      google.script.run.withSuccessHandler(function(result) {
        const container = document.getElementById('review-container');
        container.innerHTML = result.results.map((item, index) => \`
          <div class="question-card">
            <div class="question-number">Question \${index + 1}</div>
            <div class="question-text">\${item.question}</div>
            <div class="options">
              \${item.options.map((option, i) => \`
                <div class="option \${i === item.correctAnswer ? 'correct' : ''} \${i === item.userAnswer && i !== item.correctAnswer ? 'incorrect' : ''}">
                  \${String.fromCharCode(65 + i)}. \${option}
                  \${i === item.correctAnswer ? ' ✓' : ''}
                  \${i === item.userAnswer && i !== item.correctAnswer ? ' ✗' : ''}
                </div>
              \`).join('')}
            </div>
            <div class="explanation">
              <div class="explanation-title">Explanation:</div>
              \${item.explanation}
            </div>
          </div>
        \`).join('');

        document.getElementById('results-section').style.display = 'none';
        document.getElementById('review-section').style.display = 'block';
      }).submitQuiz(answers);
    }

    function hideReview() {
      document.getElementById('review-section').style.display = 'none';
      document.getElementById('results-section').style.display = 'block';
    }

    function restartQuiz() {
      answers = [];
      currentQuestionIndex = 0;
      document.getElementById('results-section').style.display = 'none';
      document.getElementById('review-section').style.display = 'none';
      document.getElementById('welcome-section').style.display = 'block';
    }

    // Auto-save results when name is entered
    document.getElementById('student-name').addEventListener('blur', function() {
      if (this.value.trim()) {
        google.script.run.withSuccessHandler(function(response) {
          if (response.success) {
            console.log('Results saved successfully');
          } else {
            console.error('Error saving results:', response.message);
          }
        }).saveResult(
          this.value,
          answers.filter(a => a !== undefined).length,
          Math.round((answers.filter(a => a !== undefined).length / questions.length) * 100),
          Math.floor((new Date() - startTime) / 1000 / 60)
        );
      }
    });
  </script>
</body>
</html>
  `;
}

// Instructions for deployment
function getDeploymentInstructions() {
  return `
# MCQ Quiz Deployment Instructions

## Step 1: Create Google Apps Script
1. Go to https://script.google.com
2. Create a new project
3. Copy the MCQ_Quiz_Google_Script.js content
4. Save the project

## Step 2: Create HTML Template
1. In the script editor, go to File > New > HTML file
2. Name it "Index"
3. Copy the HTML content from createIndexHtml() function
4. Save

## Step 3: Create Spreadsheet for Results
1. Create a new Google Spreadsheet
2. Copy the spreadsheet ID from the URL
3. In the script, replace the spreadsheet access code if needed

## Step 4: Deploy as Web App
1. Click "Deploy" > "New deployment"
2. Select type: "Web app"
3. Description: "Acute Diarrheal Diseases MCQ Quiz"
4. Execute as: "Me"
5. Who has access: "Anyone"
6. Deploy

## Step 5: Get the URL
1. Copy the web app URL
2. Share with students

## Features:
- 20 interactive MCQs
- Progress tracking
- Instant feedback
- Answer explanations
- Results saving to spreadsheet
- Responsive design
- 15-minute timer
- Review mode

## Customization:
- Modify questions in getQuestions() function
- Change styling in HTML template
- Adjust timer duration
- Add more question categories
  `;
}
