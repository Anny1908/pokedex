import React, { useState } from "react";

const CaughtPokemon = (props) => {
    const [caught, setCaught] = useState([]);
    const [random, setRandom] = useState ("");
    const  catchPokemon = ()=> {
       
        setCaught(caught.concat("Pikachu", "Torre Oscura", "El mejor de todos")); 
        
      }
      
      const buscarPokemon = ()=> {
        const randomElement = caught[Math.floor(Math.random() * caught.length)]; 
        setRandom(randomElement);
      }
            
    return (
        <div>
        <p>"Caught {caught.length} Pokemon on <span>{props.date}</span>" </p>
        <ul>
            {caught.map((elemento, index) => {
                return (
                    <li key={index}>{elemento}</li>
                )
                
            })}
        </ul>
        <div>
        <p>
            {random}
        </p>
        </div>
        <button onClick={catchPokemon}>clickMe</button>
        <button onClick={buscarPokemon}>Random Pokemon</button>
       
        </div>
    )
}
export default CaughtPokemon;