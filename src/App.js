import {Route, Switch, NavLink, Link } from "react-router-dom";
import  NavBar  from "./components/NavBar.js"
import Home from "./components/Home";
import MonsterList from "./components/MonsterList.js";
import AddMonster from "./components/AddMonster.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addmonster">
          <AddMonster />
        </Route>
        <Route path="/monsterlist">
          <MonsterList />
        </Route>

        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
