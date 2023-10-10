import { Children, cloneElement, useEffect, useState } from "react";
import "./Slider.scss";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";


const Slider = ({ children }: any) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffSet] = useState(0);
    const PAGE_WIDTH: number = 1050;

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        heigh: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            }))
    }, [])

    const handleLeftClick = () => {
        setOffSet((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        })

    }
    const handleRightClick = () => {
        setOffSet((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            return Math.max(newOffset, maxOffset);
        })
    }

    return <div className="slider_wrapper">
        <button className="slider_btn" onClick={handleLeftClick}>
            <BiLeftArrowAlt className="slider_btn_icon"></BiLeftArrowAlt>
        </button>
        <div className="slider-container">
            <div className="slider-window">
                <div
                    className="all-pages-container"
                    style={{
                        transform: `translateX(${offset}px)`
                    }}>
                    {pages}
                </div>
            </div>
        </div>
        <button className="slider_btn" onClick={handleRightClick}>
            <BiRightArrowAlt className="slider_btn_icon"></BiRightArrowAlt>
        </button>
    </div>
}

export default Slider;