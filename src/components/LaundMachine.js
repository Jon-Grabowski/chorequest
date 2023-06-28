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
            <h1>Into the Laundry Portal!</h1>
            <img src={randomMonster.image}></img>
            <h2>{randomMonster.name} has a riddle for you!</h2>
            <p>
                Driven by curiosity and an adventurous spirit, you decide to investigate the mysterious light further. 
                Leaning closer to the washing machine, you feel a strange pull—an otherworldly force that seems to 
                draw you in. Without warning, you are suddenly engulfed in a blinding surge of energy, and the world 
                around you dissolves into a whirlwind of colors. As you emerge from the magical portal, you find yourself 
                in an unfamiliar realm. Before you stands a {randomMonster.name}! The {randomMonster.name} speaks, 
                its voice reverberating through the air.
            </p>
            <p>
            "Human," the monster begins, "I offer you a deal. Solve my riddle, and I shall do your laundry, 
            granting you the freedom to return home and relax. However, if you fail, you shall spend the rest of 
            the day doing my laundry as punishment. Are you ready?"
            </p>
            <p>"I have hands, but I don't clap. I'm often dirty, but I don't take a bath. What am I?"</p>
            <br></br>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Choose Your Answer</legend>
                    <div>
                        <input type="radio" id="riddle-answer-1" name="riddle" value="wrong"></input>
                        <label htmlFor="riddle-answer-1">A Broom</label>
                        <input type="radio" id="riddle-answer-2" name="riddle" value="wrong"></input>
                        <label htmlFor="riddle-answer-1">A Laundry Basket</label>
                        <input type="radio" id="riddle-answer-3" name="riddle" value="wrong"></input>
                        <label htmlFor="riddle-answer-1">A Vacuum Cleaner</label>
                        <input type="radio" id="riddle-answer-4" name="riddle" value="correct"></input>
                        <label htmlFor="riddle-answer-1">A Sink</label>
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

