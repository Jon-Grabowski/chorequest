import { useHistory } from "react-router-dom"

function LaundMachine({monsters}) {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if(e.target.riddle.value === "correct") {
            handleClick("/laundmachine1")
        } else {
            handleClick("/laundmachine2")
        }
    }

    const totalMonsters = monsters.length;
    const randomIndex = Math.floor(Math.random() * (totalMonsters + 1));
    const randomMonster = monsters[randomIndex];
    console.log(randomIndex);
    
    return (
        <div className="story-page">
            <h1>Inside Laundry Machine</h1>
            <img src={randomMonster.image}></img>
            <h2>{randomMonster.name} has a riddle for you!</h2>
            <p>--- Riddle placeholder ---</p>
            <br></br>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Choose Your Answer</legend>
                    <div>
                        <input type="radio" id="riddle-answer-1" name="riddle" value="wrong"></input>
                        <label htmlFor="riddle-answer-1">Wrong Answer 1</label>
                        <input type="radio" id="riddle-answer-2" name="riddle" value="wrong"></input>
                        <label htmlFor="riddle-answer-1">Wrong Answer 2</label>
                        <input type="radio" id="riddle-answer-3" name="riddle" value="wrong"></input>
                        <label htmlFor="riddle-answer-1">Wrong Answer 3</label>
                        <input type="radio" id="riddle-answer-4" name="riddle" value="correct"></input>
                        <label htmlFor="riddle-answer-1">Correct Answer</label>
                    </div>
                    <div>
                        <button type="submit">Submit Answer</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default LaundMachine

