import Router from "./components/router";

function App($container) {
  this.$container = $container;
  new Router($container);
}
export default App;
