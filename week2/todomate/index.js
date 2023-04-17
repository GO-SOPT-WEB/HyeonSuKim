import { data } from "./data.js";

console.log(data);

const category = document.querySelector(".category");
const category_contents = data.map((datum) => {
  const todo = datum.todos
    .map((todo) => {
      return `<h6>
        <img
        src="./assets/favorite_FILL0_wght400_GRAD0_opsz48 (1).svg"
        alt="할-일을-완료했는지-체크하는-하트-아이콘"
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
