import { data } from "./data.js";

console.log(data);

let checkedLength = 0;

const category = document.querySelector(".category");
const category_contents = data.map((datum) => {
  const todo = datum.todos
    .map((todo) => {
      if (datum.checked[datum.todos.indexOf(todo)]) {
        checkedLength++;
      }
      return `<h6>
        <img
        src="${
          datum.checked[datum.todos.indexOf(todo)]
            ? "./assets/favorite_FILL1_wght400_GRAD0_opsz48 (1).svg"
            : "./assets/favorite_FILL0_wght400_GRAD0_opsz48 (1).svg"
        }"
        alt="할-일을-완료했는지-체크하는-하트-아이콘"
        class="heartButton"
      />
      ${todo}
        </h6>`;
    })
    .join("");
  return `
        <article>
            <span>${datum.title}</span>
            ${todo}
        </article>
    `;
});

category.innerHTML = category_contents.join("");

function changeTodoLength() {
  const todoLength = document.querySelector(".todoLength > div");
  todoLength.innerText = checkedLength;
}

changeTodoLength();

const heartButtons = document.querySelectorAll(".heartButton");
heartButtons.forEach((heartButton) => {
  heartButton.addEventListener("click", () => {
    console.log(heartButton.src);
    if (
      heartButton.src.endsWith("favorite_FILL1_wght400_GRAD0_opsz48%20(1).svg")
    ) {
      heartButton.src = "./assets/favorite_FILL0_wght400_GRAD0_opsz48 (1).svg";
      checkedLength--;
    } else {
      heartButton.src = "./assets/favorite_FILL1_wght400_GRAD0_opsz48 (1).svg";
      checkedLength++;
    }
    changeTodoLength();
  });
});
