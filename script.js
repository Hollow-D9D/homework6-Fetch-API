import { fetchUrl } from "./helpers/fetchUrl.js";
import { getShortData } from "./helpers/getShortData.js";
import { createElement } from "./components/createElement.js";
import { changePage } from "./components/changePage.js";
import { countryInfo } from "./components/countryInfo.js";

import { BASE_URL, SEARCH_URL } from "./constants/Urls.js";

let baseData = fetchUrl(BASE_URL);

console.log(baseData);
let shortData = await getShortData(baseData);
const countriesDiv = document.getElementById("countriesDiv");
const searchBtn = document.getElementById("searchBtn");
console.log(shortData);

function render(data, baseData) {
  data.forEach((element, index) => {
    let divElem = createElement(element);
    countriesDiv.appendChild(divElem);
    divElem.addEventListener("click", async () => {
      await countryInfo(baseData, index);
      changePage();
    });
  });
}

searchBtn.addEventListener("click", async () => {
  const inputElem = document.getElementById("searchInput");
  if (inputElem.value != "") {
    countriesDiv.innerHTML = "";
    const url = SEARCH_URL + inputElem.value;
    let searchData = fetchUrl(url.toLowerCase());
    render(await getShortData(searchData), searchData);
  } else {
    render(shortData);
  }
});

render(shortData, baseData);
