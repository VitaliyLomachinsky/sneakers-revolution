import Basket_item from "./Basket_item";

const Basket_Side_menu = () => {
    return <div>
        <h2 className="basket_title">Shopping Cart</h2>
        <div className="basket_items">
            <Basket_item />
            <Basket_item />
            <Basket_item />
        </div>
    </div>
}

export default Basket_Side_menu;