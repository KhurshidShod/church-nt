let emojis = [
    '😐',
    '🙂',
    '😆',
    '😁',
    '🙃',
    '🥰',
    '😡',
    '😎'
];
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const navMenu = document.getElementById("navMenu");
const listItems = document.querySelectorAll("#list-item");
const header = document.querySelector("header");

let urlAnimate = () => {
    window.location.hash = `-${emojis[Math.floor((Date.now() / 100) % emojis.length)]}`;
    setTimeout(urlAnimate, 500)
};
openNav.addEventListener("click", () => {
    navMenu.style.top = "0"
});
closeNav.addEventListener("click", () => {
    navMenu.style.top = "-150%"
});
listItems.forEach(item => {
    item.addEventListener("click", () => {
        navMenu.style.top = "-150%"
    })
})
urlAnimate();
window.addEventListener("scroll", () => {
    if(pageYOffset > 80){
        header.classList.add("shrink")
    } else {
        header.classList.remove("shrink")
    }
})