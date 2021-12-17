import { getDataFromLocalStorage } from "./helpers/getDataFromLocalStorage.js";

let country = getDataFromLocalStorage("country");
console.log(country);
let containerDiv = document.getElementById("singleCountry");
containerDiv.innerText = `
  ${country.name}
  ${country.capital}
  Region: ${country.region}
  Area: ${country.area}km²
  Population: ${country.population}
  Currency: ${country.currency}
  `;

let flagElem = document.createElement("img");
flagElem.src = country.flag;
let coatOfArms = document.createElement("img");
coatOfArms.src = country.coatOfArms;
let imgDiv = document.getElementById("imgDiv");
imgDiv.appendChild(flagElem);
imgDiv.appendChild(coatOfArms);
