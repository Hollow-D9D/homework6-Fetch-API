export async function getShortData(data) {
  let shortData = [];
  await data.then((arr) => {
    arr.forEach((elem) => {
      if (!elem.capital) elem.capital = [elem.name.common];
      shortData.push({
        name: elem.name.official,
        capital: elem.capital[0],
        url: elem.flags.png,
      });
    });
  });
  return shortData;
}
