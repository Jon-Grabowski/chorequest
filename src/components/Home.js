import {useHistory} from "react-router-dom"

function Home() {

let history = useHistory()

function handleClick(){
    history.push("/adventurebegin")
   } 
    return (
        <div>
            <h1>Welcome to ChoreQuest!</h1>
            <p>Game Description</p>
            <button onClick={handleClick}>Begin Adventure!</button>
        </div>
    )
}

export default Home