const Basket_total = () => {
  return (
    <div className="basket_total_inner">
      <h2 className="basket_title">Order Summary</h2>
      <div className="basket_promo_wrapper">
        <input
          type="text"
          placeholder="Enter promo code / Gift certificate"
          className="basket_promo"
        ></input>
      </div>

      <table className="basket_table">
        <tr>
          <td>Subtotal</td>
          <td>$430.00</td>
        </tr>
        <tr>
          <td>Estimated Tax</td>
          <td>---</td>
        </tr>
        <tr>
          <td>Estimated Shipping & Handling</td>
          <td>$0.00</td>
        </tr>

        <tr className="table_last_child">
          <td>Total</td>
          <td>$0.00</td>
        </tr>
      </table>

      <div className="basket_checkout">
        <div>
          <button className="basket_checkout-btn">Checkout</button>
        </div>
        <button className="basket_checkout-btn">PayPal</button>
      </div>
    </div>
  );
};

export default Basket_total;
