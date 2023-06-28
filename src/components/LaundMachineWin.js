import { useHistory } from "react-router-dom"

function LaundMachineWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Correct!</h1>
            <img src="placeholder"></img>
            <p>
            The monster's eyes widen in surprise, impressed by your astute answer. It nods approvingly, 
            acknowledging your wit and intelligence. As pre your agreement, the monster agrees to do all of your 
            laundry so you and go home and enjoy the rest of the day!
            </p>
            <p>
                Congratulations, You Won!
            </p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Go Home</button>

        </div>
    )
}

export default LaundMachineWin