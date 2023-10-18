import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Top_menu_sorts = () => {
  const P_L = "price lowest";
  const P_H = "price highest";
  const POPULAR = "popular";
  const NEWEST = "newest";

  const [dropdown_open, setDropDownOpen] = useState(false);
  const [dropdown_value, setDropDownValue] = useState(NEWEST);

  const change_value = (value: string) => {
    setDropDownOpen(false);
    setDropDownValue(value);
  };
  return (
    <div className="top-menu_sorts">
      <div className="top_menu_sort">Sort By:</div>
      <div
        className="top_menu_sort sort_by"
        onClick={() => setDropDownOpen(!dropdown_open)}
      >
        {dropdown_value}
        <BiChevronDown className="up_down_icon"></BiChevronDown>
      </div>
      <div className={dropdown_open ? "dropdown" : "dropdown display_none"}>
        <ul>
          <li
            onClick={() => change_value(P_L)}
            className={dropdown_value == P_L ? "active_sort" : ""}
          >
            price lowest
          </li>
          <li
            onClick={() => change_value(P_H)}
            className={dropdown_value == P_H ? "active_sort" : ""}
          >
            price highest
          </li>
          <li
            onClick={() => change_value(POPULAR)}
            className={dropdown_value == POPULAR ? "active_sort" : ""}
          >
            popular
          </li>
          <li
            onClick={() => change_value(NEWEST)}
            className={dropdown_value == NEWEST ? "active_sort" : ""}
          >
            newest
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top_menu_sorts;
