function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "28016b53ed164t93331ffe37e7e3ao09";
  let context =
    "You are a romantic poem expert and like to write short poems. Your mission is to generate a 4 line poem amd seperate each line with a <br> tag. Make sure to follow the user instrucions. Do not include a title to the poesm. Sign the poem with 'SheCodes AI' inside a <stron> element at the end of the poem Not at the beginnig.";
  let prompt = `User instructions: Generate a German poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a German poem about ${instructionsInput.value}</div>...`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
