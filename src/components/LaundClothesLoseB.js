import { useHistory } from "react-router-dom"

function LaundClothesLoseB(){
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }
    return( 
        <div className="story-page">
            <h1>Clothes Not Clean!</h1>
            <img src="https://cdn.shopify.com/s/files/1/0400/5484/9696/articles/BC_Why-My-Laundry-Doesnt-Smell-Fresh-01_1200x460_crop_center.png?v=1660564398"
                alt="smelly-laundry"
                style={{height:"50%" , width: "50%"}}></img>
            <p>
                Unfortunately, the detergent you chose turns out to be weaker than expected, failing to effectively 
                clean your clothes. As you retrieve your laundry from the washing machine, you notice lingering stains 
                and a lack of the desired freshness. It's clear that a different detergent is needed to achieve the 
                desired results.
            </p>
            <br></br>
            <button onClick={()=>handleClick("/laundromatclothes")}>Re-wash Clothes</button>
        </div>
    )
}
export default LaundClothesLoseB