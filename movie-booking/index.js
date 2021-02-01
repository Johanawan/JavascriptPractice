const container = document.querySelector(".container");
const empty_seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movies');
let ticketPrice = parseInt(movieSelect.value);

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    // const seatsIndex = [...selectedSeats].map(function(seat) {
    //     return [...seats].indexOf(seat);
    // });

    // finds length of selected seats
    const selectedSeatsCount = selectedSeats.length;

    // changes the count
    count.innerHTML = selectedSeatsCount;

    // changes the price
    total.innerHTML = selectedSeatsCount*ticketPrice;
}

// Movie select event listener
movieSelect.addEventListener('change', e => {
    ticketPrice = parseInt(e.target.value);
    updateSelectedCount();
})

// Seat selection event listener
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        console.log(e.target);
    }
    e.target.classList.toggle("selected")
    
    updateSelectedCount();
})