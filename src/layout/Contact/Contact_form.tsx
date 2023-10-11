import { useNavigate } from "react-router-dom";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

const Contact_form = () => {

    let navigate = useNavigate();

    return (
        <form className="contact_up_rightform_form">

            <div className="contact_up_rightform_form_row">
                <label>Name</label>
                <input type="text"></input>
            </div>
            <div className="contact_up_rightform_form_row">
                <label>SurName</label>
                <input></input>
            </div>
            <div className="contact_up_rightform_form_row">
                <label>Email</label>

                <input></input>
            </div>
            <div className="contact_up_rightform_form_row">
                <label>Country</label>
                <input></input>
            </div>
            <div className="contact_up_rightform_form_row">
                <label>Phone number</label>
                <input></input>
            </div>
            <div className="contact_up_rightform_form_row">
                <label>Your Problem:</label>
                <textarea ></textarea>
            </div>
            <div className="contact_up_rightform_form_row contact_up_rightform_form_clear-text "><p>You confirm that you
                agree to the processing of your personal
                data by Salesforce as described in the <a onClick={() => navigate("../about")}>Privacy Statement.</a></p></div>
            <div className="contact_up_rightform_form_row contact_up_rightform_form_checkboxarea">
                <ImCheckboxUnchecked className="contact_up_rightform_form_checkboxarea_icon"></ImCheckboxUnchecked>
                <span>Yes, I would like to receive marketing communications about the Salesforce family of companies' products, services, and events. I can unsubscribe at any time.</span>
            </div>
            <div className="contact_up_rightform_form_row">
                <div className="contact_up_rightform_form_row_button-container">
                    <button className="contact_up_rightform_form_row_button-container_button">Send</button>
                </div>
            </div>
        </form >)
}

export default Contact_form;