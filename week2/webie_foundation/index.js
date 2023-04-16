import { data } from "./data.js";

const toppingList = document.querySelector("#topping_list");

const toppingItems = data.map((item) => {
  const tags = item.toppingTag.map((tag) => `<small>${tag}</small>`);
  return `
    <article>
    <h4>${item.toppingName}</h4>
    <div class="tagContainer">${tags}</div>
    <img class="topping" alt="${item.toppingName} 이미지" src="${item.toppingImg}" />
    <img class="heart" alt="찜 아이콘" src="./assets/favorite_FILL0_wght400_GRAD0_opsz48.svg" />
  </article>
    `;
});

toppingList.innerHTML = toppingItems;
