import { setDataToLocalStorage } from "../helpers/setDataToLocalStorage.js";

export async function countryInfo(data, index) {
  let country = (await data)[index];
  let info = {
    name: country.name.official,
    capital: country.capital[0],
    region: country.region,
    population: country.population,
    area: country.area,
    flag: country.flags.png,
    coatOfArms: country.coatOfArms.png,
  };
  let key = country.currencies[Object.keys(country.currencies)];
  info.currency = `${key.name} "${key.symbol}"`;
  setDataToLocalStorage("country", info);
}
//name.official capital[0] region flags population area currencies coatOfArms
