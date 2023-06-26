import { useHistory } from "react-router-dom"

function LaundMachineWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Landromat Win Page</h1>
            <img src="placeholder"></img>
            <p>Story Content Goes Here</p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Go Back Home</button>

        </div>
    )
}

export default LaundMachineWin