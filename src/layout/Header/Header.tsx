import { BsFillBasketFill, BsSearch } from "react-icons/bs";

const Header = () => {
    return <div className="header">
        <h1 className="header_title">Sneakers-Revolution</h1>
        <ul className="header_navigate">
            <li>Catalog</li>
            <li>Relese</li>
            <li className="active_header_navigate">Contact</li>
            <li>About</li>
        </ul>

        <div className="header_search-and-basket">
            <BsSearch className="header_search-and-basket_search"></BsSearch>
            <BsFillBasketFill className="header_search-and-basket_basket"></BsFillBasketFill>
        </div>
    </div>
}

export default Header;