// const form  = document.querySelector("form")
// const BASE_URL = "https://opentdb.com/api.php?amount=10"
// form.addEventListener("submit", (event)=>{
//     event.preventDefault();

//     fetch(BASE_URL)
//     .then((response) => response.json())
//     .then((json) => {
//         json.results.forEach((result) =>{
//             functionName(result)
//         })
//     })
//     .catch(functionName);

// })

const form  = document.querySelector("form");
const main = document.querySelector("main");
const BASE_URL = "https://opentdb.com/api.php?amount=10";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    main.innerHTML = "";

    fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
        json.results.forEach((result) => {
            createCard(result);
        })
    })
    .catch(displayError);
})

function createCard(result) {
    const header = document.createElement("h2");
    header.textContent = result.category;

    const pTag = document.createElement("p");
    pTag.textContent = result.question;

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Show Answer";

    const answer = document.createElement("p");
    //answer.className = "hidden";
    answer.classList.add("hidden");
    answer.textContent = result.correct_answer;

    const article = document.createElement("article");
    article.className = "card";
    article.append(header, pTag, button, answer);
    main.append(article);

    button.addEventListener("click", (event) => {
        answer.classList.remove("hidden");
    })
}

function displayError(error) {
   const header = document.createElement("h2");
    header.textContent = "Error❗";
    
    const pTag = document.createElement("p");
    pTag.textContent = error;

    const article = document.createElement("article");
    article.className = "card";
    article.append(header, pTag,);
    main.append(article);
}
