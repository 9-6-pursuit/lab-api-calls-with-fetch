const form  = document.querySelector("form");
const BASE_URL = "https://opentdb.com/api.php?amount=10"

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {

			let main = document.querySelector("main");
			main.innerHTML = "";

        json.results.forEach((result) =>{
          let card = document.createElement("article");
					card.classList.add("card");

					let category = document.createElement("h2");
					category.textContent = result.category;
	
					let question = document.createElement("p");
					question.textContent = result.question;
	
					let answer = document.createElement("p");
					answer.classList.add("hidden");
					answer.textContent = result.correct_answer;
	
					let button = document.createElement("button");
					button.textContent = "Show Answer";

					card.append(category, question, button, answer);
					main.append(card);//add card to page


					//add button event to button
					button.addEventListener("click", () => {
						answer.classList.toggle("hidden");
	
						if (answer.classList.contains("hidden")) {
							button.textContent = "Show Answer";
						} else {
							button.textContent = "Hide Answer";
						}
					});

        });
    })

    .catch((error) => {
			
			console.log(error);
		});
});













