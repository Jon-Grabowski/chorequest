import { useHistory } from "react-router-dom"

function LaundClothesLoseB(){
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }
    return( 
        <div className="story-page">
            <h1>Oh no, that was the wrong detergent!</h1>
            <img src="placeholder"></img>
            <p>These clothes are far from being clean enough to wear.</p>
            <br></br>
            <button onClick={()=>handleClick("/laundromat")}>Re-wash Clothes</button>
        </div>
    )
}
export default LaundClothesLoseB