// portfolio

const p_buttons = document.querySelector('.p-btns');
const p_btns = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');
p_buttons.addEventListener("click", (e) => {
    const p_btns_clicked = e.target;
    p_btns.forEach((elem) => elem.classList.remove("p-btn-active"));
    p_btns_clicked.classList.add("p-btn-active");
    // console.log(p_img_elem);

    const btn_number = p_btns_clicked.dataset.btnNum;
    // console.log(btn_number);
    const img_active = document.querySelectorAll(`.p-btn--${btn_number}`);
    p_img_elem.forEach((elem) => elem.classList.add("p-image-not-active"));
    img_active.forEach((elem) => elem.classList.remove("p-image-not-active"));
});
let timeout;

function fetchData() {
    const time = document.getElementById("time").value;
    timeString = String(time);
    newtimeString = timeString.split(':');
    console.log(newtimeString);
    const newDate = document.getElementById("date").value;
    console.log(newDate);
    const selectItem = document.getElementById("difficulty").value;
    console.log(selectItem);
    const date = new Date();
    console.log(date);
    hours1 = date.getHours();
    minutes1 = date.getMinutes();
    hours2 = Number(newtimeString[0]);
    minutes2 = Number(newtimeString[1]);
    console.log(hours1, hours2, minutes1, minutes2);
    remainingTime = (((hours2 - hours1) * 60 * 60 * 1000) + (minutes2 - minutes1) * 60 * 1000);
    console.log(remainingTime);
    timeout = setTimeout(alertFunc, remainingTime);
}

function alertFunc() {
    alert("Your workout section starts:");
}