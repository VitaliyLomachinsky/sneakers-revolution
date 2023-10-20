import Main from "./Components/Main/Main";
import Side_filters from "./Components/Main/Side_filters";
import Top_menu from "./Components/Top_menu/Top_menu";
import { LuListFilter } from "react-icons/lu";

const Catalog = () => {
  return (
    <div className="catalog">
      <h1 className="catalog_title">Sneakers</h1>
      <Top_menu />
      <div className="catalog_main">
        <Side_filters />
        <Main />
        <button className="open_filter">
          <LuListFilter />
          <span>FILTER</span>
        </button>
      </div>
    </div>
  );
};

export default Catalog;
