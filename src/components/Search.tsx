import { useAppDispatch, useAppSelector } from "../Redux/hook";

const Search = () => {
    const search_open = useAppSelector(state => state.UI.search);
    const dispatch = useAppDispatch();

    return search_open ? <div className="search">

        <div className="search_inner">
            <input type="search" className="search_inner_input"></input>
            <button className="search_inner_search-btn">Search</button>
        </div>
    </div> : <></>
}

export default Search;