function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
}

let serachFormElement = document.querySelector("#search-form");
serachFormElement.addEventListener("submit", handleSearchSubmit);
