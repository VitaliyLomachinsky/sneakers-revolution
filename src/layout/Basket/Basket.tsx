import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";


const Basket = (props: { enable: boolean }) => {
    const [state, setState] = useState(true);


    useEffect(() => {
        setState(props.enable);
        state ?
            document.body.style.overflow = "hidden" :
            document.body.style.overflow = "";
    }, [state]);

    return (
        state ? <div className="basket">
            <div className={state ?
                "basket_side-menu " :
                "basket_side-menu basket_side-menu-outside"
            }>
                <div className={state ?
                    "basket_side-menu_close-btn"
                    : "basket_side-menu_close-btn basket_side-menu_close-btn_outsise"
                }>
                    <AiOutlineClose className="basket_side-menu_close-btn_icon" onClick={() => setState(!state)}></AiOutlineClose>
                </div>
                <h2 className="basket_side-menu_title">Basket:</h2>
            </div>
        </div> :
            <></>
    )

}

export default Basket;