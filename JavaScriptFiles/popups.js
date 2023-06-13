

const loginPopup = document.querySelector(".login-popup4");
const close = document.querySelector(".close4");


window.addEventListener("load", function () {

  showPopup();
  // setTimeout(function(){
  //   loginPopup.classList.add("show");
  // },5000)

})

function showPopup() {
  const timeLimit = 5 // seconds;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show4");
    }
    console.log(i)
  }, 1000);
}


close.addEventListener("click", function () {
  loginPopup.classList.remove("show4");
})
const btn = document.getElementById("countbtn4");
const img = document.getElementById("imgset4");
const heading = document.getElementById("heading4");
const paragraph = document.getElementById("paragraph4");
count = 0;
btn.onclick = function () {
  count++;
  if (count == 1) {
    img.removeAttribute("src");
    img.setAttribute("src", "../images/frame2.png");
    heading.innerHTML = "Get Burn";
  }
  if (count == 2) {
    img.removeAttribute("src");
    img.setAttribute("src", "../images/frame3.png");
    heading.innerHTML = "Eat Well";
  }
  if (count == 3) {
    img.removeAttribute("src");
    img.setAttribute("src", "../images/frame4.png");
    heading.innerHTML = "Improve Sleep Quality";
  }
  if (count == 4) {
    window.location = "#";
  }
}
function homepage() {
  window.location = "#";
}
