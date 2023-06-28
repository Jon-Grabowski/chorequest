import { useHistory } from "react-router-dom"

function TooLittleSuds(){
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }
    return( 
        <div className="story-page">
            <h1>Clothes Not Clean!</h1>
            <img src="placeholder"></img>
            <p>
                Unfortunately, the detergent you chose turns out to be weaker than expected, failing to effectively 
                clean your clothes. As you retrieve your laundry from the washing machine, you notice lingering stains 
                and a lack of the desired freshness. It's clear that a different detergent is needed to achieve the 
                desired results.
            </p>
            <br></br>
            <button onClick={()=>handleClick("/laundromatclothes")}>Re-wash Clothes</button>
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
            <h1>Oh No, Suds Monster!</h1>
            <img src="https://i.imgur.com/55GJi5P.jpg"></img>
            <p>
            You selected a highly sudsy detergent, hoping it will provide the cleaning power you need. 
            However, as you pour the detergent into the washing machine, an unexpected and alarming 
            occurrence takes place. The suds begin to multiply rapidly, overflowing from the machine 
            and filling the laundromat with an uncontrollable wave of foam. To your astonishment, the 
            suds start to converge, taking shape and forming a towering creature. A formidable suds monster!
            </p>
            <p>
            Caught off guard, you find yourself in a dire predicament as the suds monster launches an attack. 
            Despite your efforts to defend yourself, the sheer force and relentless nature of the suds overwhelm you. 
            Exhausted and defeated, you succumb to the suds monster's power.
            </p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Try again?</button>
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