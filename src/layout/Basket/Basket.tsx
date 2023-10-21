import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Basket_total from "./Components/Basket_total";
import Basket_Side_menu from "./Components/Basket_Side-menu";
import { useAppSelector, useAppDispatch } from "../../Redux/hook";
import { basket_open } from "../../Redux/Slices/UIReducer";


const Basket = () => {

  //state
  const basket = useAppSelector(state => state.UI.basket);
  const [isHideFirst, setIsHideFirst] = useState(true);
  const [isHideSecond, setIsHideSecond] = useState(true);

  //dispatch
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (basket) {
      setIsHideFirst(false);
      setIsHideSecond(false);
    }
    else {
      setIsHideFirst(true);
      setIsHideSecond(true);
    }
  }, [basket]);

  const close = () => {
    setIsHideFirst(true);
    setTimeout(() => {
      setIsHideSecond(true);
    }, 400);
    setTimeout(() => {
      dispatch(basket_open());
      setIsHideFirst(false);
      setIsHideSecond(false);
    }, 900);

  }

  return basket ? (
    <div className="basket">
      <div
        className={`basket_side-menu${isHideSecond ? " basket_side-menu_hide" : ""
          }`}
      >
        <Basket_Side_menu />
      </div>
      <div className={`basket_close-btn ${isHideFirst ? " close-btn_hide" : ""}`}>
        <AiOutlineClose
          className="basket_close-btn_icon"
          onClick={close}
        ></AiOutlineClose>
      </div>
      <div className={`basket_total ${isHideFirst ? " basket_total_hide" : ""}`}>
        <Basket_total />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Basket;
