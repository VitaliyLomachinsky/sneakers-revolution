import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Basket_total from "./Components/Basket_total";
import Basket_Side_menu from "./Components/Basket_Side-menu";

const Basket = () => {
  const [basketShow, setBasketShow] = useState(true);
  const [isHide, setIsHide] = useState(true);
  const [isHideSideBar, setIsHideSideBar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isHide) {
        setIsHideSideBar(!isHideSideBar);
      }
    }, 600);
    setTimeout(() => {
      if (isHide == false) {
        setBasketShow(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [isHide]);

  return basketShow ? (
    <div className="basket">
      <div
        className={`basket_side-menu${isHideSideBar ? "" : " basket_side-menu_hide"
          }`}
      >
        <Basket_Side_menu />
        <div className={`basket_close-btn ${isHide ? "" : " close-btn_hide"}`}>
          <AiOutlineClose
            className="basket_close-btn_icon"
            onClick={() => setIsHide(!isHide)}
          ></AiOutlineClose>
        </div>
        <div
          className={`basket_total ${isHide ? "" : " basket_total_hide"}`}
        ><Basket_total /></div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Basket;
