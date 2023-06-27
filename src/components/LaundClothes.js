import { useHistory } from "react-router-dom"

function LaundClothes({selection, setSelection}) {
    const history = useHistory()



    function handleSelectionChange(e){
        setSelection(e.target.value)
        if(selection === "fluffy"){
            history.push("/laundclothes1")
        } else if(selection === "barely" || "sudsy"){
            history.push("/laundclothes2")
        } 
    }


    
    return (
        <div className="story-page">
            <h1>Decide How Much Detergent to Use</h1>
            <img src="placeholder"></img>
            <p>You put your laundry in the washing machine but realize that you left your detergent at home! Choose which detergent to use from the Laundromat! Choose wisely, the wrong detergent will determine your chores fate. </p>
            <select onChange={handleSelectionChange} name="select" >
                <option value="Choose">Choose Detergent!</option>
                <option value="fluffy">1 Scoop of Forever Fluffy Detergent</option>
                <option value="barely">1 Scoop of Barely There Detergent</option>
                <option value="sudsy">1 Scoop of Super Sudsy Detergent</option>
            </select>
            

        </div>
    )
}

export default LaundClothes