import unitArray from "./data.js"

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("btn-el");
const app = document.querySelector("body");
const toggleCheckbox = document.getElementById("toggle-checkbox")

let unitValue = 0;
let temporaryValue = 0;

renderUnits();

inputEl.addEventListener("input", function(e) {
  e.preventDefault()
  e.target.value = e.target.value.trim();
  e.target.value = !isNaN(e.target.value) ? e.target.value : temporaryValue;
  temporaryValue = e.target.value;
  e.target.size = e.target.value.length > 2 ? e.target.value.length - 1 : 1;
  unitValue = Number(e.target.value);
});

inputEl.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    convertBtn.click();
  }
});

convertBtn.addEventListener("click", renderUnits);

function renderUnits(){
  for(let unit of unitArray){
    document.getElementById(unit.id).innerHTML = `
          <span class="input-value">${unitValue}</span>
            ${unit.firstType} =
          <span id="mass-pounds-result">${(unitValue*unit.firstRatio).toFixed(2).replace(/[\.,]0{2}/, '')}</span>
            ${unit.secondType} |
          <span class="input-value">${unitValue}</span>
            ${unit.secondType} =
          <span id="mass-kilograms-result">${(unitValue*unit.secondRatio).toFixed(2).replace(/[\.,]0{2}/, '')}</span>
            ${unit.firstType}`
  }
}

toggleCheckbox.addEventListener("input", function(e) {
  e.preventDefault()
  if (e.target.checked) {
      app.setAttribute("light-mode", "dark");
  } else {
      app.setAttribute("light-mode", "light");
  }
});

