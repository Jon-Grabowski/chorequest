import {useState} from "react"

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
    })

}


return (
    <div className="page-background">
        <h2>New Monster</h2>
        <br></br>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" value={formData.name}placeholder="Monster Name..." />
                <input onChange={handleChange} type="text" name="image" value={formData.image}placeholder="Image URL..." />
                <input onChange={handleChange} type="text" name="description" value={formData.description} placeholder="Monster Description..." />
                <input onChange={handleChange} type="text" name="method" value={formData.method} placeholder="Method of Mayhem..." />
                <input onChange={handleChange} type="text" name="height" value={formData.height} placeholder="Monster's Height..." />
                <input onChange={handleChange} type="text" name="weight" value={formData.weight} placeholder="Monsters Weight..." />
                <button type="submit">Add Monster</button>
            </form>
        </div>
    </div>
    )  
}

export default AddMonster