import { useHistory } from "react-router-dom"

function LaundMachineWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Correct!</h1>
            <img src="https://media2.giphy.com/media/3o751YVqovWIxqJC5q/giphy.gif?cid=ecf05e47qgb0d0v76sul03vy60uhk66aq8ryfvgq91b9hte7&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="good job"
                style={{height: "30%", width: "30%"}}></img>
            <p>
            The monster's eyes widen in surprise, impressed by your astute answer. It nods approvingly, 
            acknowledging your wit and intelligence. As pre your agreement, the monster agrees to do all of your 
            laundry so you and go home and enjoy the rest of the day!
            </p>
            <p className="story-questions">
                Congratulations, You Won!
            </p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Go Home</button>

        </div>
    )
}

export default LaundMachineWin