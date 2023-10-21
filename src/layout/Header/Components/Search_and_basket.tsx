import { BsFillBasketFill, BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { basket_open, search_open } from "../../../Redux/Slices/UIReducer";

const Search_and_basket = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="header_search-and-basket">
            <BsSearch className="header_search-and-basket_search" onClick={() => dispatch(search_open())}></BsSearch>
            <BsFillBasketFill className="header_search-and-basket_basket" onClick={() => dispatch(basket_open())}></BsFillBasketFill>
        </div>
    )
}

export default Search_and_basket;