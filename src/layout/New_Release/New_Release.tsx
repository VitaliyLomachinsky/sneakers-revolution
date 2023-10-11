import New_Release_Other_Item from "./Component/New_Release_Other_item";


const New_Release = () => {
    return (<div className="new_release">
        <div className="new_release_top">
            <h2 className="new_release_top_title">Official Images Of The Nike Air Footscape Woven “Black/Smoke Grey”</h2>
            <img className="new_release_top_image" src={"https://sneakernews.com/wp-content/uploads/2023/08/nike-air-footscape-woven-black-smoke-grey-sail-fb1959-001-7.jpg"}></img>
            <p className="new_release_top_text">Revealed to be returning at the end of 2022, the pitch-dark Nike Air Footscape Woven has since appeared in official imagery.</p>
            <p className="new_release_top_text">A revolutionary staple within the brand’s mid-90s rotation,
                the ergonomic design now pairs its woven tooling with faux fur
                detailing. As one of two upcoming ensembles, the latter is starkly
                different in its use of a darkened palette. Muted grey shades fill
                the cross-stitched panels that flow through the mid-foot of the
                silhoeutte while simultaneously treating the diagonal laces and logos.
                Elsewhere, the faux cow hide consumes the remaining upper real estate
                in jet-black tones whereas the midsole shines in a complimentary “Sail”
                treatment.
            </p>
            <p className="new_release_top_text">Enjoy a detailed look at the pair below as we await further release details in the meantime.</p>
            <p className="new_release_top_text">In other news from the Beaverton brand, check out Nike Calm Mule.</p>
        </div>
        <h2 className="new_release_title-other">Other release:</h2>
        <div className="new_release_other">
            <New_Release_Other_Item />
            <New_Release_Other_Item />
            <New_Release_Other_Item />

        </div>
    </div>)
}

export default New_Release;