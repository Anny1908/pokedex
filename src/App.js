import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
  
function App() {
   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
   const appName="Pokedex"
   const date = new Date().toLocaleDateString();

   const logWhenClicked =() =>{
    console.log("My Pokemón")  
    }
    
    return ( 
        <div>
            <Logo appName= {appName} handleClick={logWhenClicked}/>
            <BestPokemon abilities={abilities}/>
            <CaughtPokemon date={date}/>
        </div>
    )
}
export default App;