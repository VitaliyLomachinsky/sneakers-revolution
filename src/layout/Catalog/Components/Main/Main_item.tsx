import Stars from "../../../../components/Stars";

const Main_item = () => {
  return (
    <div className="item">
      <div className="item_image_block">
        <img src="https://yesoriginal.com.ua/image/cache/catalog/i/ek/lp/4a932ecc4b91f89e7c7fc4b592dce28e-472x497.webp"></img>
      </div>
      <div className="item_content_block">
        <div className="item_title" title="nike">
          Nike Air max 97
        </div>
        <div className="item_subtitle">grey haki</div>

        <a className="item_raiting">
          <Stars stars={3} />
          <p>50 reviews</p>
        </a>
        <div className="item_price-buy">
          <div className="item_price">
            <div className="old_price">
              3489<span className="item_vault_old">$</span>
            </div>
            <div className="new_price">
              2500<span className="item_vault_new">$</span>
            </div>
          </div>
          <div className="item_buy-btn">
            <button>buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main_item;
