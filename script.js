const chooseCategory = document.getElementById("Choose-Category")
const ulElement = document.querySelector("ul")
// const buttons = document.querySelectorAll("button")



fetch("https://opentdb.com/api.php?amount=10")
.then((response) => response.json())
.then((json) =>{
    console.log(json)
    console.log(json.results)
    console.log(json.results[0].category)
    dropboxCreator(json)
    cardCreator(json)
})


let dropboxCreator = (json) => {
    for (let i = 0; i < json.results.length; i++){
        let option = document.createElement("option")
        option.textContent = json.results[i].category
        option.value = json.results[i].category
        chooseCategory.append(option)
    }
        
    }

let cardCreator = (json) => {
    for (let i = 0; i < json.results.length; i++){
        let article = document.createElement("article")
        article.classList.add("card")
        let hTwo = document.createElement("h2")
        hTwo.textContent = json.results[i].category
        // hTwo.value = json.results[i].category
        article.append(hTwo)
        let question = document.createElement("p")
        question.innerHTML = json.results[i].question.replace("&quot;", " ")
        question.classList.add(json.results[i].difficulty)
        // question.value = json.results[i].question
        article.append(question)
        let button = document.createElement("button")
        button.textContent = "Show Answer"
        // button.value = "Show Answer"
        article.append(button)
        let answer = document.createElement("p")
        answer.textContent = json.results[i].correct_answer
        answer.classList.add("hidden")
        // answer.value = json.results[i].correct_answer
        article.append(answer) 
        ulElement.append(article)
    }
        
    }
