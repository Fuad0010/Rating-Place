let btn = document.querySelector(".sub");
let rate = document.querySelector(".sub2");
let thankYou = document.querySelector(".thankYou");
let content1 = document.querySelector(".container");
let rates = document.querySelectorAll(".btn");
let number = document.querySelector(".rating");
let f = 0;
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        if (number.innerHTML=="") {
            number.innerHTML = rate.innerHTML;
            f = 1;
        }
    })
})
btn.addEventListener("click", (e) => {
    if (f) {
        thankYou.classList.remove("hidden");
        content1.style.display = "none";
        f = 0;
    }
})
rate.addEventListener("click", () => {
    thankYou.classList.add("hidden");
    content1.style.display = "inline-block";
    console.log(number.innerHTML);
    number.innerHTML = "";
    console.log(number.innerHTML);
})