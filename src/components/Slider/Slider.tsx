import { Children, cloneElement, useEffect, useState } from "react";
import "./Slider.scss";


const Slider = ({ children }: any) => {
    const [pages, setPages] = useState([]);
    const PAGE_WIDTH: string = "450";

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        heigh: '100%',
                        minWidth: '100%',
                        maxWidth: '100%',
                    },
                })
            }))
    }, [])

    return <div className="slider_wrapper">
        <button className="slider_btn">--0</button>
        <div className="slider-container">
            <div className="slider-window">
                <div className="all-pages-container">
                    {pages}
                </div>
            </div>
        </div>
        <button className="slider_btn">0--</button>
    </div>
}

export default Slider;