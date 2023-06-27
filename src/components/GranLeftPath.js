import { useHistory } from "react-router-dom"

function GranLeftPath() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>You Ran Into a Monster!</h1>
            <img src="placeholder"></img>
            <p>Story Content Goes Here</p>
            <br></br>
            <button onClick={()=>handleClick("/leftpath2")}>Fight Monster</button>
            <button onClick={()=>handleClick("/leftpath1")}>Talk With Monster</button>

        </div>
    )
}

export default GranLeftPath