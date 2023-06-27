import { useHistory } from "react-router-dom"

function GranMonsterLose({randomMonster}) {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>The Monster Has Defeated You!</h1>
            <img src={randomMonster.image}></img>
            <p>Story Content Goes Here</p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Try Again?</button>

        </div>
    )
}

export default GranMonsterLose