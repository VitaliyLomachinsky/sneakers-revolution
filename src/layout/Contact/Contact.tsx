import { Link } from 'react-router-dom';

const Contact = () => {
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
                        For technical issues and general inquiries, please visit our <Link
                            to="about"
                            className="contact_up_lefttext_titleblock_helplink_link"> Help Center.</Link></p>
                </div>
            </div>
            <div className="contact_up_rightform"></div>
        </div>
        <div className="contact_down"></div>
    </div>
}

export default Contact;