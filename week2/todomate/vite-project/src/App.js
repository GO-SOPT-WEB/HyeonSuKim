import MainPage from "./pages/main";
import Error404 from "./pages/error404";
import MyCategory from "./pages/mycategory";

const BASE_URL = "http://127.0.0.1/:5173";
const ROUTE_LIST = [{ path: "/", element: MainPage }, { path: "/mycategory", element: MyCategory }];

function App($container) {
  this.$container = $container;
  let currentPage = undefined;

  const init = () => {
    const findMatchedRoute = () =>
      ROUTE_LIST.find((route) => route.path === location.pathname);

    const route = () => {
      currentPage = null;
      const TargetPage = findMatchedRoute()?.element || Error404;
      currentPage = new TargetPage(this.$container);
    };

    route();
  };
  init();
}
export default App;