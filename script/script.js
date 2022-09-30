'use strict';
//elements
const moviesEl = document.getElementById('movies');
const screenContainerEl = document.querySelector('.screen-container');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');

// console.log(moviesEl);
// console.log(screenContainerEl);
// console.log(countEl);
// console.log(totalEl);

//global variables
let ticketPrice = Number(moviesEl.value);
//console.log(ticketPrice);
let seatCount = 0;
let totalPrice = 0;


//function
const populateUI = function () {
    countEl.innerText = seatCount;
    totalEl.innerText = seatCount * ticketPrice;
}

//eventlistener

moviesEl.addEventListener('change', function (){
    ticketPrice = Number(moviesEl.value);
    populateUI();
});

screenContainerEl.addEventListener('click', function (e){
   if(e.target.classList.contains('seat')){
    if(!e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        const selectedSeatsEl = document.querySelectorAll('.row .seat.selected');
        seatCount = selectedSeatsEl.length;
        populateUI();
       }
    }
    
})