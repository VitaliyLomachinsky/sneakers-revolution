
const Basket_total = () => {
    return <div className="basket_total_inner">
        <h2 className="basket_title">Order Summary</h2>
        <div className="basket_promo_wrapper">
            <input type="text" placeholder="Enter promo code / Gift certificate" className="basket_promo"></input>
        </div>
        <div className="basket_rows">
            <div className="basket_rows_title"></div>
            <div className="basket_rows_value"></div>
        </div>

    </div>
}

export default Basket_total;