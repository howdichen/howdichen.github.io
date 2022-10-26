//nodelist 類似array
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", () => {
    // console.log(123);
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const day = document.getElementById("dayleft");
day.innerText = dayleft();

function dayleft() {
  var now = new Date();
  var spday = new Date(2023, 1 - 1, 14); //js 從第0月開始
  a = (spday.getTime() - now.getTime()) / (24 * 60 * 60 * 1000);
  a = Math.ceil(a);
  if (a == 0) {
    return "就在今天! 歡迎蒞臨";
  } else if (a < 0) {
    return "完美落幕，感謝參與!";
  }

  return `還有${a}天`;
}

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
