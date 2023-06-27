import { useHistory } from "react-router-dom"

function LaundMachine() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Inside Laundry Machine</h1>
            <img src="placeholder"></img>
            <p>Go through portal and encounter a monster. Monster asks you a riddle.</p>
            <br></br>
            <button onClick={()=>handleClick("/laundmachine1")}>Correct Answer</button>
            <button onClick={()=>handleClick("/laundmachine2")}>Wrong Answer</button>

        </div>
    )
}

export default LaundMachine