import { data, setData } from "../../data";

export default function MyCategoryList() {
  const categoryContainer = document.querySelector(".categoryList");

  // localStorage 관련 코드
  function saveInLocalStorage() {
    localStorage.setItem("categoryData", JSON.stringify(data));
  }

  function showLatestLocalStorage() {
    const storedData = localStorage.getItem("categoryData");
    if (storedData) {
      //localStorage 에 직접 접근해 값을 바꿔도 되지만 편의를 위해 data 를 바꾸고, data 를 삽입
      setData(JSON.parse(storedData));
    }
  }

  // mycategory 관련 코드
  function showCategory() {
    const categoryList = data.map((item, index) => {
      return `<div class="categoryNames" draggable="true" index="${index}">${item.title}</div>`;
    });

    categoryContainer.innerHTML = categoryList.join("");

    const categoryNames = document.querySelectorAll(".categoryNames");

    categoryNames.forEach((item) => {
      item.addEventListener("dragstart", startDrag);
      item.addEventListener("dragover", overDrag);
      item.addEventListener("drop", drop);
    });
  }

  function startDrag(e) {
    const index = e.target.getAttribute("index");
    e.dataTransfer.setData("text/plain", index);
  }

  function overDrag(e) {
    e.preventDefault();
  }

  function drop(e) {
    const startIndex = e.dataTransfer.getData("text/plain");
    const endIndex = e.target.getAttribute("index");

    if (startIndex !== endIndex) {
      const draggedItem = data[startIndex];
      data.splice(startIndex, 1);
      data.splice(endIndex, 0, draggedItem);
      //로컬 스토리지에 저장
      saveInLocalStorage();

      showCategory();
    }
  }
  
  //로컬 스토리지 최신값 반영
  showLatestLocalStorage();
  showCategory();

}
