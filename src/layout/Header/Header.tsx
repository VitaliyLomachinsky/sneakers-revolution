import { BsFillBasketFill, BsSearch } from "react-icons/bs";
import Search from "../../components/Search";

const Header = () => {

    return <header className="header">
        <h1 className="header_title">Sneakers-Revolution</h1>
        <ul className="header_navigate">
            <li>Catalog</li>
            <li>Relese</li>
            <li>Contact</li>
            <li className="active_header_navigate">About</li>
        </ul>

        <div className="header_search-and-basket">
            <BsSearch className="header_search-and-basket_search"></BsSearch>
            <BsFillBasketFill className="header_search-and-basket_basket"></BsFillBasketFill>
        </div>
    </header>
}

export default Header;