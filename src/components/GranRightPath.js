import { useHistory } from "react-router-dom"

function GranRightPath() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
    }

    return (
        <div className="story-page">
            <h1>You Made it to Grandma's House</h1>
            <img src="placeholder"></img>
            <p>Help Grandma fix her toilet. Pick the correct set of tools to fix it.</p>
            <br></br>
            <button onClick={()=>handleClick("/rightpath1")}>Win</button>
            <button onClick={()=>handleClick("/rightpath2")}>Lose</button>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Choose Your Answer</legend>
                    <div>
                        <input type="checkbox" id="riddle-answer-1" name="toolbox" value="wrong"></input>
                        <label for="riddle-answer-1">Wrong Answer 1</label>
                        <input type="checkbox" id="riddle-answer-2" name="toolbox" value="wrong"></input>
                        <label for="riddle-answer-1">Wrong Answer 2</label>
                        <input type="checkbox" id="riddle-answer-3" name="toolbox" value="wrong"></input>
                        <label for="riddle-answer-1">Wrong Answer 3</label>
                        <input type="checkbox" id="riddle-answer-1" name="toolbox" value="correct"></input>
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

export default GranRightPath