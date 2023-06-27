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
            <p>You begin your walk to Grandma's but the usual route you take is closed for maintenance, 
                forcing you to take a back way you rarely venture through. Following the alternate route, 
                you find yourself walking down a narrow, winding path enveloped by a dense forest. 
                The air feels cooler here, and a sense of adventure tingles in your veins. 
                As you continue along the path, you reach a fork in the road, splitting into two distinct directions.
                Which path will you take? 
            </p>
            <br></br>
            <button onClick={()=>handleClick("/leftpath")}>Take Left Path</button>
            <button onClick={()=>handleClick("/rightpath")}>Take Right Path</button>

        </div>
    )
}

export default Grandma