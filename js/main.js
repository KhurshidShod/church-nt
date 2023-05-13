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
const loaderScreen = document.querySelector(".loader");
const cursor = document.querySelector(".cursor")
const ps = document.querySelectorAll("p");
const h1s = document.querySelectorAll("h1");
const h2s = document.querySelectorAll("h2");
const h3s = document.querySelectorAll("h3");
const h4s = document.querySelectorAll("h4");
const h5s = document.querySelectorAll("h5");
const h6s = document.querySelectorAll("h6");
const btns = document.querySelectorAll("button");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX,
        y = e.clientY;
    console.log(x, y)
    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
})
listItems.forEach(li => {
    li.addEventListener("mouseover", () => {
        cursor.style.transform = 'scale(2)'
    })
    li.addEventListener("mouseleave", () => {
        cursor.style.transform = 'scale(1)'
    })
})
ps.forEach(p => {
    p.addEventListener("mouseover", () => {
        cursor.style.transform = 'scale(2)'
    })
    p.addEventListener("mouseleave", () => {
        cursor.style.transform = 'scale(1)'
    })
})
h1s.forEach(h1 => {
    h1.addEventListener("mouseover", () => {
        cursor.style.transform = 'scale(3.5)'
    })
    h1.addEventListener("mouseleave", () => {
        cursor.style.transform = 'scale(1)'
    })
})
h2s.forEach(h2 => {
    h2.addEventListener("mouseover", () => {
        cursor.style.transform = 'scale(3.3)'
    })
    h2.addEventListener("mouseleave", () => {
        cursor.style.transform = 'scale(1)'
    })
})
h3s.forEach(h3 => {
    h3.addEventListener("mouseover", () => {
        cursor.style.transform = 'scale(3)'
    })
    h3.addEventListener("mouseleave", () => {
        cursor.style.transform = 'scale(1)'
    })
})
h4s.forEach(h4 => {
    h4.addEventListener("mouseover", () => {
        cursor.style.transform = 'scale(2.75)'
    })
    h4.addEventListener("mouseleave", () => {
        cursor.style.transform = 'scale(1)'
    })
})
h5s.forEach(h5 => {
    h5.addEventListener("mouseover", () => {
        cursor.style.transform = 'scale(2.4)'
    })
    h5.addEventListener("mouseleave", () => {
        cursor.style.transform = 'scale(1)'
    })
})
h6s.forEach(h6 => {
    h6.addEventListener("mouseover", () => {
        cursor.style.transform = 'scale(2.2)'
    })
    h6.addEventListener("mouseleave", () => {
        cursor.style.transform = 'scale(1)'
    })
})
btns.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        cursor.style.transform = 'scale(3.5)'
    })
    btn.addEventListener("mouseleave", () => {
        cursor.style.transform = 'scale(1)'
    })
})
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

window.addEventListener("load", () => {
    loaderScreen.style.display = "none"
})