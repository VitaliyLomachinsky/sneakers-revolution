import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";


const Basket = (props: { enable: boolean }) => {

    const [state, setState] = useState(false);

    useEffect(() => {
        state ?
            document.body.style.overflow = "scroll" :
            document.body.style.overflow = "hidden";
    }, [state]);

    return (
        <div className="basket">
            {/* {props.enable ? <div>On</div> : <div>Off</div>} */}
            <div className={state ?
                "basket_side-menu basket_side-menu-outside" :
                "basket_side-menu "}>
                <div className={state ?
                    "basket_side-menu_close-btn basket_side-menu_close-btn_outsise" :
                    "basket_side-menu_close-btn"}>
                    <AiOutlineClose className="basket_side-menu_close-btn_icon" onClick={() => setState(!state)}></AiOutlineClose>
                </div>
                <h2 className="basket_side-menu_title">Basket:</h2>
            </div>
        </div>
    )

}

export default Basket;