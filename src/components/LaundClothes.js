import { useHistory } from "react-router-dom"


function LaundClothes() {
  
    const history = useHistory()

    function handleSelectionChange(e){
       
        if(e.target.value === "fluffy"){
            history.push("/laundclothes1")
        } else if(e.target.value === "barely"){
            history.push("/laundclothesB")
        } else if(e.target.value === "sudsy"){
            history.push("/laundclothesA")
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