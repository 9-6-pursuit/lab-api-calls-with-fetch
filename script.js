const form = document.querySelector('form');
const main = document.querySelector('main');
const BASE_URL = 'https://opentdb.com/api.php?amount=10';

function createCard(question) {
  const card = document.createElement('article');
  card.classList.add('card');

  const category = document.createElement('h2');
  category.textContent = question.category;
  card.appendChild(category);

  const questionText = document.createElement('p');
  questionText.textContent = question.question;
  card.appendChild(questionText);

  const answerButton = document.createElement('button');
  answerButton.textContent = 'Show Answer';
  card.appendChild(answerButton);

  const answerText = document.createElement('p');
  answerText.classList.add('hidden');
  answerText.textContent = question.correct_answer;
  card.appendChild(answerText);

  answerButton.addEventListener('click', () => {
    answerText.classList.toggle('hidden');
  });

  return card;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
      const cards = json.results.map(createCard);
      main.innerHTML = '';
      cards.forEach((card) => {
        main.appendChild(card);
      });
    })
    .catch(console.error);
});





















// async function getTriviaQuestions(event) {
//     event.preventDefault();
//     const amount = 10;
//     const category = document.getElementById("category").value;
//     const dificulty =document.getElementById("difficulty").value;
//     const BASE_URL = "https://opentdb.com/api.php?amount=10"

//     const response = await fetch(BASE_URL)
//     const data = await response.json();

//     const main = document.querySelector("main");
//     main.innerHTML -"";

//     data.results.array.forEach((result) => {
//         const card = creatCard(result);
//         main.appendChild(card)
//     });
// }

// function createCard(result) {
//     const card = document.createElement("article");
//     card.classList.add("card");
  
//     const category = document.createElement("h2");
//     category.textContent = result.category;
//     card.appendChild(category);
  
//     const question = document.createElement("p");
//     question.textContent = result.question;
//     card.appendChild(question);
  
//     const button = document.createElement("button");
//     button.textContent = "Show Answer";
//     card.appendChild(button);
  
//     const answer = document.createElement("p");
//     answer.classList.add("hidden");
//     answer.textContent = result.correct_answer;
//     card.appendChild(answer);
  
//     const answersList = document.createElement("ul");
//     result.incorrect_answers.forEach((incorrectAnswer) => {
//       const li = document.createElement("li");
//       li.textContent = incorrectAnswer;
//       answersList.appendChild(li);
//     });
//     const li = document.createElement("li");
//     li.textContent = result.correct_answer;
//     answersList.appendChild(li);
//     card.appendChild(answersList);
  
//     button.addEventListener("click", () => {
//       answer.classList.toggle("hidden");
//       button.textContent = answer.classList.contains("hidden")
//         ? "Show Answer"
//         : "Hide Answer";
//       const correctAnswerIndex = Array.from(answersList.children).findIndex(
//         (li) => li.textContent === result.correct_answer
//       );
//       answersList.children[correctAnswerIndex].classList.toggle("correct");
//     });
  
//     card.classList.add(result.difficulty.toLowerCase());
  
//     return card;
//   }

  
//   const form = document.getElementById("trivia-form");
// form.addEventListener("submit", getTriviaQuestions);
