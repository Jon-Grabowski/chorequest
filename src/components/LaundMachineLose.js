import { useHistory } from "react-router-dom"

function LaundMachineLose() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Incorrect Riddle Answer</h1>
            <img src="https://adimesaved.com/wp-content/uploads/2023/02/A-Dime-Saved-35.png"
                alt="overwhelmed laundry"
                style={{height: "50%", width: "50%"}}></img>
            <p>
                As you confidently offer your response to the monster's riddle, the creature's expression 
                changes, revealing a mischievous grin. It shakes its head in mock disappointment.
            </p>
            <p>
                "Ah, traveler, you've missed the mark," the monster chuckles. "But you know what? I'm actually 
                glad you got it wrong! I didn't feel like doing my own laundry anyway! Haha!"
            </p>
            <p>
                You Lose, the rest of your Sunday will be spent doing monster laundry.
            </p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Try Again?</button>

        </div>
    )
}

export default LaundMachineLose