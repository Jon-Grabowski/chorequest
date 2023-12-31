import { useHistory } from "react-router-dom"

function LaundClothesWin() {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }
    
    return (
        <div className="story-page">
            <h1>Clothes Clean!</h1>
            <img src="https://img.freepik.com/premium-photo/happy-child-enjoying-sun-outdoor-green-field_411285-2132.jpg"
                alt="woman-smiling-thumbsup"
                style={{height: "40%", width: "40%"}}></img>
            <p>
                With a thoughtful consideration, you choose the detergent that best suits your needs. 
                Once the cycle completes, you transfer your clean, fresh-smelling laundry to the dryer, knowing 
                that soon they will be warm, dry, and ready to be folded. With a sense of satisfaction, you bid 
                farewell to the laundromat, laundry duty successfully accomplished.
                Back at home, you relish in the simple joy of slipping into clean clothes and revel in the comforting 
                ambiance of your familiar surroundings. The rest of the day stretches ahead, offering an opportunity 
                for relaxation and rejuvenation!
            </p>
            <p className="story-questions">
                Congratulations, you Won!
            </p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Back Home</button>

        </div>
    )
}

export default LaundClothesWin