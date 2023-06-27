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
            <p>You put your laundry in the machine and grab the detergent. How much will you use?</p>
            <br></br>
            <button onClick={()=>handleClick("/laundclothes1")}>Right Amount</button>
            <button onClick={()=>handleClick("/laundclothes2")}>Wrong Amount</button>

        </div>
    )
}

export default LaundClothes