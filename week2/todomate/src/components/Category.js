import { data } from "../../data";

export default function Category() {
  let checkedLength = 0;
  const category = document.querySelector(".category");
  let newTodos = [];

  let storedData = JSON.parse(localStorage.categoryData);

  //localStorage의 categoryData 가 없는 경우 대비
  if (!storedData) {
    storedData = data;
    localStorage.setItem("categoryData", JSON.stringify(storedData));
  }

  function showCategory() {
    const category_contents = storedData.map((datum) => {
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

      const modalInput = modalContainer.querySelector("input");
      modalInput.focus();

      const modalAddButton = document.querySelector(".modalAddButton");
      modalAddButton.addEventListener("click", () => {
        const newTodoName = document.querySelector(
          ".modalContainer > input"
        ).value;

        storedData.map((datum) => {
          if (datum.title === event.target.getAttribute("title")) {
            //중복 방지를 위해 조기 리턴
            if (
              datum.todos.includes(modalInput.value) ||
              newTodos.includes(modalInput.value)
            ) {
              return;
            }
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
            newTodos = [...newTodos, newTodoName]; //새로 만든 투두에 대해서도 중복 방지
          }
        });
        modalContainer.style.display = "none";
        event = null;
        modalInput.value = null;
      });
    }
  });

}
