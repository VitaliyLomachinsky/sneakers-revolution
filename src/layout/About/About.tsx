import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

//pages
import Pay_order from "./About_pages/Pay_order";
import Return_and_exchange from "./About_pages/Return_and_exchange";
import User_agreement from "./About_pages/User_agreement";
import Worldwide from "./About_pages/Worldwide";

const About = () => {
  const [activeListItem, setActiveListitem] = useState("user_agreement");
  return (
    <div className="about">
      <div className="about_main">
        {activeListItem == "user_agreement" ? <User_agreement /> : <></>}
        {activeListItem == "pay_order" ? <Pay_order /> : <></>}
        {activeListItem == "worldwide" ? <Worldwide /> : <></>}
        {activeListItem == "return_and_exchange" ? (
          <Return_and_exchange />
        ) : (
          <></>
        )}
      </div>
      <div className="about_side-menu">
        <h3 className="about_side-menu_title">In this section</h3>
        <ul className="about_side-menu_list">
          <li
            className={
              activeListItem == "user_agreement"
                ? "about_side-menu_list_item about_side-menu_list_item_active"
                : "about_side-menu_list_item"
            }
            onClick={() => setActiveListitem("user_agreement")}
          >
            User agreement
          </li>
          <li
            className={
              activeListItem == "pay_order"
                ? "about_side-menu_list_item about_side-menu_list_item_active"
                : "about_side-menu_list_item"
            }
            onClick={() => setActiveListitem("pay_order")}
          >
            How can I pay for the order?
          </li>
          <li
            className={
              activeListItem == "worldwide"
                ? "about_side-menu_list_item about_side-menu_list_item_active"
                : "about_side-menu_list_item"
            }
            onClick={() => setActiveListitem("worldwide")}
          >
            Is it possible to order goods with delivery to another country?
          </li>
          <li
            className={
              activeListItem == "return_and_exchange"
                ? "about_side-menu_list_item about_side-menu_list_item_active"
                : "about_side-menu_list_item"
            }
            onClick={() => setActiveListitem("return_and_exchange")}
          >
            Return and exchange conditions
          </li>
        </ul>
        <div className="about_main_help">
          <div className="about_main_help_text">Still need our help?</div>
          <Link to="/contact">
            <button className="about_main_help_btn">Contact us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
