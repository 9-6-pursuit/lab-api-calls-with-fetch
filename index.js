const url = "https://opentdb.com/api.php?amount=10"
// create a variable for the url [simplify the code]

const form = document.querySelector("form")
const main = document.querySelector("main")
//create two additional variables to select both the 

form.addEventListener("submit", (event) => {
    event.preventDefault()

fetch(url) 
.then((response) => response.json())
.then((questions) => {
    // console.log(questions) 
    //console.log to test if I did the fetch correctly
    questions.results.forEach((question) => {
        const article = document.createElement("article")
        article.classList.add("card")
        // console.log(article)
        //created an article in the loop to make a card with each loop.

        const header = document.createElement("h2")
        header.textContent = question.category
        // console.log(header)

        const para1 = document.createElement("p")
        para1.textContent = question.question
        // console.log(para1)

        const button = document.createElement("button")
        button.classList.add("click")
        button.textContent = "Show Answer"

        button.addEventListener("click", () => {
            para2.classList.toggle("hidden")
        })
        // console.log(button1)
       
        const para2 = document.createElement("p")
        para2.classList.add("hidden")
        para2.textContent = question.correct_answer
        // console.log(para2)
        
        main.append(article)
        article.append(header, para1, button, para2)
        console.log(article)
    })
})
.catch((error) => {
    console.log(error)
})

})

