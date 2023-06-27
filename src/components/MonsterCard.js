import {useState} from "react"
import { Card } from "semantic-ui-react"

function MonsterCard({name, image, method, description, height, weight }){
    const [clicked, setClicked] = useState(false)

function handleClick(){
setClicked(prevClicked => !prevClicked)
}
    return (
        <Card>
            <div>
                <div className="image">
                    <img onClick={handleClick} src = {image} alt={name}/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <p className="card__text">{clicked ? "Method of Mayhem: " + method : description}</p>
                </div>
                <div className="extra content">
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                </div>
            </div>
        </Card>
    )
}
export default MonsterCard