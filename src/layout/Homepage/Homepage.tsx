import Slider from "../../components/Slider/Slider";

const Homepage = () => {
    return <div className="homepage">
        <h2>Homepage</h2>
        <Slider>
            <div className="slider slider_1">Slider 1</div>
            <div className="slider slider_2">Slider 2</div>
            <div className="slider slider_3">Slider 3</div>
        </Slider>
    </div>
}

export default Homepage;