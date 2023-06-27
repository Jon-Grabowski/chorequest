import { useHistory } from "react-router-dom"


// function TooLittleSuds(){

// }

// function TooManySuds(){

// }

function LaundClothesLose() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Used too much or too little detergent</h1>
            <img src="placeholder"></img>
            <p>Conditionally render 1 of 2 components for too little or too much.</p>
            <br></br>
            <button onClick={()=>handleClick("/laundromat")}>Re-wash Clothes</button>
            <button onClick={()=>handleClick("/")}>Suds Monster Got You!</button>
        </div>
    )
}

export default LaundClothesLose