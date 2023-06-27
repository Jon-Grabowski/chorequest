import { useHistory } from "react-router-dom"

function GranMonsterWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>You Resolved Your Conflict With the Monster</h1>
            <img src="placeholder"></img>
            <p>Unfortunately this path does not lead to Grandma's house. Backtrack to the fork in the path.</p>
            <br></br>
            <button onClick={()=>handleClick("/grandma")}>Back to Fork</button>

        </div>
    )
}

export default GranMonsterWin