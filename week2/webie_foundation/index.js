import { data } from "./data.js";

const categories = ["all", "berry", "soft", "tart", "nut", "etc"];
const koreanCategories = {"all" : "전체", "berry": "베리류", "soft": "말랑과일", "tart": "아삭과일", "nut": "견과류", "etc": "기타"};
const selectedCategories = [];
const toppingList = document.querySelector("#topping_list");

const categoryButtons = document.querySelectorAll(
  'input[class="category_button"]'
);

categoryButtons.forEach((categoryButton) => {
  categoryButton.addEventListener("change", () => {
    const category = categoryButton.value;
    if (categoryButton.checked) {
      selectedCategories.push(category);
    } else {
      const index = selectedCategories.indexOf(category);
      selectedCategories.splice(index, 1);
    }
    showItems();
    showTags();
    showTagMore();
  });
});

//카테고리 선택 버튼이 한 번 이상 눌렸을 때부터 상품 보여주는
function showItems() {
  const items = data
    .filter((item) => {
      if (selectedCategories.length === 0) {
        return true;
      } else if (selectedCategories.includes("all")) {
        return true;
      } else {
        return selectedCategories.includes(item.toppingCategory);
      }
    })
    .map((item) => {
      const tags = item.toppingTag.map((tag) => `<small>${tag}</small>`);
      return `
      <article>
      <div class="modalContainer" name="${item.toppingName}" >
          <div class="modalContent" name="${item.toppingName}">
          </div>
          <div class="modalCloseButton" name="${item.toppingName}">x</div>
      </div>
      <h4>${item.toppingName}</h4>
      <div class="tagContainer">${tags.join("")}</div>
      <span class="tagMoreButton" tags="${item.toppingTag}" name="${
        item.toppingName
      }">+</span>
      <img class="topping" alt="${item.toppingName} 이미지" src="${
        item.toppingImg
      }" />
      <img class="heart" alt="찜 아이콘" src="./assets/favorite_FILL0_wght400_GRAD0_opsz48.svg" />
    </article>
            `;
    });
  toppingList.innerHTML = items.join("");
}

//태그 나타나게 하기
function showTags() {
  const tagList = document.querySelector("#tag_list");
  const selectedTags = selectedCategories.map((category) => {
    return `
            <div class="tag">
            ${koreanCategories[category]}
            <span class="close" value="${category}">x</span>
            </div>
        `;
  });
  tagList.innerHTML = selectedTags.join("");
}

//초기 화면 (전체 토핑 보여주기)
const toppingItems = data.map((item) => {
  const tags = item.toppingTag.map((tag) => `<small>${tag}</small>`);
  return `
    <article>
    <div class="modalContainer" name="${item.toppingName}" >
        <div class="modalContent" name="${item.toppingName}">
        </div>
        <div class="modalCloseButton" name="${item.toppingName}">x</div>
    </div>
    <h4>${item.toppingName}</h4>
    <div class="tagContainer">${tags.join("")}</div>
    <span class="tagMoreButton" tags="${item.toppingTag}" name="${
    item.toppingName
  }">+</span>
    <img class="topping" alt="${item.toppingName} 이미지" src="${
    item.toppingImg
  }" />
    <img class="heart" alt="찜 아이콘" src="./assets/favorite_FILL0_wght400_GRAD0_opsz48.svg" />
  </article>
    `;
});

toppingList.innerHTML = toppingItems.join("");

showTagMore();

//태그에서 x 눌러서 태그 삭제
const tagList = document.querySelector("#tag_list");
tagList.addEventListener("click", (event) => {
  if (event.target.matches("span")) {
    const category = event.target.getAttribute("value");
    const index = selectedCategories.indexOf(category);
    selectedCategories.splice(index, 1);
    categoryButtons.forEach((categoryButton) => {
      if (categoryButton.value === category) {
        categoryButton.checked = false;
      }
    });
    showItems();
    showTags();
    showTagMore();
  }
});

function showTagMore() {
  const tagMoreButtons = document.querySelectorAll(".tagMoreButton");

  tagMoreButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const tags = event.target.getAttribute("tags");
      const modalContents = document.querySelectorAll(".modalContent");

      modalContents.forEach((modalContent) => {
        if (
          modalContent.getAttribute("name") ===
          event.target.getAttribute("name")
        ) {
          modalContent.innerHTML = tags;
        }
      });

      const modalContainers = document.querySelectorAll(".modalContainer");
      modalContainers.forEach((modalContainer) => {
        if (
          modalContainer.getAttribute("name") ===
          event.target.getAttribute("name")
        ) {
          modalContainer.style.display = "block";
        }

        const modalCloseButtons =
          document.querySelectorAll(".modalCloseButton");
        modalCloseButtons.forEach((modalCloseButton) => {
          modalCloseButton.addEventListener("click", (event) => {
            if (
              modalCloseButton.getAttribute("name") ===
              event.target.getAttribute("name")
            ) {
              event.target.parentNode.style.display = "none";
            }
          });
        });
      });
    });
  });
}
