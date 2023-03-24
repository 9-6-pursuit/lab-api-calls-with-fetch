const BASE_URL = "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple";

/** (document)
 *    <article class="card">
        <h2>CATEGORY</h2>
        <p>QUESTION</p>
        <!-- <hr> -->
        <section>
          <button>Show Answer</button>
        </section>
        <p class="hidden">CORRECT ANSWER</p>
      </article>
 */
let mainBody = document.getElementsByClassName('centered')[0];
let cardList = [];

function generateRandomCards(question){
    let article = document.createElement('article');
    article.className = 'card';

    let h2 = document.createElement('h2');
    h2.innerHTML = question.category;

    let p = document.createElement('p');
    p.innerHTML = question.question;

    let showAnswerBtn = document.createElement('button');
    showAnswerBtn.innerHTML = 'Show Answer';

    let correctAnswer = document.createElement('p');
    correctAnswer.className = 'hidden';
    correctAnswer.innerHTML = "Answer: " + question.correct_answer;

    showAnswerBtn.onclick = () => {
        correctAnswer.className = 'unhidden';
    }

    let spacing = document.createElement('hr');

    mainBody.append(article);

    article.append(h2);
    article.append(p);
    article.append(spacing);
    article.append(showAnswerBtn);
    article.append(correctAnswer);

    cardList.push(article);
}

window.onload = async () => {
    let api = await fetch(BASE_URL)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);

    for(let i = 0; i < 10; i++){
        generateRandomCards(api.results[i]);
    }
}

/** (document)
 *    <form id="new-question-form">
        <button type="submit">Get New Questions</button>
      </form>
 */
let newQuestionForm = document.getElementById('new-question-form');

newQuestionForm.onsubmit = async (event) => {
    event.preventDefault();

    cardList.forEach(card => {
        card.remove();
    });

    let api = await fetch(BASE_URL)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);

    for(let i = 0; i < 10; i++){
        generateRandomCards(api.results[i]);
    }
}