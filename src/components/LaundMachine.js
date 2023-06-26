import { useHistory } from "react-router-dom"

function LaundMachine() {
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
            <button onClick={()=>handleClick("/laundmachine1")}>Win</button>
            <button onClick={()=>handleClick("/laundmachine2")}>Lose</button>

        </div>
    )
}

export default LaundMachine