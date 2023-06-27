import { useHistory } from "react-router-dom"

function GranRightPath() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>You Made it to Grandma's House</h1>
            <img src="placeholder"></img>
            <p>Help Grandma fix her toilet. Pick the correct set of tools to fix it.</p>
            <br></br>
            <button onClick={()=>handleClick("/rightpath1")}>Win</button>
            <button onClick={()=>handleClick("/rightpath2")}>Lose</button>

        </div>
    )
}

export default GranRightPath