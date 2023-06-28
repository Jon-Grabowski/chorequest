import {useState} from "react"
import { Card } from "semantic-ui-react"

function MonsterCard({name, image, method, description, height, weight }){
    const [clicked, setClicked] = useState(false)

function handleClick(){
setClicked(prevClicked => !prevClicked)
}
    return (
        <Card style={{
                backgroundImage: `url(https://media.istockphoto.com/id/654922866/photo/old-yellowed-stained-paper-texture.jpg?s=612x612&w=0&k=20&c=uInwuGGMQMw2RKMillvZz5suVDgIcKD7yvrOmoPVt-k=)`,
                boxShadow: "5px 3px 3px rgb(54, 29, 29)"}}>
            <div className="monster-card">
                <div className="card-image ui medium rounded image">
                    <img src = {image} alt={name}/>
                </div>
                <div className="card-content">
                    <div className="card-header">{name}</div>
                    <p className="card__text">{clicked ? method : description}</p>
                    <button className="mayhem-button"onClick={handleClick}>{clicked ?  "Description" : "Method of Mayhem"}</button>
                </div>
            </div>
        </Card>
    )
}
export default MonsterCard