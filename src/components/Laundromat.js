import { useHistory } from "react-router-dom"

function Laundromat() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Laundromat</h1>
            <img src="https://images.unsplash.com/photo-1563310196-3f10e40dd789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                alt="laundromat"
                style={{height: "50%", width: "50%"}}>
                </img>
            <p>
                You arrive at the local laundromat. Rows of washing machines line the walls, their rhythmic 
                hum creating a soothing ambiance. As you load your clothes into one of the machines, you notice 
                something peculiar. A soft, ethereal glow emanates from the inside of the washing machine, casting 
                a mesmerizing light onto the surrounding area. Curiosity piqued, you lean in closer, intrigued by 
                the mysterious phenomenon unfolding before you.
            </p>
            <p className="story-questions">What would you like to do?</p>
            <br></br>
            <button onClick={()=>handleClick("/laundromatmachine")}>Investigate the Light</button>
            <button onClick={()=>handleClick("/laundromatclothes")}>Ignore and Start Washing</button>

        </div>
    )
}

export default Laundromat