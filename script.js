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

  return `還有${a}天`;
}
