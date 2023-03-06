const jokeElement = document.querySelector("h1");
const jokeBtn = document.querySelector(".generate-btn");
const refreshSignal = document.querySelector(".rotate");
let rotateVal = 0;
jokeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateJoke();
});

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  console.log("start request");
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  console.log(`data recieved: 
  ${JSON.stringify(data)}
  `);
  jokeElement.textContent = data.joke;
  rotateVal += 180;
  console.log(rotateVal);
  refreshSignal.style.rotate = `${rotateVal}deg`;
}

jokeBtn.click();
