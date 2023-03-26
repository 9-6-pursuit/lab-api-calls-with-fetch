
const form = document.querySelector("form")
let main = document.querySelector("main")
       // selects the form and the main section of the html

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // this selects the form and will prevent the default,so it will not refresh when button is pressed.
let trivia = "https://opentdb.com/api.php?amount=10&category=9&type=multiple"
    
    fetch(trivia)
    .then((response) => response.json())
    .then((json)=> {
        console.log(json.results[0])
      json.results.forEach( question => {
       console.log(question)
    
        
        let articles = document.createElement("article")
        articles.classList.add("card")
        main.append(articles)
        console.log("article")
        // creates a article and adds a class and appends it to the main tag in the html 
        
        let header = document.createElement("h2")
        header.textContent = question.category
        articles.append(header)
        // creates a h2 tag and has the text category, is appended to the header
        
        let paragraph = document.createElement("p")
        paragraph.textContent = question.question
        articles.append(paragraph)
        // creates a paragraph with the text question and appends to the article
       
        let button = document.createElement("button")
        button.textContent = "Show Answer"
        articles.append(button)
        // creates a button and has the text content Show answer
      
        let paragraph2 = document.createElement("p")
               paragraph2.classList.add("hidden")
               paragraph2.textContent = question.correct_answer
               articles.append(paragraph2)

               button.addEventListener("click", () => {
        //    let rightAnswer = question.correct_answer
        //    let articles = document.querySelectorAll("article")
            paragraph2.classList.remove("hidden")
       
               // creates a second paragraph and adds a class of hidden, the text content says correct answer. 
               
             console.log("Hi")
           
        })
        
        
    }) 
    })
    .catch((error) => {
        console.log(error)
    });
    
})
