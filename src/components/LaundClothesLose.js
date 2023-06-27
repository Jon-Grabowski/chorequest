import { useHistory } from "react-router-dom"

function TooLittleSuds(){
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }
    return( 
        <div className="story-page">
            <h1>Oh no, that was the wrong detergent!</h1>
            <img src="placeholder"></img>
            <p>These clothes are far from being clean enough to wear.</p>
            <br></br>
            <button onClick={()=>handleClick("/laundromat")}>Re-wash Clothes</button>
        </div>
    )
}

function TooManySuds(){
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    return (
        <div className="story-page">
            <h1>Oh no, that was the wrong detergent!</h1>
            <img src="https://i.imgur.com/55GJi5P.jpg"></img>
            <p>You've conjured the dreaded Soapy Suds!</p>
            <p>Soapy Suds forms massive bubbles, causing washing machines to overflow and flood. You're soaked now, so you'll have to go home and change.</p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Go Home</button>
        </div>
    )
}

function LaundClothesLose({selection}) {
    console.log(selection)
    return (
        (selection === "barely" ? <TooLittleSuds/> : <TooManySuds />)
    )
}

export default LaundClothesLose