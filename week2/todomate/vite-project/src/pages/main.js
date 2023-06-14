import Category from "../components/Category";

function MainPage($container) {
    this.$container = $container;
  
    this.render = () => {
      this.$container.innerHTML = `
      <div id="content">
      <header>WEB TO DO MATE</header>
      <main>
        <div class="modalContainer">
          <input type="text" autofocus></input>
          <button class="modalAddButton" type="button">추가</button>
        </div>
        <section class="calendar">
          <article>
            <time>월</time>
            <div>3</div>
            <time>27</time>
          </article>
          <article>
            <time>화</time>
            <div>3</div>
            <time>28</time>
          </article>
          <article>
            <time>수</time>
            <div>2</div>
            <time>29</time>
          </article>
          <article>
            <time>목</time>
            <div>1</div>
            <time>30</time>
          </article>
          <article class="todoLength">
            <time>금</time>
            <div>0</div>
            <time>31</time>
          </article>
          <article>
            <time>토</time>
            <div>2</div>
            <time>1</time>
          </article>
          <article>
            <time>일</time>
            <div>4</div>
            <time>2</time>
          </article>
        </section>

        <section class="category"></section>
      </main>
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
    Category();
  }
  export default MainPage;