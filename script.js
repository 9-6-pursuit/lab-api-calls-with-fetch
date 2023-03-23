const form = document.querySelector("form");
const BASE_URL = "https://opentdb.com/api.php?amount=10";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
      const cardsContainer = document.querySelector("main");
      cardsContainer.innerHTML = "";

      json.results.forEach((result) => {
        const card = document.createElement("article");
        card.classList.add("card");
        const category = document.createElement("h2");
        category.textContent = result.category;
        const question = document.createElement("p");
        question.textContent = result.question;
        const answer = document.createElement("p");
        answer.classList.add("hidden");
        answer.textContent = result.correct_answer;
        const button = document.createElement("button");
        button.textContent = "Show Answer";
        button.addEventListener("click", () => {
          answer.classList.toggle("hidden");
        });
        card.appendChild(category);
        card.appendChild(question);
        card.appendChild(button);
        card.appendChild(answer);
        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => console.error(error));
});
