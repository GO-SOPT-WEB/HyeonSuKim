import { data } from "./data.js";

let checkedLength = 0;
const category = document.querySelector(".category");

function showCategory() {
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
        <article class="categoryContent" title="${datum.title}">
            <span>${datum.title}<button class="todoAddButton" title="${datum.title}">+</button></span>
            ${todo}
        </article>
    `;
  });

  category.innerHTML = category_contents.join("");
}

showCategory();

function changeTodoLength() {
  const todoLength = document.querySelector(".todoLength > div");
  todoLength.innerText = checkedLength;
}

changeTodoLength();

function changeHeart() {
  category.addEventListener("click", (event) => {
    if (event.target.classList.contains("heartButton")) {
      if (
        event.target.src.endsWith(
          "favorite_FILL1_wght400_GRAD0_opsz48%20(1).svg"
        )
      ) {
        event.target.src =
          "./assets/favorite_FILL0_wght400_GRAD0_opsz48 (1).svg";
        checkedLength--;
      } else {
        event.target.src =
          "./assets/favorite_FILL1_wght400_GRAD0_opsz48 (1).svg";
        checkedLength++;
      }
      changeTodoLength();
    }
  });
}
changeHeart();

category.addEventListener("click", (event) => {
  if (event.target.classList.contains("todoAddButton")) {
    const modalContainer = document.querySelector(".modalContainer");
    modalContainer.style.display = "block";

    const modalAddButton = document.querySelector(".modalAddButton");
    modalAddButton.addEventListener("click", () => {
      const newTodoName = document.querySelector(
        ".modalContainer > input"
      ).value;

      data.map((datum) => {
        console.log(event.target);
        if (datum.title === event.target.getAttribute("title")) {
          const todo = datum.todos.map((todo) => {
            return todo;
          });

          const newTodo = `<h6>
            <img
            src="${
              datum.checked[datum.todos.indexOf(todo)]
                ? "./assets/favorite_FILL1_wght400_GRAD0_opsz48 (1).svg"
                : "./assets/favorite_FILL0_wght400_GRAD0_opsz48 (1).svg"
            }"
            alt="할-일을-완료했는지-체크하는-하트-아이콘"
            class="heartButton"
          />
          ${newTodoName}
            </h6>`;

          const categoryContent = document.querySelector(
            `.categoryContent[title=${event.target.getAttribute("title")}]`
          );

          categoryContent.insertAdjacentHTML("beforeend", newTodo);
        }
      });
      modalContainer.style.display = "none";
      event = null;
      const input = document.querySelector(".modalContainer input");
      input.value = null;
    });
  }
});

const calendarButton = document.querySelector(".calendarButton");
const myCategoryButton = document.querySelector(".myCategoryButton");

calendarButton.addEventListener("click", () => {
    window.location.href = '/';
});

myCategoryButton.addEventListener("click", () => {
    window.location.href = '/mycategory';
})