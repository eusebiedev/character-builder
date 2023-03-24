// UI Logic
function buildCharacter(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.querySelector("input[name='age']:checked").value;
  const species = document.getElementById("species").value;

  let result;
  if (age === "old") {
    if (species === "elf") {
      result = "old elf";
    } else if (species === "human") {
      result = "old human";
    }
  } else if (age === "young") {
    if (species === "elf") {
      result = "young elf";
    } else if (species === "human") {
      result = "young human";
    }
  }

  document.querySelector("p#results").innerText = "Your character: " + " " + name + " " + "the " + result;
  document.querySelector("p#results").removeAttribute("class");
}

window.addEventListener("load", function () {
  const form = document.getElementById("character");
  form.addEventListener("submit", buildCharacter);
});
