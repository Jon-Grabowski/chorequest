function MonsterList({monsters}) {

    const eachMonster = monsters.map((monster => {
        return <MonsterCard key={monster.id} 
                            name={monster.name} 
                            method={monster.method}
                            image={monster.image}
                            description={monster.description} 
                            height={monster.height}
                            weight={monster.weight}
                            />
    }))
    
    return (
        <h1>List of Monsters Here</h1>
    )
}

export default MonsterList