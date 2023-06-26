import { useHistory } from "react-router-dom"

function LaundMachineLose() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Landromat Lose Page</h1>
            <img src="placeholder"></img>
            <p>Story Content Goes Here</p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Try Again?</button>

        </div>
    )
}

export default LaundMachineLose