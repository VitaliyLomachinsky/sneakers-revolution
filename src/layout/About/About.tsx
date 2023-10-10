
//pages
import Pay_order from "./About_pages/Pay_order";
import Return_and_exchange from "./About_pages/Return_and_exchange";
import User_agreement from "./About_pages/User_agreement";
import Worldwide from "./About_pages/Worldwide";


const About = () => {
    return <div className="about">
        <div className="about_main">
            <Worldwide/>


        </div>
        <div className="about_side-menu">
            <h3 className="about_side-menu_title">In this section</h3>
            <ul className="about_side-menu_list">
                <li className="about_side-menu_list_item">How can I pay for the order?</li>
                <li className="about_side-menu_list_item">User agreement</li>
                <li className="about_side-menu_list_item about_side-menu_list_item_active">Is it possible to order goods with delivery to another country?</li>
                <li className="about_side-menu_list_item">Return and exchange conditions</li>

            </ul>
            <div className="about_main_help">
                <div className="about_main_help_text">Still need our help?</div>
                <button className="about_main_help_btn">Contact us</button>
            </div>
        </div>
    </div>
}

export default About;