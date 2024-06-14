import './style.css'

const newJokeButton = <HTMLButtonElement>document.getElementById("new-joke")
const setupContainer = <HTMLParagraphElement>document.getElementById("setup-container")
const punchButton = <HTMLButtonElement>document.getElementById("punch-button")
const punchContainer = <HTMLDivElement>document.querySelector(".punch-container")

interface Joke {
  type: string,
  setup: string,
  punchline: string,
  id: number
}

function showPunchLine(punchLine: string = "") {

  let num = Math.round(Math.random() * 7)
  punchContainer.innerHTML = ""

  punchContainer.innerHTML += `<p>${punchLine}</p>`
  punchContainer.innerHTML += `<img src="img/lol${num}.gif" alt="LOL GIF"/>`


}

let joke: Joke

newJokeButton.addEventListener("click", async () => {

  const response = await fetch("https://official-joke-api.appspot.com/random_joke")
  joke = await response.json()
  console.log(joke)

  setupContainer.textContent = joke.setup
  punchContainer.innerHTML = ""

})

punchButton.addEventListener("click", () => {
  showPunchLine(joke.punchline);
})
