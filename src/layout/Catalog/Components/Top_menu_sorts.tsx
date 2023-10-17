import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Top_menu_sorts = () => {
  let active_sort = "";
  return (
    <div className="top-menu_sorts">
      <div className="top_menu_sort">Sort By:</div>
      <div className="top_menu_sort sort_by">
        RECOMENDED
        <BiChevronDown className="up_down_icon"></BiChevronDown>
      </div>
      <div className="dropdown">
        <ul>
          <li>price lowest</li>
          <li>price highest</li>
          <li>popular</li>
          <li>newest</li>
        </ul>
      </div>
    </div>
  );
};

export default Top_menu_sorts;
