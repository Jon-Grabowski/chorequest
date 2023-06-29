import { useHistory } from "react-router-dom"
import { useState } from "react";

function GranRightPath() {
    const plungerImg = "https://t4.ftcdn.net/jpg/00/75/04/79/360_F_75047989_poekIAI4agytSFfGKaesKrjRBrwpgY3M.jpg"
    const wrenchImg = "https://t3.ftcdn.net/jpg/01/03/87/36/360_F_103873646_acYv3NQznfluJTr4gvRboGgwbG59mX1C.jpg"
    const hammerImg = "https://media.istockphoto.com/id/922743600/vector/hammer_isolated_on_white.jpg?s=612x612&w=0&k=20&c=9GMFCBmqDjIXxPVyzz4YGFgtOBiMKWbw6XGTCf6b5qE="
    const sawImg = "https://media.istockphoto.com/id/692135778/es/vector/sierra-de-mano-icono.jpg?s=612x612&w=0&k=20&c=eNngGo8A6VqT5iKurCEigFjYtAYwf3QgAzS3PPMkpm8="

    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const toolboxTarget = e.target.toolbox
        if (toolboxTarget[0].checked && toolboxTarget[2].checked && !toolboxTarget[1].checked && !toolboxTarget[3].checked)  {
            handleClick("/rightpath1")
        } else {
            handleClick("/rightpath2")
        }
    }

    const [plunger,setPlunger] = useState(false);
    const [hammer, setHammer] = useState(false);
    const [wrench, setWrench] = useState(false);
    const [saw, setSaw] = useState(false);

    const greenBorder = {border: '10px solid green'}
    const noBorder = {border: ''}

    function handlePlunger() {
        setPlunger(!plunger);
    }

    function handleHammer() {
        setHammer(!hammer);
    }

    function handleWrench() {
        setWrench(!wrench);
    }

    function handleSaw() {
        setSaw(!saw);
    }

    return (
        <div className="story-page">
            <h1>You Made it to Grandma's House</h1>
            <img src="https://images.unsplash.com/photo-1515126610754-a10f0df8fd3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Grandma's House"
                style={{height: "25%", width: "25%"}}></img>
            <p>
                After a while, the dense foliage begins to clear, revealing a quaint cottage nestled amidst a 
                picturesque meadow. You've stumbled upon your grandma's hidden abode. Determined to be of assistance, 
                you scan the room for the necessary tools to fix the toilet. Several items catch your eye, 
                each potentially useful in resolving the plumbing issue. Choose wisely to ensure success.
                </p>
                <p className="story-questions">Which tools with you use?</p>
            <br></br>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Choose Your Answer</legend>
                    <div id="tool-select">
                        <input type="checkbox" id="tool-answer-1" name="toolbox" value="correct1"></input>
                        <label htmlFor="tool-answer-1"><img style={plunger ? greenBorder : noBorder } onClick={handlePlunger} src={plungerImg}/></label>
                        <input type="checkbox" id="tool-answer-2" name="toolbox" value="wrong1"></input>
                        <label className="tool-checked" htmlFor="tool-answer-2"><img style={hammer ? greenBorder : noBorder } onClick={handleHammer} src={hammerImg}/></label>
                        <input type="checkbox" id="tool-answer-3" name="toolbox" value="correct2"></input>
                        <label className="tool-checked" htmlFor="tool-answer-3"><img style={wrench ? greenBorder : noBorder } onClick={handleWrench} src={wrenchImg}/></label>
                        <input type="checkbox" id="tool-answer-4" name="toolbox" value="wrong2"></input>
                        <label className="tool-checked" htmlFor="tool-answer-4"><img style={saw ? greenBorder : noBorder } onClick={handleSaw} src={sawImg}/></label>
                    </div>
                    <div>
                        <button type="submit">Start Fixing!</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default GranRightPath