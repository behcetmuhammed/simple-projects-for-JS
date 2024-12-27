const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const movieSelect = document.getElementById("movies");

let selectedMovieValue = 20; //Varsayılan olarak 20 TL

movieSelect.addEventListener("change", function () {
  selectedMovieValue = parseInt(movieSelect.value);
});

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved") &&
    !e.target.classList.contains("disable")
  ) {
    e.target.classList.toggle("selected");
    let selectedSeatCount =
      container.querySelectorAll(".seat.selected").length - 1;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * selectedMovieValue;
  }
});
