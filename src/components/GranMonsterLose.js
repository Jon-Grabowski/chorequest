import { useHistory } from "react-router-dom"

function GranMonsterLose() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>The Monster Has Defeated You!</h1>
            <img src="placeholder"></img>
            <p>
                Summoning every ounce of bravery within you, you decide to confront the creature head-on, 
                determined to prove your strength and make it to Grandmas. However, as you engage in battle, you quickly 
                realize that the monster possesses incredible power and skill beyond your wildest imagination. 
                Despite your valiant efforts, the monster overwhelms you with its ferocious attacks, 
                leaving you exhausted and defeated.
            </p>
            <p>Game Over</p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Try Again?</button>

        </div>
    )
}

export default GranMonsterLose