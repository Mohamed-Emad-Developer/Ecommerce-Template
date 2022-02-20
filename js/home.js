let section = document.querySelector(".statistics section");
const nums = document.querySelectorAll(".s-content h3.num");
let start = false;
window.onscroll = function () {
  if (window.scrollY >= 500) {
    console.log(document.querySelector(".go-up"));
    document.querySelector(".go-up").style.transform = "scale(1)";
  } else {
    document.querySelector(".go-up").style.transform = "scale(0)";
  }
  if (window.scrollY >= section.offsetTop) {
    if (!start) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    start = true;
  }
};

function startCount(num) {
  let goal = num.dataset.num;
  let count = setInterval(() => {
    num.textContent++;
    if (num.textContent == goal) clearInterval(count);
  }, 2000 / goal);
}

document.querySelector(".open-nav").onclick = () => {
  document.querySelector("nav").style.transform = "translateX(0)";
};

document.querySelector(".close-nav").onclick = () => {
  document.querySelector("nav").style.transform = "translateX(-100%)";
};
