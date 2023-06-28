import { useHistory } from "react-router-dom"

function LaundClothes({selection, setSelection}) {
    const history = useHistory()



    function handleSelectionChange(e){
        setSelection(e.target.value)
        if(e.target.value === "fluffy"){
            history.push("/laundclothes1")
        } else if(e.target.value === "barely" || "sudsy"){
            history.push("/laundclothes2")
        } 
    }


    
    return (
        <div className="story-page">
            <h1>Decide How Much Detergent to Use</h1>
            <img src="placeholder"></img>
            <p>
            Deciding to ignore the captivating glow for now, you focus on the task at hand. However, just as you're about to 
            start the washing machine, you realize with a sinking feeling that you've forgotten to bring your own laundry 
            detergent. Looking around, you spot a range of detergent options lined up neatly on a shelf.  
            </p>
            <p>Choose a Detergent</p>
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