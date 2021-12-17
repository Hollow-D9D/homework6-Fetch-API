export async function fetchUrl(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
