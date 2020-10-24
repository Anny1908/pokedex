import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
  
function App() {
   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
   const appName="Pokedex"
    return ( 
        <div>
            <Logo/> {appName}
            <BestPokemon/>{abilities}
            <CaughtPokemon/>
        </div>
    )
}
export default App;