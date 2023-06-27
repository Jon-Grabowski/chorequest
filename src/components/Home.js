import {useHistory} from "react-router-dom"

function Home() {

let history = useHistory()

function handleClick(){
    history.push("/adventurebegin")
   } 
    return (
        <button onClick={handleClick}>Begin Adventure!</button>
        
    )
}

export default Home