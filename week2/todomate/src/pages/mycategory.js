import Category from "../components/Category";
import Footer from "../components/Footer";
import MyCategoryList from "../components/MyCategoryList";

function MyCategory($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = `
    <div id="content">
      <header>WEB TO DO MATE</header>
        <div class="myCategoryTitle">나의 카테고리</div>
        <div class="categoryListContainer">
            <div class="categoryList"></div>
        </div>
        
        <footer>
        <button type="button" class="calendarButton">
          <img
            src="./assets/home_FILL1_wght400_GRAD0_opsz48.svg"
            alt="달력-페이지로-갈-수-있는-버튼의-아이콘"
          />
          달력
        </button>
        <button type="button" class="myCategoryButton">
          <img
            src="./assets/account_circle_FILL1_wght400_GRAD0_opsz48.svg"
            alt="MY-페이지로-갈-수-있는-버튼의-아이콘"
          />
          MY
        </button>
      </footer>
    </div>
      
    `;
  };
  this.render();
  MyCategoryList();
  Footer();
}
export default MyCategory;
