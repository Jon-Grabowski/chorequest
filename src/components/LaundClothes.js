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
            <img src="https://images.unsplash.com/photo-1605634591626-d22e59984842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
                alt="detergents"
                style={{height: "400px", width: "25%"}}></img>
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