import {useState} from "react"
import MonsterCard from "./MonsterCard"


const initialFormInfo = {
    name: "",
    image: "",
    description: "",
    method: "",
    height: "",
    weight: "",
}

function AddMonster({addNewMonster}) {

const [formData, setFormData] = useState(initialFormInfo)
const [newMonster, setNewMonster] = useState({})
const [showMonsterCard, setShowMonsterCard] = useState(true)
    

function handleChange(e){
    setFormData((prevFormData) => {
        return {
            ...prevFormData, [e.target.name]: e.target.value,
        }
    })
}
function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3001/monsters", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newMonsterData => {
        addNewMonster(newMonsterData)
        setFormData(initialFormInfo)
        setNewMonster(newMonsterData)
        setShowMonsterCard(false)
    })
}



return (
    <div className="page-background">
        <h2>Welcome to the Monster Lab</h2>
        <br></br>
        <div id="form-and-newmonster">
            <div id="form-container">
                <h1>Monster Registration:</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input className="flex-item" onChange={handleChange} type="text" name="name" value={formData.name}placeholder="Monster Name..." />
                        <input className="flex-item" onChange={handleChange} type="text" name="image" value={formData.image}placeholder="Image URL..." />
                        <input className="flex-item" onChange={handleChange} type="text" name="description" value={formData.description} placeholder="Monster Description..." />
                        <input className="flex-item" onChange={handleChange} type="text" name="method" value={formData.method} placeholder="Method of Mayhem..." />
                        <button type="submit">Submit Your Creation</button>
                    </div>
                </form>
            </div>
            <div className="new-monster">
                {showMonsterCard ? null : (<MonsterCard name ={newMonster.name} image={newMonster.image} method={newMonster.method} description={newMonster.description} />)} 
            </div>
        </div>
    </div>
    )  
}

export default AddMonster