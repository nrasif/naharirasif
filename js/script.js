var typed = new Typed(".multiple-text", {
    strings: ["physicist","science Data Scientist","science Data Analyst"],
    typeSpeed: 70,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

// Get the container element
var btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}