const quotesWithAuthorName = [
    first = {
        author: 'Mahatma Gandhi',
        quote: 'Strength does not come from physical capacity. It comes from an indomitable will.',
        title: 'Indian lawyer',
        image: ''
    },
    second = {
        author: 'Henry David Thoreau',
        quote: 'Success usually comes to those who are too busy to be looking for it.',
        title: 'American naturalist',
        image: ''
    },
    third = {
        author: 'Thomas Jefferson',
        quote: 'If you want something you’ve never had, you must be willing to do something you’ve never done.',
        title: '3rd U.S. President',
        image: ''
    },
    fourth = {
        author: 'Robin Sharma',
        quote: 'If you don’t make time for exercise, you’ll probably have to make time for illness.',
        title: 'Canadian writer',
        image: ''
    },
    fifth = {
        author: 'Abraham Lincoln',
        quote: 'The best way to predict the future is to create it.',
        title: '16th U.S. President',
        image: ''
    },
    six = {
        author: 'Earl Nightingale',
        quote: 'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.',
        title: 'American author',
        image: ''
    },
    seven = {
        author: 'Muhammad Ali',
        quote: 'I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.',
        title: 'American professional boxer',
        image: ''
    },
    eight = {
        author: 'Jack LaLanne',
        quote: 'Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out.',
        title: 'American television presenter',
        image: ''
    },
    nine = {
        author: 'Andrew Murphy',
        quote: 'Your body can stand almost anything. It’s your mind that you have to convince.',
        title: 'Australian olympic athlete',
        image: ''
    },
    ten = {
        author: 'Lou Holtz',
        quote: 'Ability is what you’re capable of doing. Motivation determines what you do. Attitude determines how well you do it.',
        title: 'former American footballer',
        image: ''
    }
];
let randomNumber = Math.floor(Math.random() * 10);
// console.log(quotesWithAuthorName[randomNumber].author);
// console.log(quotesWithAuthorName[randomNumber].quote);
document.getElementById("author").innerHTML = quotesWithAuthorName[randomNumber].author;
document.getElementById("quote").innerHTML = quotesWithAuthorName[randomNumber].quote;
document.getElementById("title").innerHTML = '(' + quotesWithAuthorName[randomNumber].title + ')';
// form validation method
function mouse() {
    document.getElementById("useremail").setAttribute("placeholder", "xyz@gmail.com");
}
function mouseleave() {
    document.getElementById("useremail").setAttribute("placeholder", "Your Email:");
}

const heroSection = document.querySelector(".hero-header");
const footerElement = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<i class="fa-solid fa-jet-fighter-up fa-6x scroll-top"></i>`;
footerElement.after(scrollElement);
const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
}
scrollElement.addEventListener("click", scrollTop);

// creating mobile navbar
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");
const heroHeader = document.querySelector(".hero-header");
mobile_nav.addEventListener('click', () => {
    headerElem.classList.toggle("active");
})

// modal 
