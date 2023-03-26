

const form  = document.querySelector("form")
const BASE_URL = https://wttr.in/Montreal?format=j1
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    fetch (https://opentdb.com/api.php?amount=10 )
    .then((response) => response.json())
    .then((json) => {
        json.results.forEach((result) =>{
            functionName(result)
        })
    })
    .catch(functionName);

}
 let showAnswer= document.querySelector("show-answer)"
    Clipboard.addEventListener("click" , (event) =>{
        event.preventDefault();
    })
 