import {useHistory} from "react-router-dom"

function AdventureBegin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <img></img>
            <p>Story Content Goes Here</p>
            <br></br>
            <button onClick={()=>handleClick("/laundromat")}>Go to Laundromat</button>
            <button onClick={()=>handleClick("/grandma")}>Go to Grandma's</button>

        </div>
    )
}

export default AdventureBegin