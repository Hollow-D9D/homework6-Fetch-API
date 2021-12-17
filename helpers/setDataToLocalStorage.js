export function setDataToLocalStorage(key, value) {
  const jsonStr = JSON.stringify(value);
  console.log(jsonStr);
  localStorage.setItem(key, jsonStr);
  return true;
}
