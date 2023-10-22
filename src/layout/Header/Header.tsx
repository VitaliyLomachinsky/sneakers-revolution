import { BsFillBasketFill, BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

import Search_and_basket from "./Components/Search_and_basket";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { set_tab } from "../../Redux/Slices/UIReducer";


const Header = () => {

    const tab = useAppSelector((state => state.UI.tab));
    const dispatch = useAppDispatch();


    return <header className="header">
        <Link to="/"><h1 className="header_title">Sneakers-Revolution</h1></Link>
        <ul className="header_navigate">
            <Link to="/catalog"><li
                className={tab == "catalog" ? "active_header_navigate" : ""}
                onClick={() => dispatch(set_tab("catalog"))}>Catalog</li></Link>
            <Link to="/new_release"> <li
                className={tab == "relese" ? "active_header_navigate" : ""}
                onClick={() => dispatch(set_tab("relese"))}>Release</li></Link>
            <Link to="/contact"> <li
                className={tab == "contact" ? "active_header_navigate" : ""}
                onClick={() => dispatch(set_tab("contact"))}>Contact</li></Link>
            <Link to="/about"> <li
                className={tab == "about" ? "active_header_navigate" : ""}
                onClick={() => dispatch(set_tab("about"))}>About</li></Link>
        </ul>
        <Search_and_basket />
    </header>
}

export default Header;