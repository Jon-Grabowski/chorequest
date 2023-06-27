import { useHistory } from "react-router-dom"

function GranToiletLose() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>That Didn't Work!</h1>
            <img src="placeholder"></img>
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