let hamburgerbtn = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");
let closebtn = document.querySelector(".close");
hamburgerbtn.addEventListener("click", () => {
  nav_list.classList.add("active");
});
closebtn.addEventListener("click", () => {
  nav_list.classList.remove("active");
});

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
const countToDate = new Date().setHours(new Date().getHours() + 24);
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}
// Add this to your js/script.js to make the timer numbers "pop"
function animateValue(id) {
    const el = document.getElementById(id);
    el.style.transform = "scale(1.2)";
    setTimeout(() => {
        el.style.transform = "scale(1)";
    }, 200);
}
// Call animateValue('second') whenever your timer logic updates the HTML


// Counter section logic
Rs.(document).ready(function () {
  Rs.(".count").counterUp({
    delay: 10,
    time: 1200,
  });
});


