import './style.css'

const newJokeButton = <HTMLButtonElement>document.getElementById("new-joke")
const setupContainer = <HTMLParagraphElement>document.getElementById("setup-container")
const punchButton = <HTMLButtonElement>document.getElementById("punch-button")
const punchContainer = <HTMLDivElement>document.querySelector(".punch-container")
const resultContainer = <HTMLDivElement>document.getElementById("result");
const errorContainer = <HTMLDivElement>document.getElementById("error");

resultContainer.style.display = "none"
errorContainer.style.display = "none"

let joke: Joke

interface Joke {
  type: string,
  setup: string,
  punchline: string,
  id: number
}

function showPunchLine(punchLine: string = "") {
  let num = Math.round(Math.random() * 6)
  punchContainer.innerHTML = ""
  punchContainer.innerHTML += `<p>${punchLine}</p>`
  punchContainer.innerHTML += `<img src="img/lol${num}.gif" alt="LOL GIF"/>`
}


newJokeButton.addEventListener("click", async () => {

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    joke = await response.json()
    console.log(joke)

    errorContainer.style.display = "none"
    resultContainer.style.display = "block"
    setupContainer.textContent = joke.setup
    punchContainer.innerHTML = ""

  } catch (error) {
    resultContainer.style.display = "none"
    errorContainer.style.display = "block"
    errorContainer.innerHTML = ""
    errorContainer.innerHTML += `<p>Something went wrong with the connnection, it's no joke :(</p>`
    errorContainer.innerHTML += `<img src = "img/sad-pikachu.gif" alt="no joke :("/>`
  }


})

punchButton.addEventListener("click", () => {
  showPunchLine(joke.punchline);
})
