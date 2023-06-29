import {useHistory} from "react-router-dom"

function Home() {

let history = useHistory()

function handleClick(){
    history.push("/adventurebegin")
    } 
    return (
        <div id="home-page">
            <div id="home-page-container">
                <h1>Welcome to <br></br>ChoreQuest!</h1>
                <p>
                    Embark on a whimsical journey through a day of Chores with "ChoreQuest," an enchanting choose your own adventure game! 
                    In this imaginative world, everyday chores become thrilling quests, and ChoreMonsters lurk in every corner. 
                    As the protagonist, you'll start your day at your house, with two chores waiting to be completed. Your ultimate goal is to navigate 
                    through your chores as fast as possible so you can get home to relax!  
                    Will you outsmart the ChoreMonsters and achieve swift victory, or will you be caught in an endless loop of distractions, 
                    prolonging your journey? The fate of your relaxation time rests in your hands as you embark on this whimsical adventure to finish your chores and return home. </p>
                <button className="glow-on-hover" onClick={handleClick}>Begin Adventure!</button>
                
            </div>
        </div>
    )
}

export default Home