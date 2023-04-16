import { data } from "./data.js";

const categories = ["all", "berry", "soft", "tart", "nut", "etc"];
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
  });
});

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
            <h4>${item.toppingName}</h4>
            <div class="tagContainer">${tags.join("")}</div>
            <img class="topping" alt="${item.toppingName} 이미지" src="${
        item.toppingImg
      }" />
            <img class="heart" alt="찜 아이콘" src="./assets/favorite_FILL0_wght400_GRAD0_opsz48.svg" />
          </article>
            `;
    });
  toppingList.innerHTML = items.join("");
}

function showTags() {
  const tagList = document.querySelector("#tag_list");
  const selectedTags = selectedCategories.map((category) => {
    return `
            <div class="tag">
            ${category}
            <span class="close" value="${category}">x</span>
            </div>
        `;
  });
  tagList.innerHTML = selectedTags.join("");
}

const toppingItems = data.map((item) => {
  const tags = item.toppingTag.map((tag) => `<small>${tag}</small>`);
  return `
    <article>
    <h4>${item.toppingName}</h4>
    <div class="tagContainer">${tags.join("")}</div>
    <img class="topping" alt="${item.toppingName} 이미지" src="${
    item.toppingImg
  }" />
    <img class="heart" alt="찜 아이콘" src="./assets/favorite_FILL0_wght400_GRAD0_opsz48.svg" />
  </article>
    `;
});

toppingList.innerHTML = toppingItems;

const tagList = document.querySelector("#tag_list");
tagList.addEventListener("click", (event) => {
    if(event.target.matches("span")) {
        const category = event.target.getAttribute("value");
        const index = selectedCategories.indexOf(category);
        selectedCategories.splice(index,1);
        categoryButtons.forEach((categoryButton) => {
            if (categoryButton.value === category){
                categoryButton.checked = false;
            }
        })
        showItems();
        showTags();
    }
})