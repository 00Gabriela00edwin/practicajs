
const questions = [
    {
      text: "¿Qué es lo que más te fascina del universo?",
      options: ["Las estrellas", "Los planetas", "Los agujeros negros", "La posibilidad de vida extraterrestre"]
    },
    {
      text: "¿Cuál es tu objeto astronómico favorito?",
      options: ["La Luna", "Júpiter", "La Vía Láctea", "Nebulosas"]
    },
    {
      text: "¿Qué actividad te gusta más?",
      options: ["Ver el cielo con telescopio", "Leer sobre astronomía", "Tomar fotos del espacio", "Ir a observatorios"]
    }
  ];
  
  let currentQuestion = 0;
  let answers = [];
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const resultEl = document.getElementById('result');
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.text;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.textContent = option;
      btn.onclick = () => selectOption(option);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectOption(option) {
    answers.push(option);
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    resultEl.style.display = "block";
    resultEl.innerHTML = `<strong>¡Gracias por participar!</strong><br><br>Tus respuestas fueron:<ul>${answers.map(ans => `<li>${ans}</li>`).join('')}</ul>`;
  }
  
  loadQuestion();
  