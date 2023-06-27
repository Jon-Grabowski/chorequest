import { useHistory } from "react-router-dom"

function LaundMachine() {
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
    
    return (
        <div className="story-page">
            <h1>Inside Laundry Machine</h1>
            <img src="placeholder"></img>
            <p>Go through portal and encounter a monster. Monster asks you a riddle.</p>
            <br></br>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Choose Your Answer</legend>
                    <div>
                        <input type="radio" id="riddle-answer-1" name="riddle" value="wrong"></input>
                        <label for="riddle-answer-1">Wrong Answer 1</label>
                        <input type="radio" id="riddle-answer-2" name="riddle" value="wrong"></input>
                        <label for="riddle-answer-1">Wrong Answer 2</label>
                        <input type="radio" id="riddle-answer-3" name="riddle" value="wrong"></input>
                        <label for="riddle-answer-1">Wrong Answer 3</label>
                        <input type="radio" id="riddle-answer-1" name="riddle" value="correct"></input>
                        <label for="riddle-answer-1">Correct Answer</label>
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

