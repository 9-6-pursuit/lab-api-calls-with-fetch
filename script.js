
const form  = document.querySelector("form")
const BASE_URL = "https://opentdb.com/api.php?amount=10"
form.addEventListener("submit", (event) => {  
    event.preventDefault();

    fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
        json.results.forEach((result) => {
            functionName(result)
        })
    })
    .catch(functionName);

})

const main = document.querySelector("main.centered")

let functionName = (question) => {

    let article = document.createElement("article")
    article.classList.add("card")

    main.append(article)


    let h2 = document.createElement("h2")
    h2.innerText = question.category
    article.append(h2)

    let firstParagraph = document.createElement("p")
    firstParagraph.innerText = question.question
    article.append(firstParagraph)

    let button = document.createElement("button")
    button.innerText = ("Show Answer")
    article.append(button)
    

    let secondParagraph = document.createElement("p")
    secondParagraph.innerText = question.correct_answer
    secondParagraph.classList.add("hidden")

    article.append(secondParagraph)

    button.addEventListener("click", event =>{
        secondParagraph = article.querySelector(".hidden")
        secondParagraph.classList.remove("hidden")
    })
}