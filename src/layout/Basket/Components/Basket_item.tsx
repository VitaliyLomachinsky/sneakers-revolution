import { AiOutlineClose } from "react-icons/ai";

const Basket_item = () => {
    return <div className="basket_item">
        <div className="basket_item_img">
            <img></img>
        </div>
        <div className="basket_item_text">
            <h3 className="basket_item_title">Nike air max 97 blue</h3>
            <p className="basket_item_subtitle">Size 43</p>
            <div className="basket_item_price-box">
                <div className="basket_item_price">$ 250</div>
                <div className="basket_item_quantity">
                    <div>+</div>
                    <span>1</span>
                    <div>+</div>
                </div>
                <div className="basket_item_remove"><AiOutlineClose></AiOutlineClose></div>
            </div>
            <div className="basket_item_favorites">Move to Favorites</div>
        </div>

    </div>
}

export default Basket_item;