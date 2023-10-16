import { AiOutlineClose } from "react-icons/ai";

const Basket_item = () => {
  return (
    <div className="basket_item">
      <div className="basket_item_img">
        <img
          src={
            "https://yesoriginal.com.ua/image/cache/catalog/i/ek/lp/4a932ecc4b91f89e7c7fc4b592dce28e-472x497.webp"
          }
        ></img>
      </div>
      <div className="basket_item_text">
        <h3 className="basket_item_title">Nike air max 97 blue</h3>
        <p className="basket_item_subtitle">Size 43</p>
        <div className="basket_item_price-box">
          <div className="basket_item_price">$ 250</div>
          <div className="basket_item_quantity">
            <div>-</div>
            <div>1</div>
            <div>+</div>
          </div>
          <div className="basket_item_remove">
            <AiOutlineClose className="remove_icon"></AiOutlineClose>
          </div>
        </div>
        <div className="basket_item_favorites">Move to Favorites</div>
      </div>
    </div>
  );
};

export default Basket_item;
