import {useHistory} from "react-router-dom"

function Home() {

let history = useHistory()

function handleClick(){
    history.push("/adventurebegin")
    } 
    return (
        <div>
            <h1>Welcome to ChoreQuest!</h1>
            <p>
                Embark on a whimsical journey through a day of Chores with "ChoreQuest," an enchanting choose your own adventure game! In this imaginative world, everyday chores become thrilling quests, and unexpected creatures lurk in every corner. As the protagonist, you'll start your day at your house, with two chores waiting to be completed. Your ultimate goal is to navigate through your chores as fast as possible so you can get home to relax! However, beware of the mischievous ChoreMonsters who are ready to derail your quest at every turn. From doing your laundry to fixing Grandma's toilet, each decision you make shapes your destiny, determining whether you'll complete your tasks efficiently or succumb to distractions. Explore hidden portals to alternate dimensions, where chores take on new meaning and challenges abound. Will you outsmart the ChoreMonsters and achieve swift victory, or will you be caught in an endless loop of distractions, prolonging your journey? The fate of your relaxation time rests in your hands as you embark on this whimsical adventure to finish your chores and return home. </p>
            <button onClick={handleClick}>Begin Adventure!</button>
        </div>
    )
}

export default Home