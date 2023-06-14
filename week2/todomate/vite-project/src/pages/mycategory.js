import Category from "../components/Category";

function MyCategory($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = `
      <div>
      mycategory
    </div>`;
  };
  this.render();
}
export default MyCategory;
