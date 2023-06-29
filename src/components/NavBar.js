import {NavLink} from "react-router-dom"

function NavBar() {
    return(
        <nav id="nav-bar">
            <div id="nav-bar-container">
                <div id="nav-header" className="animate-charcter">
                    ChoreQuest!
                </div>
                <div id="nav-links-container">
                    <NavLink exact to="/" className="nav-links">Home</NavLink>
                    <NavLink to="/addmonster" className="nav-links">Add New Monster</NavLink>
                    <NavLink to="/monsterlist" className="nav-links">Monster List</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar