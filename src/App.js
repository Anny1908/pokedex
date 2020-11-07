import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import './App.css';
  
function App() {
   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
   const appName="Pokedex"
   const date = new Date().toLocaleDateString();

   const logWhenClicked =() =>{
    console.log("My Pokemón")  
    }
    return ( 
        <div className="flexPokemon">
            <div>
            <Logo appName= {appName} handleClick={logWhenClicked}/>
            </div>
            <div>
            <BestPokemon abilities={abilities}/>
            <CaughtPokemon date={date}/>
            <PokemonMovesSelector />
            </div>
        </div>
    )
}
export default App;