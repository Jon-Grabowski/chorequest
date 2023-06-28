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
        <h2>Welcome to the Monster Lab</h2>
        <br></br>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input className="flex-item" onChange={handleChange} type="text" name="name" value={formData.name}placeholder="Monster Name..." />
                    <input className="flex-item" onChange={handleChange} type="text" name="image" value={formData.image}placeholder="Image URL..." />
                    <input className="flex-item" onChange={handleChange} type="text" name="description" value={formData.description} placeholder="Monster Description..." />
                    <input className="flex-item" onChange={handleChange} type="text" name="method" value={formData.method} placeholder="Method of Mayhem..." />
                    <input className="flex-item" onChange={handleChange} type="text" name="height" value={formData.height} placeholder="Monster's Height..." />
                    <input className="flex-item" onChange={handleChange} type="text" name="weight" value={formData.weight} placeholder="Monsters Weight..." />
                    <button type="submit">Submit Your Creation</button>
                </div>
            </form>
        </div>
    </div>
    )  
}

export default AddMonster