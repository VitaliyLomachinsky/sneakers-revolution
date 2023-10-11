import { BsFillBasketFill, BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Header = () => {


    return <header className="header">
        <Link to="/"><h1 className="header_title">Sneakers-Revolution</h1></Link>
        <ul className="header_navigate">
            <Link to="/catalog"><li>Catalog</li></Link>
            <Link to="/new_release"> <li>Release</li></Link>
            <Link to="/contact"> <li>Contact</li></Link>
            <Link to="/about"> <li className="active_header_navigate">About</li></Link>
        </ul>

        <div className="header_search-and-basket">
            <BsSearch className="header_search-and-basket_search"></BsSearch>
            <BsFillBasketFill className="header_search-and-basket_basket"></BsFillBasketFill>
        </div>
    </header>
}

export default Header;