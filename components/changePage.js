import { COUNTRY_PAGE_PATH } from "../constants/path.js";

export function changePage(country) {
  let prev = window.location.href;
  prev = prev.substring(0, prev.lastIndexOf("/") + 1);
  window.location.href = prev + COUNTRY_PAGE_PATH;
}
