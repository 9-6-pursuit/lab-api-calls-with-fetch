const BASE_URL = "https://opentdb.com";
const URL_KEY= "/api.php?amount=10"
const button = document.querySelector('button')



button.addEventListener("click",(event) => {
    event.preventDefault()

    fetch(`${BASE_URL}${URL_KEY}`)
    .then((res) => res.json())
    .then((response) => {

    let trivia = response.results
for (let i = 0; i < trivia.length; i++) {
    let question = trivia[i].question
    let answer = trivia[i].correct_answer
    let ul = document.querySelector("ul")
    ul.innerHTML += `<article class="card"> <h2>Category</h2> <p>${question}</p> <button onclick="clickFun(this)">Show Answer</button> <p id="answers" class="hidden">${answer}</p> </article> `
}

})
.catch((error) => {
    console.log(error);
  })
})