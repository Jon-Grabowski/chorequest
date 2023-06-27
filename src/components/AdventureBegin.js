import {useHistory} from "react-router-dom"

function AdventureBegin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Beginning of Adventure</h1>
            <img src="placeholder"></img>
            <p>It's Sunday Morning and you would love nothing more than to sit around the house and be lazy! Unfortunately there are chores 
                to do, let's get at least one of them done relaxing.
            </p>
            <br></br>
            <button onClick={()=>handleClick("/laundromat")}>Go to Laundromat</button>
            <button onClick={()=>handleClick("/grandma")}>Go to Grandma's</button>

        </div>
    )
}

export default AdventureBegin