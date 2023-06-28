import {useHistory} from "react-router-dom"

function AdventureBegin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Beginning of Adventure</h1>
            <img src="https://images.unsplash.com/photo-1604926069402-82124e09354c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                 alt="sunlight"
                 style={{height:"40%", width:"40%" }}
                 ></img>
            <p>You wake up on a lazy Sunday morning, the sunlight filtering through your bedroom window. 
                The prospect of a relaxing day lies before you, but the nagging reminder of unfinished chores lingers in your mind. 
                You contemplate your options, torn between indulging in leisure or being responsible and getting a task done.
                You should probably do at least one chore before relaxing. Will you go to the laundromat to wash your clothes 
                or go to Grandma's house to fix her toilet?
            </p>
            <br></br>
            <button onClick={()=>handleClick("/laundromat")}>Go to Laundromat</button>
            <button onClick={()=>handleClick("/grandma")}>Go to Grandma's</button>

        </div>
    )
}

export default AdventureBegin