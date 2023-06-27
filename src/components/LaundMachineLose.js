import { useHistory } from "react-router-dom"

function LaundMachineLose() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Incorrect Riddle Answer</h1>
            <img src="placeholder"></img>
            <p>Now you must spend the rest of the day doing the monsters laundry!</p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Try Again?</button>

        </div>
    )
}

export default LaundMachineLose