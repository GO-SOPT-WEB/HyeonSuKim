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

const toppingAddBtn = document.getElementById('toppingAddBtn');
toppingAddBtn.addEventListener('click', () => {
  const toppingName = document.querySelector('input[name="toppingName"]').value;
  const hashtag = document.querySelector('input[name="hashtag"]').value;
  const toppingImg = document.querySelector('input[type="file"]').files[0];

  const categorySelection = document.getElementById('categorySelection');
  const categoryOption = categorySelection.options[categorySelection.selectedIndex].value;

  const topping = { toppingName, hashtag, toppingImg, categoryOption };
  const toppings = JSON.parse(localStorage.getItem('toppings')) || [];
  toppings.push(topping);
  localStorage.setItem('toppings', JSON.stringify(toppings));

  location.href="/week2/webie_foundation";
});