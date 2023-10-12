import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

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
    }, 1150);
    return () => clearTimeout(timer);
  }, [isHide]);

  return basketShow ? (
    <div className="basket">
      <div
        className={`basket_side-menu${
          isHideSideBar ? "" : " basket_side-menu_hide"
        }`}
      >
        <div className={`basket_close-btn ${isHide ? "" : " close-btn_hide"}`}>
          <AiOutlineClose
            className="basket_close-btn_icon"
            onClick={() => setIsHide(!isHide)}
          ></AiOutlineClose>
        </div>
        <div
          className={`basket_total ${isHide ? "" : " basket_total_hide"}`}
        ></div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Basket;
