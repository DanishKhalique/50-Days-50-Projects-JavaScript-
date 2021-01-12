const row = document.querySelectorAll(".row");
const seat = document.querySelectorAll(".row .seat:not(.occupied)");

const movie = document.getElementById("movie");
const totalSeat = document.getElementById("totalSeat");
const totalPrice = document.getElementById("totalPrice");
let movieValue = parseInt(movie.value);

// console.log("🧷", seat);
//console.log("🚣", row);

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeat"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seat.forEach((seats, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seats.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  const selectedMoviePrice = localStorage.getItem("selectedMoviePrice");

  if (selectedMovieIndex != null) {
    movie.selectedIndex = selectedMovieIndex;
  }
}

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatIndex = [...selectedSeats].map((seats, i) => {
    return [...seat].indexOf(seats);
  });

  localStorage.setItem("selectedSeat", JSON.stringify(seatIndex));

  const count = selectedSeats.length;
  totalSeat.innerText = count;
  const totalValue = parseInt(count * movieValue);
  totalPrice.innerText = totalValue;
}

movie.addEventListener("change", (e) => {
  movieValue = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

seat.forEach((seat) => {
  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");
    updateSelectedCount();
  });
});

populateUI();
updateSelectedCount();
