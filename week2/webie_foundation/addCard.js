import { data } from "./data.js";

const koreanCategories = {"all" : "전체", "berry": "베리류", "soft": "말랑과일", "tart": "아삭과일", "nut": "견과류", "etc": "기타"};

const categorySelector = document.getElementById("categorySelection");
const categoryOptions = Object.keys(koreanCategories).filter((item) => {
   return item !== "all"
}).map((key) => {
    return `<option>${koreanCategories[key]}</option>`;
  });
categorySelector.innerHTML = categoryOptions.join("");

const toppingImgFile = document.getElementById("topping_img_file");

toppingImgFile.addEventListener("change", () => {
  const file = toppingImgFile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const imageURL = reader.result;
    const toppingImg = document.getElementById("topping_img");
    toppingImg.src = imageURL;
  });
  reader.readAsDataURL(file);
});

const toppingAddBtn = document.getElementById("toppingAddBtn");
toppingAddBtn.addEventListener("click", () => {
  const toppingName = document.querySelector('input[name="toppingName"]').value;
  const toppingTag = document
    .querySelector('input[name="toppingTag"]')
    .value.split(",");
  const toppingImg = "./assets/apple.png";

  const categorySelection = document.getElementById("categorySelection");
  const toppingCategory = Object.keys(koreanCategories).find(key => koreanCategories[key] === categorySelection.options[categorySelection.selectedIndex].value);
  const heartImg = "./assets/favorite_FILL0_wght400_GRAD0_opsz48.svg";

  const topping = {
    toppingName,
    toppingCategory,
    toppingTag,
    heartImg,
    toppingImg,
  };
  const toppings = JSON.parse(localStorage.getItem("toppings")) || [];
  toppings.push(topping);
  localStorage.setItem("toppings", JSON.stringify(toppings));


  location.href = "/week2/webie_foundation";
});
