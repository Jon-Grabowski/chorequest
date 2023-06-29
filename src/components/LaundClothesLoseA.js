import { useHistory } from "react-router-dom"

function LaundClothesLoseA(){
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
            <p className="story-questions">
            Caught off guard, you find yourself in a dire predicament as the suds monster launches an attack. 
            Despite your efforts to defend yourself, the sheer force and relentless nature of the suds overwhelm you. 
            Exhausted and defeated, you succumb to the suds monster's power.
            </p>
            <br></br>
            <button onClick={()=>handleClick("/")}>Try Again?</button>
        </div>
    )
}

export default LaundClothesLoseA