const form  = document.querySelector("form")
const main = document.querySelector("main")
const BASE_URL = "https://opentdb.com/api.php?amount=10"

form.addEventListener("submit", (event) => {
    event.preventDefault()
    main.innerHTML = ""

    fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
        json.results.forEach((result) => {
            createCard(result)
        })
    })
    .catch(error => {console.log(error)})
})

function createCard(result) {
const header = document.createElement("h2")
    header.textContent = result.category
const question = document.createElement("p")
    question.textContent = result.question;
const answer = document.createElement("p")
    answer.classList.add("hidden")
    answer.textContent = result.correct_answer
const button = document.createElement("button")
    button.type = "submit"
    button.textContent = "Show Answer";

   

const article = document.createElement("article")
    article.className = "card"
    article.append(header, question, button, answer)
    main.append(article)

    button.addEventListener("click", (event) => {
    answer.classList.remove("hidden")
    })
}

