import { useHistory } from "react-router-dom"

function GranToiletLose() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>That Didn't Work!</h1>
            <img src="placeholder"></img>
            <p>Try again to fix it!</p>
            <br></br>
            <button onClick={()=>handleClick("/rightpath")}>Pick Different Tools</button>

        </div>
    )
}

export default GranToiletLose