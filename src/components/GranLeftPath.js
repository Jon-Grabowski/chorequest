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
            <p>
                As you continue along the path, your heart skips a beat when you catch sight of a strange 
                silhouette up ahead. As you draw closer, you realize it's a {randomMonster.name}, 
                its menacing presence blocking your path forward! Caught off guard, you consider your options. 
                You can either confront the creature head-on, attempting to fight your way through, 
                or you can try a more diplomatic approach, reasoning with the monster in hopes of finding a peaceful resolution.
                What will you do?
            </p>
            <br></br>
            <button onClick={()=>handleClick("/leftpath2")}>Fight Monster</button>
            <button onClick={()=>handleClick("/leftpath1")}>Talk With Monster</button>

        </div>
    )
}

export default GranLeftPath