import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
  
function App() {
   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
   const appName="Pokedex"
   const date = new Date().toLocaleDateString();
    return ( 
        <div>
            <Logo appName= {appName}/>
            <BestPokemon abilities={abilities}/>
            <CaughtPokemon date={date}/>
        </div>
    )
}
export default App;