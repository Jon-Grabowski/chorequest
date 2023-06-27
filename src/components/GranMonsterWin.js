import { useHistory } from "react-router-dom"

function GranMonsterWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>You Resolved Your Conflict With the Monster</h1>
            <img src="placeholder"></img>
            <p>Choosing a more diplomatic approach, you cautiously step forward, raising your hands to signal that you 
                mean no harm. With steady words, you attempt to reason with the fearsome monster, 
                seeking a peaceful resolution. Surprisingly, the monster's fierce expression softens, 
                and a glimmer of understanding flickers in its eyes. With a nod of approval, the monster steps aside, 
                allowing you to pass unharmed. Grateful for this unexpected turn of events, you continue along the path, 
                only to realize after a while that it doesn't lead to your grandma's house as you had hoped.</p>
                <p>Looks like you'll have to turn around and head back to the fork in the path.</p>
            <br></br>
            <button onClick={()=>handleClick("/grandma")}>Back to Fork</button>

        </div>
    )
}

export default GranMonsterWin