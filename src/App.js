import {Route, Switch, NavLink, Link } from "react-router-dom";
import {useState} from "react"
import  NavBar  from "./components/NavBar.js"
import Home from "./components/Home";
import MonsterList from "./components/MonsterList.js";
import AddMonster from "./components/AddMonster.js";
import AdventureBegin from "./components/AdventureBegin.js";
import Laundromat from "./components/Laundromat.js";
import LaundMachine from "./components/LaundMachine.js"
import LaundClothes from "./components/LaundClothes.js"
import LaundMachineWin from "./components/LaundMachineWin.js";
import LaundMachineLose from "./components/LaundMachineLose.js";
import LaundClothesWin from "./components/LaundClothesWin.js";
import LaundClothesLose from "./components/LaundClothesLose.js";

import './App.css';

function App() {
  const [sudsAmount, setSudsAmount] = useState(0)
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
        <Route path="/adventurebegin">
          <AdventureBegin />
        </Route>
        <Route path="/laundromat">
          <Laundromat />
        </Route>
        <Route path="/laundromatmachine">
          <LaundMachine />
        </Route>
        <Route path="/laundromatclothes">
          <LaundClothes setSudsAmount = {setSudsAmount}/>
        </Route>
        <Route path="/laundmachine1">
          <LaundMachineWin/>
        </Route>
        <Route path="/laundmachine2">
          <LaundMachineLose />
        </Route>
        <Route path="/laundclothes1">
          <LaundClothesWin />
        </Route>
        <Route path="laundclothes2">
          <LaundClothesLose />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
