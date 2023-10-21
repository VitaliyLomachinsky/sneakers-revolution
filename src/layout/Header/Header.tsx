import { BsFillBasketFill, BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

import Search_and_basket from "./Components/Search_and_basket";


const Header = () => {


    return <header className="header">
        <Link to="/"><h1 className="header_title">Sneakers-Revolution</h1></Link>
        <ul className="header_navigate">
            <Link to="/catalog"><li>Catalog</li></Link>
            <Link to="/new_release"> <li>Release</li></Link>
            <Link to="/contact"> <li>Contact</li></Link>
            <Link to="/about"> <li className="active_header_navigate">About</li></Link>
        </ul>
        <Search_and_basket />
    </header>
}

export default Header;