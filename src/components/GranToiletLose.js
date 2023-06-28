import { useHistory } from "react-router-dom"

function GranToiletLose() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>That Didn't Work!</h1>
            <img src="https://images.unsplash.com/photo-1580401410158-1f0b0a406762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1613&q=80"
                alt="toilet tools"
                style={{height: "40%", width: "40%"}}></img>
            <p>
                Unfortunately, the tools you picked were not the right ones to fix the broken toilet! 
                As you attempt to use them, you realize they are ill-suited for the job. 
                The situation calls for a different approach, requiring a careful reassessment of the available tools.</p>
            <br></br>
            <button onClick={()=>handleClick("/rightpath")}>Pick Different Tools</button>

        </div>
    )
}

export default GranToiletLose