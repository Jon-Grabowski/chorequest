import { useHistory } from "react-router-dom"

function LaundMachineWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Correct Riddle Answer</h1>
            <img src="placeholder"></img>
            <p>You solved the riddle! Now the monster will finish washing your clothes while you go back home to relax.</p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Go Home</button>

        </div>
    )
}

export default LaundMachineWin