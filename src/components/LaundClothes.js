import { useHistory } from "react-router-dom"

function LaundClothes({setSudsAmount}) {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Decide How Much Detergent to Use</h1>
            <img src="placeholder"></img>
            <p>Story Content Goes Here</p>
            <br></br>
            <button onClick={()=>handleClick("/laundclothes1")}>Win</button>
            <button onClick={()=>handleClick("/laundclothes2")}>Lose</button>

        </div>
    )
}

export default LaundClothes