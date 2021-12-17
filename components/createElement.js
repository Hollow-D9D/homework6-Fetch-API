export function createElement(element) {
  let countryDiv = document.createElement("div");
  countryDiv.classList.add("country");
  countryDiv.innerText = `${element.name}
  ${element.capital}
  `;
  let imgElem = document.createElement("img");
  imgElem.src = element.url;
  countryDiv.appendChild(imgElem);
  return countryDiv;
}
