import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Contact_form from './Contact_form';

const Contact = () => {

    let navigate = useNavigate();

    return <div className="contact">
        <div className="contact_up">
            <div className="contact_up_lefttext">
                <div className="contact_up_lefttext_titleblock">
                    <h2 className="contact_up_lefttext_titleblock_title">Contact our sales team</h2>
                    <p className="contact_up_lefttext_titleblock_subtitle">We're happy to answer questions and get you acquainted with Sneakers-revolution.</p>
                    <ul className="contact_up_lefttext_titleblock_list" >
                        <li className="contact_up_lefttext_titleblock_list_item" >
                            Get pricing information</li>
                        <li className="contact_up_lefttext_titleblock_list_item">
                            Explore use cases for your team</li>
                        <li className="contact_up_lefttext_titleblock_list_item">
                            Learn how to increase team productivity</li>
                    </ul>
                    <p className="contact_up_lefttext_titleblock_helplink">
                        For technical issues and general inquiries, please visit our  {" "}
                        <a
                            onClick={() => navigate("../about")}
                            className="contact_up_lefttext_titleblock_helplink_link">
                            Help Center.
                        </a>
                    </p>
                    <div className='contact_up_lefttext_titleblock_bottom'>
                        <h4>For commercial offers write a letter to the mail:</h4>

                        <span>sneakers_revolution@gmail.com</span>
                    </div>

                </div>
            </div>
            <div className="contact_up_rightform">
                <Contact_form />
            </div>
        </div>
        <div className="contact_down"></div>
    </div>
}

export default Contact;