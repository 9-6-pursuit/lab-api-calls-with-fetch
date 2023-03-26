//THIS MAKES code dynamic
//let numberOfQuestions = prompt("How many questions:");
//const BASE_URL = `https://opentdb.com/api.php?amount=${numberOfQuestions}`;

//API to be parsed
// const BASE_URL = "https://opentdb.com/api.php?amount=10";

//Selects <form>, adds an eventListener with an expected return to prevent page from reloading when form submitted
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
//Prevents error message from displaying multiple times if error occurs multiple times
        document.querySelectorAll(".error").forEach((errorMessage) => errorMessage.remove());
///////////////////////////////////////////////////////////////////////////////////////////
// Get the number of questions from the user using a prompt
// const numberOfQuestions = prompt("How many questions do you want?");
// If the user entered a valid number, fetch the trivia questions
//if (numberOfQuestions && !isNaN(numberOfQuestions) && numberOfQuestions > 0) {
// const BASE_URL = `https://opentdb.com/api.php?amount=${numberOfQuestions}`;
////////////////////////////////////////////////////////////////////////////////////////////
    const BASE_URL = "https://opentdb.com/api.php?amount=10";
//GET(API)
    fetch(BASE_URL)
//If promise fulfilled, document is parsed into json file
        .then((response) => response.json())
//Then retrieve data from json. addTrivia IS A FUNCTION DEFINED BELOW
        .then(addTrivia)
//If promise is rejected, log error message. errorMessage IS ALSO A FUNCTION DEFINED BELOW
        .catch(errorMessage)
//////////////////////////////////////////////////////////////////////////////////////////////////
// .catch(error) 
    //} 
}); 
//Data retrieved from parsed json file is trivia(addTrivia & trivia could be any name)
    const addTrivia = (trivia) => {
// Select the <main> element
    const main = document.querySelector("main.centered");
// While there are questions on the page, remove them before adding new ones
 // Remove all child elements (questions) from the <main> element
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };
// Loop through the trivia questions and add 10 of them to the <main> element
    for (let i = 0; i < 10; i++) {
// Create a new <article> element with a class attribute
        const article = document.createElement("article");
        article.classList.add("card");

// Add the question and answer to the <article> element
        article.innerHTML = `
            <h2>${trivia.results[i].category}</h2>
            <p>${trivia.results[i].question}</p>
            <button>Show Answer</button>
            <p class="hidden">${trivia.results[i].correct_answer}</p>
        `;
// Add an event listener to the "Show Answer" button
        article.querySelector("button").addEventListener("click", () => {
            // Show the answer by changing the display property of the <p> element
            article.querySelector(".hidden").style.display = "block";
        });
// Append the <article> element to the <main> element
        main.append(article);
    };
};
//Creating our errorMessage function with an expected return of...
const errorMessage = (message) => {
//...creating <section>, adds class and innerHTML attributes to tag
    const section = document.createElement("section");
    section.classList.add("error");
    section.innerHTML = `
        <p>There was an error!</p>
        <p class="message">${message}</p>
        `;
//If promise is rejected error message will display a message from json file also

//Append <section> after <form> as sibling
    document.querySelector("form").after(section);
};