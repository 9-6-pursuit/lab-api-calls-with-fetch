const BASE_URL = "https://opentdb.com/api.php?amount=10"

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(BASE_URL)
        .then(response => response.json())
        .then((json) => {
            main.innerHTML = ""
            json.results.forEach((element) =>{
                addQuestioncard(element)
            })
        })
        .catch(error => {
            console.log(error)
            alert("An error occurred while fetching")
        });
})


const main = document.querySelector("main.centered")
let addQuestioncard = (question) => {

    let h2 = document.createElement("h2")
    let firstParagraph = document.createElement("p")
    let button = document.createElement("button")
    let secondParagraph = document.createElement("p")
    let article = document.createElement("article")
    
    article.classList.add("card")
    secondParagraph.classList.add("hidden")

    // This will change the color of the border to yellow if the quesion is easy and to red if the question is hard otherwise will stay green
    switch (question.difficulty) {
        case "easy":
            article.style.borderColor = "yellow"
            break;
        case "hard":
            article.style.borderColor = "red"
            break;
    }

    h2.innerText = question.category
    firstParagraph.innerText = question.question
    button.innerText = ("Show Answer")
    secondParagraph.innerText = question.correct_answer
    
    
    main.append(article)
    article.append(h2)
    article.append(firstParagraph)
    article.append(button)
    article.append(secondParagraph)


    button.addEventListener ("click", () => {
        secondParagraph.classList.remove("hidden")
    })
    
}