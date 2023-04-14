let Base_Url = "https://opentdb.com/api.php?amount=10"
let form = document.getElementById("form")
let question = document.getElementById("question")
let showAnswer = document.getElementById("show-answer")
let card = document.querySelector(".card")
let pairs = []
let answer = document.querySelector(".hidden")
let main = document.querySelector(".centered")


form.addEventListener("submit", (event) => {
event.preventDefault()

fetch(Base_Url)
  .then((response) => response.json())
  .then((json) => {
  
    json.results.forEach((result) => {
        addNewCard(result)
    })
    // // category.append("hello world!")
    // for (let i = 0; i <= pairs.length; i++) {
    //     main.appendChild(card)

    //     // category.append(pairs[i].category)
    //     // answerpairs[i].correct_answer
    //     // question = pairs[i].question
        
    // }
    // // card.append(category,answer,question)
  })
})

    function addNewCard(result) {
        let newCategory = document.createElement("h2");
        newCategory.textContent = result.category;

        let newQuestion = document.createElement("p");
        newQuestion.textContent = result.question

        let newShowAnswer = document.createElement("button");
        newShowAnswer.type = "submit";
        newShowAnswer.innerText = "Show Answer";

        let newAnswer = document.createElement("p");
        newAnswer.textContent = result.correct_answer
        newAnswer.classList.add('hidden')

        let newCard = document.createElement("article")
        newCard.className = 'card'
        newCard.append(newCategory, newQuestion, newShowAnswer, newAnswer);
        main.append(newCard)

        newShowAnswer.addEventListener('click', (event) => {
            newAnswer.classList.remove("hidden");
        })
    }