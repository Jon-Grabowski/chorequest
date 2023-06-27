import { useHistory } from "react-router-dom"
import { useEffect } from "react"

function GranLeftPath({monsters, collectRandomMonster}) {
    const history = useHistory()

    function handleClick(path) {
        history.push(path)
    }

//get monsters length, pick random index, use random index as random monster to "encounter"
    // function getRandomNumber(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) +min;
    // }
    const totalMonsters = monsters.length;
    const randomIndex = Math.floor(Math.random() * (totalMonsters + 1));
    const randomMonster = monsters[randomIndex];
    console.log(randomIndex);

    useEffect(() => {
        collectRandomMonster(randomMonster);
    },[])
        
    return (
        <div className="story-page">
            <h1>You Ran Into {randomMonster.name}!</h1>
            <img src={randomMonster.image}></img>
            <p>{randomMonster.description}</p>
            <p>Story Content Goes Here</p>
            <br></br>
            <button onClick={()=>handleClick("/leftpath2")}>Fight Monster</button>
            <button onClick={()=>handleClick("/leftpath1")}>Talk With Monster</button>

        </div>
    )
}

export default GranLeftPath