import { useHistory } from "react-router-dom"

function Grandma() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>You Come to a Fork in the Road</h1>
            <img src="placeholder"></img>
            <p>Story Content Goes Here</p>
            <br></br>
            <button onClick={()=>handleClick("/leftpath")}>Take Left Path</button>
            <button onClick={()=>handleClick("/rightpath")}>Take Right Path</button>

        </div>
    )
}

export default Grandma