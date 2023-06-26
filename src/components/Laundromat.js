import { useHistory } from "react-router-dom"

function Laundromat() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>First Landromat Page</h1>
            <img src="placeholder"></img>
            <p>Story Content Goes Here</p>
            <br></br>
            <button onClick={()=>handleClick("/laundromatmachine")}>Investigate Machine</button>
            <button onClick={()=>handleClick("/laundromatclothes")}>Start Washing Clothes</button>

        </div>
    )
}

export default Laundromat