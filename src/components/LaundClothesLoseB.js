import { useHistory } from "react-router-dom"

function LaundClothesLoseB(){
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }
    return( 
        <div className="story-page">
            <h1>Clothes Not Clean!</h1>
            <img src="placeholder"></img>
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