import { useHistory } from "react-router-dom"

function Laundromat() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Arrive at Laundromat</h1>
            <img src="placeholder"></img>
            <p>You arrive at the laundromat and go to put you're laundry in when you see a strange light 
                coming from inside the machine.
            </p>
            <br></br>
            <button onClick={()=>handleClick("/laundromatmachine")}>Investigate Machine</button>
            <button onClick={()=>handleClick("/laundromatclothes")}>Ignore and Start Washing</button>

        </div>
    )
}

export default Laundromat