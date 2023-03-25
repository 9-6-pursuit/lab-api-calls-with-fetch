// APi call for the trivia questions 
let triviaQuestions = "https://opentdb.com/api.php?amount=10"

// Selected the card tag where the cards will be 
let cards = document.querySelector("main")
// Event listenr for the submit button
let triviaButton = document.querySelector("form")
triviaButton.addEventListener("click", (event) => {
    event.preventDefault()
    fetch(triviaQuestions)
    .then((response) => response.json())
    .then((json) => {
        //set the resutls from the json to a variable
      let questions = json.results
        for (let index = 0; index < questions.length; index++) {
            //created the barebones of the card templates for each 
            let article = document.createElement("article")
            article.classList = "card"
            let category = document.createElement("h2")
            let question = document.createElement("p")
            let button = document.createElement("button")
            button.textContent = "Show Answer"
            button.classList = "answer"
            let correctAnswer = document.createElement("p")
            correctAnswer.classList = "hidden"
            // appended all the created eleemtns to the article tag
            article.append(category)
            article.append(question)
            article.append(button)
            article.append(correctAnswer)
            // Set the answers to the correct tag
            category.textContent = questions[index].category
            let text = questions[index].question.replace(/&quot;/g, '\\"');
            let text2 = text.replace(/&#039;/g, "'")
            question.textContent = text2
            // adding an event listenr to the button 
            button.addEventListener('click', () => {
                if(correctAnswer.className === "hidden"){
                    correctAnswer.classList = ""
                } else {
                    correctAnswer.classList = "hidden"
                }
            })
            correctAnswer.textContent = questions[index].correct_answer
            // Difficulty will change the border of the card
            if(questions[index].difficulty === "medium"){
                article.setAttribute("style", "border: 3px solid #f9fd3c")
            } else if (questions[index].difficulty === "hard"){
                article.setAttribute("style", "border: 3px solid #c81b00")
            }
            //adding the API results to a card
            cards.append(article)
            console.log(questions[index]);
            
        }

    })
    .catch((error) => {
      // You can do what you like with the error here.
      console.log(error);
    });
})

