import { useHistory } from "react-router-dom"

function LaundClothesWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Correct Detergent Amount</h1>
            <img src="placeholder"></img>
            <p>Clothes are washed, time to go home and relax!</p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Back Home</button>

        </div>
    )
}

export default LaundClothesWin