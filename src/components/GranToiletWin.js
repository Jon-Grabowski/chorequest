import { useHistory } from "react-router-dom"

function GranToiletWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>You Fixed the Toilet!</h1>
            <img src="placeholder"></img>
            <p>Now you can go home and finally relax!</p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Go Home</button>

        </div>
    )
}

export default GranToiletWin