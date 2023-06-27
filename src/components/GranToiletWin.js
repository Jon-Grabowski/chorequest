import { useHistory } from "react-router-dom"

function GranToiletWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>You Fixed the Toilet!</h1>
            <img src="placeholder"></img>
            <p>
                Success, you selected the correct tools to fix your grandma's 
                broken toilet! With a plunger in hand to address any clogs and an adjustable wrench to tighten any loose 
                fittings, you skillfully maneuver through the necessary repairs. After a few moments of focused work, 
                the sound of running water signals that the issue has been resolved!</p>
                <p>
                As you arrive at your own abode, a sense of accomplishment washes over you. The chores and unexpected 
                detours have made this a memorable and eventful day. Now, it's time to indulge in the well-deserved 
                relaxation you've been craving.
                </p>
                <h2>Congratulations, you won!</h2>
            <br></br>
            <button onClick={()=>handleClick("/")}>Go Home</button>

        </div>
    )
}

export default GranToiletWin