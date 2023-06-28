import { useHistory } from "react-router-dom"

function Grandma() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>You Come to a Fork in the Road</h1>
            <img src="https://images.unsplash.com/photo-1609126808708-17b84d5a61c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                 alt="fork in the woods"
                 style={{height: "40%", width: "40%"}}></img>
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