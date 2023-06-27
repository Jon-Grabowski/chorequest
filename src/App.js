import {Route, Switch, NavLink, Link } from "react-router-dom";
import {useState, useEffect} from "react"
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
import Grandma from "./components/Grandma.js";
import GranLeftPath from "./components/GranLeftPath.js";
import GranRightPath from "./components/GranRightPath.js";
import GranMonsterWin from "./components/GranMonsterWin.js";
import GranMonsterLose from "./components/GranMonsterLose.js";
import GranToiletWin from "./components/GranToiletWin.js";
import GranToiletLose from "./components/GranToiletLose.js";


import './App.css';


function App() {
  const [selection, setSelection] = useState('Choose Detergent!')
  const [monsters, setMonsters] = useState([])
  const [granLeftPathRandomMonster, setGranLeftPathRandomMonster] = useState({});

function addNewMonster(newMonster){
  setMonsters((prevMonsters) => [...prevMonsters, newMonster])
}

useEffect(() => {
  fetch("http://localhost:3001/monsters")
  .then(r => r.json())
  .then(data => setMonsters(data))
}, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addmonster">
          <AddMonster addNewMonster={addNewMonster}/>
        </Route>
        <Route path="/monsterlist">
          <MonsterList monsters={monsters}/>
        </Route>
        <Route path="/adventurebegin">
          <AdventureBegin />
        </Route>
        {/* Laundromat Path */}
        <Route exact path="/laundromat">
          <Laundromat />
        </Route>
        <Route path="/laundromatmachine">
          <LaundMachine />
        </Route>
        <Route path="/laundromatclothes">
          <LaundClothes selection={selection} setSelection={setSelection}/>
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
        <Route path="/laundclothes2">
          <LaundClothesLose selection={selection}/>
        </Route>
        {/* Grandma Path */}
        <Route exact path="/grandma">
          <Grandma />
        </Route>
        <Route path="/leftpath">
          <GranLeftPath 
          monsters={monsters}
          collectRandomMonster={setGranLeftPathRandomMonster}/>
        </Route>
        <Route path="/rightpath">
          <GranRightPath/>
        </Route>
        <Route path="/leftpath1">
          <GranMonsterWin />
        </Route>
        <Route path="/leftpath2">
          <GranMonsterLose />
        </Route>
        <Route path="/rightpath1">
          <GranToiletWin />
        </Route>
        <Route path="/rightpath2">
          <GranToiletLose />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
