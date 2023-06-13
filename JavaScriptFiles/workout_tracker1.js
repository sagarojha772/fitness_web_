var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// check modal start  here
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("check");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
const fullbodyclick = document.getElementById("fullbodyworkout");
fullbodyclick.addEventListener("click",call);
function call() {
    window.location = "fullbody_workout.html";
}
const lowerbodyclick = document.getElementById("lowerbodyworkout");
lowerbodyclick.addEventListener("click",call1);
function call1(){
    window.location = "lowerbody_workout.html";
}
const absclick = document.getElementById("absworkout");
absclick.addEventListener("click",call2);
function call2(){
    window.location = "abs_workout.html";
}