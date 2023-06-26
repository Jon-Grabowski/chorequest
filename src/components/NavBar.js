import {NavLink} from "react-router-dom"

function NavBar() {
    return(
        <nav>
            <div>
                ChoreQuest!
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/addmonster">Add New Monster</NavLink>
                <NavLink to="/monsterlist">Monster List</NavLink>
            </div>
        </nav>
    )
}

export default NavBar