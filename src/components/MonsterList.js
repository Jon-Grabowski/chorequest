import MonsterCard from "./MonsterCard"
import { Card} from "semantic-ui-react"

function MonsterList({monsters}) {

    const eachMonster = monsters.map((monster => {
        return ( 
                <MonsterCard key={monster.id} 
                            name={monster.name} 
                            method={monster.method}
                            image={monster.image}
                            description={monster.description} 
                            height={monster.height}
                            weight={monster.weight}
                            />
            )    
    }))
    
    return (
        <div className="monster-list" >
            <h1 className="list-header">Monster Zoo</h1>
            <Card.Group itemsPerRow={4}>
                {eachMonster}
            </Card.Group>
        </div>
    )
}

export default MonsterList